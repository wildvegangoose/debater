import { Capacitor } from '@capacitor/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

interface BrowserSpeechRecognitionEvent {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      [altIndex: number]: { transcript: string };
    };
  };
}

interface BrowserSpeechRecognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: BrowserSpeechRecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type SpeechRecognitionCtor = new () => BrowserSpeechRecognition;

function getBrowserSpeechRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export interface SpeechListenCallbacks {
  onInterim: (transcript: string) => void;
  onFinal: (transcript: string) => void;
  onError: (message: string) => void;
  onEnd: () => void;
}

class UnifiedSpeechBridge {
  private browserRecognition: BrowserSpeechRecognition | null = null;
  private nativePartialHandle: { remove: () => Promise<void> } | null = null;
  private nativeStateHandle: { remove: () => Promise<void> } | null = null;
  private isListeningNative = false;
  private lastNativeTranscript = '';
  private nativeFinalized = false;
  private activeCallbacks: SpeechListenCallbacks | null = null;

  public isNativeAndroid(): boolean {
    return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
  }

  public isWebSpeechSupported(): boolean {
    return getBrowserSpeechRecognitionCtor() !== null;
  }

  public async isSpeechInputAvailable(): Promise<boolean> {
    if (this.isNativeAndroid()) {
      try {
        const res = await SpeechRecognition.available();
        return res.available;
      } catch {
        return false;
      }
    }
    return this.isWebSpeechSupported();
  }

  public async startListening(callbacks: SpeechListenCallbacks): Promise<void> {
    await this.stopListening();
    this.activeCallbacks = callbacks;

    if (this.isNativeAndroid()) {
      try {
        const perm = await SpeechRecognition.checkPermissions();
        if (perm.speechRecognition !== 'granted') {
          const req = await SpeechRecognition.requestPermissions();
          if (req.speechRecognition !== 'granted') {
            callbacks.onError('Microphone / speech permission is required to talk.');
            callbacks.onEnd();
            return;
          }
        }

        const avail = await SpeechRecognition.available();
        if (!avail.available) {
          callbacks.onError('Android Speech Recognition service is not available on this device.');
          callbacks.onEnd();
          return;
        }

        this.isListeningNative = true;
        this.lastNativeTranscript = '';
        this.nativeFinalized = false;

        this.nativePartialHandle = await SpeechRecognition.addListener(
          'partialResults',
          (data: { matches?: string[] }) => {
            const text = data.matches?.[0]?.trim() ?? '';
            if (text) {
              this.lastNativeTranscript = text;
              this.activeCallbacks?.onInterim(text);
            }
          }
        );

        this.nativeStateHandle = await SpeechRecognition.addListener(
          'listeningState',
          (data: { status: 'started' | 'stopped' }) => {
            if (data.status === 'stopped' && this.isListeningNative) {
              this.finishNativeListening();
            }
          }
        );

        const result = await SpeechRecognition.start({
          language: 'en-US',
          maxResults: 1,
          partialResults: true,
          popup: false,
        });

        const finalMatch = result?.matches?.[0]?.trim() || this.lastNativeTranscript;
        if (finalMatch && !this.nativeFinalized) {
          this.nativeFinalized = true;
          this.isListeningNative = false;
          await this.cleanupNativeListeners();
          this.activeCallbacks?.onFinal(finalMatch);
          this.activeCallbacks?.onEnd();
        }
      } catch (err) {
        this.isListeningNative = false;
        await this.cleanupNativeListeners();
        const msg = err instanceof Error ? err.message : String(err);
        if (this.lastNativeTranscript && !this.nativeFinalized) {
          this.nativeFinalized = true;
          callbacks.onFinal(this.lastNativeTranscript);
        } else if (!msg.toLowerCase().includes('cancel')) {
          callbacks.onError(`Voice input error: ${msg}`);
        }
        callbacks.onEnd();
      }
      return;
    }

    // Browser Web Speech API fallback
    const Ctor = getBrowserSpeechRecognitionCtor();
    if (!Ctor) {
      callbacks.onError(
        'Browser speech recognition is unavailable here. Use the text box below or install the Android app / Chrome.'
      );
      callbacks.onEnd();
      return;
    }

    try {
      const recognition = new Ctor();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      let finalBuffer = '';
      let latestInterim = '';
      let delivered = false;

      recognition.onresult = (event: BrowserSpeechRecognitionEvent) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const piece = event.results[i][0]?.transcript ?? '';
          if (event.results[i].isFinal) {
            finalBuffer += piece;
          } else {
            interim += piece;
          }
        }
        latestInterim = (finalBuffer + ' ' + interim).trim();
        if (latestInterim) {
          callbacks.onInterim(latestInterim);
        }
      };

