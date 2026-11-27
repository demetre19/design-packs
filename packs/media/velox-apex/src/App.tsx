import React, { useState } from 'react';
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

import { Testimonials1 } from './components/testimonials/Testimonials1';
import { Testimonials2 } from './components/testimonials/Testimonials2';
import { Testimonials3 } from './components/testimonials/Testimonials3';

import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

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

import { DESIGN_SYSTEM_CATALOG } from './utils/designSystemRegistry';

import { Layers, Check, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'showcase' | 'content' | 'navbar' | 'heroes' | 'features' | 'pricing' | 'testimonials' | 'blog' | 'footers' | 'contact' | 'modals' | 'media' | 'faqs' | 'ctas' | 'stats'>('showcase');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const copyComponentInfo = (name: string) => {
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const totalComponents = DESIGN_SYSTEM_CATALOG.length;

  const categories = [
    { id: 'showcase', label: 'FULL LANDING SHOWCASE' },
    { id: 'content', label: 'CONTENT SECTIONS (15)' },
    { id: 'all', label: `ALL ${totalComponents} COMPONENTS` },
    { id: 'navbar', label: 'NAVBARS (4)' },
    { id: 'heroes', label: 'HEROES (5)' },
    { id: 'features', label: 'FEATURE GRIDS (4)' },
    { id: 'pricing', label: 'PRICING (4)' },
    { id: 'testimonials', label: 'TESTIMONIALS (3)' },
    { id: 'blog', label: 'BLOG & EDITORIAL (4)' },
    { id: 'footers', label: 'FOOTERS (4)' },
    { id: 'contact', label: 'CONTACT FORMS (3)' },
    { id: 'modals', label: 'MODALS (3)' },
    { id: 'media', label: 'MEDIA & GALLERY (3)' },
    { id: 'faqs', label: 'FAQS (3)' },
    { id: 'ctas', label: 'CTAS (3)' },
    { id: 'stats', label: 'STATS (4)' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#ff2e00] selection:text-white">
      {/* Top Banner / System Header */}
      <header className="bg-black text-white border-b-2 border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <span className="bg-[#ff2e00] text-black font-black px-2 py-1 text-xs tracking-tighter">V//X</span>
            <div>
              <h1 className="font-black text-xl sm:text-2xl tracking-tighter uppercase italic">VELOX APEX // DESIGN SYSTEM</h1>
              <p className="font-mono text-[10px] text-neutral-400">{totalComponents} COMPONENT EDITORIAL SPECIFICATION (SCALE-CONTRAST)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('showcase')}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'showcase' ? 'bg-[#ff2e00] text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE LANDING</span>
            </button>
            <button 
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'content' ? 'bg-[#ff2e00] text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CONTENT (15)</span>
            </button>
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'all' ? 'bg-[#ff2e00] text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>VIEW ALL {totalComponents}</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="bg-neutral-900 border-t border-neutral-800 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 py-2.5 whitespace-nowrap scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`font-mono text-[11px] px-3 py-1.5 uppercase transition-colors cursor-pointer border ${activeTab === cat.id ? 'bg-[#ff2e00] text-black border-[#ff2e00] font-bold' : 'bg-black text-neutral-300 border-neutral-800 hover:text-white hover:border-neutral-600'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full">
        {activeTab === 'showcase' && (
          <div className="w-full">
            <div className="bg-neutral-100 py-8 border-b-2 border-black text-center px-4">
              <span className="font-mono text-xs text-[#ff2e00] font-bold uppercase">// CURATED EDITORIAL SHOWCASE</span>
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mt-2">
                VELOX APEX <span className="text-[#ff2e00]">EXPERIENCE</span>
              </h2>
              <p className="font-mono text-xs text-neutral-600 max-w-xl mx-auto mt-2">
                Assembled from the design system components below. Pure white paper, black ink, signal red-orange, and extreme scale contrast.
              </p>
            </div>

            <Navbar1 />
            <Hero1 />
            <Content4 />
            <Content10 />
            <FeatureGrid1 />
            <Content5 />
            <Stat1 />
            <Pricing1 />
            <Testimonials1 />
            <BlogCard2 />
            <Media1 />
            <Content15 />
            <Faq1 />
            <ContactForm1 />
            <Cta1 />
            <Content13 />
            <Footer1 />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'content') && (
          <SectionWrapper title="14 // CONTENT SECTIONS (15 COMPONENTS)" desc="Structurally distinct editorial architectures: ledgers, diagonal staircases, zipper interlocks, exploded schematics, split arguments, margin books, film strips, pinboards, indexes, interruptions, specimen grids, threaded narratives, colophons, cascades, and radial vaults.">
            <ComponentBox name="Content1 — The Ledger (Dense annotated BOM program)" onCopy={() => copyComponentInfo('Content1')}><Content1 /></ComponentBox>
            <ComponentBox name="Content2 — The Spiral Staircase (Diagonal stepped protocol)" onCopy={() => copyComponentInfo('Content2')}><Content2 /></ComponentBox>
            <ComponentBox name="Content3 — The Interlock (Zipper-tooth meshing spine)" onCopy={() => copyComponentInfo('Content3')}><Content3 /></ComponentBox>
            <ComponentBox name="Content4 — The Exploded Diagram (Orthographic plate + SVG leaders)" onCopy={() => copyComponentInfo('Content4')}><Content4 /></ComponentBox>
            <ComponentBox name="Content5 — The Split Screen Argument (Opposing contrast + VS seam)" onCopy={() => copyComponentInfo('Content5')}><Content5 /></ComponentBox>
            <ComponentBox name="Content6 — The Margin Book (Narrow essay + aligned marginalia)" onCopy={() => copyComponentInfo('Content6')}><Content6 /></ComponentBox>
            <ComponentBox name="Content7 — The Film Strip (Unequal widths + sprocket perforations)" onCopy={() => copyComponentInfo('Content7')}><Content7 /></ComponentBox>
            <ComponentBox name="Content8 — The Pinboard (Controlled z-stacked collision)" onCopy={() => copyComponentInfo('Content8')}><Content8 /></ComponentBox>
            <ComponentBox name="Content9 — The Index (Monograph TOC with hairline leaders)" onCopy={() => copyComponentInfo('Content9')}><Content9 /></ComponentBox>
            <ComponentBox name="Content10 — The Interruption (Full-bleed 14vw typographic break)" onCopy={() => copyComponentInfo('Content10')}><Content10 /></ComponentBox>
            <ComponentBox name="Content11 — The Specimen Grid (Irregular 12-col datasheet matrix)" onCopy={() => copyComponentInfo('Content11')}><Content11 /></ComponentBox>
            <ComponentBox name="Content12 — The Threaded Narrative (3 acts linked by continuous thread)" onCopy={() => copyComponentInfo('Content12')}><Content12 /></ComponentBox>
            <ComponentBox name="Content13 — The Colophon (Dense 4-column archival artifact)" onCopy={() => copyComponentInfo('Content13')}><Content13 /></ComponentBox>
            <ComponentBox name="Content14 — The Cascade (Shifting horizontal score cadence)" onCopy={() => copyComponentInfo('Content14')}><Content14 /></ComponentBox>
            <ComponentBox name="Content15 — The Inverted Vault (Black radial circular composition)" onCopy={() => copyComponentInfo('Content15')}><Content15 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'navbar') && (
          <SectionWrapper title="01 // NAVBARS (4 COMPONENTS)" desc="Hard black bars, asymmetric layouts, rotated vertical wordmarks, and oversized hamburger targets.">
            <ComponentBox name="Navbar1 (Hard black bar + wordmark + red zone)" onCopy={() => copyComponentInfo('Navbar1')}><Navbar1 /></ComponentBox>
            <ComponentBox name="Navbar2 (Asymmetric: logo left, links right)" onCopy={() => copyComponentInfo('Navbar2')}><Navbar2 /></ComponentBox>
            <ComponentBox name="Navbar3 (Vertical rotated wordmark left edge)" onCopy={() => copyComponentInfo('Navbar3')}><Navbar3 /></ComponentBox>
            <ComponentBox name="Navbar4 (Oversized hamburger target + menu)" onCopy={() => copyComponentInfo('Navbar4')}><Navbar4 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'heroes') && (
          <SectionWrapper title="02 // HEROES (5 COMPONENTS)" desc="Gigantic cropped headlines, vertical display words, diagonal red-black stripes, oversized numerals, and split layouts.">
            <ComponentBox name="Hero1 (Gigantic headline + full-bleed image plate)" onCopy={() => copyComponentInfo('Hero1')}><Hero1 /></ComponentBox>
            <ComponentBox name="Hero2 (Vertical word left + narrow image right)" onCopy={() => copyComponentInfo('Hero2')}><Hero2 /></ComponentBox>
            <ComponentBox name="Hero3 (Diagonal red-black stripes + scale title)" onCopy={() => copyComponentInfo('Hero3')}><Hero3 /></ComponentBox>
            <ComponentBox name="Hero4 (Oversized numeral background object)" onCopy={() => copyComponentInfo('Hero4')}><Hero4 /></ComponentBox>
            <ComponentBox name="Hero5 (Split hero: huge black mass left, spec right)" onCopy={() => copyComponentInfo('Hero5')}><Hero5 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'features') && (
          <SectionWrapper title="03 // FEATURE GRIDS (4 COMPONENTS)" desc="3-column cards with oversized index numerals, colliding title rows, staggered asymmetric grid, and dense micro-grid.">
            <ComponentBox name="FeatureGrid1 (3-column cards + oversized index numerals)" onCopy={() => copyComponentInfo('FeatureGrid1')}><FeatureGrid1 /></ComponentBox>
            <ComponentBox name="FeatureGrid2 (Colliding rows with large titles)" onCopy={() => copyComponentInfo('FeatureGrid2')}><FeatureGrid2 /></ComponentBox>
            <ComponentBox name="FeatureGrid3 (Staggered asymmetric grid)" onCopy={() => copyComponentInfo('FeatureGrid3')}><FeatureGrid3 /></ComponentBox>
            <ComponentBox name="FeatureGrid4 (Giant title above dense micro-grid)" onCopy={() => copyComponentInfo('FeatureGrid4')}><FeatureGrid4 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'pricing') && (
          <SectionWrapper title="04 // PRICING (4 COMPONENTS)" desc="3-tier cards with gigantic prices, single centered massive price breakdown, asymmetric tier split, and scale comparison table.">
            <ComponentBox name="Pricing1 (3-tier cards with gigantic prices)" onCopy={() => copyComponentInfo('Pricing1')}><Pricing1 /></ComponentBox>
            <ComponentBox name="Pricing2 (Single centered massive price + mono breakdown)" onCopy={() => copyComponentInfo('Pricing2')}><Pricing2 /></ComponentBox>
            <ComponentBox name="Pricing3 (Asymmetric pricing: big left, stacked right)" onCopy={() => copyComponentInfo('Pricing3')}><Pricing3 /></ComponentBox>
            <ComponentBox name="Pricing4 (Scale contrast comparison matrix table)" onCopy={() => copyComponentInfo('Pricing4')}><Pricing4 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'testimonials') && (
          <SectionWrapper title="05 // TESTIMONIALS (3 COMPONENTS)" desc="Huge cropped quote words, quote sliders with oversized background glyphs, and asymmetric quote walls.">
            <ComponentBox name="Testimonials1 (Huge cropped quote word + attribution)" onCopy={() => copyComponentInfo('Testimonials1')}><Testimonials1 /></ComponentBox>
            <ComponentBox name="Testimonials2 (Quote slider + oversized background glyph)" onCopy={() => copyComponentInfo('Testimonials2')}><Testimonials2 /></ComponentBox>
            <ComponentBox name="Testimonials3 (Asymmetric quote wall)" onCopy={() => copyComponentInfo('Testimonials3')}><Testimonials3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'blog') && (
          <SectionWrapper title="06 // BLOG & EDITORIAL (4 COMPONENTS)" desc="Article index with massive cropped titles, featured story collision, archive numeral register, and editorial wall.">
            <ComponentBox name="BlogCard1 (Article index + massive cropped titles)" onCopy={() => copyComponentInfo('BlogCard1')}><BlogCard1 /></ComponentBox>
            <ComponentBox name="BlogCard2 (Featured story collision + small rows)" onCopy={() => copyComponentInfo('BlogCard2')}><BlogCard2 /></ComponentBox>
            <ComponentBox name="BlogCard3 (Archive oversized-numeral register)" onCopy={() => copyComponentInfo('BlogCard3')}><BlogCard3 /></ComponentBox>
            <ComponentBox name="BlogCard4 (Scale-staggered editorial wall)" onCopy={() => copyComponentInfo('BlogCard4')}><BlogCard4 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'footers') && (
          <SectionWrapper title="07 // FOOTERS (4 COMPONENTS)" desc="Black band with off-canvas wordmark, precise columns under massive contact word, asymmetric footer, and minimal arrow.">
            <ComponentBox name="Footer1 (Black band + off-canvas wordmark)" onCopy={() => copyComponentInfo('Footer1')}><Footer1 /></ComponentBox>
            <ComponentBox name="Footer2 (Massive contact word + tiny precise columns)" onCopy={() => copyComponentInfo('Footer2')}><Footer2 /></ComponentBox>
            <ComponentBox name="Footer3 (Asymmetric footer: heavy left, sparse right)" onCopy={() => copyComponentInfo('Footer3')}><Footer3 /></ComponentBox>
            <ComponentBox name="Footer4 (Minimal huge-arrow footer)" onCopy={() => copyComponentInfo('Footer4')}><Footer4 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'contact') && (
          <SectionWrapper title="08 // CONTACT FORMS (3 COMPONENTS)" desc="Form beside vertical CONTACT word, precise floating form in large white field, and giant input newsletter strip.">
            <ComponentBox name="ContactForm1 (Form beside vertical CONTACT word)" onCopy={() => copyComponentInfo('ContactForm1')}><ContactForm1 /></ComponentBox>
            <ComponentBox name="ContactForm2 (Precise form floating in large white field)" onCopy={() => copyComponentInfo('ContactForm2')}><ContactForm2 /></ComponentBox>
            <ComponentBox name="ContactForm3 (Newsletter strip + giant input target)" onCopy={() => copyComponentInfo('ContactForm3')}><ContactForm3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'modals') && (
          <SectionWrapper title="09 // MODALS & DIALOGS (3 COMPONENTS)" desc="Centered dialog with oversized cropped title, scale-contrast choice dialog, and slide-over drawer with settings.">
            <ComponentBox name="Modal1 (Centered dialog + oversized cropped title)" onCopy={() => copyComponentInfo('Modal1')}><Modal1 /></ComponentBox>
            <ComponentBox name="Modal2 (Scale-contrast choice dialog)" onCopy={() => copyComponentInfo('Modal2')}><Modal2 /></ComponentBox>
            <ComponentBox name="Modal3 (Slide-over drawer with settings)" onCopy={() => copyComponentInfo('Modal3')}><Modal3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'media') && (
          <SectionWrapper title="10 // MEDIA & GALLERY (3 COMPONENTS)" desc="Full-width plate with corner captions, scale-staggered gallery wall, and video plate with oversized play glyph.">
            <ComponentBox name="Media1 (Full-width plate + tiny corner captions)" onCopy={() => copyComponentInfo('Media1')}><Media1 /></ComponentBox>
            <ComponentBox name="Media2 (Gallery scale-staggered wall)" onCopy={() => copyComponentInfo('Media2')}><Media2 /></ComponentBox>
            <ComponentBox name="Media3 (Video plate + oversized play glyph)" onCopy={() => copyComponentInfo('Media3')}><Media3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'faqs') && (
          <SectionWrapper title="11 // FAQS (3 COMPONENTS)" desc="Rows with oversized indices, two-column FAQ with big-title left column, and massive faint numeral FAQs.">
            <ComponentBox name="Faq1 (Accordion rows + oversized indices)" onCopy={() => copyComponentInfo('Faq1')}><Faq1 /></ComponentBox>
            <ComponentBox name="Faq2 (Two-column FAQ with big title left)" onCopy={() => copyComponentInfo('Faq2')}><Faq2 /></ComponentBox>
            <ComponentBox name="Faq3 (Numbered FAQ with massive faint numerals)" onCopy={() => copyComponentInfo('Faq3')}><Faq3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'ctas') && (
          <SectionWrapper title="12 // CTAS (3 COMPONENTS)" desc="Gigantic cropped command words, black inversion bands with huge white type, and minimal arrow label bands.">
            <ComponentBox name="Cta1 (Gigantic cropped command word + red button)" onCopy={() => copyComponentInfo('Cta1')}><Cta1 /></ComponentBox>
            <ComponentBox name="Cta2 (Black inversion band + huge white type)" onCopy={() => copyComponentInfo('Cta2')}><Cta2 /></ComponentBox>
            <ComponentBox name="Cta3 (Minimal huge arrow + label band)" onCopy={() => copyComponentInfo('Cta3')}><Cta3 /></ComponentBox>
          </SectionWrapper>
        )}

        {(activeTab === 'all' || activeTab === 'stats') && (
          <SectionWrapper title="13 // STATS (4 COMPONENTS)" desc="Gigantic numerals with mono units, scale-contrast stat walls, oversized index register stats, and single dominant numbers.">
            <ComponentBox name="Stat1 (Gigantic numerals + tiny mono unit annotations)" onCopy={() => copyComponentInfo('Stat1')}><Stat1 /></ComponentBox>
            <ComponentBox name="Stat2 (Scale-contrast stat wall: one huge, several small)" onCopy={() => copyComponentInfo('Stat2')}><Stat2 /></ComponentBox>
            <ComponentBox name="Stat3 (Register stats with oversized index column)" onCopy={() => copyComponentInfo('Stat3')}><Stat3 /></ComponentBox>
            <ComponentBox name="Stat4 (Single dominant number + micro-breakdown rows)" onCopy={() => copyComponentInfo('Stat4')}><Stat4 /></ComponentBox>
          </SectionWrapper>
        )}
      </main>

      {/* Copy Notification Toast */}
      {copiedName && (
        <div className="fixed bottom-6 right-6 bg-[#ff2e00] text-black font-mono text-xs font-black px-4 py-3 border-2 border-black z-50 flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>COPIED {copiedName} SPECIFICATION TO CLIPBOARD</span>
        </div>
      )}
    </div>
  );
}

function SectionWrapper({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <section className="w-full py-16 border-b-4 border-black bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="border-l-4 border-[#ff2e00] pl-4 py-1">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">{title}</h2>
          <p className="font-mono text-xs text-neutral-600 mt-2">{desc}</p>
        </div>
      </div>
      <div className="space-y-16">
        {children}
      </div>
    </section>
  );
}

function ComponentBox({ name, children, onCopy }: { name: string; children: React.ReactNode; onCopy: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="border-2 border-black bg-white overflow-hidden">
        {/* Component Header Bar */}
        <div className="bg-black text-white px-4 py-2.5 flex items-center justify-between font-mono text-xs border-b border-black">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#ff2e00]" />
            <span className="font-bold uppercase tracking-wider">{name}</span>
          </div>
          <button 
            onClick={onCopy}
            className="bg-[#ff2e00] text-black font-black px-3 py-1 uppercase text-[10px] tracking-widest hover:bg-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>COPY SPEC</span>
          </button>
        </div>

        {/* Component Render */}
        <div className="w-full overflow-x-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
