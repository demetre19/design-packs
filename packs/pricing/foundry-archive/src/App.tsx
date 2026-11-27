import React, { useState } from 'react';
import { Copy, CheckCheck, Search, Layers } from 'lucide-react';

// Import all navbar components
import { Navbar1, Navbar2, Navbar3, Navbar4 } from './components/navbar/Navbar1';
// Import all hero components
import { Hero1, Hero2, Hero3, Hero4, Hero5 } from './components/heroes/Hero1';
// Import all feature-grid components
import { FeatureGrid1, FeatureGrid2, FeatureGrid3, FeatureGrid4 } from './components/feature-grids/FeatureGrid1';
// Import all pricing components
import { Pricing1, Pricing2, Pricing3, Pricing4 } from './components/pricing/Pricing1';
// Import all testimonial components
import { Testimonial1, Testimonial2, Testimonial3 } from './components/testimonials/Testimonial1';
// Import all blog-card components
import { BlogCard1, BlogCard2, BlogCard3, BlogCard4 } from './components/blog-cards/BlogCard1';
// Import all footer components
import { Footer1, Footer2, Footer3, Footer4 } from './components/footers/Footer1';
// Import all contact-form components
import { ContactForm1, ContactForm2, ContactForm3 } from './components/contact-forms/ContactForm1';
// Import all modal components
import { Modal1, Modal2, Modal3 } from './components/modals/Modal1';
// Import all media components
import { Media1, Media2, Media3 } from './components/media/Media1';
// Import all faq components
import { Faq1, Faq2, Faq3 } from './components/faqs/Faq1';
// Import all cta components
import { Cta1, Cta2, Cta3 } from './components/ctas/Cta1';
// Import all stat components
import { Stat1, Stat2, Stat3 } from './components/stats/Stat1';

// Import all 15 content-section components
import { Content1 } from './components/content/Content1';
import { Content2 } from './components/content/Content2';
import { Content3 } from './components/content/Content3';
import { Content4 } from './components/content/Content4';
import { Content5 } from './components/content/Content5';
import { Content6 } from './components/content/Content6';
import { Content7 } from './components/content/Content7';
import { Content8 } from './components/content/Content8';
import { Content9 } from './components/content/Content9';
import { Content10 } from './components/content/Content10';
import { Content11 } from './components/content/Content11';
import { Content12 } from './components/content/Content12';
import { Content13 } from './components/content/Content13';
import { Content14 } from './components/content/Content14';
import { Content15 } from './components/content/Content15';

import {
  CATEGORIES,
  getTotalComponentCount,
  filterComponentEntries,
  type CategoryId,
  type ComponentEntryMeta,
} from './utils/catalogRegistry';

