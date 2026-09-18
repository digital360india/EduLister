"use client";

import { useState } from "react";
import { LocateFixed, MapPin, Loader2, SearchX } from "lucide-react";
import { SchoolCard } from "@/components/site/SchoolCard";
import { CITY_STATE_MAP, STATES, nearestCity } from "@/lib/city-coords";

export function NearMeClient({ cities }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [nearestKm, setNearestKm] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | locating | loading | error
  const [error, setError] = useState("");
  const [schools, setSchools] = useState(null); // null = nothing searched yet

  const citiesForState = selectedState
    ? cities.filter((c) => CITY_STATE_MAP[c.name] === selectedState)
    : cities;

  async function fetchSchools({ city, state }) {
    setStatus("loading");
    setError("");
    try {
      const params = new URLSearchParams();
      if (city) params.set("city", city);
      else if (state) params.set("state", state);
      const res = await fetch(`/api/near-me?${params.toString()}`);
      const data = await res.json();
      setSchools(data.records || []);
    } catch {
      setError("Something went wrong fetching schools. Try again.");
      setSchools([]);
    } finally {
      setStatus("idle");
    }
  }

  const locate = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("error");
      setError("Your browser doesn't support location sharing. Pick a state or city instead.");
      return;
    }
    setStatus("locating");
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const match = nearestCity(coords);
        if (match) {
          setSelectedState(match.state);
          setSelectedCity(match.city);
          setNearestKm(match.km);
          fetchSchools({ city: match.city });
        } else {
          setStatus("idle");
          setError("Couldn't match your location to a city we cover.");
        }
      },
      () => {
        setStatus("error");
        setError("We couldn't read your location. Allow location access or choose a state/city below.");
      },
      { timeout: 10000 },
    );
  };

  const onStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    setNearestKm(null);
    setError("");
    if (state) fetchSchools({ state });
    else setSchools(null);
  };

  const onCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setNearestKm(null);
    setError("");
    if (city) fetchSchools({ city });
    else if (selectedState) fetchSchools({ state: selectedState });
    else setSchools(null);
  };

  const cityLabel = (slug) => cities.find((c) => c.name === slug)?.label || slug;

  return (
    <div className="container-page py-12 px-6 md:px-8 lg:px-10 mt-20">
      <p className="text-xs uppercase tracking-wider text-gold">Near you</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Boarding schools near my location</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Share your location and we'll show you boarding schools closest to you — with fees, boards and ratings
        side by side.
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        <button
          onClick={locate}
          disabled={status === "locating" || status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
        >
          {status === "locating" ? <Loader2 size={16} className="animate-spin" /> : <LocateFixed size={16} />}
          {status === "locating" ? "Locating…" : "Use my current location"}
        </button>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted-foreground">state</span>
          <select
            value={selectedState}
            onChange={onStateChange}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          >
            <option value="">Select state…</option>
            {STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <span className="text-muted-foreground">city</span>
          <select
            value={selectedCity}
            onChange={onCityChange}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          >
            <option value="">All cities in state</option>
            {citiesForState.map((c) => (
              <option key={c.name} value={c.name}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      {status === "loading" && (
        <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 size={16} className="animate-spin" /> Finding schools…
        </div>
      )}

      {status !== "loading" && schools !== null && (
        <div className="mt-12">
          <h2 className="font-display text-2xl">
            {selectedCity ? cityLabel(selectedCity) : selectedState} schools
          </h2>

          {schools.length === 0 ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <SearchX size={28} className="text-muted-foreground" />
              <p className="text-sm font-medium">We're not in your city yet</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                We don't have schools listed for {selectedCity ? cityLabel(selectedCity) : selectedState} right
                now. We're adding new cities all the time — check back soon.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {schools.map((r) => (
                <div key={r.id} className="relative">
                  {nearestKm !== null && r.citySlug === selectedCity && (
                    <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                      <MapPin size={11} /> ~{nearestKm} km
                    </span>
                  )}
                  <SchoolCard data={r} citySlug={r.citySlug} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}