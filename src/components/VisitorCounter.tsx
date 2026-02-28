"use client";

import { useEffect, useState } from "react";

const UPSTASH_URL = "https://bursting-coral-42298.upstash.io";
const UPSTASH_TOKEN = "AaU6AAIncDExZjQ3Yjc0YWIzNzg0MDBmOTUwNmNmNTMxMDY3YjlmM3AxNDIyOTg";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementAndGetCount = async () => {
      try {
        const storageKey = "portfolio_unique_visitor";
        const alreadyCounted = localStorage.getItem(storageKey);

        if (!alreadyCounted) {
          await fetch(`${UPSTASH_URL}/incr/portfolio_unique_visitors`, {
            headers: {
              Authorization: `Bearer ${UPSTASH_TOKEN}`,
            },
          });
          localStorage.setItem(storageKey, "true");
        }

        const response = await fetch(`${UPSTASH_URL}/get/portfolio_unique_visitors`, {
          headers: {
            Authorization: `Bearer ${UPSTASH_TOKEN}`,
          },
        });
        const data = await response.json();
        setCount(parseInt(data.result) || 0);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    incrementAndGetCount();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass-card px-3 py-2 flex items-center gap-2 rounded-lg">
        <svg
          className="w-4 h-4 text-accent-cyan"
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
        <span className="text-zinc-500 text-sm">Visitors</span>
        {loading ? (
          <span className="font-mono text-sm text-zinc-600 animate-pulse">
            ...
          </span>
        ) : count !== null ? (
          <span className="font-mono text-sm text-accent-cyan font-medium">
            {count.toLocaleString()}
          </span>
        ) : (
          <span className="font-mono text-sm text-zinc-600">--</span>
        )}
      </div>
    </div>
  );
}
