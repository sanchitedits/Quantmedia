import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export default function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',      "content", description);
    setMeta('meta[property="og:title"]',     "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    if (canonical) setMeta('link[rel="canonical"]', "href", canonical);
    if (ogImage)   setMeta('meta[property="og:image"]', "content", ogImage);

    return () => {
      document.title = "Quant Media | Video Retention Engineering Agency for High-Ticket Founders";
    };
  }, [title, description, canonical, ogImage]);
}
