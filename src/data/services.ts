export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // inline svg path key (see IconServices)
  href: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Full roof replacement & new installs",
    icon: "home",
    href: "/roof-replacement",
    blurb:
      "Complete tear-off and installation of durable, energy-efficient roofing systems built to protect your home for decades.",
    points: [
      "Architectural & 3-tab asphalt shingles",
      "Metal, tile & flat roofing systems",
      "Full tear-off and deck inspection",
      "Manufacturer-backed warranties",
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, lasting leak & damage repairs",
    icon: "wrench",
    href: "/roof-repair",
    blurb:
      "Fast, reliable repairs for leaks, missing shingles, flashing failures and worn roofing accessories — done right the first time.",
    points: [
      "Leak detection & waterproofing",
      "Shingle, flashing & vent repairs",
      "Chimney & skylight sealing",
      "Emergency tarping available",
    ],
  },
  {
    slug: "storm-damage",
    title: "Storm & Hail Damage",
    short: "Insurance-friendly storm restoration",
    icon: "storm",
    href: "/services#storm-damage",
    blurb:
      "Wind, hail and storm damage restoration with free inspections and full support through your insurance claim.",
    points: [
      "Free storm damage inspections",
      "Insurance claim assistance",
      "Emergency response & tarping",
      "Complete restoration",
    ],
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    short: "Flat & low-slope commercial systems",
    icon: "building",
    href: "/services#commercial-roofing",
    blurb:
      "Dependable flat and low-slope roofing solutions for businesses, keeping your property protected and operational.",
    points: [
      "TPO, EPDM & modified bitumen",
      "Preventive maintenance programs",
      "Minimal disruption scheduling",
      "Commercial-grade warranties",
    ],
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspections",
    short: "Detailed inspections & maintenance",
    icon: "search",
    href: "/services#roof-inspection",
    blurb:
      "Thorough roof inspections and maintenance plans that catch small problems before they become costly repairs.",
    points: [
      "Free, no-obligation inspections",
      "Detailed written reports",
      "Preventive maintenance plans",
      "Pre-sale & pre-purchase checks",
    ],
  },
  {
    slug: "gutters",
    title: "Gutters & More",
    short: "Gutter install, siding & framing",
    icon: "layers",
    href: "/services#gutters",
    blurb:
      "Complete exterior services including seamless gutters, siding and framing to protect and finish your home.",
    points: [
      "Seamless gutter installation",
      "Gutter guards & cleaning",
      "Siding & fascia",
      "Framing & carpentry",
    ],
  },
];
