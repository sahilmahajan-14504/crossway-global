export const siteConfig = {
  name: "Crossway Global",
  tagline: "Agricultural Exports | India",
  url: "https://www.crosswayglobal.co.in",
  email: "sahilmahajan14504@gmail.com",
  phone: "+91 73919 97155",
  hours: "9 AM – 7 PM",
  address:
    "Flat No. 701, C Wing, Gokul Enclave, Shrihari Nagar, Zingabai Takli Road, Nagpur, Maharashtra, India",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality & Compliance" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const products = [
  {
    id: "turmeric",
    name: "Curcumin-Rich Turmeric",
    hsCode: "HS: 0910.30",
    image: "/images/product-turmeric.jpg",
    imageAlt: "HD photograph of golden turmeric rhizome roots and vibrant turmeric powder in ceramic bowl",
    description:
      "Cultivated in the mineral-rich soils of Salem and GI-tagged Waigaon regions. We supply whole double-polished fingers and finely ground powders with verified curcumin profiles ranging from 3.0% to 6.5%+, suitable for extraction, food seasoning, and pharmaceutical formulations.",
    features: [
      "Double-polished whole finger rhizomes & Salem/Waigaon varieties",
      "Cryo-ground uniform fine powder (60–80 mesh)",
      "Steam-treated for minimal microbiological load",
    ],
    specs: [
      { label: "Curcumin Content (HPLC)", value: "3.0% – 6.5%+ (Standardized)", highlight: true },
      { label: "Moisture Content", value: "≤ 9.0% max" },
      { label: "Total Ash", value: "≤ 6.5%" },
      { label: "Acid Insoluble Ash", value: "≤ 1.0%" },
      { label: "Granulometry / Mesh", value: "60 – 80 mesh (98% pass)" },
      { label: "Heavy Metals (Pb, As, Cd, Hg)", value: "Within EU & US Pharmacopeia limits" },
      { label: "Packaging", value: "25 kg multi-wall kraft paper bags with inner food-grade liner" },
      { label: "Shelf Life", value: "24 months under dry, cool storage" },
      { label: "Minimum Order Quantity (MOQ)", value: "25 kg" },
    ],
    specTitle: "Turmeric Powder (Curcuma longa)",
  },
  {
    id: "moringa",
    name: "Organic Moringa Leaf Powder",
    hsCode: "HS: 1211.90",
    image: "/images/product-moringa.jpg",
    imageAlt: "HD photograph of emerald green organic moringa powder and fresh leaves",
    description:
      "Produced from 100% shade-dried leaves of Moringa oleifera cultivated in Southern India. Dehydrated at controlled low temperatures to preserve native chlorophyll, high protein integrity, and complete micronutrient profiles.",
    features: [
      "Superfine uniform mesh (80–100 mesh)",
      "Naturally shade-dried below 42°C",
      "Pesticide residue compliant with EU and US limits",
    ],
    specs: [
      { label: "Appearance & Color", value: "Fine vibrant green powder", highlight: true },
      { label: "Drying Method", value: "Shade-dried below 42°C" },
      { label: "Moisture Content", value: "≤ 7.5% max" },
      { label: "Crude Protein", value: "≥ 25.0%" },
      { label: "Granulometry / Mesh", value: "80 – 100 superfine mesh" },
      { label: "Microbiological Profile", value: "Salmonella: Absent / 25g | E. coli: Absent" },
      { label: "Packaging", value: "20 kg / 25 kg nitrogen-flushed foil in drums or boxes" },
      { label: "Shelf Life", value: "24 months in sealed original packaging" },
      { label: "Minimum Order Quantity (MOQ)", value: "15 kg" },
    ],
    specTitle: "Moringa Powder (Moringa oleifera)",
  },
  {
    id: "beetroot",
    name: "Dehydrated Beetroot Powder",
    hsCode: "HS: 0712.90",
    image: "/images/product-beetroot.jpg",
    imageAlt: "HD photograph of rich magenta beetroot powder in wooden bowl with fresh beet slices",
    description:
      "Sourced from farm-fresh red beets. Dehydrated into a deep magenta fine powder rich in dietary nitrates and natural pigments for food coloring, beverages, and nutraceutical applications.",
    features: [
      "Rich natural ruby-magenta hue without artificial colorants",
      "High natural dietary nitrate content",
      "Water-soluble powder suitable for beverages & blends",
    ],
    specs: [
      { label: "Appearance & Color", value: "Deep magenta / ruby red fine powder", highlight: true },
      { label: "Solubility", value: "High dispersibility in cold/warm liquids" },
      { label: "Moisture Content", value: "≤ 6.0% max" },
      { label: "Granulometry / Mesh", value: "60 – 80 mesh" },
      { label: "Microbiological Profile", value: "Pathogen free, low bio-burden" },
      { label: "Packaging", value: "20 kg aluminum foil bags in corrugated outer master cartons" },
      { label: "Shelf Life", value: "18 months in cool, dark storage" },
      { label: "Minimum Order Quantity (MOQ)", value: "15 kg" },
    ],
    specTitle: "Beetroot Powder (Beta vulgaris)",
  },
  {
    id: "ashwagandha",
    name: "Premium Ashwagandha Root Powder",
    hsCode: "HS: 1211.90",
    image: "/images/product-ashwagandha.jpg",
    imageAlt: "HD photograph of fine beige organic ashwagandha root powder and whole dried roots",
    description:
      "Sourced from dried roots of Withania somnifera grown in central India. Finely milled to yield standardized withanolide profiles essential for wellness, adaptogenic formulas, and dietary supplement manufacture.",
    features: [
      "Standardized withanolide content for dietary supplements",
      "Finely ground root powder (80 mesh)",
      "Free of additives, binders, or synthetic solvents",
    ],
    specs: [
      { label: "Appearance & Color", value: "Light cream / tan fine powder", highlight: true },
      { label: "Withanolide Content", value: "Standardized extract & root powder grades" },
      { label: "Moisture Content", value: "≤ 8.0% max" },
      { label: "Granulometry / Mesh", value: "80 mesh" },
      { label: "Heavy Metals", value: "Tested compliant for global pharmacopeia standards" },
      { label: "Packaging", value: "25 kg fiber drums with food-grade poly bags" },
      { label: "Shelf Life", value: "24 months in sealed container" },
      { label: "Minimum Order Quantity (MOQ)", value: "15 kg" },
    ],
    specTitle: "Ashwagandha Powder (Withania somnifera)",
  },
];

