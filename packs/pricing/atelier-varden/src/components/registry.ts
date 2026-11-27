import { Navbar1 } from './navbar/Navbar1';
import { Navbar2 } from './navbar/Navbar2';
import { Navbar3 } from './navbar/Navbar3';
import { Navbar4 } from './navbar/Navbar4';

import { Hero1 } from './heroes/Hero1';
import { Hero2 } from './heroes/Hero2';
import { Hero3 } from './heroes/Hero3';
import { Hero4 } from './heroes/Hero4';
import { Hero5 } from './heroes/Hero5';

import { FeatureGrid1 } from './feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './feature-grids/FeatureGrid4';

import { Pricing1 } from './pricing/Pricing1';
import { Pricing2 } from './pricing/Pricing2';
import { Pricing3 } from './pricing/Pricing3';
import { Pricing4 } from './pricing/Pricing4';

import { Testimonial1 } from './testimonials/Testimonial1';
import { Testimonial2 } from './testimonials/Testimonial2';
import { Testimonial3 } from './testimonials/Testimonial3';

import { BlogCard1 } from './blog-cards/BlogCard1';
import { BlogCard2 } from './blog-cards/BlogCard2';
import { BlogCard3 } from './blog-cards/BlogCard3';
import { BlogCard4 } from './blog-cards/BlogCard4';

import { Footer1 } from './footers/Footer1';
import { Footer2 } from './footers/Footer2';
import { Footer3 } from './footers/Footer3';
import { Footer4 } from './footers/Footer4';

import { ContactForm1 } from './contact-forms/ContactForm1';
import { ContactForm2 } from './contact-forms/ContactForm2';
import { ContactForm3 } from './contact-forms/ContactForm3';

import { Modal1 } from './modals/Modal1';
import { Modal2 } from './modals/Modal2';
import { Modal3 } from './modals/Modal3';

import { Media1 } from './media/Media1';
import { Media2 } from './media/Media2';
import { Media3 } from './media/Media3';

import { FAQ1 } from './faqs/FAQ1';
import { FAQ2 } from './faqs/FAQ2';
import { FAQ3 } from './faqs/FAQ3';

import { CTA1 } from './ctas/CTA1';
import { CTA2 } from './ctas/CTA2';
import { CTA3 } from './ctas/CTA3';

import { Stat1 } from './stats/Stat1';
import { Stat2 } from './stats/Stat2';
import { Stat3 } from './stats/Stat3';
import { Stat4 } from './stats/Stat4';

import { Content1 } from './content/Content1';
import { Content2 } from './content/Content2';
import { Content3 } from './content/Content3';
import { Content4 } from './content/Content4';
import { Content5 } from './content/Content5';
import { Content6 } from './content/Content6';
import { Content7 } from './content/Content7';
import { Content8 } from './content/Content8';
import { Content9 } from './content/Content9';
import { Content10 } from './content/Content10';
import { Content11 } from './content/Content11';
import { Content12 } from './content/Content12';
import { Content13 } from './content/Content13';
import { Content14 } from './content/Content14';
import { Content15 } from './content/Content15';

export interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ComponentType;
  codeSnippet: string;
}

export const categories = [
  { id: 'navbar', name: 'Navigation (4)', count: 4 },
  { id: 'heroes', name: 'Heroes (5)', count: 5 },
  { id: 'feature-grids', name: 'Feature Grids (4)', count: 4 },
  { id: 'pricing', name: 'Pricing & Tiers (4)', count: 4 },
  { id: 'testimonials', name: 'Testimonials (3)', count: 3 },
  { id: 'blog-cards', name: 'Journal & Blog (4)', count: 4 },
  { id: 'footers', name: 'Footers (4)', count: 4 },
  { id: 'contact-forms', name: 'Contact Forms (3)', count: 3 },
  { id: 'modals', name: 'Modals & Dialogs (3)', count: 3 },
  { id: 'media', name: 'Media & Galleries (3)', count: 3 },
  { id: 'faqs', name: 'FAQs & Accordions (3)', count: 3 },
  { id: 'ctas', name: 'Call to Actions (3)', count: 3 },
  { id: 'stats', name: 'Statistics & Metrics (4)', count: 4 },
  { id: 'content', name: 'Content Sections (15)', count: 15 },
];

