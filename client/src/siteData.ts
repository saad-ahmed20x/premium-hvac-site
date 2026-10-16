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
  city: "[CITY]",
  state: "Florida",
  siteUrl: "https://premiumhvac-fgm6mlf8.manus.space",
  verified: false,
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
  problems: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "ac-repair",
    number: "01",
    kicker: "AC repair",
    title: "Get the cool air back without the guesswork.",
    short: "Diagnosis-led air-conditioning repair for Florida homes and businesses.",
    description: "When an air conditioner is not cooling, cycling too often, leaking, or making a new sound, the first step is a careful diagnosis. We explain what we find before recommending a path forward.",
    image: ASSETS.interior,
    alt: "Bright Florida-style residential interior with discreet air distribution",
    bullets: ["No-cool and low-airflow diagnosis", "Thermostat and control troubleshooting", "Refrigerant and condensate concerns", "Repair options explained before work begins"],
    problems: ["The home is warm even though the system is running", "Some rooms feel comfortable while others do not", "The system is short-cycling, leaking, or making an unfamiliar sound"],
    benefits: ["A clear diagnosis before a recommendation", "Practical repair-versus-replace context", "A documented next step for the system"],
  },
  {
    slug: "ac-installation",
    number: "02",
    kicker: "AC installation",
    title: "A right-sized cooling system for the space.",
    short: "Thoughtful air-conditioning replacement and installation for Florida properties.",
    description: "A new AC system should fit the building, the occupants, and the way the space is used. We focus on the equipment, airflow, controls, and installation details that affect everyday comfort.",
    image: ASSETS.technical,
    alt: "Technical view of HVAC equipment and airflow paths",
    bullets: ["System replacement planning", "Equipment and efficiency options", "Airflow and comfort considerations", "Installation coordination and startup checks"],
    problems: ["The existing system is nearing the end of its service life", "Repair costs are becoming difficult to justify", "The home never felt evenly cooled after the last replacement"],
    benefits: ["Options organized around the space", "Clear scope before installation", "A clean handoff with next-step guidance"],
  },
  {
    slug: "cooling",
    number: "03",
    kicker: "Cooling",
    title: "A cooler home, without the guesswork.",
    short: "AC repair, replacement, installation, and seasonal maintenance.",
    description: "Cooling service for Florida homes and businesses, from an early-season concern to a complete system decision. We repair, replace, and maintain cooling systems with clear recommendations before any work begins.",
    image: ASSETS.interior,
    alt: "Refined residential interior with a discreet ceiling air vent",
    bullets: ["AC repair and troubleshooting", "New system installation", "Seasonal tune-ups", "Airflow and comfort balancing"],
    problems: ["The system is not keeping up with the heat", "Comfort varies from room to room", "You are not sure whether to repair or replace"],
    benefits: ["One starting point for cooling concerns", "Recommendations grounded in diagnosis", "A clear route to the right specialist service"],
  },
  {
    slug: "heating",
    number: "04",
    kicker: "Heating",
    title: "Warmth that works quietly.",
    short: "Thoughtful heating service for steady comfort through Florida's cooler months.",
    description: "From a heat pump that will not start to a system that never quite feels even, we look at the equipment and the space together before recommending a path forward.",
    image: ASSETS.technical,
    alt: "Technical HVAC system visualization with equipment and airflow paths",
    bullets: ["Heat-pump and furnace repair", "Heating system replacement", "Thermostat and control issues", "Seasonal heating maintenance"],
    problems: ["The system is not producing heat when needed", "The heat pump is running constantly", "The thermostat and equipment are not responding together"],
    benefits: ["Comfort-focused troubleshooting", "Clear repair and replacement context", "Careful attention to controls and airflow"],
  },
  {
    slug: "heat-pumps",
    number: "05",
    kicker: "Heat pumps",
    title: "Year-round comfort from one system.",
    short: "Heat-pump repair, installation, and maintenance for Florida properties.",
    description: "Heat pumps work hard across Florida's changing seasons. We help diagnose performance concerns, maintain the system, and explain replacement options when the equipment no longer fits the space.",
    image: ASSETS.technical,
    alt: "HVAC heat-pump equipment and control components",
    bullets: ["Heat-pump performance diagnosis", "Repair and component troubleshooting", "Replacement and installation planning", "Seasonal maintenance"],
    problems: ["The heat pump runs but comfort is inconsistent", "The system struggles in both heating and cooling", "You are comparing repair and replacement options"],
    benefits: ["One team for both operating modes", "Clear explanations without pressure", "Recommendations based on the building and system"],
  },
  {
    slug: "maintenance",
    number: "06",
    kicker: "Maintenance",
    title: "Protect comfort before the problem starts.",
    short: "Preventative service designed around the way your system actually runs.",
    description: "Regular maintenance can make the next season feel less uncertain. We inspect the system, identify small issues early, and document what deserves attention.",
    image: ASSETS.interior,
    alt: "Close-up of a residential air system inspection",
    bullets: ["Seasonal system inspections", "Filter and component checks", "Performance and safety review", "Maintenance reminders"],
    problems: ["The system has not been checked before the season", "Small issues keep turning into urgent repairs", "You want a clearer maintenance routine"],
    benefits: ["A documented system check", "Earlier visibility into wear or airflow concerns", "A calmer start to the next season"],
  },
  {
    slug: "indoor-air-quality",
    number: "07",
    kicker: "Indoor air quality",
    title: "The air inside matters.",
    short: "Filtration, purification, humidity, and ventilation options.",
    description: "Comfort is more than a thermostat reading. We can help evaluate the air moving through your home and identify practical ways to improve filtration, humidity, and circulation.",
    image: ASSETS.technical,
    alt: "HVAC air handler and filtration system cutaway",
    bullets: ["Whole-home filtration", "Air purification options", "Humidity and ventilation", "Indoor air quality assessment"],
    problems: ["Dust or stale air keeps returning", "Humidity feels uncomfortable indoors", "The existing filter setup is difficult to manage"],
    benefits: ["Options matched to the existing system", "A clearer view of filtration and airflow", "Practical improvements without overcomplicating the home"],
  },
  {
    slug: "emergency-service",
    number: "08",
    kicker: "Emergency service",
    title: "When comfort cannot wait.",
    short: "A direct path to help when your HVAC system fails unexpectedly.",
    description: "When an HVAC issue cannot wait for an ordinary appointment, call to confirm current availability and the next available step for your area.",
    image: ASSETS.emergency,
    alt: "Evening service arrival at a residential property",
    bullets: ["No-cool and no-heat calls", "Urgent system troubleshooting", "After-hours availability check", "Clear next-step communication"],
    problems: ["The system stopped during extreme weather", "A leak or electrical concern needs attention", "You need to confirm after-hours availability"],
    benefits: ["A phone-first urgent path", "Availability confirmed before promises are made", "Clear next-step communication"],
  },
  {
    slug: "commercial-hvac",
    number: "09",
    kicker: "Commercial HVAC",
    title: "Climate control for working spaces.",
    short: "Professional HVAC service for businesses and commercial properties.",
    description: "Commercial spaces need dependable climate control without unnecessary disruption. We bring the same diagnostic discipline and clean execution to working environments.",
    image: ASSETS.technical,
    alt: "Commercial-grade HVAC equipment and technical controls",
    bullets: ["Commercial repair and service", "Rooftop and packaged units", "Planned maintenance", "Occupant comfort troubleshooting"],
    problems: ["Occupants are reporting uneven comfort", "A rooftop or packaged unit is down", "You need a clearer maintenance plan"],
    benefits: ["Less disruption through clear planning", "Service scoped around the working space", "A documented recommendation for next steps"],
  },
];

