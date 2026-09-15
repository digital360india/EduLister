"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const SUPPRESSED_ROUTES = ["/consultation", "/contact"];

export function LeadPopup({ setClose }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (SUPPRESSED_ROUTES.includes(pathname)) return;

    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
    };
    const timer = window.setTimeout(trigger, 20_000);
    const onLeave = (e) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [pathname]);

  // Mount immediately on open; briefly delay the visible class so the
  // CSS transition (opacity/scale) actually animates in.
  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [open]);

  const close = () => {
    setVisible(false);
    // wait for the exit transition before unmounting
    window.setTimeout(() => setOpen(false), 200);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      await submitLead({
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        source: "popup - edulister.com",
        meta: {
          childGrade: String(fd.get("child_grade") || ""),
          location: String(fd.get("location") || ""),
          url: window.location.href,
        },
      });
      // close();
      setToast({ type: "success", message: "Form submitted successfully" });
    } catch (err) {
      console.error(err);
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
      window.setTimeout(() => setToast(null), 3500);
    }
  };

  return (
    <>
      {open && (
        <div
          className={`fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm transition-opacity duration-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          <div
            className={`relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl transition-all duration-200 ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-5 scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="bg-primary p-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-wider text-gold">
                Free · No obligation
              </p>
              <h3 className="mt-1 font-display text-2xl leading-tight">
                Confused about boarding schools?
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Talk to a counsellor. We'll shortlist 3 that actually fit — based on
                your child, not a paid list.
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-3 p-6">
              <div>
                <label className="text-xs font-medium text-foreground">
                  Parent name
                </label>
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground">
                  Phone (WhatsApp)
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  minLength={7}
                  maxLength={20}
                  pattern="[0-9+\-\s]+"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-foreground">
                    Child's grade
                  </label>
                  <input
                    name="child_grade"
                    maxLength={50}
                    placeholder="Class VI"
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">
                    Preferred state
                  </label>
                  <input
                    name="location"
                    maxLength={80}
                    placeholder="Uttarakhand"
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Get a callback →"}
              </button>
              <p className="text-center text-[10px] text-muted-foreground">
                We never share your number. Callback within 24 hours.
              </p>
            </form>
          </div>
        </div>
      )}

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
    </>
  );
}