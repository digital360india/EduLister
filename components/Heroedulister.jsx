"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Eye, ShieldCheck, HeartHandshake, Star } from "lucide-react";
import heroImg from "@/public/image.png";
import Image from "next/image";

export default function Hero() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    router.push(`/schools${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section className="relative bg-primary text-primary-foreground px-6 md:px-8 lg:px-10 mt-20 h-[700px]">
      <div className="absolute inset-0 -z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>
      <div className="container-page relative grid gap-10 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div className="animate-slideIn">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs text-gold">
            <ShieldCheck size={12} />
            EDULISTER · School discovery &amp; comparison
          </span>
          <h5 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Discover. Compare.<br />
            <span className="italic text-gold">Choose Better.</span>
          </h5>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Find the right school for your child. EduLister brings school information together - location, curriculum,
            fees, facilities, boarding and admissions - so you can evaluate options that genuinely fit your family.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col gap-2 rounded-2xl bg-card p-2 text-foreground shadow-xl sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search size={16} className="text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by school, city or state…"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold/90">
              Explore more
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-primary-foreground/80">
            <div className="flex items-center gap-2"><Eye size={14} className="text-gold" /> 300+ campuses visited</div>
            <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-gold" /> Zero paid listings</div>
            <div className="flex items-center gap-2"><HeartHandshake size={14} className="text-gold" /> Free counselling</div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative aspect-[3/2] rounded-3xl">
            <Image
              src={heroImg}
              alt="Indian students walking together on a heritage boarding school campus at golden hour"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute -bottom-2 -left-6 rounded-2xl border border-border bg-card p-4 text-foreground shadow-xl">
            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold text-gold-foreground">
                <Star size={18} />
              </div>
              <div className="">
                <p className="font-display text-lg font-semibold">4.9 / 5</p>
                <p className="text-xs text-muted-foreground">Parent trust score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}