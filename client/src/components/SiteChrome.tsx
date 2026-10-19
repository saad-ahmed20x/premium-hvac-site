import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ASSETS, COMPANY, hasVerifiedContact, services, serviceAreas } from "@/siteData";
import { RouteMeta } from "@/components/RouteMeta";

const navItems = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Service areas", "/service-area"],
  ["Contact", "/contact"],
] as const;

export const serviceMenuItems = services.map((service) => ({
  label: service.kicker,
  number: service.number,
  href: `/services/${service.slug}`,
}));

function Mark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`}><span className="brand-mark-frame"><img src={ASSETS.mark} alt="" className="brand-mark" /></span><span className="brand-wordmark"><span>{COMPANY.name}</span><small>HVAC / SYSTEMS</small></span></span>;
}

export function PhoneLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return hasVerifiedContact
    ? <a className={className} href={COMPANY.phoneHref}>{children}</a>
    : <span className={`${className} phone-link--pending`} aria-disabled="true" title="Phone number pending verification">{children}</span>;
}

export function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label--light" : ""}`}><span className="section-label__number">{number}</span><span className="section-label__line" /><span>{children}</span></div>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target as HTMLElement).closest(".nav-dropdown")) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return <div className="site-shell">
    <RouteMeta />
    <div className="system-bar"><div className="container system-bar__inner"><span>Florida HVAC service demo</span><span>Company details pending verification</span><span>Residential + commercial inquiries</span><PhoneLink>Call {COMPANY.phone}</PhoneLink></div></div>
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner"><Link className="site-header__brand" href="/" aria-label={`${COMPANY.name} home`}><Mark /></Link><nav className="desktop-nav" aria-label="Primary navigation"><div className="nav-dropdown"><button className="nav-dropdown__trigger" type="button" aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>Services <span aria-hidden="true">⌄</span></button>{servicesOpen && <div className="nav-dropdown__menu"><Link href="/services"><span><small>00</small>All services</span><ArrowRight size={14} /></Link>{serviceMenuItems.map((service) => <Link key={service.href} href={service.href}><span><small>{service.number}</small>{service.label}</span><ArrowRight size={14} /></Link>)}</div>}</div>{navItems.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="site-header__actions"><PhoneLink className="header-phone"><Phone size={15} strokeWidth={1.8} /><span>{COMPANY.phone}</span></PhoneLink><Link className="button button--copper button--small" href="/contact">Request service <ArrowUpRight size={15} /></Link><button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} type="button">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><div className="mobile-nav__services"><button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>Services <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span></button>{servicesOpen && <div className="mobile-nav__submenu"><Link href="/services">All services <ArrowRight size={15} /></Link>{serviceMenuItems.map((service) => <Link key={service.href} href={service.href}><span>{service.label}</span><ArrowRight size={15} /></Link>)}</div>}</div>{navItems.slice(1).map(([label, href]) => <Link key={href} href={href}>{label} <ArrowRight size={16} /></Link>)}<Link href="/contact">Request service <ArrowUpRight size={16} /></Link><PhoneLink>Call {COMPANY.phone}</PhoneLink></nav>}
    </header>
    {children}
    <footer className="site-footer"><div className="container site-footer__top"><div className="site-footer__brand"><Link href="/"><Mark inverse /></Link><p>Thoughtful HVAC service for Florida homes and businesses. Clear explanations, careful work, and a straightforward next step.</p><Link className="text-link text-link--light" href="/contact">Request service <ArrowRight size={17} /></Link></div><div className="site-footer__column"><span className="footer-label">Explore</span><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/reviews">Reviews</Link><Link href="/faq">FAQs</Link></div><div className="site-footer__column"><span className="footer-label">Service areas</span>{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div><div className="site-footer__column"><span className="footer-label">Contact</span><span>{COMPANY.email}</span><PhoneLink>{COMPANY.phone}</PhoneLink><span>Business address pending verification</span><span>Hours pending verification</span></div></div><div className="container site-footer__bottom"><span>Demo site · verify business details before launch</span><span>© [YEAR] {COMPANY.name}</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>
    <div className="mobile-action-bar"><PhoneLink><Phone size={16} /> Call now</PhoneLink><Link href="/contact">Request service <ArrowUpRight size={16} /></Link></div>
  </div>;
}