export const faqs = [
  { question: "How quickly can you come out?", answer: "[PLACEHOLDER — Add the company's verified scheduling window here. Avoid promising a response time until it is confirmed.]" },
  { question: "Do you offer emergency HVAC service?", answer: "[PLACEHOLDER — Confirm emergency availability, hours, and the correct phone number before publishing.]" },
  { question: "How do I know whether my AC should be repaired or replaced?", answer: "A technician should diagnose the actual condition first, then explain the repair path, expected service life, and replacement considerations in plain language. [PLACEHOLDER — Add company-specific guidance.]" },
  { question: "How often should my HVAC system be maintained?", answer: "[PLACEHOLDER — Add the company's verified maintenance recommendation and whether it varies by heating and cooling system.]" },
  { question: "How long does an HVAC installation take?", answer: "[PLACEHOLDER — Add a verified range that accounts for equipment, access, permitting, and site conditions.]" },
  { question: "Do you service my area?", answer: `The current service area is ${COMPANY.area}, in ${COMPANY.state}. [PLACEHOLDER — Add the complete approved list of cities and counties.]` },
];

export const serviceAreas = ["[PRIMARY CITY]", "[SURROUNDING CITY]", "[COUNTY / SERVICE AREA]", "[CITY, FLORIDA]"];
