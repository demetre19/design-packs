/*
  The Whistle Clean journal. SAMPLE editorial content for the publishing templates: invented articles, written in the
  brand's voice and consistent with the published facts in brand.ts. Authors are the published team; replace or
  approve every article before launch.
*/

export type Series = { id: string; name: string; line: string };
export const series: Series[] = [
  { id: "field", name: "Field Notes", line: "Reports from the floor, written the morning after." },
  { id: "shelf", name: "The Product Shelf", line: "What we bring on site, and why." },
  { id: "night", name: "Night Shift", line: "The people who clean while Melbourne sleeps." },
  { id: "impact", name: "Impact Ledger", line: "One clean, one tree, accounted for." },
  { id: "guide", name: "Workplace Guide", line: "Practical answers for office and practice managers." },
  { id: "care", name: "Clinic & Care", line: "Cleaning where health and children come first." },
];
export const seriesName = (id: string) => series.find((s) => s.id === id)?.name ?? id;

export type Author = { id: string; name: string; role: string };
export const authors: Author[] = [
  { id: "ivan", name: "Ivan Tan", role: "Founder and Director" },
  { id: "katrina", name: "Katrina S.", role: "Client Wellbeing Ambassador" },
  { id: "irene", name: "Irene T.", role: "Recruitment Coordinator" },
  { id: "evenezer", name: "Evenezer G.", role: "Client Relationship Representative" },
];
export const authorOf = (id: string) => authors.find((a) => a.id === id)!;

export type Format = "Essay" | "Field report" | "Bulletin" | "Visual essay" | "Guide" | "Letters" | "Timeline";

export type Entry = {
  no: number;
  slug: string;
  title: string;
  dek: string;
  series: string;
  author: string;
  date: string; // ISO
  read: number; // minutes
  format: Format;
  seed: string;
  topics: string[];
};

export const entries: Entry[] = [
  { no: 12, slug: "overnight-timeline", title: "One night on Level 4, hour by hour", dek: "From the last person out at 17:46 to the first coffee at 07:58.", series: "field", author: "evenezer", date: "2026-11-18", read: 7, format: "Timeline", seed: "wc-j-night", topics: ["Offices", "Night shift", "Checklists"] },
  { no: 11, slug: "letters-night-shift", title: "Letters from the night shift", dek: "Six months of notes between an office manager and the cleaner she never met.", series: "night", author: "katrina", date: "2026-11-04", read: 9, format: "Letters", seed: "wc-j-letters", topics: ["Night shift", "Communication"] },
  { no: 10, slug: "q3-site-report", title: "Quarter three site report: Level 4, 80 Market St", dek: "What the 90-day walk found, and what we changed.", series: "field", author: "katrina", date: "2026-10-22", read: 8, format: "Field report", seed: "wc-j-report", topics: ["Offices", "Check-ins", "Checklists"] },
  { no: 9, slug: "glass-on-level-4", title: "The glass on Level 4", dek: "A visual essay on partitions, low sun and a dry second pass.", series: "field", author: "evenezer", date: "2026-10-08", read: 4, format: "Visual essay", seed: "wc-j-glass", topics: ["Windows", "Offices"] },
  { no: 8, slug: "tree-every-clean", title: "Why we planted a tree for every clean since day one", dek: "The promise we made in 2014, and what it has cost and returned.", series: "impact", author: "ivan", date: "2026-09-30", read: 6, format: "Essay", seed: "wc-j-forest", topics: ["Trees", "Sustainability", "Company"] },
  { no: 7, slug: "clinic-touchpoints", title: "A practice manager's checklist for clinic touchpoints", dek: "Twelve surfaces that carry the most risk, and how often to treat them.", series: "care", author: "katrina", date: "2026-09-16", read: 5, format: "Bulletin", seed: "wc-j-clinic", topics: ["Medical", "Checklists", "Touchpoints"] },
  { no: 6, slug: "eucalyptus-air", title: "What 90% eucalyptus oil means for the air in your office", dek: "A plain-language read of the safety data sheet.", series: "shelf", author: "evenezer", date: "2026-08-27", read: 6, format: "Bulletin", seed: "wc-j-leaves", topics: ["Products", "Eucalyptus", "Safety data sheets"] },
  { no: 5, slug: "seven-rooms", title: "Seven rooms at 5:42am", dek: "Photographs from a childcare centre in the hour before the first family arrives.", series: "care", author: "irene", date: "2026-08-12", read: 3, format: "Visual essay", seed: "wc-j-rooms", topics: ["Childcare", "Low-tox"] },
  { no: 4, slug: "hardest-working", title: "Cleaners are some of the hardest-working people anywhere", dek: "Why we pay, train and roster the way we do.", series: "night", author: "irene", date: "2026-07-29", read: 7, format: "Essay", seed: "wc-j-people", topics: ["Night shift", "Company", "Hiring"] },
  { no: 3, slug: "cleaning-days", title: "How many cleaning days does an office really need?", dek: "The seven-person rule, worked through for four real floor plans.", series: "guide", author: "evenezer", date: "2026-07-15", read: 6, format: "Guide", seed: "wc-j-desk", topics: ["Offices", "Pricing", "Planning"] },
  { no: 2, slug: "no-lock-in", title: "What 'no lock-in' actually means in our agreement", dek: "Clause by clause, in plain English.", series: "guide", author: "ivan", date: "2026-06-24", read: 4, format: "Guide", seed: "wc-j-contract", topics: ["Contracts", "Company"] },
  { no: 1, slug: "bond-back", title: "Getting the bond back: the agent's list, room by room", dek: "What inspectors actually check at the end of a lease.", series: "guide", author: "katrina", date: "2026-06-10", read: 5, format: "Guide", seed: "wc-j-bond", topics: ["End of lease", "Checklists"] },
];

export const fmtDate = (iso: string, style: "long" | "short" = "long") =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-AU", style === "long" ? { day: "numeric", month: "long", year: "numeric" } : { day: "2-digit", month: "short" });

export const bySlug = (slug: string) => entries.find((e) => e.slug === slug)!;
