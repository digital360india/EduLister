"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useCompare } from "@/components/site/compare-store";
import { submitLead } from "@/lib/leads";

export function SchoolActions({ school }) {
  const { has, toggle } = useCompare();
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    try {
      await submitLead({
        source: "school_detail",
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        email: String(fd.get("email") || ""),
        message: String(fd.get("message") || ""),
        school_id: school.id,
      });
    //   toast.success("Sent! A counsellor will contact you soon.");
      e.target.reset();
    } catch {
    //   toast.error("Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => toggle(school.id, school.name)}
          className={`rounded-full border px-4 py-2 text-sm font-medium ${
            has(school.id)
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:bg-muted"
          }`}
        >
          {has(school.id) ? "✓ Added to compare" : "Add to compare"}
        </button>
        {school.website && (
          <a
            href={school.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted"
          >
            Official website <ExternalLink size={12} />
          </a>
        )}
      </div>

      <aside className="md:sticky md:top-24 md:self-start">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-wider text-gold">Free counselling</p>
          <h3 className="mt-2 font-display text-xl">Interested in {school.name}?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get admission timelines, fee breakdown, and honest pros/cons from a counsellor.
          </p>
          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input
              name="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Parent name"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
            <input
              name="phone"
              required
              type="tel"
              minLength={7}
              maxLength={20}
              placeholder="Phone"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
            <input
              name="email"
              type="email"
              maxLength={200}
              placeholder="Email (optional)"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
            <textarea
              name="message"
              maxLength={1000}
              rows={3}
              placeholder="Your questions (optional)"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
            <button
              disabled={sending}
              className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
            >
              {sending ? "Sending…" : "Request info"}
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}