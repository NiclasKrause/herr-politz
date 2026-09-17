import type { Location } from "@/data/locations";

export function LocationBlock({ location }: { location: Location }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`;

  return (
    <div className="border-t border-dark-line pt-8">
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
        {location.city}
      </h3>
      <div className="mt-4 flex flex-col gap-1 text-sm text-dark-text/85">
        <p>{location.name}</p>
        <p>{location.street}</p>
        <p>
          {location.zip} {location.place}
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-1 text-sm">
        <a href={`tel:${location.phoneHref}`} className="text-dark-text hover:text-accent">
          {location.phone}
        </a>
        <a href={`mailto:${location.email}`} className="text-dark-muted hover:text-accent">
          {location.email}
        </a>
      </div>
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex items-center gap-2 border-b border-dark-text pb-1 text-xs font-semibold uppercase tracking-widest text-dark-text"
      >
        Route
        <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
      </a>
    </div>
  );
}
