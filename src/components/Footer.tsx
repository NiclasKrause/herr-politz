import Image from "next/image";
import Link from "next/link";
import { footerServiceNav, footerCompanyNav, footerLegalNav } from "@/data/navigation";
import { locations } from "@/data/locations";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="dark-section border-t border-dark-line bg-dark text-dark-text">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/brand/hp-logo.png"
              alt={company.legalName}
              width={445}
              height={90}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm text-dark-muted">{company.legalName}</p>
          </div>

          <FooterColumn title="Leistungen" links={footerServiceNav} />
          <FooterColumn title="Unternehmen" links={footerCompanyNav} />

          <div>
            <span className="meta-label text-dark-muted">Standorte</span>
            <div className="mt-3 flex flex-col gap-6">
              {locations.map((loc) => (
                <div key={loc.id} className="text-sm text-dark-muted">
                  <p className="font-semibold text-dark-text">{loc.city}</p>
                  <p>{loc.street}</p>
                  <p>
                    {loc.zip} {loc.place}
                  </p>
                  <a href={`tel:${loc.phoneHref}`} className="mt-1 block hover:text-dark-text">
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-dark-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta-label text-dark-muted">
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dark-muted">
            {footerLegalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-dark-text">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <span className="meta-label text-dark-muted">{title}</span>
      <nav className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-dark-muted hover:text-dark-text">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
