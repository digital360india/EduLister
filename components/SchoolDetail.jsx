"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Star,
  Users,
  Ruler,
  Calendar,
  ExternalLink,
} from "lucide-react";
// import { useCompare } from "@/components/site/compare-store";
import { submitLead } from "@/lib/submitLead";

function formatLakh(n) {
  if (!n) return "—";
  return `₹${(n / 100000).toFixed(1)}L`;
}

const FACILITY_MAP = [
  { check: "Swimming_Pool", label: "Swimming Pool" },
  { check: "Online_Classes", label: "Online Classes" },
  { check: "Photography", label: "Audio/Video" },
  { check: "Robotics_Lab", label: "Robotics" },
  { check: "Smart_Classes", label: "Smart Classes" },
  { check: "Indoor_Games", label: "Shooting" },
  { check: "Basketball_Court", label: "Basketball Court" },
  { check: "Tennis_Court", label: "Table Tennis" },
  { check: "Play_Ground", label: "Playground" },
  { check: "Badminton_Court", label: "Badminton Court" },
];

export default function SchoolDetail({ school, reviews, city, id }) {
  //   const { has, toggle } = useCompare();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState(null);

  // Map old Airtable-shaped `school` object into the fields this design expects.
  const s = useMemo(() => {
    const boards = [
      school?.cbse_schools && "CBSE",
      school?.icse_isc_schools && "ICSE/ISC",
      school?.cie_schools && "CIE",
      school?.ib_schools && "IB",
      school?.igcse_schools && "IGCSE",
    ].filter(Boolean);

    const gender = school?.coed_schools
      ? "Co-Ed"
      : school?.girls_schools
        ? "Girls School"
        : "Boys School";

    const facilities = FACILITY_MAP.filter(
      (f) => school?.[f.check] === "checked",
    ).map((f) => f.label);

    return {
      id,
      name: school?.name,
      city: city || school?.Town,
      state: school?.Town,
      hero_image: school?.Image_Code
        ? `https://res.cloudinary.com/eduminatti-com/image/upload/v1733386822/EduLister/${city}/G-${school.Image_Code}.png`
        : null,
      rating: school?.rating ?? 0,
      boards,
      gender,
      class_range:
        school?.classfrom && school?.classto
          ? `${school.classfrom}–${school.classto}`
          : "—",
      established: school?.establishment ?? null,
      student_teacher_ratio: school?.student_teacher_ratio ?? null, // not in old schema
      campus_size: school?.campus_size ?? null, // not in old schema
      fees_min: school?.feefrom,
      fees_max: school?.feeto,
      long_desc: school?.Long_Description ?? school?.short_desc,
      facilities,
      website: school?.website ?? null, // not in old schema
    };
  }, [school, city, id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    try {
      await submitLead({
        source: "school_detail - edulister.com",
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        email: String(fd.get("email") || ""),
        meta: {
          notes: String(fd.get("message") || ""),
          school: s.name,
          url: window.location.href,
        },
      });
      setToast({ type: "success", message: "Form submitted successfully" });
      // e.target.reset();
      setSent(true);
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
      window.setTimeout(() => setToast(null), 3500);
    }
  };

  return (
    <div className="bg-background ">
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        {s.hero_image && (
          <img
            src={s.hero_image}
            alt={s.name}
            className="h-full w-full object-cover "
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/70" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-10 text-primary-foreground">
          <p className="flex items-center gap-1 text-sm text-black">
            <MapPin size={14} /> {s.city}
            {s.state ? `, ${s.state}` : ""}
          </p>
          <h1 className="mt-2 font-display text-black text-4xl md:text-6xl">
            {s.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-background/95 px-3 py-1 text-foreground">
              <Star size={12} className="fill-gold text-gold" />
              {/* {s.rating?.toFixed(1)} */}
            </span>
            {s.boards.map((b) => (
              <span
                key={b}
                className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground"
              >
                {b}
              </span>
            ))}
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs">
              {s.gender}
            </span>
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs">
              Class {s.class_range}
            </span>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.6fr_1fr] px-6 md:px-8 lg:px-12">
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: Calendar,
                label: "Established",
                value: s.established?.toString() ?? "—",
              },
              {
                icon: Users,
                label: "Student:Teacher",
                value: s.student_teacher_ratio ?? "—",
              },
              { icon: Ruler, label: "Campus", value: s.campus_size ?? "—" },
              {
                icon: Star,
                label: "Fees / year",
                value: `${formatLakh(s.fees_min)}–${formatLakh(s.fees_max)}`,
              },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-border/60 bg-card p-4"
              >
                <k.icon size={16} className="text-gold" />
                <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </p>
                <p className="mt-1 font-display text-lg">{k.value}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="font-display text-2xl">About the school</h2>
            <div
              dangerouslySetInnerHTML={{ __html: s.long_desc }}
              className="article-container mt-6 leading-relaxed text-[16px] h-[323px] text-justify overflow-y-scroll"
            />
          </section>

          {s.facilities.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-2xl">Facilities & programs</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.facilities.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            {/* <button
              onClick={() => toggle(s.id, s.name)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                has(s.id) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"
              }`}
            >
              {has(s.id) ? "✓ Added to compare" : "Add to compare"}
            </button> */}
            {s.website && (
              <a
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                Official website <ExternalLink size={12} />
              </a>
            )}
            <Link
              href="/schools"
              className="text-sm text-muted-foreground hover:underline self-center"
            >
              ← Back to all schools
            </Link>
          </div>
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-gold">
              Free counselling
            </p>
            <h3 className="mt-2 font-display text-xl">
              Interested in {s.name}?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get admission timelines, fee breakdown, and honest pros/cons from
              a counsellor.
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
        </aside>
      </div>
    </div>
  );
}
