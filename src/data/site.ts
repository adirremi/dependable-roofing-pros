// Central source of truth for business information.
// Update these values to change details across the entire site + structured data.
// Only real, provided details are used here — nothing is assumed or invented.

export const site = {
  name: "Dependable Roofing Pros",
  tagline: "Roofing Contractor in Coral Springs, Florida",
  shortDescription:
    "Dependable Roofing Pros is a roofing contractor in Coral Springs, Florida, providing roof repair, roof replacement and new roof installation for homes and businesses across South Florida.",

  // Live deployment URL. Update if you connect a custom domain.
  url: "https://dependable-roofing-pros.vercel.app",

  phone: "(754) 291-7865",
  phoneHref: "tel:+17542917865",

  // No public email was provided. Set your inbox below to receive form
  // submissions, then this will be shown and wired to the contact forms.
  email: "",
  // Where the contact forms POST. Replace REPLACE_WITH_YOUR_EMAIL with the
  // email address that should receive leads (uses https://formsubmit.co).
  formEndpoint: "https://formsubmit.co/REPLACE_WITH_YOUR_EMAIL",

  address: {
    street: "1953 N University Dr",
    city: "Coral Springs",
    region: "FL",
    regionName: "Florida",
    postalCode: "33071",
    country: "US",
  },

  // Approximate coordinates for the business location (Coral Springs, FL)
  geo: {
    latitude: 26.2543,
    longitude: -80.2523,
  },

  // Nearby South Florida communities (geographic context for local SEO)
  areas: [
    "Coral Springs, FL",
    "Parkland, FL",
    "Coconut Creek, FL",
    "Margate, FL",
    "Tamarac, FL",
    "Sunrise, FL",
    "Plantation, FL",
    "Fort Lauderdale, FL",
    "Pompano Beach, FL",
    "Deerfield Beach, FL",
    "Boca Raton, FL",
    "Weston, FL",
  ],
};

export type Site = typeof site;
