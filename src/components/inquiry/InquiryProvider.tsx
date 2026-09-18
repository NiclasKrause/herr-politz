"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface InquiryContextValue {
  isOpen: boolean;
  initialProjectType?: string;
  openInquiry: (projectType?: string) => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProjectType, setInitialProjectType] = useState<string | undefined>(undefined);

  const openInquiry = useCallback((projectType?: string) => {
    setInitialProjectType(projectType);
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, initialProjectType, openInquiry, closeInquiry }),
    [isOpen, initialProjectType, openInquiry, closeInquiry],
  );

  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
