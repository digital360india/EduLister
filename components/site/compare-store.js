"use client";

import { createContext, useContext, useState, useCallback } from "react";

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [items, setItems] = useState({}); // { [id]: name }

  const has = useCallback((id) => Boolean(items[id]), [items]);

  const toggle = useCallback((id, name) => {
    setItems((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = name;
      }
      return next;
    });
  }, []);

  const clear = useCallback(() => setItems({}), []);

  const list = Object.entries(items).map(([id, name]) => ({ id, name }));

  return (
    <CompareContext.Provider value={{ has, toggle, clear, list }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}