export const tradeOperations = [
  {
    id: "domestic",
    icon: "storefront",
    label: "Domestic Trade",
    title: "Serving businesses across India.",
    description:
      "At Crossway Global, we connect businesses across India with quality products and reliable sourcing solutions. Our domestic trading operations focus on turmeric fingers and powder, including Salem and Waigaon varieties, along with beetroot powder, ashwagandha powder, and moringa powder. We strive to meet the diverse needs of wholesalers, distributors, retailers, and business partners through transparent dealings, dependable service, and a commitment to long-term relationships.",
    goal: "Our goal is to make domestic trade seamless, efficient, and value-driven.",
  },
  {
    id: "international",
    icon: "public",
    label: "International Trade",
    title: "Bridging Indian produce with global markets.",
    description:
      "Crossway Global aims to connect India's rich agricultural and natural product offerings with opportunities in global markets. Through our import-export and international trading activities, we focus on supplying turmeric fingers and powder, including Salem and Waigaon varieties, as well as beetroot, ashwagandha, and moringa powders to meet diverse buyer requirements. We value quality-focused sourcing, transparent communication, and reliable business partnerships to help create smooth and sustainable trade relationships across borders.",
    goal: "Our vision is to bridge markets, build global trust, and create lasting value through seamless international trade.",
  },
];

export const companyValues = [
  {
    title: "Quality First",
    description: "Focused on product quality and customer requirements.",
  },
  {
    title: "Trust & Transparency",
    description: "Building business relationships through honesty and integrity.",
  },
  {
    title: "Customer Commitment",
    description: "Striving to meet buyer expectations with reliable service.",
  },
  {
    title: "Global Mindset",
    description: "Connecting Indian suppliers with international market opportunities.",
  },
  {
    title: "Long-Term Partnerships",
    description: "Creating sustainable value for customers and business partners.",
  },
];

export const waigaonFacts = [
  {
    label: "Origin",
    value: "Waigaon and surrounding areas of Samudrapur, Wardha, Maharashtra.",
  },
  {
    label: "Colour & Aroma",
    value: "Rich yellow colour, distinctive taste, strong aroma and fine powder texture.",
  },
  {
    label: "Curcumin Content",
    value:
      "Commercial descriptions commonly report approximately 4.5–6.12%, but actual content varies by batch and should be confirmed through laboratory testing.",
  },
  {
    label: "Geographical Indication",
    value:
      "Waigaon turmeric holds a registered Geographical Indication (GI) tag, recognizing it as a distinctive regional product tied to its place of origin.",
  },
];

