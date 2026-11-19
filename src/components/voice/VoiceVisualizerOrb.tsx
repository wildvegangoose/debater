import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Loader2, Mic, MicOff, Radio, Square, Volume2 } from 'lucide-react';
import { VoiceOrbState } from '../../types/voiceDebate';

interface VoiceVisualizerOrbProps {
  state: VoiceOrbState;
  amplitude: number;
  isLiveMode: boolean;
  isLiveConnected: boolean;
  isMuted: boolean;
  onPrimaryAction: () => void;
  isDark: boolean;
}

const BAR_WEIGHTS = [0.28, 0.48, 0.72, 0.9, 1.0, 0.84, 0.96, 1.0, 0.88, 0.72, 0.52, 0.34];

export function VoiceVisualizerOrb({
  state,
  amplitude,
  isLiveMode,
  isLiveConnected,
  isMuted,
  onPrimaryAction,
  isDark,
}: VoiceVisualizerOrbProps) {
  const [phaseTick, setPhaseTick] = useState(0);

  // Smooth subtle organic wave motion while active
  useEffect(() => {
    if (state === 'idle' || state === 'error') return;
    const id = window.setInterval(() => {
      setPhaseTick((t) => (t + 1) % 360);
    }, 90);
    return () => window.clearInterval(id);
  }, [state]);

  const effectiveLevel =
    state === 'listening'
      ? Math.max(0.22, amplitude)
      : state === 'speaking'
        ? Math.max(0.28, amplitude)
        : state === 'thinking' || state === 'connecting'
          ? 0.32
          : 0.06;

  const ringColor =
    state === 'listening'
      ? 'from-emerald-500/35 via-teal-400/20 to-emerald-500/5 border-emerald-400/50'
      : state === 'speaking'
        ? 'from-indigo-500/40 via-violet-500/25 to-sky-500/10 border-indigo-400/60'
        : state === 'thinking' || state === 'connecting'
          ? 'from-amber-500/35 via-orange-400/20 to-amber-500/5 border-amber-400/50'
          : state === 'error'
            ? 'from-rose-500/30 via-rose-500/15 to-transparent border-rose-400/50'
            : isDark
              ? 'from-slate-700/30 via-indigo-500/10 to-transparent border-slate-700'
              : 'from-indigo-200/60 via-slate-200/40 to-transparent border-indigo-200';

  const coreButtonStyle =
    state === 'listening'
      ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/35'
      : state === 'speaking'
        ? 'bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/35'
        : state === 'thinking' || state === 'connecting'
          ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30'
          : isLiveMode && isLiveConnected && isMuted
            ? 'bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30'
            : 'bg-gradient-to-br from-indigo-600 to-sky-600 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110';

  const barColor =
    state === 'listening'
      ? 'bg-emerald-400'
      : state === 'speaking'
        ? 'bg-indigo-400'
        : state === 'thinking' || state === 'connecting'
          ? 'bg-amber-400'
          : isDark
            ? 'bg-slate-700'
            : 'bg-slate-300';

  const statusText =
    state === 'connecting'
      ? 'Connecting to Gemini Live...'
      : state === 'listening'
        ? isLiveMode
          ? 'Live Mic Open — Speak Naturally'
          : 'Listening... Tap to Send'
        : state === 'thinking'
          ? 'Weighing Rebuttal & Evidence...'
          : state === 'speaking'
            ? isLiveMode
              ? 'AI Responding (Speak to Interrupt)'
              : 'AI Speaking — Tap to Interrupt'
            : state === 'error'
              ? 'Check Voice Settings or Tap to Retry'
              : isLiveMode
                ? isLiveConnected
                  ? isMuted
                    ? 'Mic Muted — Tap to Unmute'
                    : 'Live Call Active'
                  : 'Tap to Start Live Voice Call'
                : 'Tap Mic to Speak Your Argument';

  return (
    <div className="flex flex-col items-center justify-center gap-3 select-none">
      {/* Reactive Concentric Orb */}
      <div className="relative flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40">
        {/* Outer reactive halo */}
        <div
          style={{
            transform: `scale(${1 + effectiveLevel * 0.28})`,
          }}
          className={clsx(
            'absolute inset-0 rounded-full border bg-gradient-to-br transition-transform duration-150',
            ringColor
          )}
        />
        {/* Inner reactive halo */}
        <div
          style={{
            transform: `scale(${0.86 + effectiveLevel * 0.18})`,
          }}
          className={clsx(
            'absolute inset-3 rounded-full border bg-gradient-to-tr transition-transform duration-150 opacity-85',
            ringColor
          )}
        />

        {/* Primary Touch Core Button */}
        <button
          type="button"
          onClick={onPrimaryAction}
          aria-label={statusText}
          className={clsx(
            'relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full flex items-center justify-center transition-all active:scale-95 cursor-pointer',
            coreButtonStyle
          )}
        >
          {state === 'connecting' || state === 'thinking' ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : state === 'speaking' ? (
            isLiveMode ? (
              <Volume2 className="w-8 h-8 animate-pulse" />
            ) : (
              <Square className="w-6 h-6 fill-current" />
            )
          ) : isLiveMode && !isLiveConnected ? (
            <Radio className="w-8 h-8" />
          ) : isLiveMode && isMuted ? (
            <MicOff className="w-8 h-8" />
          ) : (
            <Mic className={clsx('w-8 h-8', state === 'listening' && 'animate-pulse')} />
          )}
        </button>
      </div>

      {/* Live Frequency Waveform Bars */}
      <div className="flex items-center justify-center gap-1 h-7" aria-hidden="true">
        {BAR_WEIGHTS.map((weight, idx) => {
          const wave =
            state === 'idle' || state === 'error'
              ? 0.16
              : Math.abs(Math.sin((phaseTick * 0.18) + idx * 0.7)) * 0.65 + 0.35;
          const heightPct = Math.max(
            18,
            Math.min(100, Math.round(weight * effectiveLevel * wave * 125))
          );
          return (
            <span
              key={idx}
              style={{ height: `${heightPct}%` }}
              className={clsx(
                'w-1.5 rounded-full transition-all duration-100',
                barColor
              )}
            />
          );
        })}
      </div>

      {/* Status Pill */}
      <span
        className={clsx(
          'px-3 py-1 rounded-full text-xs font-semibold tracking-tight border text-center',
          state === 'listening'
            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
            : state === 'speaking'
              ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
              : state === 'thinking' || state === 'connecting'
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : state === 'error'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                  : isDark
                    ? 'bg-slate-900 border-slate-700 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
        )}
      >
        {statusText}
      </span>
    </div>
  );
}
