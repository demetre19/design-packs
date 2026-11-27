/*
  Brand facts shared by every component. Facts marked SITE are published on whistlecleanaustralia.com.au (read 2026-11-25).
  Everything marked SAMPLE is invented design content and must be replaced or verified before launch.
*/
import type { LucideIcon } from "lucide-react";
import { Building2, Stethoscope, Baby, KeyRound, Waves, PanelsTopLeft } from "lucide-react";

export const brand = {
  name: "Whistle Clean Australia", // SITE
  short: "Whistle Clean", // SITE
  tagline: "Cleaning with love and integrity", // SITE
  promise: "Reliable, sustainable and customised for your workplace", // SITE
  phone: "(03) 8007 3133", // SITE (header, footer, contact page). The site also lists (03) 7003 2223; confirm which is live.
  email: "hello@whistlecleanaustralia.com.au", // SAMPLE address format; confirm
  address: "Suite 65, Level 4, 80 Market St, South Melbourne VIC 3205", // SITE
  founded: 2014, // SITE
  founder: "Ivan Tan", // SITE
  rating: { score: "4.9", count: 56, source: "Google" }, // SITE
  lockInMonths: 0, // SITE
  treesPerVisit: 1, // SITE: 1 cleaning visit = 1 tree planted
  eucalyptus: "90%", // SITE: 90% eucalyptus oil-based products
  certification: "ISO 9001:2015", // SITE
  checkIns: "90-day", // SITE
  noPitch: "Just questions, lots of clarity, no sales pitch.", // SITE
  headcountRule: "Every 7 people, 1 cleaning day a week", // SITE
} as const;

export type Service = { slug: string; name: string; line: string; care: string; icon: LucideIcon; from?: string };

export const services: Service[] = [
  { slug: "office", name: "Office cleaning", line: "After-hours cleaning for offices of 5 to 250 people.", care: "EUC 90%", icon: Building2, from: "$750 / mo" },
  { slug: "medical", name: "Medical clinic cleaning", line: "Disinfection of treatment rooms, waiting areas and touchpoints.", care: "MSDS", icon: Stethoscope },
  { slug: "childcare", name: "Childcare centre cleaning", line: "Low-tox daily cleans for rooms, cots and play surfaces.", care: "Low-tox", icon: Baby },
  { slug: "end-of-lease", name: "End-of-lease cleaning", line: "Bond-back cleans to the agent's checklist, room by room.", care: "Checklist", icon: KeyRound },
  { slug: "carpet", name: "Carpet steam cleaning", line: "Hot-water extraction for floors, rugs and upholstery.", care: "Steam", icon: Waves },
  { slug: "windows", name: "Window cleaning", line: "Internal and external glass, partitions and frames.", care: "Streak-free", icon: PanelsTopLeft },
];

/* Office pricing published on the site as a ballpark range, + GST per month. SITE.
   Note: the site lists 4x/week as $2,200 to $5,500, below the 3x floor. Confirm with the client. */
export const officePricing = [
  { visits: 1, low: 750, high: 1400 },
  { visits: 2, low: 1200, high: 2500 },
  { visits: 3, low: 2500, high: 4500 },
  { visits: 4, low: 2200, high: 5500 },
  { visits: 5, low: 2800, high: 7500 },
];

export const aud = (n: number) => `$${n.toLocaleString("en-AU")}`;

export const differentiators = [
  { title: "Zero lock-in", body: "No minimum term. Stay because the work is good, with a satisfaction guarantee behind every clean.", care: "0 months" },
  { title: "One clean, one tree", body: "Every cleaning visit plants a tree. The count grows with your contract.", care: "1 : 1" },
  { title: "Eucalyptus, not bleach", body: "Products are 90% eucalyptus oil-based, with safety data sheets supplied for every one.", care: "EUC 90%" },
  { title: "Checked people", body: "Every cleaner is police-checked and fully insured, and you meet your team before day one.", care: "Vetted" },
  { title: "90-day check-ins", body: "Your Client Wellbeing Ambassador walks the site with you every quarter.", care: "Quarterly" },
  { title: "Certified process", body: "Quality managed under ISO 9001:2015, with checklists signed every visit.", care: "ISO 9001" },
];

