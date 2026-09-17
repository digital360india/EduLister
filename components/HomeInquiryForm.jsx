"use client";

import { useState } from "react";
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  child_grade: "",
  preferred_state: "",
  message: "",
};

export function HomeInquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  const onChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setStatus({
        type: "error",
        message: "Please share your name and phone number.",
      });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        source: "hero - edulister.com",
        meta: {
          email: form.email,
          childGrade: form.child_grade,
          location: form.preferred_state,
          message: form.message,
          url: window.location.href,
        },
      });
      setStatus({
        type: "success",
        message: "Got it — our counsellor will call you shortly.",
      });
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
      window.setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section className="container-page py-16">
      <div className="relative rounded-3xl bg-primary p-8  md:p-14 mx-auto max-w-5xl shadow-lg shadow-primary">
        <div className="absolute right-0 top-0 -z-0 h-full w-1/2 rounded-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-wider text-gold">
              Talk to an advisor
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              Get a personal shortlist — free.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
              Tell us a little about your child. Our counsellor will call within
              24 hours with 3 boarding schools that genuinely suit your family.
              No fees, no pressure.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/90">
              <li className="flex items-start gap-2">
                <GraduationCap size={16} className="mt-0.5 text-gold" /> Matched
                to your child's age, board &amp; interests
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={16} className="mt-0.5 text-gold" /> Your data
                is never sold or shared
              </li>
              <li className="flex items-start gap-2">
                <HeartHandshake size={16} className="mt-0.5 text-gold" /> Talk
                to a real human, not a bot
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs">
                <span className="text-muted-foreground">Parent's name*</span>
                <input
                  required
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs">
                <span className="text-muted-foreground">Phone number*</span>
                <input
                  required
                  value={form.phone}
                  onChange={onChange("phone")}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs sm:col-span-2">
                <span className="text-muted-foreground">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs">
                <span className="text-muted-foreground">
                  Child's current grade
                </span>
                <input
                  value={form.child_grade}
                  onChange={onChange("child_grade")}
                  placeholder="e.g. Grade 6"
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs">
                <span className="text-muted-foreground">
                  Preferred city / state
                </span>
                <input
                  value={form.preferred_state}
                  onChange={onChange("preferred_state")}
                  placeholder="e.g. Dehradun"
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs sm:col-span-2">
                <span className="text-muted-foreground">
                  Anything else we should know?
                </span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={onChange("message")}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>
            {status && (
              <p
                className={`mb-3 text-xs ${
                  status.type === "success"
                    ? "text-green-600"
                    : "text-destructive"
                }`}
              >
                {status.message}
              </p>
            )}
            <button
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-70 sm:w-auto"
            >
              {loading ? (
                "Sending…"
              ) : (
                <>
                  Request free callback <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
