/** Site-wide NAP, CTAs, and external URLs — sourced from https://www.fremonthvac.net/ and sitemap. */

export const SITE = {
  name: "Fremont Heating & Air Conditioning INC",
  legalName: "Fremont Heating & Air Conditioning INC",
  tagline: "Heating & AC Company Ogden, UT | Fremont Heating & Air",
  phoneDisplay: "(801) 920-6377",
  phoneTel: "tel:+18019206377",
  /** From Rank Math JSON-LD on contact page (as published). */
  email: "service@fremonthavac.net",
  addressLines: [
    "2300 N Highway 89 Ste C,",
    "Ogden, UT 84404-2830",
  ] as const,
  addressSingle: "2300 N Highway 89 Ste C, Ogden, UT 84404-2830",
  mapsUrl:
    "https://www.google.com/maps/place/Fremont+Heating+%26+Air+Conditioning+INC/@41.2992507,-111.9981503,17z",
  origin: "https://www.fremonthvac.net",
} as const;

export const EXTERNAL = {
  home: `${SITE.origin}/`,
  about: `${SITE.origin}/about-us/`,
  contact: `${SITE.origin}/contact-us/`,
  quote: `${SITE.origin}/request-a-quote/`,
  privacy: `${SITE.origin}/about-us/privacy-policy/`,
  accessibility: `${SITE.origin}/about-us/accessibility-statement/`,
  sitemap: `${SITE.origin}/sitemap/`,
  promotion: `${SITE.origin}/promotion/`,
  hvacBlog: `${SITE.origin}/hvac-blog/`,
  hvacNearMe: `${SITE.origin}/hvac-near-me/`,
  hvacTerminology: `${SITE.origin}/hvac-terminology/`,
  hvacFaqs: `${SITE.origin}/hvac-faqs/`,
  seerCalculator: `${SITE.origin}/seer-calculator/`,
  hvacTroubleshooter: `${SITE.origin}/hvac-troubleshooter/`,
  hvacResources: `${SITE.origin}/hvac-resources-ogden-ut/`,
  whoWeServe: `${SITE.origin}/who-we-serve-ogden-ut/`,
} as const;

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Air Conditioning",
    children: [
      {
        label: "AC Service",
        href: `${SITE.origin}/ac-service-ogden-ut/`,
      },
      {
        label: "AC Repair",
        href: `${SITE.origin}/ac-repair-ogden-ut/`,
      },
      {
        label: "AC Installation",
        href: `${SITE.origin}/ac-installation-ogden-ut/`,
      },
      {
        label: "AC Replacement",
        href: `${SITE.origin}/ac-replacement-ogden-ut/`,
      },
      {
        label: "Air conditioning overview",
        href: `${SITE.origin}/air-conditioning-services-ogden-ut/`,
      },
    ],
  },
  {
    label: "Heating",
    children: [
      {
        label: "Heating Repair",
        href: `${SITE.origin}/heating-repair-ogden-ut/`,
      },
      {
        label: "Furnace Installation",
        href: `${SITE.origin}/furnace-installation-ogden-ut/`,
      },
      {
        label: "Furnace Maintenance",
        href: `${SITE.origin}/furnace-maintenance-ogden-ut/`,
      },
      {
        label: "Heating services overview",
        href: `${SITE.origin}/heating-services-ogden-ut/`,
      },
    ],
  },
  {
    label: "Heat Pumps",
    href: `${SITE.origin}/heat-pumps-services-ogden-ut/`,
  },
  {
    label: "Indoor Air Quality",
    href: `${SITE.origin}/indoor-air-quality-ogden-ut/`,
  },
  {
    label: "Ductless",
    children: [
      {
        label: "Ductless HVAC services",
        href: `${SITE.origin}/ductless-hvac-services-ogden-ut/`,
      },
      {
        label: "Ductless AC and Heating",
        href: `${SITE.origin}/ductless-ac-and-heating-ogden-ut/`,
      },
    ],
  },
  {
    label: "Other Services",
    children: [
      { label: "Dryer Vent", href: `${SITE.origin}/dryer-vent-ogden-ut/` },
      { label: "Boiler", href: `${SITE.origin}/boiler-services-ogden-ut/` },
      {
        label: "Ventilation",
        href: `${SITE.origin}/ventilation-services-ogden-ut/`,
      },
      { label: "Ductwork", href: `${SITE.origin}/ductwork-ogden-ut/` },
      { label: "Geothermal", href: `${SITE.origin}/geothermal-ogden-ut/` },
      {
        label: "Other HVAC services overview",
        href: `${SITE.origin}/other-hvac-services-ogden-ut/`,
      },
    ],
  },
  {
    label: "Who We Serve",
    children: [
      {
        label: "Residential",
        href: `${SITE.origin}/residential-hvac-services-ogden-ut/`,
      },
      {
        label: "Commercial",
        href: `${SITE.origin}/commercial-hvac-services-ogden-ut/`,
      },
      {
        label: "New Construction",
        href: `${SITE.origin}/new-construction-ogden-ut/`,
      },
      { label: "Who we serve overview", href: EXTERNAL.whoWeServe },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Promotion", href: EXTERNAL.promotion },
      { label: "HVAC Near Me", href: EXTERNAL.hvacNearMe },
      { label: "HVAC Blog", href: EXTERNAL.hvacBlog },
      { label: "HVAC Terminology", href: EXTERNAL.hvacTerminology },
      { label: "HVAC FAQs", href: EXTERNAL.hvacFaqs },
      { label: "SEER Calculator", href: EXTERNAL.seerCalculator },
      { label: "HVAC Troubleshooter", href: EXTERNAL.hvacTroubleshooter },
      { label: "HVAC resources overview", href: EXTERNAL.hvacResources },
    ],
  },
  { label: "About Us", href: EXTERNAL.about },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_AREAS = [
  "Ogden",
  "North Ogden",
  "Roy",
  "West Haven",
  "Liberty",
  "South Ogden",
  "Hooper",
  "Riverdale",
  "Harrisville",
] as const;

