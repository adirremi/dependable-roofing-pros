export type Testimonial = {
  name: string;
  location: string;
  text: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Chattanooga, TN",
    service: "Roof Replacement",
    text: "Dependable Roofing Pros replaced our entire roof after a bad storm. The crew was on time, professional, and cleaned up everything. Our new roof looks incredible and the price was fair.",
  },
  {
    name: "James T.",
    location: "Cleveland, TN",
    service: "Roof Repair",
    text: "Had a nasty leak that two other companies couldn't figure out. These guys found it in 20 minutes and fixed it the same day. Honest and skilled — exactly what you want.",
  },
  {
    name: "Maria & Luis R.",
    location: "Dalton, GA",
    service: "Storm Damage",
    text: "They walked us through the entire insurance claim after hail damage and made a stressful situation easy. Couldn't recommend them more highly.",
  },
  {
    name: "David K.",
    location: "Ooltewah, TN",
    service: "Roof Inspection",
    text: "Bought a home and needed a roof inspection fast. Got a detailed written report with photos the next day. Truly professional operation.",
  },
  {
    name: "Angela P.",
    location: "Hixson, TN",
    service: "Commercial Roofing",
    text: "We manage several commercial properties and Dependable is now our go-to. Reliable scheduling, great communication, and quality work every time.",
  },
  {
    name: "Robert W.",
    location: "East Ridge, TN",
    service: "Roof Replacement",
    text: "18+ years of experience really shows. From the estimate to the final walkthrough, everything was smooth. My roof has never looked better.",
  },
];
