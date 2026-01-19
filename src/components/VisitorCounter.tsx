"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(
          "https://api.countapi.xyz/hit/anurag629-github-io/visits"
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-paper-cream shadow-paper border border-ink-light/20 rounded-lg px-3 py-2 flex items-center gap-2 hover:shadow-lg transition-shadow">
        {/* Eye icon */}
        <svg
          className="w-4 h-4 text-accent-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {loading ? (
          <span className="font-mono text-sm text-ink-faded animate-pulse">...</span>
        ) : count !== null ? (
          <span className="font-mono text-sm text-ink font-medium">
            {count.toLocaleString()}
          </span>
        ) : (
          <span className="font-mono text-sm text-ink-faded">--</span>
        )}
      </div>
    </div>
  );
}
