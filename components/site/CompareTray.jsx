"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useCompare } from "./compare-store";
import { useRouter } from "next/navigation";



export function CompareTray() {
  const router = useRouter();
  const { list, remove, clear } = useCompare();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const hasItems = list.length > 0;

  // Handle mount/unmount so we can animate both in and out
  useEffect(() => {
    if (hasItems) {
      setMounted(true);
      // next tick so the initial (hidden) classes apply first, then transition in
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
    }
  }, [hasItems]);

  if (!mounted) return null;

  const compareHref = `/compare?items=${encodeURIComponent(
    list.map((e) => `${e.location}:${e.id}`).join(","),
  )}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 mx-auto max-w-4xl px-4 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
      onTransitionEnd={() => {
        // once the exit transition finishes, actually unmount
        if (!hasItems) setMounted(false);
      }}
    >
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-2xl md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <span className="font-display text-sm font-medium text-foreground">
            Comparing {list.length}/3
          </span>
          {list.map((e) => (
            <span
              key={e.id}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {e.name}
              <button
                onClick={() => remove(e.id)}
                className="text-muted-foreground hover:text-foreground"
                aria-label={`Remove ${e.name}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={clear}
            className="rounded-full px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
          {/* <Link
            href={compareHref}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Compare {list.length > 1 ? "now" : "→"}
          </Link> */}
          <button
            onClick={() => {
              router.push(compareHref);
              router.refresh();
            }}
          >
            Compare {list.length > 1 ? "now" : "→"}
          </button>
        </div>
      </div>
    </div>
  );
}
