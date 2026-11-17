import { Capacitor } from '@capacitor/core';

/**
 * Event dispatched when the Android hardware back button is pressed.
 * Views call `event.preventDefault()` if they handled it (e.g. closing a modal
 * or leaving a prep session); otherwise the app navigates back or minimises.
 */
export const APP_BACK_EVENT = 'dialectica:back';

export const isNativeApp = Capacitor.isNativePlatform();

export async function initNativeShell(): Promise<void> {
  if (!isNativeApp) return;
  const { App } = await import('@capacitor/app');
  App.addListener('backButton', ({ canGoBack }) => {
    const event = new CustomEvent(APP_BACK_EVENT, { cancelable: true });
    window.dispatchEvent(event);
    if (event.defaultPrevented) return;
    if (canGoBack) {
      window.history.back();
    } else {
      App.minimizeApp();
    }
  });
}