interface ComponentItem extends ComponentEntryMeta {
  component: React.ReactNode;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('content');
  const [selectedComponentId, setSelectedComponentId] = useState<string>('Content1');
  const [viewMode, setViewMode] = useState<'single' | 'family'>('single');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const componentMap: Record<CategoryId, ComponentItem[]> = {
    content: [
      { id: 'Content1', category: 'content', name: 'Content 1: The Ledger', archetype: 'Annotated Financial Ledger', path: 'src/components/content/Content1.tsx', component: <Content1 /> },
      { id: 'Content2', category: 'content', name: 'Content 2: The Spiral Staircase', archetype: 'Diagonal Stepped Process', path: 'src/components/content/Content2.tsx', component: <Content2 /> },
      { id: 'Content3', category: 'content', name: 'Content 3: The Interlock', archetype: 'Zipper Spine Alternation', path: 'src/components/content/Content3.tsx', component: <Content3 /> },
      { id: 'Content4', category: 'content', name: 'Content 4: The Exploded Diagram', archetype: 'Callout Plate with Leader Lines', path: 'src/components/content/Content4.tsx', component: <Content4 /> },
      { id: 'Content5', category: 'content', name: 'Content 5: The Split Screen Argument', archetype: 'Opposing Zones & Center Seam', path: 'src/components/content/Content5.tsx', component: <Content5 /> },
      { id: 'Content6', category: 'content', name: 'Content 6: The Margin Book', archetype: 'Narrow Prose & Aligned Marginalia', path: 'src/components/content/Content6.tsx', component: <Content6 /> },
      { id: 'Content7', category: 'content', name: 'Content 7: The Film Strip', archetype: 'Continuous Unequal-Width Sequence', path: 'src/components/content/Content7.tsx', component: <Content7 /> },
      { id: 'Content8', category: 'content', name: 'Content 8: The Pinboard', archetype: 'Z-Stacked Overlapping Artifacts', path: 'src/components/content/Content8.tsx', component: <Content8 /> },
      { id: 'Content9', category: 'content', name: 'Content 9: The Index', archetype: 'Typographic Table of Contents', path: 'src/components/content/Content9.tsx', component: <Content9 /> },
      { id: 'Content10', category: 'content', name: 'Content 10: The Interruption', archetype: 'Full-Bleed Statement Fragment', path: 'src/components/content/Content10.tsx', component: <Content10 /> },
      { id: 'Content11', category: 'content', name: 'Content 11: The Specimen Grid', archetype: 'Irregular Datasheet Matrix', path: 'src/components/content/Content11.tsx', component: <Content11 /> },
      { id: 'Content12', category: 'content', name: 'Content 12: The Threaded Narrative', archetype: 'Three-Act Continuous Conduit', path: 'src/components/content/Content12.tsx', component: <Content12 /> },
      { id: 'Content13', category: 'content', name: 'Content 13: The Colophon', archetype: 'Back-Matter Credits Artifact', path: 'src/components/content/Content13.tsx', component: <Content13 /> },
      { id: 'Content14', category: 'content', name: 'Content 14: The Cascade', archetype: 'Shifting Mathematical Score', path: 'src/components/content/Content14.tsx', component: <Content14 /> },
      { id: 'Content15', category: 'content', name: 'Content 15: The Inverted Vault', archetype: 'Radial Circular Composition', path: 'src/components/content/Content15.tsx', component: <Content15 /> },
    ],
    navbar: [
      { id: 'Navbar1', category: 'navbar', name: 'Navbar 1: Archival Wordmark & Era Links', path: 'src/components/navbar/Navbar1.tsx', component: <Navbar1 /> },
      { id: 'Navbar2', category: 'navbar', name: 'Navbar 2: Catalog Nav with Reference Numbers', path: 'src/components/navbar/Navbar1.tsx', component: <Navbar2 /> },
      { id: 'Navbar3', category: 'navbar', name: 'Navbar 3: Top Bar with Vertical Archive Label', path: 'src/components/navbar/Navbar1.tsx', component: <Navbar3 /> },
      { id: 'Navbar4', category: 'navbar', name: 'Navbar 4: Museum Plaque Minimal Nav', path: 'src/components/navbar/Navbar1.tsx', component: <Navbar4 /> },
    ],
    heroes: [
      { id: 'Hero1', category: 'heroes', name: 'Hero 1: Huge Wordmark + Timeline Column', path: 'src/components/heroes/Hero1.tsx', component: <Hero1 /> },
      { id: 'Hero2', category: 'heroes', name: 'Hero 2: Split Hero — Name Left, 3-Col Essay Right', path: 'src/components/heroes/Hero1.tsx', component: <Hero2 /> },
      { id: 'Hero3', category: 'heroes', name: 'Hero 3: Museum Wall Specimen Title & Dates', path: 'src/components/heroes/Hero1.tsx', component: <Hero3 /> },
      { id: 'Hero4', category: 'heroes', name: 'Hero 4: Vertical Rotated Designer Name Margin', path: 'src/components/heroes/Hero1.tsx', component: <Hero4 /> },
      { id: 'Hero5', category: 'heroes', name: 'Hero 5: Weight-List Specimen Rows Stacked', path: 'src/components/heroes/Hero1.tsx', component: <Hero5 /> },
    ],
    'feature-grids': [
      { id: 'FeatureGrid1', category: 'feature-grids', name: 'Grid 1: Era Cards (Huge Year, Foundry Label)', path: 'src/components/feature-grids/FeatureGrid1.tsx', component: <FeatureGrid1 /> },
      { id: 'FeatureGrid2', category: 'feature-grids', name: 'Grid 2: Designer Biography with Vertical Surnames', path: 'src/components/feature-grids/FeatureGrid1.tsx', component: <FeatureGrid2 /> },
      { id: 'FeatureGrid3', category: 'feature-grids', name: 'Grid 3: Collection Archive Grid with References', path: 'src/components/feature-grids/FeatureGrid1.tsx', component: <FeatureGrid3 /> },
      { id: 'FeatureGrid4', category: 'feature-grids', name: 'Grid 4: Comparison Grid (Old vs Neue)', path: 'src/components/feature-grids/FeatureGrid1.tsx', component: <FeatureGrid4 /> },
    ],
    pricing: [
      { id: 'Pricing1', category: 'pricing', name: 'Pricing 1: Archive Membership Acquisition Plates', path: 'src/components/pricing/Pricing1.tsx', component: <Pricing1 /> },
      { id: 'Pricing2', category: 'pricing', name: 'Pricing 2: Foundry Catalog License Table', path: 'src/components/pricing/Pricing1.tsx', component: <Pricing2 /> },
      { id: 'Pricing3', category: 'pricing', name: 'Pricing 3: Single Patron Tier Spotlight', path: 'src/components/pricing/Pricing1.tsx', component: <Pricing3 /> },
      { id: 'Pricing4', category: 'pricing', name: 'Pricing 4: Horizontal Era-Scroll License Cards', path: 'src/components/pricing/Pricing1.tsx', component: <Pricing4 /> },
    ],
    testimonials: [
      { id: 'Testimonial1', category: 'testimonials', name: 'Testimonial 1: Historian Quotes in Essay Columns', path: 'src/components/testimonials/Testimonial1.tsx', component: <Testimonial1 /> },
      { id: 'Testimonial2', category: 'testimonials', name: 'Testimonial 2: Quote Wall as Archival Marginalia', path: 'src/components/testimonials/Testimonial1.tsx', component: <Testimonial2 /> },
      { id: 'Testimonial3', category: 'testimonials', name: 'Testimonial 3: Press Quotes under Hairline Header', path: 'src/components/testimonials/Testimonial1.tsx', component: <Testimonial3 /> },
    ],
    'blog-cards': [
      { id: 'BlogCard1', category: 'blog-cards', name: 'Card 1: Journal Entries as Catalog Cards', path: 'src/components/blog-cards/BlogCard1.tsx', component: <BlogCard1 /> },
      { id: 'BlogCard2', category: 'blog-cards', name: 'Card 2: Timeline List Layout', path: 'src/components/blog-cards/BlogCard1.tsx', component: <BlogCard2 /> },
      { id: 'BlogCard3', category: 'blog-cards', name: 'Card 3: Archive-Grid Mixed Scale', path: 'src/components/blog-cards/BlogCard1.tsx', component: <BlogCard3 /> },
      { id: 'BlogCard4', category: 'blog-cards', name: 'Card 4: Featured Essay with Oversized Year', path: 'src/components/blog-cards/BlogCard1.tsx', component: <BlogCard4 /> },
    ],
    footers: [
      { id: 'Footer1', category: 'footers', name: 'Footer 1: Colophon Dense Credits in Columns', path: 'src/components/footers/Footer1.tsx', component: <Footer1 /> },
      { id: 'Footer2', category: 'footers', name: 'Footer 2: Giant Wordmark + Catalog Numbers', path: 'src/components/footers/Footer1.tsx', component: <Footer2 /> },
      { id: 'Footer3', category: 'footers', name: 'Footer 3: Vertical Rotated Footer Margin Text', path: 'src/components/footers/Footer1.tsx', component: <Footer3 /> },
      { id: 'Footer4', category: 'footers', name: 'Footer 4: Newsletter Specimen-Slip Styling', path: 'src/components/footers/Footer1.tsx', component: <Footer4 /> },
    ],
    'contact-forms': [
      { id: 'ContactForm1', category: 'contact-forms', name: 'Form 1: Research Inquiry Archive Request', path: 'src/components/contact-forms/ContactForm1.tsx', component: <ContactForm1 /> },
      { id: 'ContactForm2', category: 'contact-forms', name: 'Form 2: Split Archival Framing Left, Inputs Right', path: 'src/components/contact-forms/ContactForm1.tsx', component: <ContactForm2 /> },
      { id: 'ContactForm3', category: 'contact-forms', name: 'Form 3: Minimal Single-Column Catalog Inquiry', path: 'src/components/contact-forms/ContactForm1.tsx', component: <ContactForm3 /> },
    ],
    modals: [
      { id: 'Modal1', category: 'modals', name: 'Modal 1: Specimen Detail Modal with Era Timeline', path: 'src/components/modals/Modal1.tsx', component: <Modal1 /> },
      { id: 'Modal2', category: 'modals', name: 'Modal 2: Acquisition License Modal', path: 'src/components/modals/Modal1.tsx', component: <Modal2 /> },
      { id: 'Modal3', category: 'modals', name: 'Modal 3: Museum Admission Ticket Pass', path: 'src/components/modals/Modal1.tsx', component: <Modal3 /> },
    ],
    media: [
      { id: 'Media1', category: 'media', name: 'Media 1: Documentary Plate with Caption Plate', path: 'src/components/media/Media1.tsx', component: <Media1 /> },
      { id: 'Media2', category: 'media', name: 'Media 2: Gallery of Small Framed Specimens', path: 'src/components/media/Media1.tsx', component: <Media2 /> },
      { id: 'Media3', category: 'media', name: 'Media 3: Single Feature Plate with Museum Label', path: 'src/components/media/Media1.tsx', component: <Media3 /> },
    ],
    faqs: [
      { id: 'Faq1', category: 'faqs', name: 'FAQ 1: Archival Q&A in Dense Small-Type Columns', path: 'src/components/faqs/Faq1.tsx', component: <Faq1 /> },
      { id: 'Faq2', category: 'faqs', name: 'FAQ 2: Accordion with Year-Indexed Questions', path: 'src/components/faqs/Faq1.tsx', component: <Faq2 /> },
      { id: 'Faq3', category: 'faqs', name: 'FAQ 3: Single-Column Reading-Room FAQ', path: 'src/components/faqs/Faq1.tsx', component: <Faq3 /> },
    ],
    ctas: [
      { id: 'Cta1', category: 'ctas', name: 'CTA 1: Visit-the-Archive CTA with Ticket Energy', path: 'src/components/ctas/Cta1.tsx', component: <Cta1 /> },
      { id: 'Cta2', category: 'ctas', name: 'CTA 2: Centered Memorial CTA Under Huge Year', path: 'src/components/ctas/Cta1.tsx', component: <Cta2 /> },
      { id: 'Cta3', category: 'ctas', name: 'CTA 3: Split CTA with Vertical Rotated Label', path: 'src/components/ctas/Cta1.tsx', component: <Cta3 /> },
    ],
    stats: [
      { id: 'Stat1', category: 'stats', name: 'Stat 1: Collection Counts as Archive Monuments', path: 'src/components/stats/Stat1.tsx', component: <Stat1 /> },
      { id: 'Stat2', category: 'stats', name: 'Stat 2: Stat Row as Timeline Strip', path: 'src/components/stats/Stat1.tsx', component: <Stat2 /> },
      { id: 'Stat3', category: 'stats', name: 'Stat 3: Single Spotlight — Enormous Founding Year', path: 'src/components/stats/Stat1.tsx', component: <Stat3 /> },
    ],
  };

