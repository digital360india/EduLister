"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const BOARDS = ["CBSE", "ICSE", "IB", "IGCSE"];
const GENDERS = ["any", "boys", "girls", "co-ed"];

export function SchoolsFilters({ initialQuery, stateOptions }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = (patch) => {
    const next = new URLSearchParams(searchParams.toString());
    Object.entries(patch).forEach(([key, value]) => {
      if (!value || value === "any") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
    });
    router.push(`${pathname}?${next.toString()}`);
  };

  return (
    <div className="mb-8 rounded-2xl border border-border bg-card p-4">
      <div className="grid gap-3 md:grid-cols-4">
        <input
          defaultValue={initialQuery.q ?? ""}
          onBlur={(e) => update({ q: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") update({ q: e.target.value });
          }}
          placeholder="Search name or city…"
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
        />
        <select
          value={initialQuery.state ?? ""}
          onChange={(e) => update({ state: e.target.value })}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">All states</option>
          {stateOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          value={initialQuery.board ?? ""}
          onChange={(e) => update({ board: e.target.value })}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">All boards</option>
          {BOARDS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        <select
          value={initialQuery.gender ?? "any"}
          onChange={(e) => update({ gender: e.target.value })}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
        >
          {GENDERS.map((g) => (
            <option key={g} value={g}>
              {g === "any" ? "Any gender" : g}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}