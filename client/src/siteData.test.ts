import { describe, expect, it } from "vitest";
import { serviceMenuItems } from "./components/SiteChrome";
import { faqs, services, serviceAreas } from "./siteData";

describe("HVAC site content", () => {
  it("keeps service slugs unique and route-safe", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
  });

  it("gives every service enough conversion content", () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(10);
      expect(service.description.length).toBeGreaterThan(40);
      expect(service.bullets.length).toBeGreaterThanOrEqual(3);
      expect(service.image).toBeTruthy();
    }
  });

  it("keeps the placeholder-safe information architecture populated", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(5);
    expect(serviceAreas.length).toBeGreaterThanOrEqual(3);
  });

  it("keeps every service reachable from the Services menu", () => {
    expect(serviceMenuItems.map((item) => item.href)).toEqual(
      services.map((service) => `/services/${service.slug}`),
    );
  });
});
