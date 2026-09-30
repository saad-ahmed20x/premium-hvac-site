import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { faqs } from "@/siteData";
import { SectionLabel, SiteChrome } from "@/components/SiteChrome";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <SiteChrome><main className="page-main"><section className="page-hero page-hero--paper"><div className="container page-hero__inner"><SectionLabel number="01">Questions, answered</SectionLabel><h1>Useful information<br /><em>before you call.</em></h1><p>Clear expectations make a service visit easier. Add or refine these answers with verified company policies before launch.</p></div></section>
    <section className="faq-page"><div className="container faq-page__grid"><div className="faq-page__aside"><SectionLabel number="02">Start here</SectionLabel><h2>Most questions<br /><em>are practical.</em></h2><p>Still not sure what you need? Tell us what changed and we can help you choose the right service path.</p><Link className="text-link" href="/contact">Ask a question <ArrowRight size={17} /></Link></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${active === index ? "faq-item--open" : ""}`} key={faq.question}><button className="faq-item__trigger" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)} type="button"><span>{faq.question}</span><ChevronDown size={18} /></button><div className="faq-item__answer"><p>{faq.answer}</p></div></div>)}</div></div></section>
    <section className="faq-cta"><div className="container faq-cta__inner"><div><SectionLabel number="03" light>Next step</SectionLabel><h2>When in doubt,<br /><em>start a conversation.</em></h2></div><Link className="button button--copper" href="/contact">Schedule service <ArrowUpRight size={16} /></Link></div></section></main></SiteChrome>;
}
