import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot?: {
      toggle: () => void;
      isOpen: () => boolean;
    };
  }
}

export const ChatwootWidget = () => {
  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_CHATWOOT_URL;
    const websiteToken = import.meta.env.VITE_CHATWOOT_TOKEN;

    if (!BASE_URL || !websiteToken) {
      console.warn("Chatwoot credentials not found in environment variables");
      return;
    }

    (function(d, t) {
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      s.parentNode?.insertBefore(g, s);
      g.onload = function() {
        window.chatwootSDK?.run({
          websiteToken: websiteToken,
          baseUrl: BASE_URL
        });
      };
    })(document, "script");

    // Cleanup
    return () => {
      const existingScript = document.querySelector(
        `script[src="${BASE_URL}/packs/js/sdk.js"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};
