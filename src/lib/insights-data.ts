export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; rows: Array<[string, string]> };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  readingTime: string;
  image: string;
  imageAlt: string;
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "waigaon-turmeric-gi-tag-origin",
    title: "Waigaon Turmeric: GI Tag, Origin, and What Makes It Different",
    excerpt:
      "A buyer's guide to Waigaon turmeric — its registered Geographical Indication tag, growing region in Wardha district, and how its curcumin profile compares to other Indian turmeric varieties.",
    category: "Turmeric",
    publishedAt: "2026-09-15",
    readingTime: "6 min read",
    image: "/images/product-turmeric.jpg",
    imageAlt: "Whole Waigaon turmeric fingers and powder",
    body: [
      {
        type: "p",
        text: "Among India's many turmeric-growing regions, Waigaon holds a distinction few others can claim: a registered Geographical Indication (GI) tag. For international and domestic buyers evaluating turmeric sources, understanding what that tag actually means — and what it doesn't — is the first step to sourcing with confidence.",
      },
      {
        type: "h2",
        text: "Where Waigaon turmeric comes from",
      },
      {
        type: "p",
        text: "Waigaon turmeric is grown in and around Waigaon village in Samudrapur taluka, part of Wardha district in Maharashtra. This belt sits in the Vidarbha region, known for its black cotton soil (regur soil) — a heavy, moisture-retentive clay that turmeric rhizomes respond to particularly well, developing a denser structure and richer pigmentation than turmeric grown in lighter, sandier soils.",
      },
      {
        type: "h2",
        text: "What the GI tag actually certifies",
      },
      {
        type: "p",
        text: "A Geographical Indication tag, administered in India under the Geographical Indications of Goods (Registration and Protection) Act, 1999, legally ties a product's name to its place of origin — similar in concept to Champagne or Darjeeling tea. For Waigaon turmeric, the GI registration recognizes that turmeric grown in this specific micro-region has characteristics (color, aroma, curcumin tendency) distinct enough from generic turmeric to warrant protected regional branding.",
      },
      {
        type: "p",
        text: "Importantly, a GI tag is a provenance and authenticity marker — it confirms where the product was grown, not a guaranteed curcumin percentage for every batch. Curcumin content still varies by harvest, processing method, and testing standard, which is why every commercial description should be read alongside a batch-specific Certificate of Analysis (COA), not instead of one.",
      },
      {
        type: "h2",
        text: "Key characteristics",
      },
      {
        type: "table",
        rows: [
          ["Growing region", "Waigaon and surrounding areas of Samudrapur taluka, Wardha district, Maharashtra"],
          ["Soil type", "Black cotton soil (regur), moisture-retentive clay"],
          ["Colour", "Rich, deep yellow — visually distinct from paler varieties"],
          ["Aroma", "Strong, distinctive — often noted as more pungent than Salem turmeric"],
          ["Curcumin content", "Commercial descriptions commonly cite ~4.5–6.12%, variable by batch"],
          ["Status", "Registered Geographical Indication (GI) tag"],
        ],
      },
      {
        type: "h2",
        text: "How it compares to Salem turmeric",
      },
      {
        type: "p",
        text: "Salem turmeric, grown in Tamil Nadu, is the other major named variety we supply. Where Waigaon is prized for colour intensity and regional authenticity backed by its GI status, Salem turmeric has a long-established reputation in the spice trade and tends to offer more consistent curcumin standardization at scale, owing to a more mature processing infrastructure in that belt. Many buyers — particularly in pharmaceutical and nutraceutical formulation — request Salem turmeric specifically for its track record; others seeking a distinctive regional story for retail or premium positioning gravitate to Waigaon.",
      },
      {
        type: "p",
        text: "Neither is categorically \"better\" — the right choice depends on your end use, target curcumin specification, and whether provenance/storytelling matters for your market.",
      },
      {
        type: "h2",
        text: "Sourcing Waigaon turmeric for export or wholesale",
      },
      {
        type: "p",
        text: "Crossway Global sources Waigaon turmeric directly from growers in the GI-registered belt, alongside Salem turmeric, supplying both whole double-polished fingers and finely ground powder. Every export lot is tested at an accredited laboratory, with a batch-specific Certificate of Analysis issued prior to dispatch — see our full specifications for moisture, ash, and heavy metal limits.",
      },
    ],
  },
  {
    slug: "salem-vs-waigaon-turmeric-buying-guide",
    title: "Salem vs. Waigaon Turmeric: A Buyer's Comparison Guide",
    excerpt:
      "Choosing between Salem and Waigaon turmeric for your formulation or private label? Here's how the two varieties compare on curcumin content, colour, processing, and typical end use.",
    category: "Turmeric",
    publishedAt: "2026-09-22",
    readingTime: "5 min read",
    image: "/images/hero-turmeric.jpg",
    imageAlt: "Turmeric root, dried fingers, and powder in progression on wood",
    body: [
      {
        type: "p",
        text: "Buyers sourcing turmeric for food manufacturing, nutraceutical formulation, or private-label retail often ask the same question early in the process: Salem or Waigaon? Both are well-regarded Indian turmeric varieties, but they're grown in different regions, processed through different established supply chains, and tend to suit slightly different use cases.",
      },
      {
        type: "h2",
        text: "Origin and regional context",
      },
      {
        type: "p",
        text: "Salem turmeric is grown around Salem district, Tamil Nadu — one of India's longest-established turmeric trading hubs, with mature auction markets, processing infrastructure, and export experience built up over decades. Waigaon turmeric is grown around Waigaon village, Wardha district, Maharashtra, and holds a registered Geographical Indication (GI) tag recognizing it as a distinct regional product.",
      },
      {
        type: "h2",
        text: "Side-by-side comparison",
      },
      {
        type: "table",
        rows: [
          ["State", "Tamil Nadu"],
          ["District", "Salem — compare to Waigaon's Wardha district, Maharashtra"],
          ["Market maturity", "Long-established trading and processing hub"],
          ["Regional certification", "No GI tag — compare to Waigaon's registered GI status"],
          ["Typical buyer profile", "Pharmaceutical, nutraceutical, large-scale food manufacturing"],
        ],
      },
      {
        type: "h2",
        text: "Which should you choose?",
      },
      {
        type: "ul",
        items: [
          "Choose Salem turmeric if your priority is consistent curcumin standardization at volume, backed by an established processing supply chain — common for extraction and pharmaceutical-grade sourcing.",
          "Choose Waigaon turmeric if provenance and regional authenticity matter to your brand story, or you're formulating a private-label product where a GI-backed origin claim adds retail value.",
          "Request samples of both if you're undecided — a side-by-side Certificate of Analysis comparison on your actual shortlisted batches is more useful than any general guide, since curcumin content varies by harvest and lot regardless of variety.",
        ],
      },
      {
        type: "h2",
        text: "What stays the same either way",
      },
      {
        type: "p",
        text: "Whichever variety you choose, the quality assurance process should be identical: independent laboratory testing for curcumin content (HPLC), moisture, total and acid-insoluble ash, and heavy metals, with a batch-specific COA issued before shipment. Crossway Global supplies both Salem and Waigaon turmeric as whole double-polished fingers or finely ground powder, tested to the same specification regardless of origin.",
      },
    ],
  },
  {
    slug: "how-to-read-turmeric-certificate-of-analysis",
    title: "How to Read a Turmeric Certificate of Analysis (COA)",
    excerpt:
      "A practical walkthrough of what each line on a turmeric COA actually means — curcumin content, moisture, ash, heavy metals — so you can evaluate a supplier's quality claims with confidence.",
    category: "Quality & Compliance",
    publishedAt: "2026-09-29",
    readingTime: "7 min read",
    image: "/images/product-turmeric.jpg",
    imageAlt: "Turmeric powder being tested in a laboratory setting",
    body: [
      {
        type: "p",
        text: "A Certificate of Analysis (COA) is the single most important document in a turmeric purchase — it's the batch-specific proof of what you're actually buying, as opposed to general commercial descriptions. Yet many first-time importers aren't sure how to interpret every line. Here's what each parameter means and why it matters.",
      },
      {
        type: "h2",
        text: "Curcumin content (HPLC)",
      },
      {
        type: "p",
        text: "This is the headline number — the percentage of curcuminoids in the sample, measured by High-Performance Liquid Chromatography (HPLC), the industry-standard analytical method. Commercial-grade turmeric powder typically ranges from 2–3% on the low end up to 6.5%+ for high-curcumin standardized lots. Extraction and pharmaceutical buyers usually specify a minimum threshold (e.g. 5%+); food and seasoning buyers often accept a broader range. Always check that the COA specifies HPLC as the test method — some suppliers quote curcumin content from less rigorous colorimetric methods, which tend to overstate the figure.",
      },
      {
        type: "h2",
        text: "Moisture content",
      },
      {
        type: "p",
        text: "Expressed as a maximum percentage (typically ≤9% for turmeric powder), this measures residual water content. Higher moisture increases the risk of microbial growth and mold during storage and transit, and effectively dilutes the active curcumin content per kilogram. A COA showing moisture near or above the stated maximum is worth querying before shipment, not after.",
      },
      {
        type: "h2",
        text: "Total ash and acid-insoluble ash",
      },
      {
        type: "p",
        text: "Total ash measures the mineral residue left after incineration — a general indicator of purity, since excessive ash can signal contamination with soil or extraneous mineral matter. Acid-insoluble ash is more specific: it isolates the silica/sand fraction that doesn't dissolve in dilute acid, directly indicating whether the turmeric was adequately cleaned before processing. Typical limits are ≤6.5% total ash and ≤1.0% acid-insoluble ash — a COA well outside these ranges points to inadequate post-harvest cleaning.",
      },
      {
        type: "h2",
        text: "Heavy metals (Pb, As, Cd, Hg)",
      },
      {
        type: "p",
        text: "Lead, arsenic, cadmium, and mercury are tested because turmeric, like many root crops, can accumulate heavy metals from soil — a known regulatory concern, particularly for the US and EU markets which have tightened turmeric heavy-metal limits in recent years. A compliant COA states results against a named standard (e.g. EU or US Pharmacopeia limits), not just \"within limits\" without a reference standard — always ask which threshold was applied.",
      },
      {
        type: "h2",
        text: "Granulometry (mesh size)",
      },
      {
        type: "p",
        text: "This describes powder fineness — commonly 60–80 mesh for standard turmeric powder, finer for specialty applications. Mesh size affects solubility, blend uniformity in formulations, and visual texture; it's a processing specification rather than a purity indicator, but still worth matching to your intended use.",
      },
      {
        type: "h2",
        text: "Microbiological testing",
      },
      {
        type: "p",
        text: "Not always on a basic COA but standard for food-grade shipments — tests for Salmonella, E. coli, and total plate count. If your end market requires food safety certification (FSSAI, EU food law, US FDA), confirm microbiological results are included before the order ships, not after.",
      },
      {
        type: "h2",
        text: "What a trustworthy COA looks like",
      },
      {
        type: "ul",
        items: [
          "Batch or lot number that matches the physical shipment, not a generic template",
          "Named testing laboratory (accredited, third-party where possible — e.g. SGS, Eurofins, Spices Board-approved labs)",
          "Test method specified for each parameter (especially HPLC for curcumin)",
          "Reference standard cited for heavy metal limits (EU, US Pharmacopeia, or destination-country specific)",
          "Issue date close to the shipment date — an old or undated COA is not reliable evidence for a current batch",
        ],
      },
      {
        type: "p",
        text: "Every export lot from Crossway Global is tested at an accredited third-party laboratory, with a batch-specific COA issued prior to dispatch and shared with buyers before final payment is due.",
      },
    ],
  },
  {
    slug: "moringa-ashwagandha-beetroot-export-specifications",
    title: "Moringa, Ashwagandha & Beetroot Powder: Export Specifications Explained",
    excerpt:
      "What buyers need to know about sourcing moringa leaf powder, ashwagandha root powder, and beetroot powder for export — key quality parameters, packaging, and typical applications.",
    category: "Products",
    publishedAt: "2026-10-06",
    readingTime: "6 min read",
    image: "/images/product-moringa.jpg",
    imageAlt: "Moringa leaves and green powder, ashwagandha root powder, and beetroot powder",
    body: [
      {
        type: "p",
        text: "Turmeric gets most of the attention in Indian botanical exports, but moringa, ashwagandha, and beetroot powder have each built substantial international demand of their own — moringa and ashwagandha in the wellness and supplement industry, beetroot powder in natural food colouring and sports nutrition. Here's what matters when evaluating each.",
      },
      {
        type: "h2",
        text: "Moringa leaf powder",
      },
      {
        type: "p",
        text: "Produced from shade-dried Moringa oleifera leaves, the two things that separate a good moringa powder from a mediocre one are drying temperature and colour retention. Leaves dried too fast or at too high a temperature lose chlorophyll and turn a dull olive-brown instead of the vibrant green that indicates a well-preserved nutrient profile.",
      },
      {
        type: "table",
        rows: [
          ["Drying method", "Shade-dried below 42°C to preserve chlorophyll and nutrients"],
          ["Moisture content", "≤7.5% max"],
          ["Crude protein", "≥25.0%"],
          ["Mesh size", "80–100 superfine mesh"],
          ["Microbiological", "Salmonella and E. coli tested absent"],
        ],
      },
      {
        type: "p",
        text: "Common applications: nutritional supplements, green smoothie blends, functional food fortification, and as a standalone superfood powder for retail.",
      },
      {
        type: "h2",
        text: "Ashwagandha root powder",
      },
      {
        type: "p",
        text: "Sourced from dried roots of Withania somnifera, ashwagandha's key quality marker is withanolide content — the active adaptogenic compound group buyers in the supplement industry specify a minimum threshold for. Beyond withanolide standardization, the critical checks are moisture control and absence of additives or binders, since ashwagandha root powder is frequently used in capsule and tablet manufacturing where purity specifications are strict.",
      },
      {
        type: "table",
        rows: [
          ["Withanolide content", "Standardized extract and root powder grades available"],
          ["Moisture content", "≤8.0% max"],
          ["Mesh size", "80 mesh"],
          ["Heavy metals", "Tested compliant for global pharmacopeia standards"],
          ["Additives", "Free of binders or synthetic solvents"],
        ],
      },
      {
        type: "p",
        text: "Common applications: dietary supplements, adaptogenic formulations, and wellness product manufacturing.",
      },
      {
        type: "h2",
        text: "Beetroot powder",
      },
      {
        type: "p",
        text: "Dehydrated from farm-fresh red beets, beetroot powder's commercial value comes from two things: its natural magenta pigment (an alternative to artificial food colouring) and its dietary nitrate content, which has driven strong demand from the sports nutrition and pre-workout supplement industry in recent years. Solubility matters more here than for the other three products, since beetroot powder is frequently used in beverage applications where it needs to disperse cleanly in liquid.",
      },
      {
        type: "table",
        rows: [
          ["Appearance", "Deep magenta / ruby red fine powder"],
          ["Solubility", "High dispersibility in cold or warm liquids"],
          ["Moisture content", "≤6.0% max"],
          ["Mesh size", "60–80 mesh"],
          ["Microbiological", "Pathogen-free, low bio-burden"],
        ],
      },
      {
        type: "p",
        text: "Common applications: natural food colouring, beverage and smoothie blends, sports nutrition and pre-workout formulations.",
      },
      {
        type: "h2",
        text: "Sourcing all four from one supplier",
      },
      {
        type: "p",
        text: "Buyers consolidating multiple botanical powders into a single shipment benefit from working with one tested, documented source rather than coordinating separate suppliers for each product. Crossway Global supplies turmeric, moringa, ashwagandha, and beetroot powder with batch-specific Certificates of Analysis for each, so a combined order carries the same quality assurance standard across every product line.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
