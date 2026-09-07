"use client";

import { useMemo, useState } from "react";
import { LocateFixed, MapPin, Loader2 } from "lucide-react";
// import { SchoolCard } from "@/components/site/SchoolCard";
// import { CITY_COORDS, distanceKm } from "@/lib/city-coords";

export function NearMeClient({ cities }) {
  const [coords, setCoords] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [cityInput, setCityInput] = useState("");

//   const cities = useMemo(
//     () => Object.keys(CITY_COORDS).sort((a, b) => a.localeCompare(b)),
//     [],
//   );

//   const ranked = useMemo(() => {
//     if (!coords) return [];
//     return schools
//       .map((s) => {
//         const c = CITY_COORDS[s.city];
//         return { s, km: c ? distanceKm(coords, c) : null };
//       })
//       .filter((r) => r.km !== null)
//       .sort((a, b) => a.km - b.km);
//   }, [schools, coords]);

//   const locate = () => {
//     if (typeof navigator === "undefined" || !navigator.geolocation) {
//       setStatus("error");
//       setError("Your browser doesn't support location sharing. Pick a city instead.");
//       return;
//     }
//     setStatus("loading");
//     setError("");
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
//         setStatus("idle");
//       },
//       () => {
//         setStatus("error");
//         setError("We couldn't read your location. Allow location access or choose a city below.");
//       },
//       { timeout: 10000 },
//     );
//   };

  return (
    <div className="container-page py-12 px-6 md:px-8 lg:px-10 mt-20">
      <p className="text-xs uppercase tracking-wider text-gold">Near you</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Boarding schools near my location</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Share your location and we'll rank India's boarding schools by how far they are from you — with fees,
        boards and ratings side by side.
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        <button
        //   onClick={locate}
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
        >
          {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <LocateFixed size={16} />}
          {status === "loading" ? "Locating…" : "Use my current location"}
        </button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">or pick a nearby city</span>
          <select
            value={cityInput}
            // onChange={(e) => {
            //   const city = e.target.value;
            //   setCityInput(city);
            //   setCoords(CITY_COORDS[city] ?? null);
            //   setError("");
            // }}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          >
            <option value="">Select city…</option>
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      {/* {coords && (
        <div className="mt-12">
          <h2 className="font-display text-2xl">Closest first</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ranked.map(({ s, km }) => (
              <div key={s.id} className="relative">
                <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                  <MapPin size={11} /> ~{km} km
                </span>
                <SchoolCard s={s} />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}