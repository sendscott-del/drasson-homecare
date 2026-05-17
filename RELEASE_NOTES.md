# Drasson Home Care — Release Notes

## v1.2.2 — May 17, 2026

### Site-wide QA pass — bug fixes and polish

**Functional bug (the important one):**
- **Mobile menu would stay open after navigating to a new page.** Clicking About/Services/Contact in the hamburger menu navigated correctly but the dropdown overlay didn't close, blocking the page content on the next screen. The previous `onClick={() => setIsOpen(false)}` on each Link lost a race against Next.js client-side navigation. Rewrote `MobileNav.tsx` to derive `isOpen` from a `openedAtPath` state compared with `usePathname()` — when the route changes, the menu becomes closed by definition, no race condition. Verified across all four nav links.

**Polish:**
- Standardized every `tel:` link site-wide to `tel:+17087041346` (was a mix of `tel:7087041346` and `tel:+17087041346`). The `+1` form is the correct RFC 3966 format and behaves more reliably on iOS and Android. Matches the existing `sms:+17087041346` on the contact page.
- Removed the circular `www.drassonhomecare.com` link from the contact page secondary info — clicking it just reloaded the same page the user was already on. Secondary info grid collapsed from 3 to 2 columns (Service Area, Availability).
- Swapped the homepage caregiver-and-client photo from `<img>` to Next.js `<Image fill>` so the image is auto-optimized to multiple sizes (WebP/AVIF), lazy-loaded properly, and avoids the "slower LCP" warning.
- Cleaned up unused imports: `Menu`/`X` in `layout.tsx`, `Home` in `page.tsx`, `Globe` in `contact/page.tsx`, and the unused `index` parameter in the services map. Lint output is now zero warnings, zero errors.

## v1.2.1 — May 16, 2026

### Contact page: removed the form, made direct contact prominent
- Removed the "Send Us a Message" form entirely. Setting up reliable email delivery from the form was friction (Gmail SMTP / app-password authentication kept failing); a direct phone/text/email approach is simpler and gets leads to Drasson faster.
- Contact page now leads with three big action buttons:
  - **Call us** → `tel:` link, opens phone dialer
  - **Text us** → `sms:` link, opens messaging app pre-addressed to (708) 704-1346
  - **Email us** → `mailto:` link, opens email client to drassoncare@gmail.com
- Service Area, Availability, and Website moved to a smaller secondary row below the CTAs.
- Removed now-unused files: `src/app/contact/ContactForm.tsx`, `src/app/api/contact/route.ts`.
- Removed `nodemailer` and `@types/nodemailer` from dependencies.
- The Vercel env vars `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_RECIPIENT` are no longer used — Scott to revoke the Gmail app password and remove these vars to keep things clean.

## v1.2.0 — May 16, 2026

### Contact form now actually sends email
- Previously the "Send Message" button only showed a thank-you screen — submissions were silently discarded.
- New API route at `src/app/api/contact/route.ts` uses Gmail SMTP via `nodemailer` to deliver every submission to `drassoncare@gmail.com` (override with `CONTACT_RECIPIENT` env var).
- `Reply-To` header is set to the submitter's email so replying from Gmail goes straight to the lead.
- Added a hidden honeypot field (`website`) to silently drop bot submissions.
- Sending state, error display, and disabled button while submitting.
- **Required Vercel env vars** (Production + Preview):
  - `GMAIL_USER` — the Gmail account doing the sending (e.g. `drassoncare@gmail.com`)
  - `GMAIL_APP_PASSWORD` — 16-char Gmail app password (requires 2-step verification turned on for that Gmail account; generate at https://myaccount.google.com/apppasswords)
  - `CONTACT_RECIPIENT` — optional, defaults to `drassoncare@gmail.com`
- Until these env vars are set in Vercel, the form will show "Email is not configured. Please try calling us instead."

## v1.1.1 — April 23, 2026
- Replaced caregiver + client placeholder with the AI-generated photo supplied by the owner (`public/caregiver-client.png`). Removed the temporary SVG placeholder and updated the homepage image tag. Filename normalized to lowercase to avoid case-sensitivity issues on Vercel's Linux build.

## v1.1.0 — April 23, 2026

### Content refresh from owner (Abiola)
- **Email address updated** to `drassoncare@gmail.com` everywhere (top bar, footer, contact page)
- **Website URL added** to contact page: www.drassonhomecare.com
- **Homepage hero** rewritten with owner-provided copy: welcomes clients to Drasson Home Care Services, emphasizes Hyde Park + surrounding areas, introduces 24/7 availability and FREE consultation CTA
- **New "Why Choose Us" section** on homepage with five checkpoints (experienced caregivers, personalized plans, affordable/flexible, 24/7, trusted and compassionate)
- **Homepage services cards restructured** to match the owner's new 6-category model: Personal Care, Companion Care, Daily Living Assistance, Mobility Support, Specialized Care, Respite Care
- **Testimonials section expanded** from one to three client quotes in a grid layout
- **Service Area callout added** on homepage ("Hyde Park and surrounding areas")
- **Brief About copy updated** on homepage to reference "over 7 years of hands-on caregiving and CNA experience"
- **Caregiver & Client photo section added** on homepage — currently showing a placeholder SVG at `/public/caregiver-client.svg`. Owner to supply an AI-generated photo; drop the replacement file in `/public/` and update the image `src` in `src/app/page.tsx`
- **About page** rewritten: new hero subtitle, founder story simplified to "founded with a passion for helping others" and "over 7 years of hands-on caregiving and CNA experience", "Our Promise" box replaces the previous "Our Mission" box, values grid refreshed to reflect treating every client like family
- **Services page** restructured to match the owner's categorization: Personal Care, Companion Care, Daily Living Assistance, **new Mobility Support category** ($25/hr — walking, fall prevention, transfers), Errands & Appointments, **new Specialized Dementia Care category** ($30/hr), Overnight Care retained
- **Contact page** now shows "Service Area: Hyde Park and surrounding areas" plus a Website row linking to www.drassonhomecare.com
- Version bumped to **1.1.0**

## v1.0.1 — April 18, 2026
- Updated contact email to drassonhomecareservices@gmail.com across all pages (header, footer, contact page)

## v1.0.0 — April 18, 2026

### Initial Launch
Complete website build for Drasson Home Care, a home care service for elderly and disabled adults in Hyde Park, Chicago.

**Pages built:**
- **Home (/)** — Hero section, services overview cards, testimonial from Sarah T., referral program mention, call-to-action sections
- **About (/about)** — Founder story, Nigerian cultural values of elder respect, mission statement, values grid, services list
- **Services (/services)** — Five service categories with detailed descriptions and pricing (personal care $20/hr, companionship $25/hr, support services $25/hr, household logistics $28/hr, overnight care $220-$280 flat), holiday surcharge notice
- **Contact (/contact)** — Contact info (phone, email, location), interactive contact form with success state

**Shared layout:**
- Sticky header with logo and navigation (desktop + mobile hamburger menu)
- Top bar with phone number and email
- Footer with quick links, contact info, and copyright

**Technical details:**
- Next.js 16 with App Router, Tailwind CSS 4, Lucide React icons
- Fully responsive (mobile-first design)
- Deep teal/navy primary color, warm amber/gold accents
- Smooth scroll behavior, semantic HTML, accessible form labels
