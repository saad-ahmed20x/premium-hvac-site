import { describe, expect, it } from "vitest";
import { getNavigationTarget } from "./components/ScrollRestoration";

describe("scroll restoration navigation targets", () => {
  it("treats a normal route as a top-of-page navigation", () => {
    expect(getNavigationTarget("/services")).toEqual({ pathname: "/services", hash: "" });
  });

  it("preserves intentional hash anchors", () => {
    expect(getNavigationTarget("/about#expertise")).toEqual({ pathname: "/about", hash: "expertise" });
  });
});
