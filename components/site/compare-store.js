"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const CompareContext = createContext(null);
const KEY = "vg_compare_v1";
const MAX = 3;

function readStorage() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(list) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // ignore quota / privacy-mode errors
  }
}

export function CompareProvider({ children }) {
  const [list, setList] = useState(() =>
    typeof window !== "undefined" ? readStorage() : [],
  );

  useEffect(() => {
    writeStorage(list);
  }, [list]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setList(readStorage());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const has = useCallback((id) => list.some((e) => e.id === id), [list]);

  // location is required: Airtable stores each city in its own table,
  // so we need it later to know which table to query
  const toggle = useCallback((id, name, location) => {
    if (!location) {
      console.error(
        "[compare-store] toggle called without a location for:",
        id,
        name,
      );
      return;
    }
    setList((cur) => {
      const exists = cur.some((e) => e.id === id);
      let next;
      if (exists) {
        next = cur.filter((e) => e.id !== id);
      } else {
        const entry = { id, name, location };
        next = cur.length >= MAX ? [...cur.slice(1), entry] : [...cur, entry];
      }
      return next;
    });
  }, []);

  const remove = useCallback((id) => {
    setList((cur) => cur.filter((e) => e.id !== id));
  }, []);

  const clear = useCallback(() => setList([]), []);

  return (
    <CompareContext.Provider value={{ list, has, toggle, remove, clear }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
