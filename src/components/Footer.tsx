import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-brand text-brand-surface pt-16 pb-12">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#253D33]">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  width={512}
                  height={512}
                  className="h-9 w-9"
                />
                <span className="font-serif text-[24px] font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </span>
              </div>
              <span className="text-[14px] text-[#A2B3AA] block mb-4">
                Merchant Exporters of Indian Agricultural Commodities
              </span>
              <p className="text-[14px] text-[#C2D1C9] leading-relaxed max-w-[45ch]">
                Specialized in the direct sourcing, standardized processing,
                and international containerized export of high-curcumin
                turmeric and pure organic moringa leaf powder.
              </p>
            </div>
            <div className="mt-6 text-[13px] text-[#8EA096]">
              Registered with DGFT • Spices Board of India • APEDA
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">
              Export Navigation
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#C2D1C9]">
              <li>
                <Link className="hover:text-white transition-colors" href="/products">
                  High-Curcumin Turmeric
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/products">
                  Organic Moringa Leaf Powder
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/quality">
                  Quality Standards &amp; COA
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/about">
                  About Crossway Global
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/contact">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">
              Trade Desk Contact
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#C2D1C9]">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[18px] mr-2 mt-0.5 text-[#A2B3AA]">
                  location_on
                </span>
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-[18px] mr-2 text-[#A2B3AA]">
                  mail
                </span>
                <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-[18px] mr-2 text-[#A2B3AA]">
                  call
                </span>
                <span>{siteConfig.phone} (Direct Export WhatsApp)</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-[18px] mr-2 text-[#A2B3AA]">
                  schedule
                </span>
                <span>Daily, {siteConfig.hours} (IST, GMT +5:30)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#8EA096] gap-4">
          <div>
            © {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved. Commercial
            export specifications subject to formal contract confirmation.
          </div>
          <div className="flex items-center space-x-6">
            <Link className="hover:text-white transition-colors" href="/terms">
              Terms of Trade
            </Link>
            <Link className="hover:text-white transition-colors" href="/privacy">
              Privacy Notice
            </Link>
            <Link className="hover:text-white transition-colors" href="/documentation-policy">
              Export Documentation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