export const HOME_COPY = {
  heroKicker: "Serving Scenic Ogden and the Surrounding Areas since 2004",
  heroLine1: "Trusted, Experienced, Professional.",
  heroLine2: "Your Comfort Matters. Let Us Keep You Cool!",
  ctaCallUsToday: "Call Us Today!",
  ctaCallThePros: "Call The Pros",
  ctaCallNow: "Call Now!",
  aboutEyebrow: "About",
  aboutTitle: "Fremont Heating & Air Conditioning INC",
  aboutBody:
    "We take pride in our work and focus on your HVAC needs as a priority. Our Fremont Heating & Air Conditioning INC team is drug-free, trained, and certified to perform the best HVAC services in the community. With 30+ years in the industry, our team is ready to serve you. Our focus is to help you save money and obtain quality home comfort solutions for years to come. Thank you for your trust and we stand ready to service your HVAC requests.",
  whatWeDoEyebrow: "What We Do",
  whoWeServeEyebrow: "Who We Serve",
  testimonialsEyebrow: "Testimonials",
  testimonialQuote:
    "They were awesome. They even recommended doing a few things that were not on the plan. These simple changes I have loved and have made the system even better. Definite 2 thumbs up from me!",
  testimonialAttribution: "– Dr.",
  serviceAreasEyebrow: "Service Areas",
  hoursLabel: "Hours",
  hoursValue: "Mon-Fri 08:AM-05:PM",
  paymentsBy: "Payments By",
  financeAvailable: "Finance Available",
  requestQuote: "Request A Quote",
  reviewUs: "Review us",
  copyright:
    "© 2026 Fremont Heating & Air Conditioning INC. All rights reserved.",
} as const;

export const SERVICE_CARD_COPY: Record<
  string,
  { title: string; body: string; href: string }
> = {
  "air-conditioning": {
    title: "Air Conditioning",
    body: "Contact Us Today for Air Conditioning Services in Ogden, Roy, Liberty, UT, and Surrounding Areas.",
    href: `${SITE.origin}/air-conditioning-services-ogden-ut/`,
  },
  heating: {
    title: "Heating",
    body: "Contact Us Today for Heating Services in Ogden, Roy, Liberty, UT, and Surrounding Areas.",
    href: `${SITE.origin}/heating-services-ogden-ut/`,
  },
  "indoor-air-quality": {
    title: "Indoor Air Quality",
    body: "Contact Us Today for Indoor Air Quality in Ogden, Roy, Liberty, UT, and Surrounding Areas.",
    href: `${SITE.origin}/indoor-air-quality-ogden-ut/`,
  },
  "heat-pumps": {
    title: "Heat Pumps",
    body: "Contact Us Today for Heat Pumps Services in Ogden, Roy, Liberty, UT, and Surrounding Areas.",
    href: `${SITE.origin}/heat-pumps-services-ogden-ut/`,
  },
  ductless: {
    title: "Ductless",
    body: "Contact Us Today for Ductless HVAC Services in Ogden, Roy, Liberty, UT, and Surrounding Areas.",
    href: `${SITE.origin}/ductless-hvac-services-ogden-ut/`,
  },
};

export const WHO_WE_SERVE = [
  {
    label: "Residential",
    href: `${SITE.origin}/residential-hvac-services-ogden-ut/`,
  },
  {
    label: "Commercial",
    href: `${SITE.origin}/commercial-hvac-services-ogden-ut/`,
  },
  {
    label: "New Construction",
    href: `${SITE.origin}/new-construction-ogden-ut/`,
  },
] as const;
