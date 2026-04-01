"use client";

import { createContext, useContext, useState } from "react";

const SectionContext = createContext(null);

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
