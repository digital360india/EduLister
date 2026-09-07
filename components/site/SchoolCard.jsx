"use client";

import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { useCompare } from "./compare-store";

function getCurriculum(f) {
  if (f.cbse_schools) return "CBSE";
  if (f.icse_isc_schools) return "ICSE/ISC";
  if (f.cie_schools) return "CIE";
  if (f.ib_schools) return "IB";
  if (f.igcse_schools) return "IGCSE";
  return null;
}

function getCategory(f) {
  if (f.girls_schools) return "Girls";
  if (f.boys_schools) return "Boys";
  if (f.coed_schools) return "Co-Ed";
  return null;
}

function getSchoolType(f) {
  if (f.day_schools) return "Day School";
  if (f.day_boarding_schools) return "Day Boarding";
  if (f.full_boarding_schools) return "Boarding";
  return null;
}

function formatFees(from, to) {
  if (!from || !to) return "Not specified";
  return `₹${Number(from).toLocaleString("en-IN")} – ₹${Number(to).toLocaleString("en-IN")}`;
}

export function SchoolCard({ data, citySlug }) {
  const { has, toggle } = useCompare();
  const f = data?.fields ?? {};
  const checked = has(data?.id);

  const curriculum = getCurriculum(f);
  const category = getCategory(f);
  const schoolType = getSchoolType(f);

  const heroImage = f.Image_Code
    ? `https://res.cloudinary.com/eduminatti-com/image/upload/v1733386822/EduLister/${citySlug}/G-${f.Image_Code}.png`
    : null;

  const href = `/school/${citySlug}/${f.slug}`;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card transition-all hover:shadow-[0_20px_40px_-20px_rgba(20,40,30,0.25)] hover:-translate-y-0.5">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {heroImage && (
            <img
              src={heroImage}
              alt={f.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          {f.rating != null && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/95 px-2 py-1 text-xs font-medium">
              <Star size={12} className="fill-gold text-gold" />
              {Number(f.rating).toFixed(1)}
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={href}>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground group-hover:text-primary">
            {f.name}
          </h3>
        </Link>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={12} /> {f.Address || f.fullAddress}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {curriculum && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-secondary-foreground">
              {curriculum}
            </span>
          )}
          {category && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-foreground">
              {category}
            </span>
          )}
          {schoolType && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {schoolType}
            </span>
          )}
          {f.classto && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Up to {f.classto}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Annual fees</p>
            <p className="font-display text-base font-medium text-foreground">
              {formatFees(f.feefrom, f.feeto)}
            </p>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-xs font-medium">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(data?.id, f.name)}
              className="h-4 w-4 accent-primary"
            />
            Compare
          </label>
        </div>
      </div>
    </article>
  );
}