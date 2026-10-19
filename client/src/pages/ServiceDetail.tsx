import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { Link, useRoute } from "wouter";
import { COMPANY, services } from "@/siteData";
import { PhoneLink, SectionLabel, SiteChrome } from "@/components/SiteChrome";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

export default function ServiceDetail() {
  const [, params] = useRoute<{ service: string }>("/services/:service");
  const service = services.find((item) => item.slug === params?.service) ?? services[0];
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  return <SiteChrome><main className="page-main"><section className="detail-hero"><div className="container detail-hero__grid"><div><Link className="back-link" href="/services"><ArrowLeft size={16} /> All services</Link><span className="detail-hero__eyebrow">{service.number} / {service.kicker} in {COMPANY.state}</span><h1>{service.title}</h1><p>{service.description}</p><div className="hero__actions"><PhoneLink className="button button--copper">Call now <Phone size={16} /></PhoneLink><Link className="text-link" href="/contact">Request an estimate <ArrowUpRight size={17} /></Link></div></div><div className="detail-hero__image"><img src={service.image} alt={service.alt} fetchPriority="high" /></div></div></section>
    <section className="detail-body"><div className="container detail-body__grid"><div><SectionLabel number="01">What this can include</SectionLabel><h2>A considered path<br /><em>forward.</em></h2><p className="detail-body__lead">The right service depends on the condition of the equipment, the space, and what you need it to do. These are common starting points, not a substitute for diagnosis.</p></div><div className="detail-bullets">{service.bullets.map((bullet) => <div key={bullet}><span><Check size={16} /></span><p>{bullet}</p></div>)}</div></div></section>
    <section className="detail-problems"><div className="container detail-problems__grid"><div><SectionLabel number="02">Common problems</SectionLabel><h2>Start with<br /><em>what you notice.</em></h2></div><div className="detail-problem-list">{service.problems.map((problem) => <p key={problem}><span>+</span>{problem}</p>)}</div></div></section>
    <section className="detail-benefits"><div className="container detail-benefits__grid"><div><SectionLabel number="03">What good service adds</SectionLabel><h2>Clarity is part<br /><em>of the work.</em></h2></div><div className="detail-benefit-list">{service.benefits.map((benefit) => <p key={benefit}><Check size={17} />{benefit}</p>)}</div></div></section>
    <section className="detail-request"><div className="container detail-request__grid"><div><SectionLabel number="04" light>Next step</SectionLabel><h2>Describe what<br /><em>you are noticing.</em></h2><p>Send a short note with your ZIP code and the team can follow up with the right questions. For urgent issues, call to confirm current availability.</p></div><div className="detail-request__form"><ServiceRequestForm compact defaultService={service.kicker} /></div></div></section>
    <section className="next-service"><div className="container next-service__inner"><div><span className="footer-label">Continue exploring</span><h2>Next: <em>{next.kicker}</em></h2></div><Link className="button button--dark" href={`/services/${next.slug}`}>View service <ArrowRight size={16} /></Link></div></section></main></SiteChrome>;
}
