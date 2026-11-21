import Image from "next/image";

const whatWeProvide = [
  "Available in turmeric whole-finger & bulb, powder, spent, and turmeric bits forms.",
  "Standard size & 60 mesh for powder form.",
  "Bright golden or yellowish-orange colour.",
  "Straight out of the farm — bitter, warm, and peppery flavoured turmeric gives the real touch.",
  "Turmeric powder acts as a flavouring and colouring agent.",
  "Great for health supplements, medicines, Ayurvedic skin & personal care products, masala powders, pickles, instant spice powders, seasonings, ready-to-cook/eat foods, and the snacks industry.",
];

const waigaonCharacteristics = [
  {
    label: "Origin",
    value:
      "Waigaon and surrounding areas of Samudrapur taluka, Wardha district, Maharashtra.",
  },
  {
    label: "GI tag",
    value:
      "Registered geographical indication, which identifies the product with its region of origin.",
  },
  {
    label: "Curcumin",
    value:
      "Often reported around 4–6% commercially, with some lots exceeding 6%. Actual content must be verified through laboratory testing.",
  },
  {
    label: "Appearance & aroma",
    value: "Rich yellow colour, distinctive flavour and strong aroma.",
  },
  {
    label: "Uses",
    value:
      "Spice processing, turmeric powder production and potential export markets.",
  },
];

const tradeForms = [
  {
    title: "Dried Turmeric Fingers",
    description:
      "Carefully dried whole turmeric rhizomes, available in single-polished and double-polished varieties to meet different buyer requirements. Suitable for wholesale buyers, spice processors and exporters — buyers may specify polishing, size, moisture and curcumin content.",
  },
  {
    title: "Turmeric Powder",
    description:
      "Finely ground turmeric powder suitable for food processing, spice blending, wholesale distribution and other commercial applications. Suitable for spice brands, food manufacturers and distributors, with careful control of purity, microbiological quality and packaging.",
  },
  {
    title: "Fresh Turmeric (On Request)",
    description:
      "Fresh, unprocessed turmeric rhizomes supplied according to availability and specific buyer requirements.",
  },
];

const packSizes = [
  "10g",
  "20g",
  "50g",
  "100g",
  "200g",
  "500g",
  "1kg",
  "5kg",
  "10kg",
  "25kg",
];

const packagingVarieties = [
  "Mono Carton Boxes",
  "Pouches",
  "Zip-lock Pouches",
  "Plastic PET Jars",
  "Tins",
];

function WhatWeProvide() {
  return (
    <div className="mt-6 pt-6 border-t border-brand-border">
      <p className="text-[13px] font-medium tracking-wide uppercase text-brand-gold mb-3">
        What We Provide
      </p>
      <ul className="space-y-2">
        {whatWeProvide.map((item) => (
          <li
            key={item}
            className="text-[14px] text-brand-text-muted leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-brand-gold"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TurmericVarieties() {
  return (
    <section className="py-20 md:py-28 border-b border-brand-border bg-brand-surface">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[68ch] mb-12">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            Turmeric Varieties
          </p>
          <h2 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-3">
            Distinct origins. Reliable supply.
          </h2>
          <p className="text-[17px] text-brand-text-muted">
            Choose the turmeric variety that best matches your curcumin,
            colour, aroma, and commercial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          <article className="overflow-hidden rounded-lg border border-brand-border bg-white flex flex-col">
            <div className="relative h-[280px] bg-brand-surface-alt">
              <Image
                src="/images/waigaon-turmeric-fingers.png"
                alt="Waigaon turmeric rhizomes and powder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="font-serif text-[24px] font-semibold text-brand mb-3">
                Waigaon Turmeric
              </h3>
              <p className="text-[15px] text-brand-text-muted mb-5">
                Waigaon turmeric is a traditional turmeric variety associated
                with Waigaon village in Wardha district, Maharashtra. It is
                GI-tagged, known for its distinctive colour, and is relevant
                to Maharashtra&apos;s turmeric trade.
              </p>
              <ul className="space-y-2.5">
                {waigaonCharacteristics.map((item) => (
                  <li key={item.label} className="text-[14px] leading-relaxed">
                    <span className="font-semibold text-brand">
                      {item.label}:
                    </span>{" "}
                    <span className="text-brand-text-muted">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <WhatWeProvide />
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-brand-border bg-white flex flex-col">
            <div className="relative h-[280px] bg-brand-surface-alt">
              <Image
                src="/images/salem-turmeric-powder.png"
                alt="Salem turmeric rhizomes and powder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="font-serif text-[24px] font-semibold text-brand mb-3">
                Salem Turmeric
              </h3>
              <p className="text-[15px] text-brand-text-muted">
                Salem turmeric is a well-known local turmeric type grown in
                Salem and neighbouring districts of Tamil Nadu. It is used in
                spice processing, turmeric powder production, and domestic
                and export trade.
              </p>
              <WhatWeProvide />
            </div>
          </article>
        </div>

        <div className="mb-16">
          <p className="text-[14px] font-medium tracking-wide uppercase text-brand-gold mb-3">
            Available Forms
          </p>
          <h3 className="font-serif text-[32px] md:text-[38px] font-semibold text-brand mb-8">
            Which form should you trade?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradeForms.map((form, i) => (
              <div
                key={form.title}
                className="rounded-lg border border-brand-border bg-white p-6 md:p-7"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold font-serif font-semibold text-[15px] mb-4">
                  {i + 1}
                </span>
                <h4 className="font-serif text-[19px] font-semibold text-brand mb-2">
                  {form.title}
                </h4>
                <p className="text-[14px] text-brand-text-muted leading-relaxed">
                  {form.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rounded-lg border border-brand-border bg-white p-6 md:p-8">
            <h3 className="font-serif text-[24px] font-semibold text-brand mb-3">
              Private Label Packaging
            </h3>
            <p className="text-[15px] text-brand-text-muted">
              Co-packaging solutions for turmeric brands are supported
              through our end-to-end private label packaging capabilities,
              covering both bulk and retail-ready formats. Our systems enable
              turmeric products white label packaging aligned with
              regulatory, branding, and logistics requirements. Packaging
              options include mono carton boxes, pouches, zip-lock pouches,
              PET jars, tins, and bulk export formats.
            </p>
          </article>

          <article className="rounded-lg border border-brand-border bg-white p-6 md:p-8">
            <h3 className="font-serif text-[24px] font-semibold text-brand mb-3">
              Pack Sizes &amp; Packaging
            </h3>
            <p className="text-[13px] font-medium tracking-wide uppercase text-brand-gold mb-2">
              Pack Size
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {packSizes.map((size) => (
                <span
                  key={size}
                  className="text-[13px] px-3 py-1 rounded-full bg-brand-surface-alt text-brand-text-muted border border-brand-border"
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="text-[13px] font-medium tracking-wide uppercase text-brand-gold mb-2">
              Packaging Varieties
            </p>
            <div className="flex flex-wrap gap-2">
              {packagingVarieties.map((variety) => (
                <span
                  key={variety}
                  className="text-[13px] px-3 py-1 rounded-full bg-brand-surface-alt text-brand-text-muted border border-brand-border"
                >
                  {variety}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
