export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key used by Icon.astro
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
      "Complete roof replacement and new roof installation using durable roofing systems suited to South Florida homes and businesses.",
    points: [
      "Asphalt shingle roofing",
      "Metal, tile & flat roofing systems",
      "Full tear-off and deck inspection",
      "New roof installation",
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Leak & storm damage repairs",
    icon: "wrench",
    href: "/roof-repair",
    blurb:
      "Repairs for leaks, missing shingles, flashing failures and worn roofing components to help protect your property.",
    points: [
      "Leak detection & repair",
      "Shingle, flashing & vent repairs",
      "Chimney & skylight sealing",
      "Emergency tarping",
    ],
  },
  {
    slug: "storm-damage",
    title: "Storm & Hurricane Damage",
    short: "Wind & storm damage repairs",
    icon: "storm",
    href: "/services#storm-damage",
    blurb:
      "South Florida weather is hard on roofs. We repair wind, leak and storm-related roof damage to help keep your property protected.",
    points: [
      "Wind & storm damage repair",
      "Leak & water intrusion repair",
      "Emergency tarping",
      "Roof restoration",
    ],
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    short: "Flat & low-slope commercial roofs",
    icon: "building",
    href: "/services#commercial-roofing",
    blurb:
      "Flat and low-slope roofing services for businesses, helping keep your property protected and operational.",
    points: [
      "TPO, EPDM & modified bitumen",
      "Maintenance & repairs",
      "Minimal-disruption scheduling",
      "Commercial roof replacement",
    ],
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspections",
    short: "Inspections & maintenance",
    icon: "search",
    href: "/services#roof-inspection",
    blurb:
      "Roof inspections and maintenance to help you stay ahead of small problems before they grow into larger ones.",
    points: [
      "Roof condition assessments",
      "Written inspection reports",
      "Maintenance services",
      "Pre-sale & pre-purchase checks",
    ],
  },
  {
    slug: "gutters",
    title: "Gutters & More",
    short: "Gutters, siding & carpentry",
    icon: "layers",
    href: "/services#gutters",
    blurb:
      "Exterior services including gutters, siding and carpentry to help protect and finish your property.",
    points: [
      "Gutter installation",
      "Gutter guards & cleaning",
      "Siding & fascia",
      "Carpentry & framing",
    ],
  },
];
