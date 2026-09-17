"use client";
import { useState } from "react";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    setError(null);
    try {
      await submitLead({
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        source: "contact - edulister.com",
        meta: {
          subject: String(fd.get("subject") || ""),
          message: String(fd.get("message") || ""),
          url: window.location.href,
        },
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container-page py-12 mt-20 px-6 md:px-8 lg:px-10">
      <p className="text-xs uppercase tracking-wider text-gold">Contact</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">
        We'd love to hear from you
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Questions about schools, our methodology, or something else entirely?
        Drop us a note.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "edulisterr@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 97605 48360" },
            { icon: MessageSquare, label: "WhatsApp", value: "+91 8303022306" },
            {
              icon: MapPin,
              label: "Office",
              value: "B-36, Nehru Colony, Dharampur, Dehradun",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-display text-lg">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="font-display text-2xl">Thanks — got it.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every message within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium">Name</label>
                  <input
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    maxLength={200}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    maxLength={20}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium">Subject</label>
                  <input
                    name="subject"
                    maxLength={150}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  minLength={5}
                  maxLength={2000}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              {error && (
                <p className="text-xs text-destructive">{error}</p>
              )}
              <button
                disabled={sending}
                className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-wider text-gold">Visit us</p>
        <h2 className="mt-2 font-display text-2xl md:text-3xl">Our office</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            title="EduLister office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.67400630946986!2d78.05322462023929!3d30.301471846414007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a7e42c1d2b%3A0xe93ce3508a056186!2sB%2C%20Block%20B%2C%2036%2C%20Nehru%20Colony%20Rd%2C%20C%20Block%2C%20Nehru%20Colony%2C%20Dalanwala%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1789464118598!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
