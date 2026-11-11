/**
 * Optional privacy-friendly, cookie-less web analytics loader.
 * Set GitHub repository variables `VITE_CF_ANALYTICS_TOKEN` (Cloudflare Web Analytics)
 * or `VITE_GOATCOUNTER_CODE` (GoatCounter) to enable zero-banner metrics on deployment.
 */
export function initAnalytics(): void {
  if (typeof document === 'undefined' || import.meta.env.DEV) return;

  const cfToken = import.meta.env.VITE_CF_ANALYTICS_TOKEN?.trim();
  if (cfToken && !document.querySelector('script[data-cf-beacon]')) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({ token: cfToken }));
    document.head.appendChild(script);
  }

  const gcCode = import.meta.env.VITE_GOATCOUNTER_CODE?.trim();
  if (gcCode && !document.querySelector('script[data-goatcounter]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//gc.zgo.at/count.js';
    script.setAttribute('data-goatcounter', `https://${gcCode}.goatcounter.com/count`);
    document.head.appendChild(script);
  }
}
