# Mreža Ukusa — PRD v2

## 1. Product definition

Mreža Ukusa is a Serbian-first B2B sourcing platform that connects trusted growers in the **Bačka Palanka → Novi Sad** corridor with restaurants and professional buyers in Novi Sad.

This is **not** a generic marketplace; it is a premium procurement network for recurring fresh-food sourcing built around trust, clarity, and operational simplicity.

## 2. Product goal

Launch an MVP that proves:

- Growers will create and maintain credible supply profiles.
- Restaurants will submit recurring sourcing needs.
- Buyers can find relevant suppliers faster than through informal channels.
- The platform feels trustworthy enough for serious restaurant procurement.

## 3. Positioning

### What this is

- A sourcing network
- A trust layer
- A recurring procurement workflow
- A Serbian-localized professional product

### What this is not

- A mass consumer grocery app
- A classifieds site
- A generic “AI marketplace”
- A logistics platform
- A payment processor in MVP

## 4. Core users

### Growers

- Family farms
- Small producers
- Specialty growers
- Low-intervention or organic-oriented suppliers

### Buyers

- Restaurants
- Boutique hospitality
- Chefs
- Specialty grocers (later)

### Operators

- Admin/verifier
- Onboarding/recruitment operator
- Network manager

## 5. MVP jobs to be done

### For growers

- Present their farm credibly
- Show what they grow and when
- Communicate monthly capacity
- Receive relevant restaurant demand
- Build repeat B2B relationships

### For restaurants

- Find local suppliers by product, variety, season, and volume
- Reduce calling/messaging chaos
- Evaluate trust and fit quickly
- Build recurring sourcing relationships

## 6. Design doctrine

The product should feel **premium, quiet, trustworthy, and Serbian-local**.

Avoid common vibe-coded patterns:

- Generic gradients
- Overused cards
- Random icon clutter
- Shallow glassmorphism
- Startup-template layouts

### Design influences

- **Uncodixfy** as an anti-generic UI constraint system (strong hierarchy, intentional layout, disciplined visual design)
- **Steve Krug** usability principles (obvious actions, clear labels, low interpretation cost)
- **Awwwards** selectively for composition/restraint, not flashy motion

## 7. Visual direction

### Mood

- Organic
- Natural
- High-class
- Editorial
- Grounded
- Credible for top restaurants

### Color system

Use natural Serbian agricultural references.

- Deep soil brown
- Muted forest green
- Olive/sage accents
- Warm cream/off-white backgrounds
- Charcoal text
- Restrained gold/wheat accents (optional)

### Prohibited patterns

- Neon gradients
- Shiny AI-art backgrounds
- Excessive motion
- Over-rounded toy-like components
- Generic startup-green branding

### Imagery

Landing page should use a full-screen hero image with authentic Vojvodina/Serbian agricultural context (orchards, rows, fields, mixed produce environments), clearly local and credible.

## 8. Typography direction

Typography must feel premium and local, with clean Serbian Latin support from day one.

### Recommended type system

- UI sans: **Noto Sans** or **Inter** with verified Latin-ext coverage
- Editorial/display serif for hero/section titles, validated for Serbian diacritics

### Type rules

- Serif used sparingly for authority/editorial tone
- Sans for all UI/forms
- Large headline scale on landing page
- Generous line-height
- Avoid cramped dashboard typography

## 9. Hero section requirements

Homepage hero must be **full-screen**.

### Hero structure

- Edge-to-edge image
- Dark readable overlay or gradient scrim
- Serbian headline
- Concise subheadline
- Two primary CTAs
- Compact trust bar below CTAs

### Copy direction

Headline should communicate value directly in Serbian.

Example:

> Povezujemo ozbiljne proizvođače iz Vojvodine sa restoranima u Novom Sadu.

Subheadline must explain procurement value (not lifestyle branding).

### CTA structure

- Za proizvođače
- Za restorane

## 10. UX principles

Apply Krug rules:

- One obvious primary action per screen
- Labels describe exactly what happens
- Users should never guess the next step
- Forms split into obvious sections
- Business language over clever branding
- Match explanations visible, not mysterious

### UX quality bar

- No dead ends
- Clear empty states
- Autosave for long onboarding flows
- Mobile-first for growers
- Desktop-friendly for restaurant procurement
- Visible status for every async action

## 11. Localization

### Language policy

- Serbian Latin default
- English secondary
- All MVP screens translated before launch
- No mixed-language UI states
- Validation/error messages localized
- Structured terminology reviewed for Serbian business clarity

### Content quality

Serbian copy must sound native/professional (not machine-translated).

## 12. Authentication and onboarding

### Authentication

- Google OAuth first for low-friction signup
- Email magic-link fallback
- Role selection immediately after sign-in
- Organization creation/invite join flow

### Onboarding philosophy

