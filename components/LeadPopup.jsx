"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
// import { submitLead } from "@/app/actions/leads";

// const KEY = "vg_popup_v1";
const SUPPRESSED_ROUTES = ["/consultation", "/contact"];
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

function isSuppressed() {
  if (typeof window === "undefined") return true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return false;
    const ts = Number(raw);
    return Date.now() - ts < SEVEN_DAYS;
  } catch {
    return false;
  }
}

function suppress() {
  window.localStorage.setItem(KEY, String(Date.now()));
}

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (SUPPRESSED_ROUTES.includes(pathname)) return;
    if (isSuppressed()) return;

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

  const close = () => {
    suppress();
    setOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log("Form data:", Object.fromEntries(fd.entries()));
    // setSubmitting(true);
    // try {
    //   await submitLead({
    //     source: "popup",
    //     name: String(fd.get("name") || ""),
    //     phone: String(fd.get("phone") || ""),
    //     child_grade: String(fd.get("child_grade") || ""),
    //     preferred_state: String(fd.get("preferred_state") || ""),
    //   });
    //   toast.success("Got it. A counsellor will call you within 24 hours.");
    //   suppress();
    //   setOpen(false);
    // } catch (err) {
    //   toast.error("Something went wrong. Please try again.");
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ y: 20, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-2xl"
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
              <p className="text-xs uppercase tracking-wider text-gold">Free · No obligation</p>
              <h3 className="mt-1 font-display text-2xl leading-tight">
                Confused about boarding schools?
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Talk to a counsellor. We'll shortlist 3 that actually fit — based on your child, not a paid list.
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-3 p-6">
              <div>
                <label className="text-xs font-medium text-foreground">Parent name</label>
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground">Phone (WhatsApp)</label>
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
                  <label className="text-xs font-medium text-foreground">Child's grade</label>
                  <input
                    name="child_grade"
                    maxLength={50}
                    placeholder="Class VI"
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">Preferred state</label>
                  <input
                    name="preferred_state"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}