  const totalComponents = getTotalComponentCount(CATEGORIES);
  const currentComponents = componentMap[activeCategory];
  const filteredComponents = filterComponentEntries(currentComponents, searchQuery) as ComponentItem[];
  const activeComponent =
    currentComponents.find((c) => c.id === selectedComponentId) || currentComponents[0];

  const handleCategoryChange = (cat: CategoryId) => {
    setActiveCategory(cat);
    setSelectedComponentId(componentMap[cat][0].id);
    setSearchQuery('');
  };

  const copyPath = () => {
    navigator.clipboard.writeText(activeComponent.path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-mono flex flex-col selection:bg-neutral-700 selection:text-white">
      {/* Top Museum Header */}
      <header className="border-b border-neutral-800 bg-neutral-950 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-3 text-xs text-neutral-400 mb-1">
              <span>FOUNDRY ARCHIVE SYSTEM</span>
              <span aria-hidden="true">·</span>
              <span>EST. 1957</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{totalComponents} SELF-CONTAINED COMPONENTS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
              TYPOGRAPHICA <span className="text-neutral-500 italic">MUSEUM</span>
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-400">
              FILE: <span className="text-white font-bold">{activeComponent.path}</span>
            </div>
            <button
              type="button"
              onClick={copyPath}
              className="bg-white text-neutral-900 px-4 py-2 font-bold hover:bg-neutral-200 transition-colors flex items-center space-x-1.5 whitespace-nowrap shrink-0"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED PATH' : 'COPY PATH'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar Categories & Component Explorer */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-neutral-800">
        {/* Left Sidebar: Categories & Component List */}
        <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-neutral-800 bg-neutral-950 p-6 space-y-6">
          <div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">
              ELEMENT FAMILIES ({CATEGORIES.length} FOLDERS)
            </div>
            <nav aria-label="Component families" className="space-y-1">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-3 py-2 text-xs flex justify-between items-center transition-colors ${
                      isActive
                        ? 'bg-neutral-800 text-white font-bold'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-neutral-500 font-mono tabular-nums">
                      [{cat.count}]
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-neutral-800 pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="variant-filter"
                className="text-[10px] text-neutral-500 uppercase tracking-widest"
              >
                SELECT VARIANT
              </label>
              <span className="text-[10px] text-neutral-600 tabular-nums">
                {filteredComponents.length}/{currentComponents.length}
              </span>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="variant-filter"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by title or structure..."
                className="w-full bg-neutral-900 border border-neutral-800 pl-8 pr-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {filteredComponents.length === 0 ? (
                <div className="p-4 border border-neutral-800 text-xs text-neutral-500 text-center">
                  No specimens match “{searchQuery}”.
                </div>
              ) : (
                filteredComponents.map((comp) => {
                  const isSelected = selectedComponentId === comp.id && viewMode === 'single';
                  return (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={() => {
                        setSelectedComponentId(comp.id);
                        setViewMode('single');
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className={`w-full text-left p-3 text-xs border transition-all ${
                        isSelected
                          ? 'bg-neutral-800 border-neutral-500 text-white font-bold'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex justify-between text-[10px] text-neutral-500 mb-1">
                        <span>{comp.id}</span>
                        {comp.archetype && (
                          <span className="truncate max-w-[130px] text-neutral-600">
                            {comp.archetype}
                          </span>
                        )}
                      </div>
                      <div className="font-serif text-neutral-200 leading-snug">{comp.name}</div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 text-[10px] text-neutral-500 space-y-1.5">
            <div>STYLE: FOUNDRY ARCHIVE</div>
            <div>PALETTE: OFF-BLACK PAPER / NEUTRAL-900</div>
            <div>TYPOGRAPHY: EDITORIAL SERIF &amp; MONO</div>
          </div>
        </aside>

        {/* Right Preview Area */}
        <main className="lg:col-span-9 bg-neutral-900 flex flex-col min-w-0">
          <div className="border-b border-neutral-800 bg-neutral-950 px-6 py-3 flex flex-wrap justify-between items-center gap-3 text-xs">
            <div className="text-neutral-400 flex items-center space-x-2">
              <span className="text-white font-bold">
                {viewMode === 'family' ? `${activeCategory.toUpperCase()} STACK` : activeComponent.id}
              </span>
              <span className="text-neutral-600">—</span>
              <span className="text-neutral-400">
                {viewMode === 'family'
                  ? `All ${currentComponents.length} specimens rendered sequentially`
                  : activeComponent.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 text-[11px] border transition-colors whitespace-nowrap shrink-0 ${
                  viewMode === 'single'
                    ? 'bg-white text-neutral-900 border-white font-bold'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                Single Specimen
              </button>
              <button
                type="button"
                onClick={() => setViewMode('family')}
                className={`px-3 py-1.5 text-[11px] border transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  viewMode === 'family'
                    ? 'bg-white text-neutral-900 border-white font-bold'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>All in Family ({currentComponents.length})</span>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-neutral-900 overflow-y-auto">
            {viewMode === 'single' ? (
              activeComponent.component
            ) : (
              <div>
                {currentComponents.map((item) => (
                  <div key={item.id} data-testid={`specimen-${item.id}`}>
                    {item.component}
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Museum Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-6 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div>TYPOGRAPHICA ARCHIV — DESIGN SYSTEM SPECIMEN V2.5</div>
          <div className="mt-2 sm:mt-0 tabular-nums">
            {totalComponents} SELF-CONTAINED COMPONENTS · 100% TAILWIND CSS · ZERO LOREM IPSUM
          </div>
        </div>
      </footer>
    </div>
  );
}