- Minimal required info to enter
- Progressive disclosure afterward
- Encourage profile completeness (don’t force all at once)

## 13. Core MVP features

### Grower side

- Grower profile
- Municipality/location
- Products and varieties
- Seasonality windows
- Monthly capacity
- Practices/trust claims
- Delivery and pickup preferences
- Request inbox
- Messaging

### Buyer side

- Buyer profile
- Sourcing request builder
- Recurring volume and cadence
- Variety preferences
- Substitutions allowed
- Ranked matches
- Save supplier
- Messaging

### Operator side

- Verification queue
- Profile moderation
- Trust-claim review
- Agent output review
- Manual match curation

## 14. Trust model

Trust claims use controlled language.

Initial claim options:

- Certified organic
- In conversion
- Low-intervention / no-spray claim (explicitly unverified when applicable)
- Conventional
- Porodično gazdinstvo / family farm context

Policy:

- No claim may imply official certification without evidence.

## 15. Matching model

Matching combines:

- Product/category fit
- Variety fit
- Seasonality overlap
- Monthly capacity compatibility
- Municipality/proximity
- Fulfillment method
- Responsiveness history (later)

Requirement:

- Buyer must see plain-language explanation for why each match appears.

## 16. Messaging model

- Internal messaging only in MVP
- No public comment threads
- Clear read/send state
- Notifications for new messages
- Verified badge/claim state visible in conversation context

## 17. Security and trustworthiness

- Google OAuth with minimized scopes
- Magic-link fallback
- Role-based access control
- Organization-scoped data access
- Secure file uploads
- Audit logs for admin actions
- Rate limits on auth/public forms
- Sanitized rich-text inputs (if any)
- No agent can directly change trust verification without admin action

## 18. Error handling

### User-facing

- Inline validation
- Localized error copy
- Preserve form state after failure
- Obvious retry actions

### System-facing

- Structured error codes
- Async job retries with backoff
- Dead-letter queue for repeated failures
- Traceability for request → match → notification flow

## 19. Agent role

Agent workflows support the app but do not replace human trust decisions.

### Allowed in MVP

- Demand normalization
- Supply normalization
- Match scoring
- Stale profile nudges
- Market scanning outside the core app

### Not allowed in MVP

- Autonomous verification approval
- Direct contract finalization
- Uncontrolled mass outreach
- Direct writes to critical production records without gateway rules

## 20. Technical architecture

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui with heavy customization
- Strict design tokens and spacing system
- i18n from day one

### Backend

- Postgres
- Prisma or Drizzle
- Background jobs for matching/notifications
- Audit/event tables
- Object storage for photos/docs

### Agent sidecar

- OpenFang-inspired (or connected) sidecar for research/outreach/monitoring only

## 21. Information architecture

### Public nav

- Početna
- Kako radi
- Za proizvođače
- Za restorane
- Prijava
- Registracija

### Authenticated nav

- Pregled
- Proizvodi
- Zahtevi
- Uparivanja
- Poruke
- Profil
- Admin

## 22. Route map

- /
- /sr
- /en
- /login
- /signup
- /onboarding/grower
- /onboarding/buyer
- /dashboard
- /dashboard/products
- /dashboard/requests
- /dashboard/matches
- /dashboard/messages
- /dashboard/profile
- /admin/verifications
- /admin/matches
- /admin/agents

## 23. Non-goals

- Payments
- Household orders
- Logistics optimization engine
- Rakija category in MVP
- Public review marketplace dynamics
- Fancy motion-led storytelling site

## 24. Success metrics

- Grower onboarding completion rate
- Buyer onboarding completion rate
- First sourcing request creation rate
- Time to first useful match
- First message sent rate
- Monthly profile freshness rate
- Verified profile share

## 25. Build order for Codex

1. Auth and organization model
2. Localization dictionaries and route strategy
3. Database schema and migrations
4. Grower onboarding flow
5. Buyer onboarding flow
6. Sourcing request builder
7. Matching pipeline stub
8. Messaging system
9. Admin verification panel
10. Premium landing page with hero
11. Agent gateway stubs

## 26. Acceptance criteria

- User can sign in via Google or magic link
- User can choose role and create organization
- Grower can publish profile with products, seasonality, and capacity
- Buyer can submit a sourcing request with at least one line item
- System returns ranked matches with explanation
- Buyer and grower can message each other
- Serbian UI is complete across MVP flows
- Landing page looks premium, local, and non-generic

## 27. Design implementation rules for Codex

- Use Uncodixfy principles as a UI guardrail, not as a gimmick
- Follow Krug-style clarity: fewer decisions, stronger labels, fewer decorative elements
- Hero must feel editorial and local
- Every dashboard screen should have one dominant task
- Avoid AI-generated aesthetic clichés
- Prioritize typography, spacing, and image quality over effects
