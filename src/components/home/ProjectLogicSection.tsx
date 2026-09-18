"use client";

import { useEffect, useRef, useState } from "react";
import { projectLogic } from "@/data/projectLogic";
import { cn } from "@/lib/cn";

export function ProjectLogicSection() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-hp-light">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="meta-label text-hp-muted">03 / Project Logic</span>
            <h2 className="font-display mt-4 max-w-lg text-4xl font-bold uppercase leading-[0.95] tracking-tight text-hp-text sm:text-6xl">
              Was ein gutes Projekt ausmacht.
            </h2>

            <div className="mt-10 flex flex-col gap-1">
              {projectLogic.map((factor, i) => (
                <button
                  key={factor.index}
                  type="button"
                  onClick={() =>
                    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className={cn(
                    "flex items-baseline gap-4 border-b border-hp-border py-4 text-left transition-colors",
                    active === i ? "border-hp-text" : "",
                  )}
                >
                  <span
                    className={cn(
                      "meta-label",
                      active === i ? "text-hp-primary" : "text-hp-muted",
                    )}
                  >
                    {factor.index}
                  </span>
                  <span
                    className={cn(
                      "font-display text-xl font-bold uppercase tracking-tight transition-colors sm:text-2xl",
                      active === i ? "text-hp-text" : "text-hp-muted",
                    )}
                  >
                    {factor.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {projectLogic.map((factor, i) => (
              <div
                key={factor.index}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="min-h-[30vh]"
              >
                <span className="meta-label text-hp-primary">{factor.index}</span>
                <p className="font-display mt-4 text-2xl font-medium leading-snug tracking-tight text-hp-text sm:text-3xl">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
