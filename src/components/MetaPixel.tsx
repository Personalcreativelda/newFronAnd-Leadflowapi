import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (event: string, name: string, data?: any) => void;
    _fbp?: string;
  }
}

export const MetaPixel = () => {
  useEffect(() => {
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;

    if (!pixelId) {
      console.warn("Meta Pixel ID not found in environment variables");
      return;
    }

    // Carregar script do Meta Pixel
    (function () {
      const img = new Image();
      img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
      img.style.display = "none";
      document.body.appendChild(img);
    })();

    // Adicionar script do fbq
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Rastrear eventos personalizados
    window.fbq?.("track", "ViewContent");

    return () => {
      // Limpeza opcional
      const scripts = document.querySelectorAll("script");
      scripts.forEach((s) => {
        if (s.innerHTML.includes("facebook.net")) {
          s.remove();
        }
      });
      const imgs = document.querySelectorAll("img[src*='facebook.com/tr']");
      imgs.forEach((i) => i.remove());
    };
  }, []);

  return null;
};
