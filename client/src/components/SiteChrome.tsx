import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ASSETS, COMPANY } from "@/siteData";
import { RouteMeta } from "@/components/RouteMeta";

const navItems = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Service areas", "/service-area"],
  ["Contact", "/contact"],
] as const;

function Mark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`}><span className="brand-mark-frame"><img src={ASSETS.mark} alt="" className="brand-mark" /></span><span className="brand-wordmark"><span>{COMPANY.name}</span><small>HVAC / SYSTEMS</small></span></span>;
}

export function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label--light" : ""}`}><span className="section-label__number">{number}</span><span className="section-label__line" /><span>{children}</span></div>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [location]);

  return <div className="site-shell">
    <RouteMeta />
    <div className="system-bar"><div className="container system-bar__inner"><span>Serving {COMPANY.state}</span><span>Licensed &amp; insured — [DETAILS]</span><span>Local HVAC service — [CITY]</span><a href={COMPANY.phoneHref}>Call {COMPANY.phone}</a></div></div>
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner"><Link className="site-header__brand" href="/" aria-label={`${COMPANY.name} home`}><Mark /></Link><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="site-header__actions"><a className="header-phone" href={COMPANY.phoneHref}><Phone size={15} strokeWidth={1.8} /><span>{COMPANY.phone}</span></a><Link className="button button--copper button--small" href="/contact">Request service <ArrowUpRight size={15} /></Link><button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} type="button">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href}>{label} <ArrowRight size={16} /></Link>)}<Link href="/contact">Request service <ArrowUpRight size={16} /></Link><a href={COMPANY.phoneHref}>Call {COMPANY.phone}</a></nav>}
    </header>
    {children}
    <footer className="site-footer"><div className="container site-footer__top"><div className="site-footer__brand"><Link href="/"><Mark inverse /></Link><p>Precision HVAC service for {COMPANY.city}, {COMPANY.state}, and the surrounding service area. Thoughtful work, clear explanations, and comfort handled properly.</p><Link className="text-link text-link--light" href="/contact">Request service <ArrowRight size={17} /></Link></div><div className="site-footer__column"><span className="footer-label">Explore</span><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/reviews">Reviews</Link><Link href="/faq">FAQs</Link></div><div className="site-footer__column"><span className="footer-label">Service areas</span>{["[PRIMARY CITY]", "[SURROUNDING CITY]", "[COUNTY / SERVICE AREA]", "Florida"].map((area) => <span key={area}>{area}</span>)}</div><div className="site-footer__column"><span className="footer-label">Contact</span><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><a href={COMPANY.phoneHref}>{COMPANY.phone}</a><span>[ADDRESS]</span><span>[HOURS]</span></div></div><div className="container site-footer__bottom"><span>© [YEAR] {COMPANY.name}. All rights reserved.</span><span>Licensed / insured: [DETAILS]</span><div><Link href="/">Privacy policy</Link><Link href="/">Terms</Link></div></div></footer>
    <div className="mobile-action-bar"><a href={COMPANY.phoneHref}><Phone size={16} /> Call now</a><Link href="/contact">Request service <ArrowUpRight size={16} /></Link></div>
  </div>;
}
