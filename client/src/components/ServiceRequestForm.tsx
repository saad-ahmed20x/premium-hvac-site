import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { trpc } from "@/lib/trpc";

export function ServiceRequestForm({ compact = false, defaultService }: { compact?: boolean; defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const createRequest = trpc.serviceRequests.create.useMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitError(null);
    if (data.get("consent") !== "on") {
      setSubmitError("Please review and accept the Privacy Policy and Terms & Conditions before sending your request.");
      return;
    }
    try {
      await createRequest.mutateAsync({
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        zipCode: String(data.get("zipCode") ?? ""),
        email: String(data.get("email") ?? ""),
        consent: true,
        serviceNeeded: String(data.get("service") ?? ""),
        preferredDateTime: String(data.get("date") ?? "") || undefined,
        description: String(data.get("description") ?? ""),
      });
      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError("We could not save your request. Please try again or call the number below.");
    }
  };

  if (submitted) return <div className="form-success"><div className="form-success__mark"><Check size={22} /></div><span className="form-success__eyebrow">Request received</span><h3>We have your note.</h3><p>Your request was saved successfully. The team can now review it and follow up using the contact details you provided.</p><button className="text-link" onClick={() => setSubmitted(false)} type="button">Send another request <ArrowUpRight size={17} /></button></div>;

  return <form className={`request-form ${compact ? "request-form--compact" : ""}`} onSubmit={handleSubmit}>
    <div className="request-form__top"><span>Request service</span><span>Approx. 2 minutes</span></div>
    <div className="form-row"><label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label><label>Phone<input name="phone" type="tel" required placeholder="[PHONE NUMBER]" autoComplete="tel" /></label></div>
    <div className="form-row"><label>ZIP code<input name="zipCode" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" required placeholder="ZIP code" autoComplete="postal-code" /></label><label>Service needed<select name="service" required defaultValue={defaultService ?? ""}><option value="" disabled>Select a service</option><option>AC repair</option><option>AC installation</option><option>Cooling</option><option>Heating</option><option>Heat pumps</option><option>Maintenance</option><option>Indoor air quality</option><option>Emergency service</option><option>Commercial HVAC</option></select></label></div>
    <label>Email<input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></label>
    <label>What is happening?<textarea name="description" required placeholder="A short description of the issue" rows={compact ? 4 : 3} /></label>
    <label className="consent-field"><input name="consent" type="checkbox" required /> <span>I agree to the <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="/terms" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>, and consent to being contacted about this request.</span></label>
    {submitError && <p className="form-error" role="alert">{submitError}</p>}
    <button className="button button--copper" disabled={createRequest.isPending} type="submit" aria-busy={createRequest.isPending}>{createRequest.isPending ? "Sending request…" : "Send service request"} <ArrowUpRight size={16} /></button>
    <span className="form-disclaimer">Your request is saved only after a successful submission. Add the business privacy notice and response expectations before launch.</span>
  </form>;
}
