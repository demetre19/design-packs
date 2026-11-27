export interface ComponentEntry {
  id: string;
  name: string;
  category:
    | 'navbar'
    | 'heroes'
    | 'features'
    | 'pricing'
    | 'testimonials'
    | 'blog'
    | 'footers'
    | 'contact'
    | 'modals'
    | 'media'
    | 'faqs'
    | 'ctas'
    | 'stats'
    | 'content';
  subtitle: string;
}

export const DESIGN_SYSTEM_CATALOG: ComponentEntry[] = [
  { id: 'Navbar1', name: 'Navbar1', category: 'navbar', subtitle: 'Hard black bar + wordmark + red zone' },
  { id: 'Navbar2', name: 'Navbar2', category: 'navbar', subtitle: 'Asymmetric: logo left, links right' },
  { id: 'Navbar3', name: 'Navbar3', category: 'navbar', subtitle: 'Vertical rotated wordmark left edge' },
  { id: 'Navbar4', name: 'Navbar4', category: 'navbar', subtitle: 'Oversized hamburger target + menu' },

  { id: 'Hero1', name: 'Hero1', category: 'heroes', subtitle: 'Gigantic headline + full-bleed image plate' },
  { id: 'Hero2', name: 'Hero2', category: 'heroes', subtitle: 'Vertical word left + narrow image right' },
  { id: 'Hero3', name: 'Hero3', category: 'heroes', subtitle: 'Diagonal red-black stripes + scale title' },
  { id: 'Hero4', name: 'Hero4', category: 'heroes', subtitle: 'Oversized numeral background object' },
  { id: 'Hero5', name: 'Hero5', category: 'heroes', subtitle: 'Split hero: huge black mass left, spec right' },

  { id: 'FeatureGrid1', name: 'FeatureGrid1', category: 'features', subtitle: '3-column cards + oversized index numerals' },
  { id: 'FeatureGrid2', name: 'FeatureGrid2', category: 'features', subtitle: 'Colliding rows with large titles' },
  { id: 'FeatureGrid3', name: 'FeatureGrid3', category: 'features', subtitle: 'Staggered asymmetric grid' },
  { id: 'FeatureGrid4', name: 'FeatureGrid4', category: 'features', subtitle: 'Giant title above dense micro-grid' },

  { id: 'Pricing1', name: 'Pricing1', category: 'pricing', subtitle: '3-tier cards with gigantic prices' },
  { id: 'Pricing2', name: 'Pricing2', category: 'pricing', subtitle: 'Single centered massive price + mono breakdown' },
  { id: 'Pricing3', name: 'Pricing3', category: 'pricing', subtitle: 'Asymmetric pricing: big left, stacked right' },
  { id: 'Pricing4', name: 'Pricing4', category: 'pricing', subtitle: 'Scale contrast comparison matrix table' },

  { id: 'Testimonials1', name: 'Testimonials1', category: 'testimonials', subtitle: 'Huge cropped quote word + attribution' },
  { id: 'Testimonials2', name: 'Testimonials2', category: 'testimonials', subtitle: 'Quote slider + oversized background glyph' },
  { id: 'Testimonials3', name: 'Testimonials3', category: 'testimonials', subtitle: 'Asymmetric quote wall' },

  { id: 'BlogCard1', name: 'BlogCard1', category: 'blog', subtitle: 'Article index + massive cropped titles' },
  { id: 'BlogCard2', name: 'BlogCard2', category: 'blog', subtitle: 'Featured story collision + small rows' },
  { id: 'BlogCard3', name: 'BlogCard3', category: 'blog', subtitle: 'Archive oversized-numeral register' },
  { id: 'BlogCard4', name: 'BlogCard4', category: 'blog', subtitle: 'Scale-staggered editorial wall' },

  { id: 'Footer1', name: 'Footer1', category: 'footers', subtitle: 'Black band + off-canvas wordmark' },
  { id: 'Footer2', name: 'Footer2', category: 'footers', subtitle: 'Massive contact word + tiny precise columns' },
  { id: 'Footer3', name: 'Footer3', category: 'footers', subtitle: 'Asymmetric footer: heavy left, sparse right' },
  { id: 'Footer4', name: 'Footer4', category: 'footers', subtitle: 'Minimal huge-arrow footer' },

  { id: 'ContactForm1', name: 'ContactForm1', category: 'contact', subtitle: 'Form beside vertical CONTACT word' },
  { id: 'ContactForm2', name: 'ContactForm2', category: 'contact', subtitle: 'Precise form floating in large white field' },
  { id: 'ContactForm3', name: 'ContactForm3', category: 'contact', subtitle: 'Newsletter strip + giant input target' },

  { id: 'Modal1', name: 'Modal1', category: 'modals', subtitle: 'Centered dialog + oversized cropped title' },
  { id: 'Modal2', name: 'Modal2', category: 'modals', subtitle: 'Scale-contrast choice dialog' },
  { id: 'Modal3', name: 'Modal3', category: 'modals', subtitle: 'Slide-over drawer with settings' },

  { id: 'Media1', name: 'Media1', category: 'media', subtitle: 'Full-width plate + tiny corner captions' },
  { id: 'Media2', name: 'Media2', category: 'media', subtitle: 'Gallery scale-staggered wall' },
  { id: 'Media3', name: 'Media3', category: 'media', subtitle: 'Video plate + oversized play glyph' },

  { id: 'Faq1', name: 'Faq1', category: 'faqs', subtitle: 'Accordion rows + oversized indices' },
  { id: 'Faq2', name: 'Faq2', category: 'faqs', subtitle: 'Two-column FAQ with big title left' },
  { id: 'Faq3', name: 'Faq3', category: 'faqs', subtitle: 'Numbered FAQ with massive faint numerals' },

  { id: 'Cta1', name: 'Cta1', category: 'ctas', subtitle: 'Gigantic cropped command word + red button' },
  { id: 'Cta2', name: 'Cta2', category: 'ctas', subtitle: 'Black inversion band + huge white type' },
  { id: 'Cta3', name: 'Cta3', category: 'ctas', subtitle: 'Minimal huge arrow + label band' },

  { id: 'Stat1', name: 'Stat1', category: 'stats', subtitle: 'Gigantic numerals + tiny mono unit annotations' },
  { id: 'Stat2', name: 'Stat2', category: 'stats', subtitle: 'Scale-contrast stat wall: one huge, several small' },
  { id: 'Stat3', name: 'Stat3', category: 'stats', subtitle: 'Register stats with oversized index column' },
  { id: 'Stat4', name: 'Stat4', category: 'stats', subtitle: 'Single dominant number + micro-breakdown rows' },

  { id: 'Content1', name: 'Content1', category: 'content', subtitle: 'The Ledger — dense annotated financial/BOM program' },
  { id: 'Content2', name: 'Content2', category: 'content', subtitle: 'The Spiral Staircase — diagonal stepped protocol with drawn line' },
  { id: 'Content3', name: 'Content3', category: 'content', subtitle: 'The Interlock — zipper-tooth columns straddling center spine' },
  { id: 'Content4', name: 'Content4', category: 'content', subtitle: 'The Exploded Diagram — central plate with SVG leader lines' },
  { id: 'Content5', name: 'Content5', category: 'content', subtitle: 'The Split Screen Argument — inverted opposition + VS seam' },
  { id: 'Content6', name: 'Content6', category: 'content', subtitle: 'The Margin Book — narrow essay + aligned marginalia' },
  { id: 'Content7', name: 'Content7', category: 'content', subtitle: 'The Film Strip — unequal frame widths with sprocket tracks' },
  { id: 'Content8', name: 'Content8', category: 'content', subtitle: 'The Pinboard — controlled z-stacked collision & rotation' },
  { id: 'Content9', name: 'Content9', category: 'content', subtitle: 'The Index — dense monograph TOC with hairline leaders' },
  { id: 'Content10', name: 'Content10', category: 'content', subtitle: 'The Interruption — full-bleed 15vw typographic break' },
  { id: 'Content11', name: 'Content11', category: 'content', subtitle: 'The Specimen Grid — irregular datasheet matrix' },
  { id: 'Content12', name: 'Content12', category: 'content', subtitle: 'The Threaded Narrative — 3 distinct acts linked by red thread' },
  { id: 'Content13', name: 'Content13', category: 'content', subtitle: 'The Colophon — dense back-matter artifact in 4 columns' },
  { id: 'Content14', name: 'Content14', category: 'content', subtitle: 'The Cascade — mathematical score-rhythm shifting widths' },
  { id: 'Content15', name: 'Content15', category: 'content', subtitle: 'The Inverted Vault — black radial/circular composition' },
];

export function countByCategory(category: ComponentEntry['category']): number {
  return DESIGN_SYSTEM_CATALOG.filter((c) => c.category === category).length;
}

export function computeRadialPoint(
  angleDegrees: number,
  radiusPercent: number,
  centerPercent = 50
): { x: number; y: number } {
  const rad = ((angleDegrees - 90) * Math.PI) / 180;
  return {
    x: Number((centerPercent + radiusPercent * Math.cos(rad)).toFixed(2)),
    y: Number((centerPercent + radiusPercent * Math.sin(rad)).toFixed(2)),
  };
}