export const allComponents: ComponentItem[] = [
  // Navbar
  { id: 'navbar-1', name: 'Navbar 1: Clean Bar & CTA', category: 'navbar', component: Navbar1, codeSnippet: 'import { Navbar1 } from "./components/navbar/Navbar1";' },
  { id: 'navbar-2', name: 'Navbar 2: Header with Hairline Bottom', category: 'navbar', component: Navbar2, codeSnippet: 'import { Navbar2 } from "./components/navbar/Navbar2";' },
  { id: 'navbar-3', name: 'Navbar 3: Centered Masthead', category: 'navbar', component: Navbar3, codeSnippet: 'import { Navbar3 } from "./components/navbar/Navbar3";' },
  { id: 'navbar-4', name: 'Navbar 4: Dropdown Panel', category: 'navbar', component: Navbar4, codeSnippet: 'import { Navbar4 } from "./components/navbar/Navbar4";' },

  // Heroes
  { id: 'hero-1', name: 'Hero 1: Horizontal Image Composition', category: 'heroes', component: Hero1, codeSnippet: 'import { Hero1 } from "./components/heroes/Hero1";' },
  { id: 'hero-2', name: 'Hero 2: Spec Register Panel Right', category: 'heroes', component: Hero2, codeSnippet: 'import { Hero2 } from "./components/heroes/Hero2";' },
  { id: 'hero-3', name: 'Hero 3: Bottom Spec Strip Cells', category: 'heroes', component: Hero3, codeSnippet: 'import { Hero3 } from "./components/heroes/Hero3";' },
  { id: 'hero-4', name: 'Hero 4: Full-Width Framed Image & Caption', category: 'heroes', component: Hero4, codeSnippet: 'import { Hero4 } from "./components/heroes/Hero4";' },
  { id: 'hero-5', name: 'Hero 5: Narrow Text & Tall Visual', category: 'heroes', component: Hero5, codeSnippet: 'import { Hero5 } from "./components/heroes/Hero5";' },

  // Feature Grids
  { id: 'feature-grid-1', name: 'FeatureGrid 1: Stone Panels & Indices', category: 'feature-grids', component: FeatureGrid1, codeSnippet: 'import { FeatureGrid1 } from "./components/feature-grids/FeatureGrid1";' },
  { id: 'feature-grid-2', name: 'FeatureGrid 2: Aligned Project Register', category: 'feature-grids', component: FeatureGrid2, codeSnippet: 'import { FeatureGrid2 } from "./components/feature-grids/FeatureGrid2";' },
  { id: 'feature-grid-3', name: 'FeatureGrid 3: Alternating Framed Media', category: 'feature-grids', component: FeatureGrid3, codeSnippet: 'import { FeatureGrid3 } from "./components/feature-grids/FeatureGrid3";' },
  { id: 'feature-grid-4', name: 'FeatureGrid 4: 2x2 Hairline Grid', category: 'feature-grids', component: FeatureGrid4, codeSnippet: 'import { FeatureGrid4 } from "./components/feature-grids/FeatureGrid4";' },

  // Pricing
  { id: 'pricing-1', name: 'Pricing 1: Flagship Terracotta Ring', category: 'pricing', component: Pricing1, codeSnippet: 'import { Pricing1 } from "./components/pricing/Pricing1";' },
  { id: 'pricing-2', name: 'Pricing 2: Project-Package Spec Rows', category: 'pricing', component: Pricing2, codeSnippet: 'import { Pricing2 } from "./components/pricing/Pricing2";' },
  { id: 'pricing-3', name: 'Pricing 3: Centered Price Register', category: 'pricing', component: Pricing3, codeSnippet: 'import { Pricing3 } from "./components/pricing/Pricing3";' },
  { id: 'pricing-4', name: 'Pricing 4: Column Comparison Table', category: 'pricing', component: Pricing4, codeSnippet: 'import { Pricing4 } from "./components/pricing/Pricing4";' },

  // Testimonials
  { id: 'testimonial-1', name: 'Testimonial 1: Large Calm Quote', category: 'testimonials', component: Testimonial1, codeSnippet: 'import { Testimonial1 } from "./components/testimonials/Testimonial1";' },
  { id: 'testimonial-2', name: 'Testimonial 2: Aligned Grid Attributions', category: 'testimonials', component: Testimonial2, codeSnippet: 'import { Testimonial2 } from "./components/testimonials/Testimonial2";' },
  { id: 'testimonial-3', name: 'Testimonial 3: Stone Panel Backing', category: 'testimonials', component: Testimonial3, codeSnippet: 'import { Testimonial3 } from "./components/testimonials/Testimonial3";' },

  // Blog Cards
  { id: 'blog-card-1', name: 'BlogCard 1: 3-Column Articles', category: 'blog-cards', component: BlogCard1, codeSnippet: 'import { BlogCard1 } from "./components/blog-cards/BlogCard1";' },
  { id: 'blog-card-2', name: 'BlogCard 2: Featured Story & Specs', category: 'blog-cards', component: BlogCard2, codeSnippet: 'import { BlogCard2 } from "./components/blog-cards/BlogCard2";' },
  { id: 'blog-card-3', name: 'BlogCard 3: Archive Register Table', category: 'blog-cards', component: BlogCard3, codeSnippet: 'import { BlogCard3 } from "./components/blog-cards/BlogCard3";' },
  { id: 'blog-card-4', name: 'BlogCard 4: Article Header Meta', category: 'blog-cards', component: BlogCard4, codeSnippet: 'import { BlogCard4 } from "./components/blog-cards/BlogCard4";' },

  // Footers
  { id: 'footer-1', name: 'Footer 1: Charcoal Band & Accents', category: 'footers', component: Footer1, codeSnippet: 'import { Footer1 } from "./components/footers/Footer1";' },
  { id: 'footer-2', name: 'Footer 2: Aligned Column Register', category: 'footers', component: Footer2, codeSnippet: 'import { Footer2 } from "./components/footers/Footer2";' },
  { id: 'footer-3', name: 'Footer 3: Minimal Index Footer', category: 'footers', component: Footer3, codeSnippet: 'import { Footer3 } from "./components/footers/Footer3";' },
  { id: 'footer-4', name: 'Footer 4: Stone Panel Accent', category: 'footers', component: Footer4, codeSnippet: 'import { Footer4 } from "./components/footers/Footer4";' },

  // Contact Forms
  { id: 'contact-form-1', name: 'ContactForm 1: Split Form & Office Details', category: 'contact-forms', component: ContactForm1, codeSnippet: 'import { ContactForm1 } from "./components/contact-forms/ContactForm1";' },
  { id: 'contact-form-2', name: 'ContactForm 2: Hairline Underline Form', category: 'contact-forms', component: ContactForm2, codeSnippet: 'import { ContactForm2 } from "./components/contact-forms/ContactForm2";' },
  { id: 'contact-form-3', name: 'ContactForm 3: Newsletter Strip', category: 'contact-forms', component: ContactForm3, codeSnippet: 'import { ContactForm3 } from "./components/contact-forms/ContactForm3";' },

  // Modals
  { id: 'modal-1', name: 'Modal 1: Sharp-Corner Dialog', category: 'modals', component: Modal1, codeSnippet: 'import { Modal1 } from "./components/modals/Modal1";' },
  { id: 'modal-2', name: 'Modal 2: Two-Button Confirm', category: 'modals', component: Modal2, codeSnippet: 'import { Modal2 } from "./components/modals/Modal2";' },
  { id: 'modal-3', name: 'Modal 3: Slide-Over Register Rows', category: 'modals', component: Modal3, codeSnippet: 'import { Modal3 } from "./components/modals/Modal3";' },

  // Media
  { id: 'media-1', name: 'Media 1: Framed Plate & Caption', category: 'media', component: Media1, codeSnippet: 'import { Media1 } from "./components/media/Media1";' },
  { id: 'media-2', name: 'Media 2: Rectangular Grid Gallery', category: 'media', component: Media2, codeSnippet: 'import { Media2 } from "./components/media/Media2";' },
  { id: 'media-3', name: 'Media 3: Cinematic Video Plate', category: 'media', component: Media3, codeSnippet: 'import { Media3 } from "./components/media/Media3";' },

  // FAQs
  { id: 'faq-1', name: 'FAQ 1: Hairline Accordion Rows', category: 'faqs', component: FAQ1, codeSnippet: 'import { FAQ1 } from "./components/faqs/FAQ1";' },
  { id: 'faq-2', name: 'FAQ 2: Two-Column Register FAQ', category: 'faqs', component: FAQ2, codeSnippet: 'import { FAQ2 } from "./components/faqs/FAQ2";' },
  { id: 'faq-3', name: 'FAQ 3: Terracotta Indexed FAQ', category: 'faqs', component: FAQ3, codeSnippet: 'import { FAQ3 } from "./components/faqs/FAQ3";' },

  // CTAs
  { id: 'cta-1', name: 'CTA 1: Calm Statement & Button', category: 'ctas', component: CTA1, codeSnippet: 'import { CTA1 } from "./components/ctas/CTA1";' },
  { id: 'cta-2', name: 'CTA 2: Inverted Stone Panel Band', category: 'ctas', component: CTA2, codeSnippet: 'import { CTA2 } from "./components/ctas/CTA2";' },
  { id: 'cta-3', name: 'CTA 3: Minimal Label & Single Action', category: 'ctas', component: CTA3, codeSnippet: 'import { CTA3 } from "./components/ctas/CTA3";' },

  // Stats
  { id: 'stat-1', name: 'Stat 1: Register Statistics Grid', category: 'stats', component: Stat1, codeSnippet: 'import { Stat1 } from "./components/stats/Stat1";' },
  { id: 'stat-2', name: 'Stat 2: Big Calm Numerals', category: 'stats', component: Stat2, codeSnippet: 'import { Stat2 } from "./components/stats/Stat2";' },
  { id: 'stat-3', name: 'Stat 3: Spec-Table Stats', category: 'stats', component: Stat3, codeSnippet: 'import { Stat3 } from "./components/stats/Stat3";' },
  { id: 'stat-4', name: 'Stat 4: Stone-Panel Stat Strip', category: 'stats', component: Stat4, codeSnippet: 'import { Stat4 } from "./components/stats/Stat4";' },

  // Content Sections
  { id: 'content-1', name: 'Content 1: The Ledger', category: 'content', component: Content1, codeSnippet: 'import { Content1 } from "./components/content/Content1";' },
  { id: 'content-2', name: 'Content 2: The Spiral Staircase', category: 'content', component: Content2, codeSnippet: 'import { Content2 } from "./components/content/Content2";' },
  { id: 'content-3', name: 'Content 3: The Interlock', category: 'content', component: Content3, codeSnippet: 'import { Content3 } from "./components/content/Content3";' },
  { id: 'content-4', name: 'Content 4: The Exploded Diagram', category: 'content', component: Content4, codeSnippet: 'import { Content4 } from "./components/content/Content4";' },
  { id: 'content-5', name: 'Content 5: The Split Screen Argument', category: 'content', component: Content5, codeSnippet: 'import { Content5 } from "./components/content/Content5";' },
  { id: 'content-6', name: 'Content 6: The Margin Book', category: 'content', component: Content6, codeSnippet: 'import { Content6 } from "./components/content/Content6";' },
  { id: 'content-7', name: 'Content 7: The Film Strip', category: 'content', component: Content7, codeSnippet: 'import { Content7 } from "./components/content/Content7";' },
  { id: 'content-8', name: 'Content 8: The Pinboard', category: 'content', component: Content8, codeSnippet: 'import { Content8 } from "./components/content/Content8";' },
  { id: 'content-9', name: 'Content 9: The Index', category: 'content', component: Content9, codeSnippet: 'import { Content9 } from "./components/content/Content9";' },
  { id: 'content-10', name: 'Content 10: The Interruption', category: 'content', component: Content10, codeSnippet: 'import { Content10 } from "./components/content/Content10";' },
  { id: 'content-11', name: 'Content 11: The Specimen Grid', category: 'content', component: Content11, codeSnippet: 'import { Content11 } from "./components/content/Content11";' },
  { id: 'content-12', name: 'Content 12: The Threaded Narrative', category: 'content', component: Content12, codeSnippet: 'import { Content12 } from "./components/content/Content12";' },
  { id: 'content-13', name: 'Content 13: The Colophon', category: 'content', component: Content13, codeSnippet: 'import { Content13 } from "./components/content/Content13";' },
  { id: 'content-14', name: 'Content 14: The Cascade', category: 'content', component: Content14, codeSnippet: 'import { Content14 } from "./components/content/Content14";' },
  { id: 'content-15', name: 'Content 15: The Inverted Vault', category: 'content', component: Content15, codeSnippet: 'import { Content15 } from "./components/content/Content15";' },
];

export function filterComponents(
  items: ComponentItem[],
  activeCategory: string,
  searchQuery: string
): ComponentItem[] {
  const q = searchQuery.trim().toLowerCase();
  return items.filter((c) => {
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
    const matchesSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
}
