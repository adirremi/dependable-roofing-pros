// Central source of truth for business information.
// Update these values to change details across the entire site + structured data.

export const site = {
  name: "Dependable Roofing Pros",
  legalName: "Dependable Roofing Pros LLC",
  tagline: "Chattanooga's Trusted Roofing Contractor",
  shortDescription:
    "Locally owned roofing contractor serving Chattanooga, TN and the surrounding Tennessee & Georgia communities with expert roof repair, replacement and new installations for over 18 years.",
  // Update to your production domain (must match astro.config.mjs `site`)
  url: "https://dependableroofingpros.com",
  email: "info@dependableroofingpros.com",
  phone: "(423) 500-6085",
  phoneHref: "tel:+14235006085",
  yearsExperience: 18,
  foundedYear: 2007,

  address: {
    street: "2409 E 14th St",
    city: "Chattanooga",
    region: "TN",
    regionName: "Tennessee",
    postalCode: "37404",
    country: "US",
  },

  // Approx coordinates for LocalBusiness structured data (Chattanooga, TN)
  geo: {
    latitude: 35.0326,
    longitude: -85.2846,
  },

  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Emergency service only" },
  ],
  // Machine-readable hours for structured data
  openingHours: [
    "Mo-Fr 07:00-18:00",
    "Sa 08:00-14:00",
  ],

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    google: "https://www.google.com/maps",
  },

  rating: {
    value: "4.9",
    count: "127",
  },

  areas: [
    "Chattanooga, TN",
    "East Ridge, TN",
    "Red Bank, TN",
    "Soddy-Daisy, TN",
    "Cleveland, TN",
    "Ooltewah, TN",
    "Signal Mountain, TN",
    "Hixson, TN",
    "Dalton, GA",
    "Ringgold, GA",
    "Fort Oglethorpe, GA",
    "Rossville, GA",
  ],
};

export type Site = typeof site;
