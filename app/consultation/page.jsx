'use client';
import { useState } from "react";
import { CalendarCheck, ShieldCheck, Phone } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const BOARDS = ["CBSE", "ICSE", "IB", "IGCSE"];

const Consultation = () => {
  const [sending, setSending] = useState(false);
  const [boards, setBoards] = useState([]);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState(null);

  const toggle = (b) =>
    setBoards((cur) => (cur.includes(b) ? cur.filter((x) => x !== b) : [...cur, b]));

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    try {
      await submitLead({
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        email: String(fd.get("email") || ""),
        source: "consultation page - edulister.com",
        meta: {
          childGrade: String(fd.get("child_grade") || ""),
          budget: String(fd.get("budget") || ""),
          location: String(fd.get("states") || ""),
          boards,
          notes: String(fd.get("notes") || ""),
          url: window.location.href,
        },
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      window.setTimeout(() => setToast(null), 3500);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container-page py-12 mt-20 px-6 md:px-8 lg:px-10">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-wider text-gold">Free · 30 minutes · No obligation</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">Book a free counselling call</h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            A candid conversation with someone who's actually walked these campuses.
            We'll help you narrow 300+ schools down to 3 that genuinely fit your child.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { icon: CalendarCheck, title: "You'll walk away with 3 shortlisted schools", body: "Matched to your budget, board, and geography." },
              { icon: ShieldCheck, title: "Zero sales pressure", body: "We don't take commissions from schools. Ever." },
              { icon: Phone, title: "Callback within 24 hours", body: "Or immediately, if you pick a slot below." },
            ].map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3">
                <div className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-display text-base">{title}</p>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground">
                <CalendarCheck size={22} />
              </div>
              <h2 className="mt-4 font-display text-2xl">You're on the calendar</h2>
              <p className="mt-2 text-sm text-muted-foreground">A counsellor will WhatsApp you within 24 hours to lock a time.</p>
            </div>
          ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="font-display text-xl">Tell us about your child</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium">Your name</label>
                <input name="name" required minLength={2} maxLength={100} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs font-medium">Phone (WhatsApp)</label>
                <input name="phone" required type="tel" minLength={7} maxLength={20} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium">Email</label>
              <input name="email" required type="email" maxLength={200} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium">Child's current grade</label>
                <input name="child_grade" maxLength={50} placeholder="Class VI" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs font-medium">Budget / year</label>
                <select name="budget" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select…</option>
                  <option>Under ₹5L</option>
                  <option>₹5L – ₹8L</option>
                  <option>₹8L – ₹12L</option>
                  <option>Above ₹12L</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium">Preferred boards</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {BOARDS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => toggle(b)}
                    className={`rounded-full border px-3 py-1 text-xs ${boards.includes(b) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium">Preferred states <span className="text-muted-foreground">(comma-separated)</span></label>
              <input name="states" maxLength={200} placeholder="Uttarakhand, Kerala" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs font-medium">Anything else we should know?</label>
              <textarea name="notes" maxLength={1500} rows={3} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <button disabled={sending} className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-60">
              {sending ? "Booking…" : "Book my free call →"}
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              By submitting, you agree to be contacted. We never share your details.
            </p>
          </form>
          )}
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg ${
            toast.type === "success"
              ? "bg-foreground text-background"
              : "bg-destructive text-destructive-foreground"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
export default Consultation;