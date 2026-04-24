# Drasson Home Care — Release Notes

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