export const whyPoints = [
  {
    icon: "science",
    title: "Lab-Tested Every Batch",
    description:
      "Independent third-party laboratory verification for curcumin content, heavy metal ceilings, pesticide residues, and moisture levels before dispatch.",
  },
  {
    icon: "verified",
    title: "Certified Quality Systems",
    description:
      "Processed under established food hygiene protocols with complete traceability to regional cultivation clusters and processing lots.",
  },
  {
    icon: "directions_boat",
    title: "Reliable Ocean Logistics",
    description:
      "Direct export sailings from Nhava Sheva (JNPT) and Chennai port terminals with prompt documentation and customs handling.",
  },
  {
    icon: "inventory_2",
    title: "Customized Export Packaging",
    description:
      "Flexible bulk options including multiwall kraft paper sacks, nitrogen-flushed foil barrier bags, fiber drums, and private label formats.",
  },
];

export const certifications = [
  { name: "FSSAI", description: "Food Safety and Standards Authority of India" },
  { name: "APEDA", description: "Agricultural & Processed Food Export Body" },
  { name: "Spices Board", description: "Ministry of Commerce & Industry, Govt of India" },
  { name: "ISO 22000", description: "Food Safety Management Standard" },
  { name: "USDA / EU Organic", description: "NOP Equivalent & EU Organic Compatible Lots" },
];

export const processSteps = [
  {
    step: "Step 01",
    title: "Inquiry & Specification",
    description: "We review your curcumin requirement, mesh preference, volume, and target delivery port.",
  },
  {
    step: "Step 02",
    title: "Sample Evaluation",
    description: "A representative 500g sample batch with preliminary analytical report is dispatched via international courier.",
  },
  {
    step: "Step 03",
    title: "Contract & Documentation",
    description: "Finalization of Incoterms (FOB/CIF/CFR), payment instrument (L/C or T/T), and buyer-specified labeling.",
  },
  {
    step: "Step 04",
    title: "Loading & Vessel Dispatch",
    description: "Container stuffing under supervision, final SGS inspection, customs clearance, and issuance of Bill of Lading.",
  },
];

export const shippingParams = [
  {
    label: "Primary Indian Ports",
    value: "Nhava Sheva (JNPT, Mumbai) & Chennai Port",
    note: "Direct connectivity to all major international container lines.",
  },
  {
    label: "Supported Trade Terms",
    value: "FOB, CIF, CFR, and Ex-Works",
    note: "Incoterms 2020 framework with comprehensive marine transit insurance options.",
  },
  {
    label: "Typical Order Lead Time",
    value: "14 to 21 Days to Port Loading",
    note: "From contract execution and final packaging approval.",
  },
];

export const faqs = [
  {
    question: "What is your standard Minimum Order Quantity (MOQ)?",
    answer:
      "Our standard MOQ is 25 kg for turmeric, and 15 kg for moringa, ashwagandha, and beetroot powder. Larger bulk and container-load volumes are available on request for established wholesale and export buyers.",
  },
  {
    question: "What international payment terms do you accept?",
    answer:
      "We work with standard global banking instruments: Irrevocable Confirmed Letter of Credit at Sight (L/C at Sight) issued by recognized international banks, or Telegraphic Transfer (T/T: 30% advance on contract signing, 70% against clean on-board Bill of Lading and inspection documentation).",
  },
  {
    question: "How do you verify product purity and laboratory results?",
    answer:
      "Every export lot is tested at an accredited testing facility (such as SGS, Eurofins, or Spices Board labs). Parameters verified include HPLC active curcumin percentage, heavy metals (Lead, Arsenic, Cadmium, Mercury), moisture, and microbiological bounds. The final Certificate of Analysis (COA) is provided with shipping documentation.",
  },
  {
    question: "Can you accommodate private label or custom retail packaging?",
    answer:
      "Yes. While bulk 20kg/25kg bags represent the majority of our volume, we offer secondary contract packaging services including nitrogen-flushed stand-up pouches (100g, 250g, 500g, 1kg) with customized multi-color printing to your specifications.",
  },
  {
    question: "How are evaluation samples dispatched?",
    answer:
      "Evaluation samples (typically 500g) are packed in airtight barrier pouches accompanied by the product specification sheet. They are dispatched via DHL or FedEx international courier, generally arriving in Europe or North America within 3 to 5 business days.",
  },
];
