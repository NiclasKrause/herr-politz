"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { mainNav } from "@/data/navigation";
import { locations } from "@/data/locations";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const primaryPhone = locations[0];
  const { openInquiry } = useInquiry();

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 sm:px-10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="relative z-[60] shrink-0">
            <Image
              src="/brand/hp-logo.png"
              alt="HERR & POLITZ Hoch- und Tiefbau GmbH"
              width={445}
              height={90}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-semibold uppercase tracking-wide text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${primaryPhone.phoneHref}`}
              className="text-[13px] font-semibold tracking-wide text-ink hover:text-accent"
            >
              {primaryPhone.phone}
            </a>
            <button
              type="button"
              onClick={() => openInquiry()}
              className="bg-dark px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-dark-text transition-colors hover:bg-accent"
            >
              Projekt besprechen
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            className="relative z-[60] flex h-9 w-9 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-6 bg-ink transition-all duration-300",
                menuOpen && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-6 bg-ink transition-all duration-300",
                menuOpen && "-translate-y-[4px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-dark px-6 pb-10 pt-24 text-dark-text lg:hidden"
          >
            <nav className="flex flex-1 flex-col items-start justify-center gap-1">
              {mainNav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col gap-4 border-t border-dark-line pt-6"
            >
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openInquiry();
                }}
                className="bg-accent px-5 py-4 text-center text-sm font-semibold uppercase tracking-wide text-dark-text"
              >
                Projekt besprechen
              </button>
              <a href={`tel:${primaryPhone.phoneHref}`} className="text-sm text-dark-muted">
                Jetzt anrufen · {primaryPhone.phone}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
