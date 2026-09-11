"use client";

import { useCompare } from "@/components/site/compare-store";

// Pass the Airtable record id, display name, and its location/table name.
export function AddToCompareButton({ id, name, location, className = "" }) {
  const { has, toggle, list } = useCompare();
  const active = has(id);
  const atMax = list.length >= 3 && !active;

  return (
    <button
      type="button"
      onClick={() => toggle(id, name, location)}
      disabled={atMax}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-background-dark text-background-dark hover:bg-background-dark hover:text-white"
      } ${atMax ? "cursor-not-allowed opacity-50" : ""} ${className}`}
      title={atMax ? "You can compare up to 3 schools" : undefined}
    >
      {active ? "Remove from Compare" : "Add to Compare"}
    </button>
  );
}