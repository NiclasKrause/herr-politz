import Link from "next/link";
import {
  footerCompanyNav,
  footerLegalNav,
  footerServiceLinks,
  footerServiceNav,
} from "@/data/navigation";
import { locations } from "@/data/locations";
import { company } from "@/data/company";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-dark-muted">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-dark-text/90 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="dark-section bg-dark text-dark-text">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <FooterColumn title="Leistungen" links={footerServiceNav} />
          <FooterColumn title="Unternehmen" links={footerCompanyNav} />
          <FooterColumn title="Service" links={footerServiceLinks} />
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-dark-muted">
              Standorte
            </h3>
            <div className="mt-4 flex flex-col gap-5">
              {locations.map((loc) => (
                <div key={loc.id} className="text-sm text-dark-text/90">
                  <p className="font-semibold">{loc.city}</p>
                  <p>{loc.street}</p>
                  <p>
                    {loc.zip} {loc.place}
                  </p>
                  <a href={`tel:${loc.phoneHref}`} className="block hover:text-accent">
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-dark-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${company.email}`} className="text-sm text-dark-text/90 hover:text-accent">
            {company.email}
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wide text-dark-muted hover:text-dark-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-dark-line px-6 py-10 sm:px-10">
        <p className="font-display select-none text-[16vw] font-bold uppercase leading-[0.82] tracking-tight text-dark-text/95 sm:text-[9vw]">
          HERR &amp;
          <br />
          POLITZ
        </p>
      </div>
    </footer>
  );
}
