"use client";

import { useEffect } from "react";
import { useSection } from "@/context/SectionContext";

export default function SectionSetter({ section }) {
  const { setActiveSection } = useSection();
  useEffect(() => {
    setActiveSection(section);
    return () => setActiveSection(null);
  }, [section]);
  return null;
}
