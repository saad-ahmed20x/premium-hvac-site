import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { Link, useRoute } from "wouter";
import { COMPANY, services } from "@/siteData";
import { SectionLabel, SiteChrome } from "@/components/SiteChrome";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

export default function ServiceDetail() {
  const [, params] = useRoute<{ service: string }>("/services/:service");
  const service = services.find((item) => item.slug === params?.service) ?? services[0];
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  return <SiteChrome><main className="page-main"><section className="detail-hero"><div className="container detail-hero__grid"><div><Link className="back-link" href="/services"><ArrowLeft size={16} /> All services</Link><span className="detail-hero__eyebrow">{service.number} / {service.kicker}</span><h1>{service.title}</h1><p>{service.description}</p><div className="hero__actions"><Link className="button button--copper" href="/contact">Schedule service <ArrowUpRight size={17} /></Link><a className="text-link" href={COMPANY.phoneHref}>Call {COMPANY.phone} <Phone size={16} /></a></div></div><div className="detail-hero__image"><img src={service.image} alt={service.alt} /><span className="image-note">[TEMPORARY ART DIRECTION — REPLACE WITH APPROVED CLIENT PHOTOGRAPHY]</span></div></div></section>
    <section className="detail-body"><div className="container detail-body__grid"><div><SectionLabel number="01">What this can include</SectionLabel><h2>A considered path<br /><em>forward.</em></h2><p className="detail-body__lead">The right service depends on the condition of the equipment, the space, and what you need it to do. These are common starting points, not a substitute for diagnosis.</p></div><div className="detail-bullets">{service.bullets.map((bullet) => <div key={bullet}><span><Check size={16} /></span><p>{bullet}</p></div>)}</div></div></section>
    <section className="detail-request"><div className="container detail-request__grid"><div><SectionLabel number="02" light>Next step</SectionLabel><h2>Describe what<br /><em>you are noticing.</em></h2><p>Send a short note and the team can follow up with the right questions. For urgent issues, call to confirm current availability.</p></div><div className="detail-request__form"><ServiceRequestForm compact defaultService={service.kicker} /></div></div></section>
    <section className="next-service"><div className="container next-service__inner"><div><span className="footer-label">Continue exploring</span><h2>Next: <em>{next.kicker}</em></h2></div><Link className="button button--dark" href={`/services/${next.slug}`}>View service <ArrowRight size={16} /></Link></div></section></main></SiteChrome>;
}
