import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: "right" | "down-right" | "none";
  variant?: "line" | "solid";
}

const arrows: Record<string, string> = {
  right: "→",
  "down-right": "↘",
  none: "",
};

export function AnimatedLink({
  href,
  children,
  className,
  arrow = "right",
  variant = "line",
}: AnimatedLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <>
      <span>{children}</span>
      {arrow !== "none" ? (
        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          {arrows[arrow]}
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide",
    variant === "line" && "border-b border-current pb-1",
    variant === "solid" &&
      "bg-accent px-6 py-3.5 text-dark-text transition-colors hover:bg-accent-dark",
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