export const steps = [
  { step: "Enquire", body: "Send the form or call. A real person replies the same business day." },
  { step: "Discovery call", body: "Fifteen minutes on your space, hours and priorities." },
  { step: "Site walk", body: "We walk the floor with you and measure what matters." },
  { step: "Quote in 24 hours", body: "A fixed monthly price, no lock-in, ready to sign." },
];

export const suburbs = [
  "Abbotsford", "Brunswick", "Carlton", "Collingwood", "Cremorne", "Docklands", "Fitzroy", "Footscray", "Hawthorn", "Kew",
  "Melbourne CBD", "Port Melbourne", "Prahran", "Richmond", "South Melbourne", "South Yarra", "Southbank", "St Kilda", "West Melbourne", "Yarraville",
];

/* Client names shown on the current site's logo wall. SITE. Rendered as type only, no marks. */
export const clients = ["TBWA", "Lacoste", "UGG", "Ford", "Kathmandu", "Bega", "Atomos", "Cambridge University Press"];

/* Team as published on the site. SITE. */
export const team = [
  { name: "Ivan Tan", role: "Founder and Director", seed: "wc-ivan" },
  { name: "Katrina S.", role: "Client Wellbeing Ambassador", seed: "wc-katrina" },
  { name: "Siska T.", role: "Finance Manager", seed: "wc-siska" },
  { name: "Belinda W.", role: "Finance Officer", seed: "wc-belinda" },
  { name: "Irene T.", role: "Recruitment Coordinator", seed: "wc-irene" },
  { name: "Evenezer G.", role: "Client Relationship Representative", seed: "wc-evenezer" },
];

/* SAMPLE testimonials for layout only. Replace with verified Google reviews, quoted with permission, before launch. */
export const testimonials = [
  { quote: "The office is ready before anyone walks in, every single morning. In two years I have never had to chase them.", name: "Office manager", org: "Creative agency, Cremorne", site: "42 people · 3 days a week" },
  { quote: "They asked about our infection-control rules before they asked about price. That told me what I needed to know.", name: "Practice manager", org: "GP clinic, Richmond", site: "6 rooms · 5 days a week" },
  { quote: "Parents notice the smell first. Eucalyptus, not chemicals. The children notice nothing, which is the point.", name: "Centre director", org: "Early learning centre, Brunswick", site: "4 rooms · daily" },
];

/* SAMPLE articles. */
export const articles = [
  { title: "How many cleaning days does an office really need?", tag: "Planning", read: "4 min", date: "12 Nov 2026", seed: "wc-desk" },
  { title: "What 90% eucalyptus oil means for the air in your office", tag: "Products", read: "6 min", date: "29 Oct 2026", seed: "wc-leaves" },
  { title: "A practice manager's checklist for clinic touchpoints", tag: "Medical", read: "5 min", date: "14 Oct 2026", seed: "wc-clinic" },
  { title: "Why we planted a tree for every clean since day one", tag: "Impact", read: "3 min", date: "30 Sep 2026", seed: "wc-forest" },
];

export const faqs = [
  { q: "Is there a minimum contract?", a: "No. There are zero months of lock-in. You can pause or end the service with notice, and every clean carries a satisfaction guarantee." },
  { q: "What will it cost for our office?", a: "Most offices start between $750 and $1,400 plus GST a month for one clean a week. A useful guide is one cleaning day a week for every seven people. You get a fixed quote within 24 hours of the site walk." },
  { q: "What products do you use?", a: "Our products are 90% eucalyptus oil-based, and we supply the safety data sheet for every product on site." },
  { q: "Who will be cleaning our space?", a: "A consistent team of police-checked, fully insured cleaners. You meet them before the first clean." },
  { q: "Do you clean outside business hours?", a: "Yes. Most offices are cleaned after close or before opening, so the work is done before your team arrives." },
  { q: "Which suburbs do you cover?", a: "Metropolitan Melbourne, from the CBD and South Melbourne out to the inner north, east and west." },
];
