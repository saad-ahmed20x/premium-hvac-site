# Design Brainstorm — [COMPANY NAME]

## Three stylistic approaches

### Theme Name: Architectural Service Editorial
**Very Brief Intro:** A warm, magazine-like system with large typography, calm neutrals, and precise technical imagery. It frames HVAC as an essential layer of beautiful, well-run homes rather than a commodity repair service.
**Probability:** 0.07

### Theme Name: Quiet Utility / Field Notes
**Very Brief Intro:** A restrained, light-first interface inspired by field notebooks, utility manuals, and industrial wayfinding. It puts clarity and helpfulness ahead of spectacle, with subtle diagrams and calm micro-interactions.
**Probability:** 0.03

### Theme Name: Copper After Hours
**Very Brief Intro:** A cinematic dark direction with restrained copper accents, evening service photography, and sharp navigation cues. It emphasizes emergency readiness and premium craft without slipping into neon or tech-demo styling.
**Probability:** 0.09

## Chosen direction: Architectural Service Editorial

### Design Movement
Contemporary Swiss editorial design translated into a premium American home-services brand: strong typographic hierarchy, asymmetrical composition, measured grids, and editorial pacing, softened by warm architectural materials.

### Core Principles
1. **Comfort is an engineered layer of the home.** Show the system and the lived experience together.
2. **Clarity earns trust.** Use short copy, visible next steps, and plain-language service descriptions.
3. **Premium comes from proportion.** Create spacious compositions, deliberate rules, and restrained accents instead of decorative effects.
4. **The human service moment matters.** Keep the tone composed, local, and reassuring, especially around emergency service.

### Color Philosophy
Warm white is the canvas: quiet, architectural, and easy to live with. Near-black charcoal carries authority and legibility. Soft mineral gray supports technical information without visual noise. A single oxidized copper accent gives the brand a memorable, practical warmth—like a carefully made mechanical detail—without looking flashy.

### Layout Paradigm
Use a split-axis editorial layout rather than a centered landing-page stack. Content should move between a wide visual field and a narrower text rail, with numbered section markers, oversized typographic anchors, and alternating image/text compositions. On mobile, preserve the editorial rhythm by keeping section labels and strong left alignment rather than collapsing everything into centered cards.

### Signature Elements
- A thin copper rule that appears as a section marker, progress cue, or CTA underline.
- Oversized outlined numerals (01, 02, 03) used as quiet wayfinding throughout the page.
- Technical annotation labels and connector lines integrated into the expertise visual, echoing a premium engineering drawing.

### Interaction Philosophy
Every interaction should clarify the next action. Navigation anchors scroll to useful sections, phone links are immediate on touch devices, and service panels reveal detail without surprise. Hover states use small translations, copper rules, and image crops instead of bouncing, glowing, or excessive scaling.

### Animation
Use a calm entrance sequence with opacity and small vertical translation, staggered across headings, supporting copy, and CTAs. Service imagery should ease upward by a few pixels on hover while the copper rule extends. The technical visualization may use a slow, barely perceptible ambient drift and a one-time annotation reveal. Keep transitions between 180–280ms with a custom ease-out, and disable non-essential motion for reduced-motion preferences.

### Typography System
Use **DM Sans** for display and interface text, paired with **IBM Plex Mono** for section labels, coordinates, and technical annotations. Headlines use 600 weight with tight tracking and short line lengths. Body copy stays at 16–18px with a 1.55 line-height. Mono labels use uppercase, 0.14em tracking, and restrained contrast. Do not use Inter.

### Brand Essence
**Positioning:** Precision HVAC service for homeowners and businesses who expect clear communication, careful work, and comfort that simply works. **Personality:** composed, exacting, human.

### Brand Voice
Headlines are confident and concise. CTAs are direct without pressure. Microcopy reduces anxiety by explaining what happens next and using plain language.

Example lines:
- “Your comfort, thoughtfully maintained.”
- “Tell us what changed. We’ll make the next step clear.”

### Wordmark & Logo
Use a compact geometric mark built from three offset air-channel lines forming an abstract “A” / airflow gate, paired with a custom uppercase wordmark for “[COMPANY NAME]”. The mark should work alone as a favicon and beside the wordmark in the header; it must feel engineered, not clip-art.

### Signature Brand Color
**Oxidized Copper — #B56E4B.** A muted, earthy accent that feels tactile and ownable against charcoal and architectural white.

## Placeholder and content rules

- Client details remain visibly bracketed placeholders until verified: [COMPANY NAME], [CITY, STATE], [PHONE NUMBER], [EMAIL], [PRIMARY SERVICE AREA + SURROUNDING CITIES], [YEARS], and [LICENSED / INSURED DETAILS].
- Do not fabricate reviews, ratings, customer counts, certifications, awards, memberships, guarantees, years, or response times.
- Use “Placeholder content” only where the supplied brief explicitly calls for unspecified content.
- Primary CTAs should use “Schedule Service” and “Call [PHONE NUMBER]”.
- Structural navigation items that do not yet have a destination should scroll to the relevant homepage section or show a concise “Section coming soon” toast.

## Style Decisions

- Editorial service layout over uniform card grids.
- Neutral palette with one copper accent; no purple/blue gradients, neon, or glassmorphism.
- Hero uses dark, low-key imagery with white text and a charcoal overlay for contrast.
- Service and process sections use warm white with charcoal text.
- All edited CSS, page, and component files must begin with a short comment reminding the author of this design direction.
