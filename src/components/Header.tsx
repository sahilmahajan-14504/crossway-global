"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-site mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo-chip.png"
            alt=""
            width={512}
            height={512}
            priority
            className="h-11 w-11 rounded-lg"
          />
          <span className="flex flex-col">
            <span className="font-serif text-[22px] font-semibold text-brand tracking-tight leading-none">
              {siteConfig.name}
            </span>
            <span className="text-[13px] text-brand-text-muted tracking-normal mt-1 font-sans">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-7 text-[14.5px] font-medium text-brand-text-muted">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-brand transition-colors ${
                  isActive ? "text-brand" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded text-[15px] font-medium bg-brand text-white hover:bg-brand-dark transition-colors shadow-sm"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded text-brand hover:bg-brand-surface-alt transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-brand-border bg-brand-surface">
          <div className="max-w-site mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-[15px] font-medium border-b border-brand-border last:border-b-0 transition-colors ${
                    isActive ? "text-brand" : "text-brand-text-muted hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="sm:hidden mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded text-[15px] font-medium bg-brand text-white hover:bg-brand-dark transition-colors shadow-sm"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
