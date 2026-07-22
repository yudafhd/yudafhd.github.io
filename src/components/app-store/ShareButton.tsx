"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

type ShareButtonProps = {
  title: string;
  text?: string;
};

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || `Check out ${title}`,
          url: currentUrl,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy if needed
        if ((err as Error).name === "AbortError") return;
      }
    }

    // Fallback: Copy URL to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="ios-active flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f2f7] text-[#007aff] transition-colors hover:bg-[#e5e5ea]"
      title={copied ? "Link Copied!" : "Share App"}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
    </button>
  );
}
