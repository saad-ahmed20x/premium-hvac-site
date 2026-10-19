import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "wouter";
import { COMPANY } from "@/siteData";
import { SectionLabel, SiteChrome } from "@/components/SiteChrome";

export default function Legal() {
  const [location] = useLocation();
  const isPrivacy = location.startsWith("/privacy");
  return <SiteChrome><main className="page-main"><section className="page-hero page-hero--paper legal-hero"><div className="container page-hero__inner"><SectionLabel number="01">{isPrivacy ? "Privacy" : "Terms"}</SectionLabel><h1>{isPrivacy ? <>Your information,<br /><em>handled clearly.</em></> : <>Clear terms for<br /><em>the next step.</em></>}</h1><p>Last updated October 19, 2026. This working policy is written for the demo site and should be reviewed with the business's legal adviser before launch.</p></div></section>
    <section className="legal-page"><div className="container legal-page__grid"><aside className="legal-page__aside"><div className="legal-page__aside-icon"><ShieldCheck size={20} /></div><span>Site policy</span><Link href={isPrivacy ? "/terms" : "/privacy"}>{isPrivacy ? "Read terms & conditions" : "Read privacy policy"} <ArrowRight size={15} /></Link></aside><article className="legal-page__content">{isPrivacy ? <>
      <h2>Privacy policy</h2><p>{COMPANY.name} respects the information you share through this website. This page describes the intended handling of service requests and should be updated with the company's final legal name, address, contact details, retention period, and applicable state or federal notices before launch.</p>
      <h3>Information collected</h3><p>The request form may collect your name, phone number, email address, ZIP code, requested service, preferred timing, and description of the issue. The form also records the date and time that you consented to this policy.</p>
      <h3>How information is used</h3><p>Submitted information is used to review and respond to HVAC service inquiries, coordinate follow-up, and maintain an internal record of the request. It should not be used for unrelated marketing without an appropriate notice and consent.</p>
      <h3>Storage and sharing</h3><p>Service requests are stored in the website's protected database. New-lead alerts are sent to the project owner through the configured Manus owner-notification service. Replace this paragraph with the company's final vendor, security, retention, and disclosure details before launch.</p>
      <h3>Your choices</h3><p>To ask about a submitted request, request a correction, or ask how information is handled, use the <Link href="/contact">contact page</Link>. Add the verified privacy contact and response process before launch.</p>
    </> : <>
      <h2>Terms &amp; conditions</h2><p>By using this demo website or sending a service request, you acknowledge that the site is intended to collect an inquiry, not to create a service contract. These working terms should be reviewed and replaced with the business's final legal terms before launch.</p>
      <h3>Service requests</h3><p>Submitting a form does not guarantee availability, pricing, appointment timing, emergency response, or acceptance of work. A request is saved for review and requires confirmation from the business.</p>
      <h3>Information accuracy</h3><p>Please provide accurate contact information and a useful description of the issue. Do not include passwords, payment-card details, medical information, or other sensitive information in the description field.</p>
      <h3>Website content</h3><p>Service descriptions, images, availability language, geographic coverage, credentials, guarantees, and customer reviews must be verified by the business before publication. Nothing on this demo should be treated as a license, certification, warranty, or promise of performance.</p>
      <h3>Contact and updates</h3><p>Questions about these terms can be sent through the <Link href="/contact">contact page</Link>. Replace the placeholder company identity, governing-law clause, effective date, and legal contact before launch.</p>
    </>}</article></div></section></main></SiteChrome>;
}
