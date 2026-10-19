import { useEffect } from "react";
import { useLocation } from "wouter";
import { COMPANY, services } from "@/siteData";

const baseDescription = "AC repair, installation, heat-pump, and HVAC service for Florida homes and businesses. Company details and approved service areas are pending verification.";

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

function setLink(rel: string, href: string) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

export function RouteMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const normalized = location.split("?")[0].replace(/\/$/, "") || "/";
    const serviceSlug = normalized.startsWith("/services/") ? normalized.replace("/services/", "") : "";
    const service = services.find((item) => item.slug === serviceSlug);
    const title = service
      ? `${service.kicker} | ${COMPANY.name} HVAC Service`
      : normalized === "/services"
        ? `HVAC Services in Florida | ${COMPANY.name}`
        : normalized === "/about"
          ? `About ${COMPANY.name} | HVAC Service in Florida`
          : normalized === "/reviews"
            ? `Reviews | ${COMPANY.name} HVAC Service`
            : normalized === "/service-area" || normalized === "/service-areas"
              ? `HVAC Service Areas in Florida | ${COMPANY.name}`
              : normalized === "/faq"
                ? `HVAC FAQs | ${COMPANY.name}`
                : normalized === "/contact"
                  ? `Request HVAC Service | ${COMPANY.name}`
                  : `${COMPANY.name} | Florida HVAC Service`;
    const description = service ? `${service.short} Clear diagnosis and a documented next step.` : baseDescription;
    const canonical = `${COMPANY.siteUrl}${normalized === "/" ? "/" : normalized}`;
    const robots = COMPANY.verified ? "index, follow, max-image-preview:large" : "noindex, nofollow, noarchive";

    document.title = title;
    setMeta("description", description);
    setMeta("robots", robots);
    setMeta("twitter:card", "summary_large_image");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", canonical);
    setProperty("og:type", "website");
    setProperty("og:image", `${COMPANY.siteUrl}/manus-storage/hvac-hero_ea9a3649.jpg`);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${COMPANY.siteUrl}/manus-storage/hvac-hero_ea9a3649.jpg`);
    setLink("canonical", canonical);

    const existingSchema = document.querySelector<HTMLScriptElement>('script[data-route-schema="local-business"]');
    if (existingSchema) existingSchema.remove();
    if (COMPANY.verified) {
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.routeSchema = "local-business";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: COMPANY.name,
        url: COMPANY.siteUrl,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        areaServed: { "@type": "State", name: COMPANY.state },
      });
      document.head.appendChild(schema);
    }
  }, [location]);

  return null;
}
