"use client";

import { useState } from "react";
import { departments } from "@/data/team";
import { cn } from "@/lib/cn";

const management = departments.find((d) => d.name === "Geschäftsführung")!;
const otherDepartments = departments.filter((d) => d.name !== "Geschäftsführung");

export function PeopleDirectory() {
  const [openDept, setOpenDept] = useState<string | null>(otherDepartments[0]?.name ?? null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 border-b border-hp-border pb-10 sm:grid-cols-2">
        {management.members.map((m) => (
          <div key={m.name}>
            <span className="meta-label text-hp-muted">Geschäftsführung</span>
            <p className="font-display mt-1 text-xl font-bold uppercase tracking-tight text-hp-text">{m.name}</p>
            <p className="text-hp-muted">{m.position}</p>
            <a href={`tel:${m.phoneHref}`} className="mt-1 block text-sm font-semibold text-hp-text hover:text-hp-primary">
              {m.phone}
            </a>
            <a href={`mailto:${m.email}`} className="block text-sm text-hp-muted hover:text-hp-text">
              {m.email}
            </a>
          </div>
        ))}
      </div>

      {/* Desktop: directory view */}
      <div className="mt-10 hidden gap-10 lg:grid lg:grid-cols-[240px_1fr]">
        <nav className="flex flex-col gap-1">
          {otherDepartments.map((dept) => (
            <button
              key={dept.name}
              type="button"
              onClick={() => setOpenDept(dept.name)}
              className={cn(
                "border-b border-hp-border py-3 text-left text-[13px] font-semibold uppercase tracking-wide transition-colors",
                openDept === dept.name ? "text-hp-primary" : "text-hp-text hover:text-hp-primary",
              )}
            >
              {dept.name}
            </button>
          ))}
        </nav>
        <div className="grid grid-cols-2 gap-8">
          {otherDepartments
            .find((d) => d.name === openDept)
            ?.members.map((m) => <ContactCard key={m.name} member={m} />)}
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="mt-6 flex flex-col lg:hidden">
        {otherDepartments.map((dept) => {
          const isOpen = openDept === dept.name;
          return (
            <div key={dept.name} className="border-b border-hp-border">
              <button
                type="button"
                onClick={() => setOpenDept(isOpen ? null : dept.name)}
                className="flex w-full items-center justify-between py-4 text-left text-[13px] font-semibold uppercase tracking-wide text-hp-text"
              >
                {dept.name}
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              <div className={cn("accordion-panel", isOpen && "is-open")}>
                <div>
                  <div className="flex flex-col gap-6 pb-6">
                    {dept.members.map((m) => (
                      <ContactCard key={m.name} member={m} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactCard({ member }: { member: (typeof departments)[number]["members"][number] }) {
  return (
    <div>
      <p className="font-semibold text-hp-text">{member.name}</p>
      {member.position ? <p className="text-sm text-hp-muted">{member.position}</p> : null}
      <a href={`tel:${member.phoneHref}`} className="mt-1 block text-sm font-semibold text-hp-text hover:text-hp-primary">
        {member.phone}
      </a>
      <a href={`mailto:${member.email}`} className="block text-sm text-hp-muted hover:text-hp-text">
        {member.email}
      </a>
    </div>
  );
}