      recognition.onerror = (event: { error: string }) => {
        if (event.error !== 'no-speech' && event.error !== 'aborted') {
          callbacks.onError(`Mic error (${event.error}). Check microphone permission.`);
        }
      };

      recognition.onend = () => {
        this.browserRecognition = null;
        const transcript = (finalBuffer || latestInterim).trim();
        if (transcript && !delivered) {
          delivered = true;
          callbacks.onFinal(transcript);
        }
        callbacks.onEnd();
      };

      this.browserRecognition = recognition;
      recognition.start();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      callbacks.onError(`Could not start microphone: ${msg}`);
      callbacks.onEnd();
    }
  }

  private async finishNativeListening(): Promise<void> {
    if (this.nativeFinalized) return;
    this.nativeFinalized = true;
    this.isListeningNative = false;
    await this.cleanupNativeListeners();
    const transcript = this.lastNativeTranscript.trim();
    if (transcript) {
      this.activeCallbacks?.onFinal(transcript);
    }
    this.activeCallbacks?.onEnd();
  }

  private async cleanupNativeListeners(): Promise<void> {
    if (this.nativePartialHandle) {
      try {
        await this.nativePartialHandle.remove();
      } catch {
        // ignore
      }
      this.nativePartialHandle = null;
    }
    if (this.nativeStateHandle) {
      try {
        await this.nativeStateHandle.remove();
      } catch {
        // ignore
      }
      this.nativeStateHandle = null;
    }
  }

  public async stopListening(): Promise<void> {
    if (this.isNativeAndroid() && this.isListeningNative) {
      try {
        await SpeechRecognition.stop();
      } catch {
        // ignore
      }
      await this.finishNativeListening();
      return;
    }

    if (this.browserRecognition) {
      try {
        this.browserRecognition.stop();
      } catch {
        // ignore
      }
      this.browserRecognition = null;
    }
  }

  public async speak(
    text: string,
    rate = 1.0,
    onStart?: () => void,
    onEnd?: () => void
  ): Promise<void> {
    await this.stopSpeaking();
    const cleanText = text.replace(/[*_`#]/g, '').trim();
    if (!cleanText) {
      onEnd?.();
      return;
    }

    if (this.isNativeAndroid()) {
      try {
        onStart?.();
        await TextToSpeech.speak({
          text: cleanText,
          lang: 'en-US',
          rate,
          pitch: 1.0,
          volume: 1.0,
          category: 'ambient',
        });
      } catch {
        // Fall through silently if TTS fails
      } finally {
        onEnd?.();
      }
      return;
    }

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    await new Promise<void>((resolve) => {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        // Prefer a natural English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferred =
          voices.find((v) => /en[-_]US/i.test(v.lang) && /(Google|Natural|Samantha|Daniel)/i.test(v.name)) ??
          voices.find((v) => /en/i.test(v.lang));
        if (preferred) utterance.voice = preferred;

        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          onEnd?.();
          resolve();
        };

        utterance.onstart = () => onStart?.();
        utterance.onend = finish;
        utterance.onerror = finish;

        onStart?.();
        window.speechSynthesis.speak(utterance);
      } catch {
        onEnd?.();
        resolve();
      }
    });
  }

  public async stopSpeaking(): Promise<void> {
    if (this.isNativeAndroid()) {
      try {
        await TextToSpeech.stop();
      } catch {
        // ignore
      }
      return;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
  }
}

export const speechBridge = new UnifiedSpeechBridge();
