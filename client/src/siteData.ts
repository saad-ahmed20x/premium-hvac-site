export const ASSETS = {
  hero: "/manus-storage/hvac-hero_ea9a3649.jpg",
  interior: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  technical: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
  emergency: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
  mark: "/manus-storage/hvac-mark_35461d30.png",
};

export const COMPANY = {
  name: "[COMPANY NAME]",
  phone: "[PHONE NUMBER]",
  phoneHref: "tel:+10000000000",
  email: "[EMAIL]",
  area: "[PRIMARY SERVICE AREA + SURROUNDING CITIES]",
  city: "[CITY, STATE]",
};

export type Service = {
  slug: string;
  number: string;
  kicker: string;
  title: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "cooling",
    number: "01",
    kicker: "Cooling",
    title: "A cooler home, without the guesswork.",
    short: "AC repair, replacement, installation, and seasonal maintenance.",
    description: "When the temperature is wrong, the first step is a careful diagnosis. We repair, replace, and maintain cooling systems with clear recommendations before any work begins.",
    image: ASSETS.interior,
    alt: "Refined residential interior with a discreet ceiling air vent",
    bullets: ["AC repair and troubleshooting", "New system installation", "Seasonal tune-ups", "Airflow and comfort balancing"],
  },
  {
    slug: "heating",
    number: "02",
    kicker: "Heating",
    title: "Warmth that works quietly.",
    short: "Thoughtful heating service for steady comfort through the season.",
    description: "From a furnace that will not start to a system that never quite feels even, we look at the equipment and the space together before recommending a path forward.",
    image: ASSETS.technical,
    alt: "Technical HVAC system visualization with equipment and airflow paths",
    bullets: ["Furnace and heat-pump repair", "Heating system replacement", "Thermostat and control issues", "Seasonal heating maintenance"],
  },
  {
    slug: "maintenance",
    number: "03",
    kicker: "Maintenance",
    title: "Protect comfort before the problem starts.",
    short: "Preventative service designed around the way your system actually runs.",
    description: "Regular maintenance can make the next season feel less uncertain. We inspect the system, identify small issues early, and document what deserves attention.",
    image: ASSETS.interior,
    alt: "Close-up of a residential air system inspection",
    bullets: ["Seasonal system inspections", "Filter and component checks", "Performance and safety review", "Maintenance reminders"],
  },
  {
    slug: "indoor-air-quality",
    number: "04",
    kicker: "Indoor air quality",
    title: "The air inside matters.",
    short: "Filtration, purification, humidity, and ventilation options.",
    description: "Comfort is more than a thermostat reading. We can help evaluate the air moving through your home and identify practical ways to improve filtration, humidity, and circulation.",
    image: ASSETS.technical,
    alt: "HVAC air handler and filtration system cutaway",
    bullets: ["Whole-home filtration", "Air purification options", "Humidity and ventilation", "Indoor air quality assessment"],
  },
  {
    slug: "emergency-service",
    number: "05",
    kicker: "Emergency service",
    title: "When comfort cannot wait.",
    short: "A direct path to help when your HVAC system fails unexpectedly.",
    description: "When an HVAC issue cannot wait for an ordinary appointment, call to confirm current availability and the next available step for your area.",
    image: ASSETS.emergency,
    alt: "Evening service arrival at a residential property",
    bullets: ["No-cool and no-heat calls", "Urgent system troubleshooting", "After-hours availability check", "Clear next-step communication"],
  },
  {
    slug: "commercial-hvac",
    number: "06",
    kicker: "Commercial HVAC",
    title: "Climate control for working spaces.",
    short: "Professional HVAC service for businesses and commercial properties.",
    description: "Commercial spaces need dependable climate control without unnecessary disruption. We bring the same diagnostic discipline and clean execution to working environments.",
    image: ASSETS.technical,
    alt: "Commercial-grade HVAC equipment and technical controls",
    bullets: ["Commercial repair and service", "Rooftop and packaged units", "Planned maintenance", "Occupant comfort troubleshooting"],
  },
];

export const faqs = [
  { question: "How quickly can you come out?", answer: "[PLACEHOLDER — Add the company's verified scheduling window here. Avoid promising a response time until it is confirmed.]" },
  { question: "Do you offer emergency HVAC service?", answer: "[PLACEHOLDER — Confirm emergency availability, hours, and the correct phone number before publishing.]" },
  { question: "How do I know whether my AC should be repaired or replaced?", answer: "A technician should diagnose the actual condition first, then explain the repair path, expected service life, and replacement considerations in plain language. [PLACEHOLDER — Add company-specific guidance.]" },
  { question: "How often should my HVAC system be maintained?", answer: "[PLACEHOLDER — Add the company's verified maintenance recommendation and whether it varies by heating and cooling system.]" },
  { question: "How long does an HVAC installation take?", answer: "[PLACEHOLDER — Add a verified range that accounts for equipment, access, permitting, and site conditions.]" },
  { question: "Do you service my area?", answer: `The current service area is ${COMPANY.area}. [PLACEHOLDER — Add the complete approved list of cities and counties.]` },
];

export const serviceAreas = ["[PRIMARY CITY]", "[SURROUNDING CITY]", "[COUNTY / SERVICE AREA]", "[CITY, STATE]"];
