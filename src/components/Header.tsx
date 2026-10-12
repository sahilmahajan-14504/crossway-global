"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-site mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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

        <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-brand-text-muted">
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

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded text-[15px] font-medium bg-brand text-white hover:bg-brand-dark transition-colors shadow-sm"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
