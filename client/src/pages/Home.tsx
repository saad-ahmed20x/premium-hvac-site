/*
 * Design reminder: Architectural Service Editorial — warm architectural white, charcoal, oxidized copper,
 * asymmetric editorial composition, restrained motion, and clear human-first conversion paths.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wind,
  Wrench,
  X,
} from "lucide-react";

const ASSETS = {
  hero: "/manus-storage/hvac-hero_ea9a3649.jpg",
  interior: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  technical: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
  emergency: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
  mark: "/manus-storage/hvac-mark_35461d30.png",
};

const placeholderPhone = "[PHONE NUMBER]";
const phoneHref = "tel:+10000000000";

const services = [
  {
    number: "01",
    kicker: "Cooling",
    title: "A cooler home, without the guesswork.",
    description:
      "AC repair, replacement, installation, and seasonal maintenance for homes that should feel steady in every room.",
    icon: Snowflake,
    image: ASSETS.interior,
    alt: "Architectural interior with a discreet ceiling air vent",
  },
  {
    number: "02",
    kicker: "Heating",
    title: "Warmth that works quietly.",
    description:
      "Heating repair, installation, and seasonal service with clear recommendations before any work begins.",
    icon: ThermometerSun,
    image: ASSETS.technical,
    alt: "Technical cutaway of a residential heat-pump system",
  },
  {
    number: "03",
    kicker: "Maintenance",
    title: "Protect comfort before the problem starts.",
    description:
      "Preventative service designed to reduce avoidable breakdowns, support system performance, and keep small issues from becoming expensive ones.",
    icon: Wrench,
    image: ASSETS.interior,
    alt: "Close-up of a home air system inspection",
  },
  {
    number: "04",
    kicker: "Indoor Air Quality",
    title: "The air inside matters.",
    description:
      "Filtration, purification, humidity, and ventilation options built around how your home is actually used.",
    icon: Wind,
    image: ASSETS.technical,
    alt: "HVAC air handler and filtration system cutaway",
  },
  {
    number: "05",
    kicker: "Emergency Service",
    title: "When comfort cannot wait.",
    description:
      "A direct path to help when your HVAC system fails outside the ordinary schedule. Availability and service area are shown clearly before you call.",
    icon: CircleAlert,
    image: ASSETS.emergency,
    alt: "HVAC technician arriving at a home at dusk",
  },
  {
    number: "06",
    kicker: "Commercial",
    title: "Climate control for working spaces.",
    description:
      "HVAC service for businesses and commercial properties that need thoughtful diagnosis, clean execution, and fewer disruptions.",
    icon: ShieldCheck,
    image: ASSETS.technical,
    alt: "Cutaway view of commercial-grade HVAC equipment",
  },
];

const faqs = [
  {
    question: "How quickly can you come out?",
    answer:
      "[PLACEHOLDER — Add the company's verified scheduling window here. Avoid promising a response time until it is confirmed.]",
  },
  {
    question: "Do you offer emergency HVAC service?",
    answer:
      "[PLACEHOLDER — Confirm emergency availability, hours, and the correct phone number before publishing.]",
  },
  {
    question: "How do I know whether my AC should be repaired or replaced?",
    answer:
      "A technician should diagnose the actual condition first, then explain the repair path, expected service life, and replacement considerations in plain language. [PLACEHOLDER — Add company-specific guidance.]",
  },
  {
    question: "How often should my HVAC system be maintained?",
    answer:
      "[PLACEHOLDER — Add the company's verified maintenance recommendation and whether it varies by heating and cooling system.]",
  },
  {
    question: "How long does an HVAC installation take?",
    answer:
      "[PLACEHOLDER — Add a verified range that accounts for equipment, access, permitting, and site conditions.]",
  },
  {
    question: "Do you service my area?",
    answer:
      "The current service area is [PRIMARY SERVICE AREA + SURROUNDING CITIES]. [PLACEHOLDER — Add the complete approved list of cities and counties.]",
  },
];

function scrollToId(id: string, closeMenu?: () => void) {
  closeMenu?.();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Mark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`}>
      <span className="brand-mark-frame"><img src={ASSETS.mark} alt="" className="brand-mark" /></span>
      <span className="brand-wordmark"><span>[COMPANY NAME]</span><small>HVAC / SYSTEMS</small></span>
    </span>
  );
}

function SectionLabel({ number, children, light = false }: { number: string; children: string; light?: boolean }) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span className="section-label__number">{number}</span>
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const active = services[activeService];

  return (
    <div className="site-shell">
      <div className="system-bar">
        <div className="container system-bar__inner">
          <span>24/7 emergency service</span>
          <span>Licensed &amp; insured — [DETAILS]</span>
          <span>Serving [CITY, STATE] since [YEAR]</span>
          <a href={phoneHref}>Call {placeholderPhone}</a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container site-header__inner">
          <a className="site-header__brand" href="#top" aria-label="[COMPANY NAME] home">
            <Mark />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => scrollToId("services")} type="button">Services</button>
            <button onClick={() => scrollToId("difference")} type="button">The difference</button>
            <button onClick={() => scrollToId("expertise")} type="button">Expertise</button>
            <button onClick={() => scrollToId("service-area")} type="button">Service area</button>
            <button onClick={() => scrollToId("faq")} type="button">FAQ</button>
          </nav>
          <div className="site-header__actions">
            <a className="header-phone" href={phoneHref}>
              <Phone size={15} strokeWidth={1.8} />
              <span>{placeholderPhone}</span>
            </a>
            <button className="button button--copper button--small" onClick={() => scrollToId("request-service")} type="button">
              Schedule service <ArrowUpRight size={15} />
            </button>
            <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} type="button">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => scrollToId("services", () => setMenuOpen(false))} type="button">Services <ArrowRight size={16} /></button>
            <button onClick={() => scrollToId("difference", () => setMenuOpen(false))} type="button">The difference <ArrowRight size={16} /></button>
            <button onClick={() => scrollToId("expertise", () => setMenuOpen(false))} type="button">Expertise <ArrowRight size={16} /></button>
            <button onClick={() => scrollToId("service-area", () => setMenuOpen(false))} type="button">Service area <ArrowRight size={16} /></button>
            <button onClick={() => scrollToId("request-service", () => setMenuOpen(false))} type="button">Schedule service <ArrowUpRight size={16} /></button>
            <a href={phoneHref}>Call {placeholderPhone}</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__backdrop" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
          <div className="hero__overlay" />
          <div className="container hero__content">
            <div className="hero__eyebrow"><span className="eyebrow-dot" /> Precision HVAC for [CITY, STATE]</div>
            <div className="hero__copy">
              <h1 id="hero-title">Comfort, considered<br /><em>from the inside out.</em></h1>
              <p>Heating and cooling service for homes and businesses across [PRIMARY SERVICE AREA + SURROUNDING CITIES]. Clear diagnosis, thoughtful recommendations, and work done properly.</p>
              <div className="hero__actions">
                <button className="button button--copper" onClick={() => scrollToId("request-service")} type="button">Schedule service <ArrowUpRight size={17} /></button>
                <a className="text-link text-link--light" href={phoneHref}>Call {placeholderPhone} <ArrowRight size={17} /></a>
              </div>
            </div>
            <div className="hero__bottom">
              <div className="hero__trust"><ShieldCheck size={17} /><span>Licensed &amp; insured</span></div>
              <div className="hero__trust"><Clock3 size={17} /><span>Emergency service available</span></div>
              <div className="hero__trust"><Wind size={17} /><span>Residential &amp; commercial</span></div>
              <div className="hero__scroll"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Company details">
          <div className="container proof-strip__grid">
            <div className="proof-item"><span className="proof-item__value">[XX]</span><span>years serving<br />[AREA]</span></div>
            <div className="proof-item"><span className="proof-item__value">24/7</span><span>emergency<br />service</span></div>
            <div className="proof-item"><span className="proof-item__value">[XX]+</span><span>homes &amp; businesses<br />served</span></div>
            <div className="proof-item"><span className="proof-item__value">[LICENSE]</span><span>licensed / insured<br />[DETAILS]</span></div>
            <div className="proof-strip__note">Only verified company information belongs here.<br />Replace bracketed details before launch.</div>
          </div>
        </section>

        <section className="intro-section" id="about" aria-labelledby="intro-title">
          <div className="container intro-section__inner">
            <SectionLabel number="01">The brief</SectionLabel>
            <div className="intro-section__copy">
              <h2 id="intro-title">The best service call<br /><span>feels straightforward.</span></h2>
              <p>When the temperature is wrong, you do not need a sales pitch. You need someone who can find the real issue, explain the options, and leave your home better than they found it.</p>
              <p className="intro-section__small">[DESCRIBE WHAT MAKES THE COMPANY DIFFERENT]</p>
              <button className="text-link" onClick={() => scrollToId("difference")} type="button">See what sets us apart <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="container services-section__header">
            <SectionLabel number="02">Services, without the grid</SectionLabel>
            <div className="services-section__heading">
              <h2 id="services-title">One system.<br /><em>Many ways to help.</em></h2>
              <p>From an early-season tune-up to an after-hours call, every service begins with the same thing: understanding what is happening in your space.</p>
            </div>
          </div>
          <div className="container service-experience">
            <div className="service-list" role="tablist" aria-label="HVAC services">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button className={`service-list__item ${activeService === index ? "service-list__item--active" : ""}`} key={service.number} onClick={() => setActiveService(index)} role="tab" aria-selected={activeService === index} type="button">
                    <span className="service-list__number">{service.number}</span>
                    <span className="service-list__title"><span>{service.kicker}</span>{service.title}</span>
                    <Icon className="service-list__icon" size={18} strokeWidth={1.7} />
                  </button>
                );
              })}
            </div>
            <div className="service-feature" role="tabpanel">
              <div className="service-feature__image-wrap">
                <img key={active.image} className="service-feature__image" src={active.image} alt={active.alt} />
                <span className="image-note">[TEMPORARY ART DIRECTION — REPLACE WITH APPROVED CLIENT PHOTOGRAPHY]</span>
              </div>
              <div className="service-feature__copy">
                <div className="service-feature__eyebrow">{active.number} / {active.kicker}</div>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <button className="text-link" onClick={() => scrollToId("request-service")} type="button">Talk through your {active.kicker.toLowerCase()} needs <ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="difference-section" id="difference" aria-labelledby="difference-title">
          <div className="container difference-section__layout">
            <div className="difference-section__lead">
              <SectionLabel number="03" light>The difference</SectionLabel>
              <h2 id="difference-title">HVAC service<br /><em>should feel simple.</em></h2>
              <p>[DESCRIBE WHAT MAKES THE COMPANY DIFFERENT] — expressed in the small decisions that make a service visit feel clear, careful, and worth trusting.</p>
            </div>
            <div className="principles-list">
              <article className="principle"><span className="principle__number">01</span><div><h3>Clear communication</h3><p>No confusing technical language or surprise explanations. We make the next step understandable.</p></div></article>
              <article className="principle"><span className="principle__number">02</span><div><h3>Diagnosis before recommendation</h3><p>We look for the actual issue first, then explain the options that fit the system and the space.</p></div></article>
              <article className="principle"><span className="principle__number">03</span><div><h3>Respect for your home</h3><p>Professional behavior, careful work, and the expectation that your home should feel considered.</p></div></article>
              <article className="principle"><span className="principle__number">04</span><div><h3>Long-term thinking</h3><p>Repair when it makes sense. Replace when it is the responsible path. Never create urgency where it does not belong.</p></div></article>
            </div>
          </div>
        </section>

        <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
          <div className="container expertise-section__header">
            <SectionLabel number="04">Inside the system</SectionLabel>
            <div className="expertise-section__heading">
              <h2 id="expertise-title">The details<br /><em>do the work.</em></h2>
              <p>Good HVAC service is part craft, part diagnosis, and part respect for how a building actually moves air. This is the level of thinking behind every recommendation.</p>
            </div>
          </div>
          <div className="container expertise-visual">
            <div className="expertise-visual__image-wrap">
              <img src={ASSETS.technical} alt="Cutaway technical visualization of an HVAC air handler, filtration, and airflow paths" />
              <span className="image-note image-note--dark">[TECHNICAL VISUALIZATION — REPLACE WITH APPROVED EQUIPMENT ARTWORK]</span>
              <span className="annotation annotation--airflow">AIRFLOW <i /></span>
              <span className="annotation annotation--filter">FILTER <i /></span>
              <span className="annotation annotation--return">RETURN <i /></span>
              <span className="annotation annotation--supply">SUPPLY <i /></span>
            </div>
            <div className="expertise-visual__aside">
              <span className="expertise-visual__aside-number">04 / SYSTEM LOG</span>
              <p>We do not need to make the system mysterious to make the work valuable. We show you what matters and explain what happens next.</p>
              <div className="systems-index" aria-label="Technical system layers">
                <div><span>01 / airflow</span><strong>movement</strong></div>
                <div><span>02 / filter</span><strong>condition</strong></div>
                <div><span>03 / exchange</span><strong>efficiency</strong></div>
                <div><span>04 / control</span><strong>response</strong></div>
              </div>
              <button className="text-link" onClick={() => scrollToId("request-service")} type="button">Ask a technical question <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="container process-section__layout">
            <div className="process-section__lead">
              <SectionLabel number="05">A calmer process</SectionLabel>
              <h2 id="process-title">Know what<br /><em>happens next.</em></h2>
              <div className="process-note"><span>FIELD NOTE / 001</span><p>Good service starts by reducing the unknowns. The first call is a conversation, not a commitment.</p></div>
            </div>
            <div className="process-steps">
              <article className="process-step"><span>01</span><h3>Tell us what changed.</h3><p>Call or send a short request. Start with what you are noticing.</p></article>
              <article className="process-step"><span>02</span><h3>We diagnose the problem.</h3><p>We look at the system before recommending a path forward.</p></article>
              <article className="process-step"><span>03</span><h3>We explain your options.</h3><p>You get a clear view of what is needed and why.</p></article>
              <article className="process-step"><span>04</span><h3>We get your comfort back.</h3><p>The work is completed with care and the next step is documented.</p></article>
            </div>
          </div>
        </section>

        <section className="emergency-section" aria-labelledby="emergency-title">
          <div className="emergency-section__backdrop" style={{ backgroundImage: `url(${ASSETS.emergency})` }} />
          <div className="emergency-section__overlay" />
          <div className="container emergency-section__inner">
            <SectionLabel number="06" light>After hours</SectionLabel>
            <div className="emergency-section__content">
              <div>
                <h2 id="emergency-title">When comfort<br /><em>cannot wait.</em></h2>
                <p>Emergency HVAC service for [PRIMARY SERVICE AREA + SURROUNDING CITIES]. Call the number below to confirm current availability and the next available step.</p>
              </div>
              <div className="emergency-section__cta">
                <a className="button button--copper" href={phoneHref}>Call for emergency service <Phone size={16} /></a>
                <span>Emergency number: {placeholderPhone}</span>
                <span>Availability: [VERIFIED HOURS]</span>
              </div>
            </div>
          </div>
        </section>

        <section className="maintenance-section" id="maintenance" aria-labelledby="maintenance-title">
          <div className="container maintenance-section__layout">
            <div className="maintenance-section__visual"><div className="maintenance-section__stamp">CARE<br />PLAN</div><span>SEASONAL<br />SYSTEM<br />CHECK</span></div>
            <div className="maintenance-section__copy">
              <SectionLabel number="07">Maintenance plan</SectionLabel>
              <h2 id="maintenance-title">Protect your comfort<br /><em>before the problem starts.</em></h2>
              <p>If the company offers a maintenance plan, position it as a homeowner convenience and protection service — not a subscription dashboard.</p>
              <div className="maintenance-benefits"><span><Check size={15} /> Seasonal tune-ups</span><span><Check size={15} /> Priority scheduling</span><span><Check size={15} /> System inspections</span><span><Check size={15} /> Maintenance reminders</span></div>
              <button className="button button--dark" onClick={() => scrollToId("request-service")} type="button">Explore maintenance <ArrowUpRight size={16} /></button>
              <span className="placeholder-caption">[PLACEHOLDER — REMOVE IF NO MAINTENANCE PLAN IS OFFERED]</span>
            </div>
          </div>
        </section>

        <section className="service-area-section" id="service-area" aria-labelledby="area-title">
          <div className="container service-area-section__layout">
            <div className="service-area-section__copy">
              <SectionLabel number="08">Where we work</SectionLabel>
              <h2 id="area-title">Close to home.<br /><em>Clear about the map.</em></h2>
              <p>Serving homeowners and businesses throughout [PRIMARY SERVICE AREA + SURROUNDING CITIES].</p>
              <div className="area-list"><span><MapPin size={16} /> [PRIMARY CITY]</span><span><MapPin size={16} /> [SURROUNDING CITY]</span><span><MapPin size={16} /> [COUNTY / SERVICE AREA]</span></div>
              <span className="placeholder-caption">[PLACEHOLDER — ADD APPROVED CITIES, COUNTIES, AND SERVICE BOUNDARIES]</span>
            </div>
            <div className="map-art" aria-label="Minimal placeholder map of the service area">
              <div className="map-art__grid" /><div className="map-art__line map-art__line--one" /><div className="map-art__line map-art__line--two" /><div className="map-art__line map-art__line--three" /><div className="map-art__marker map-art__marker--primary"><span />[CITY]</div><div className="map-art__marker map-art__marker--secondary"><span />[AREA]</div><div className="map-art__legend"><span className="map-art__legend-dot" /> approved service area map to be added</div>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="container proof-section__layout">
            <div><SectionLabel number="09">Client proof</SectionLabel><h2 id="proof-title">Real words<br /><em>belong here.</em></h2></div>
            <div className="proof-placeholder"><span className="proof-placeholder__quote">“</span><p>[PLACEHOLDER — INSERT A REAL CUSTOMER REVIEW SUPPLIED BY THE CLIENT. INCLUDE FIRST NAME / LAST INITIAL, LOCATION IF AVAILABLE, AND A LEGITIMATE SOURCE BADGE.]</p><span className="proof-placeholder__source">Real customer proof pending</span></div>
          </div>
        </section>

        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="container gallery-section__header"><SectionLabel number="10">Work gallery</SectionLabel><div><h2 id="gallery-title">Show the work<br /><em>when it is yours.</em></h2><p>Temporary art direction is shown below so the page has a home for approved project photography when it is available.</p></div></div>
          <div className="container gallery-grid"><figure className="gallery-card gallery-card--large"><img src={ASSETS.interior} alt="Temporary placeholder showing a refined residential interior" /><figcaption><span>01 / Residential</span><strong>Replace with approved installation photography</strong></figcaption></figure><figure className="gallery-card"><img src={ASSETS.technical} alt="Temporary placeholder showing HVAC system details" /><figcaption><span>02 / System detail</span><strong>Replace with approved repair or replacement photography</strong></figcaption></figure><figure className="gallery-card"><img src={ASSETS.emergency} alt="Temporary placeholder showing an evening service arrival" /><figcaption><span>03 / After hours</span><strong>Replace with approved emergency service photography</strong></figcaption></figure></div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-section__layout"><div className="faq-section__lead"><SectionLabel number="11">Questions, answered</SectionLabel><h2 id="faq-title">Useful information<br /><em>before you call.</em></h2><p>Clear expectations make a service visit easier. Add or refine these answers with verified company policies before launch.</p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? "faq-item--open" : ""}`} key={faq.question}><button className="faq-item__trigger" aria-expanded={activeFaq === index} onClick={() => setActiveFaq(activeFaq === index ? null : index)} type="button"><span>{faq.question}</span><ChevronDown size={18} /></button><div className="faq-item__answer"><p>{faq.answer}</p></div></div>)}</div></div>
        </section>

        <section className="request-section" id="request-service" aria-labelledby="request-title">
          <div className="container request-section__layout"><div className="request-section__lead"><SectionLabel number="12" light>Next step</SectionLabel><h2 id="request-title">Let’s get your<br /><em>comfort back.</em></h2><p>Tell us what is happening and we will help make the next step clear.</p><div className="request-section__direct"><a href={phoneHref}><Phone size={17} /> {placeholderPhone}</a><a href="mailto:[EMAIL]"><Mail size={17} /> [EMAIL]</a></div></div><div className="request-form-wrap">{submitted ? <div className="form-success"><div className="form-success__mark"><Check size={22} /></div><span className="form-success__eyebrow">Request received</span><h3>We have your note.</h3><p>This front-end form is ready for connection to the company’s preferred intake workflow. A confirmed response message can be added once that integration is available.</p><button className="text-link text-link--light" onClick={() => setSubmitted(false)} type="button">Send another request <ArrowRight size={17} /></button></div> : <form className="request-form" onSubmit={handleSubmit}><div className="request-form__top"><span>Service request</span><span>Approx. 2 minutes</span></div><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" type="tel" required placeholder={placeholderPhone} /></label></div><div className="form-row"><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Service needed<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Cooling</option><option>Heating</option><option>Maintenance</option><option>Indoor air quality</option><option>Emergency service</option><option>Commercial HVAC</option></select></label></div><label>Preferred date / time<input name="date" placeholder="[PREFERRED DATE / TIME]" /></label><label>What is happening?<textarea name="description" required placeholder="A short description of the issue" rows={3} /></label><button className="button button--copper" type="submit">Send service request <ArrowUpRight size={16} /></button><span className="form-disclaimer">[PLACEHOLDER — ADD PRIVACY / RESPONSE EXPECTATIONS BEFORE LAUNCH]</span></form>}</div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top"><div className="site-footer__brand"><Mark inverse /><p>Precision HVAC service for [CITY, STATE] and the surrounding service area. Thoughtful work, clear explanations, and comfort handled properly.</p><a className="text-link text-link--light" href={phoneHref}>Call {placeholderPhone} <ArrowRight size={17} /></a></div><div className="site-footer__column"><span className="footer-label">Explore</span><button onClick={() => scrollToId("services")} type="button">Services</button><button onClick={() => scrollToId("difference")} type="button">The difference</button><button onClick={() => scrollToId("expertise")} type="button">Expertise</button><button onClick={() => scrollToId("faq")} type="button">FAQ</button></div><div className="site-footer__column"><span className="footer-label">Service area</span><span>[PRIMARY CITY]</span><span>[SURROUNDING CITY]</span><span>[COUNTY / SERVICE AREA]</span><span>[CITY, STATE]</span></div><div className="site-footer__column"><span className="footer-label">Contact</span><a href="mailto:[EMAIL]">[EMAIL]</a><a href={phoneHref}>{placeholderPhone}</a><span>[ADDRESS]</span><span>[HOURS]</span></div></div><div className="container site-footer__bottom"><span>© [YEAR] [COMPANY NAME]. All rights reserved.</span><span>Licensed / insured: [DETAILS]</span><div><a href="#top">Privacy policy</a><a href="#top">Terms</a></div></div>
      </footer>
      <div className="mobile-action-bar"><a href={phoneHref}><Phone size={16} /> Call</a><button onClick={() => scrollToId("request-service")} type="button">Schedule service <ArrowUpRight size={16} /></button></div>
    </div>
  );
}
