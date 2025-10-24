"use client";

import { useEffect } from "react";

/**
 * ChatbotLoader
 * - Mount this ONCE in app/layout.js to avoid "already declared" errors from 3rd‑party widgets.
 * - Supports:
 *   1) Crisp (set NEXT_PUBLIC_CRISP_WEBSITE_ID)
 *   2) Generic script URL (set NEXT_PUBLIC_CHATBOT_SRC)
 * - Safe re-entry: uses window.__chatbotLoaded and <script id> guards.
 */
export default function ChatbotLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__chatbotLoaded) return; // guard to prevent duplicates

    // Crisp support (preferred if website id provided)
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    if (crispId) {
      if (!document.getElementById("crisp-chatbot")) {
        window.$crisp = window.$crisp || [];
        window.CRISP_WEBSITE_ID = crispId;
        const s = document.createElement("script");
        s.id = "crisp-chatbot";
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        s.crossOrigin = "anonymous";
        document.head.appendChild(s);
      }
      window.__chatbotLoaded = true;
      return;
    }

    // Generic script URL fallback
    const src = process.env.NEXT_PUBLIC_CHATBOT_SRC;
    if (src && !document.getElementById("chatbot-generic")) {
      const s = document.createElement("script");
      s.id = "chatbot-generic";
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
      window.__chatbotLoaded = true;
      return;
    }

    // If neither env is set, do nothing
  }, []);

  return null;
}
