import { useEffect } from "react";
import { useLocation } from "wouter";
import { COMPANY, services } from "@/siteData";

const baseDescription = `Local AC repair, installation, heat-pump, and HVAC service for ${COMPANY.city}, Florida and the surrounding service area.`;

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setProperty(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function RouteMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const normalized = location.split("?")[0].replace(/\/$/, "") || "/";
    const serviceSlug = normalized.startsWith("/services/") ? normalized.replace("/services/", "") : "";
    const service = services.find((item) => item.slug === serviceSlug);
    const title = service
      ? `${service.kicker} in ${COMPANY.city}, Florida | ${COMPANY.name}`
      : normalized === "/services"
        ? `HVAC Services in ${COMPANY.city}, Florida | ${COMPANY.name}`
        : normalized === "/about"
          ? `About ${COMPANY.name} | HVAC Service in Florida`
          : normalized === "/reviews"
            ? `Reviews | ${COMPANY.name} HVAC Service`
            : normalized === "/service-area" || normalized === "/service-areas"
              ? `HVAC Service Areas in Florida | ${COMPANY.name}`
              : normalized === "/faq"
                ? `HVAC FAQs | ${COMPANY.name}`
                : normalized === "/contact"
                  ? `Request HVAC Service in ${COMPANY.city}, Florida | ${COMPANY.name}`
                  : `${COMPANY.name} | HVAC Service in ${COMPANY.city}, Florida`;
    const description = service ? `${service.short} Serving ${COMPANY.area}.` : baseDescription;
    const canonical = `${COMPANY.siteUrl}${normalized === "/" ? "/" : normalized}`;
    document.title = title;
    setMeta("description", description);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", canonical);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [location]);

  return null;
}
