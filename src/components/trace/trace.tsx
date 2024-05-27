import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'

export function Trace() {
    const googleGaId = process.env.ANALYTICS_GOOGLE_GAID;
  return (
    <>
      <Analytics />;
      <SpeedInsights />
      {googleGaId && <GoogleAnalytics gaId={googleGaId}/>}
    </>
  );
}
