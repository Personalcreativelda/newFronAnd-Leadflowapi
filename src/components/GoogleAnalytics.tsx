import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;

    if (!gaId) {
      console.warn("Google Analytics ID not found in environment variables");
      return;
    }

    // Load gtag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);

    return () => {
      const existing = document.querySelector(
        `script[src="https://www.googletagmanager.com/gtag/js?id=${gaId}"]`
      );
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, []);

  return null;
};
