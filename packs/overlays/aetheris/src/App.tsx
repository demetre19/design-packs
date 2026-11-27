import React, { useState } from 'react';
import { Layers, Compass, Eye, Shield, Sparkles, ChevronRight, Copy, Check } from 'lucide-react';

// Navbar
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Heroes
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grids
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonials
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Cards
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footers
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Forms
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modals
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// Faqs
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// Ctas
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

// Content Sections (15)
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

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', name: 'All 59 Components' },
    { id: 'content', name: 'Content Sections (15)' },
    { id: 'navbar', name: 'Navigation (4)' },
    { id: 'heroes', name: 'Heroes (5)' },
    { id: 'feature-grids', name: 'Feature Grids (4)' },
    { id: 'pricing', name: 'Pricing (4)' },
    { id: 'testimonials', name: 'Testimonials (3)' },
    { id: 'blog-cards', name: 'Editorial & Blog (4)' },
    { id: 'footers', name: 'Footers (4)' },
    { id: 'contact-forms', name: 'Contact Forms (3)' },
    { id: 'modals', name: 'Modals & Dialogs (3)' },
    { id: 'media', name: 'Media Plates (3)' },
    { id: 'faqs', name: 'FAQs (3)' },
    { id: 'ctas', name: 'Call to Actions (3)' },
    { id: 'stats', name: 'Statistics (4)' },
  ];

  const copyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#ece8e1] flex flex-col font-sans selection:bg-[#d4b06a] selection:text-[#0b0d10]">
      {/* Top Banner / Header */}
      <header className="border-b border-white/10 bg-[#0b0d10] px-8 py-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-5 h-5 rounded-full border border-[#d4b06a] flex items-center justify-center text-[9px] text-[#d4b06a]">◆</span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase">MIDNIGHT NOIR PRECISION</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wider text-[#ece8e1]">AETHERIS & CO. — Design System</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#7a8494]">EST. MMXXIV</span>
            <span className="px-3 py-1 bg-[#13171c] border border-[#d4b06a]/40 text-[#d4b06a] text-xs font-mono">
              59 COMPONENTS
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-10 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Category Navigation */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-28 bg-[#13171c] border border-white/10 p-6 flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] uppercase mb-2">COMPONENT FAMILIES</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-left px-4 py-2.5 rounded text-xs font-mono transition-all flex justify-between items-center ${
                  activeCategory === cat.id
                    ? 'bg-[#d4b06a] text-[#0b0d10] font-bold'
                    : 'text-[#7a8494] hover:text-[#ece8e1] hover:bg-white/5'
                }`}
              >
                <span>{cat.name}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ))}

            <div className="mt-6 pt-6 border-t border-white/10 text-[10px] font-mono text-[#7a8494]">
              <p className="mb-2">STYLE GUIDELINE:</p>
              <p className="leading-relaxed">Deep near-black (#0b0d10), lifted panels (#13171c), champagne gold (#d4b06a), 1px hairlines, zero shadows.</p>
            </div>
          </div>
        </aside>

        {/* Component Showcase Area */}
        <main className="flex-1 flex flex-col gap-16">
          {/* Style overview card */}
          <div className="bg-[#13171c] border border-white/10 p-8">
            <span className="text-xs font-mono text-[#d4b06a] uppercase tracking-widest block mb-3">DESIGN SYSTEM SPECIFICATION</span>
            <h2 className="font-serif text-2xl text-[#ece8e1] mb-4">Midnight Noir Precision Architecture</h2>
            <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-6">
              Every component in this 59-piece design system adheres strictly to the Aetheris & Co. visual language: serif display headings paired with micro-monospace gold labels, ultra-thin hairlines, pure tonal depth without shadows, and realistic horology & private vault copy.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <span className="px-3 py-1 bg-[#0b0d10] border border-white/10 text-[#ece8e1]">Primary: #0b0d10</span>
              <span className="px-3 py-1 bg-[#0b0d10] border border-white/10 text-[#ece8e1]">Surface: #13171c</span>
              <span className="px-3 py-1 bg-[#0b0d10] border border-white/10 text-[#d4b06a]">Accent: #d4b06a</span>
            </div>
          </div>

          {/* CONTENT SECTIONS (15) */}
          {(activeCategory === 'all' || activeCategory === 'content') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Content Sections Family (15 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/content/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content4 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content5 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content6 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content7 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content8 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content9 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content10 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content11 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content12 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content13 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content14 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Content15 /></div>
            </div>
          )}

          {/* NAVBAR SECTION */}
          {(activeCategory === 'all' || activeCategory === 'navbar') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Navbar Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/navbar/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10] p-4"><Navbar1 /></div>
              <div className="border border-white/10 bg-[#0b0d10] p-4"><Navbar2 /></div>
              <div className="border border-white/10 bg-[#0b0d10] p-4"><Navbar3 /></div>
              <div className="border border-white/10 bg-[#0b0d10] p-4"><Navbar4 /></div>
            </div>
          )}

          {/* HEROES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'heroes') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Heroes Family (5 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/heroes/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Hero1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Hero2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Hero3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Hero4 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Hero5 /></div>
            </div>
          )}

          {/* FEATURE GRIDS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'feature-grids') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Feature Grids Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/feature-grids/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><FeatureGrid1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><FeatureGrid2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><FeatureGrid3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><FeatureGrid4 /></div>
            </div>
          )}

          {/* PRICING SECTION */}
          {(activeCategory === 'all' || activeCategory === 'pricing') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Pricing Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/pricing/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Pricing1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Pricing2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Pricing3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Pricing4 /></div>
            </div>
          )}

          {/* TESTIMONIALS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'testimonials') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Testimonials Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/testimonials/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Testimonial1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Testimonial2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Testimonial3 /></div>
            </div>
          )}

          {/* BLOG CARDS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'blog-cards') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Editorial & Blog Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/blog-cards/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><BlogCard1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><BlogCard2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><BlogCard3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><BlogCard4 /></div>
            </div>
          )}

          {/* FOOTERS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'footers') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Footers Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/footers/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Footer1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Footer2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Footer3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Footer4 /></div>
            </div>
          )}

          {/* CONTACT FORMS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'contact-forms') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Contact Forms Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/contact-forms/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><ContactForm1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><ContactForm2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><ContactForm3 /></div>
            </div>
          )}

          {/* MODALS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'modals') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Modals Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/modals/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Modal1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Modal2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Modal3 /></div>
            </div>
          )}

          {/* MEDIA SECTION */}
          {(activeCategory === 'all' || activeCategory === 'media') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Media Plates Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/media/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Media1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Media2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Media3 /></div>
            </div>
          )}

          {/* FAQS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'faqs') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">FAQs Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/faqs/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Faq1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Faq2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Faq3 /></div>
            </div>
          )}

          {/* CTAS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'ctas') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Call to Actions Family (3 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/ctas/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Cta1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Cta2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Cta3 /></div>
            </div>
          )}

          {/* STATS SECTION */}
          {(activeCategory === 'all' || activeCategory === 'stats') && (
            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-3 flex justify-between items-end">
                <h3 className="font-serif text-xl text-[#ece8e1]">Statistics Family (4 Components)</h3>
                <span className="text-xs font-mono text-[#7a8494]">src/components/stats/</span>
              </div>
              <div className="border border-white/10 bg-[#0b0d10]"><Stat1 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Stat2 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Stat3 /></div>
              <div className="border border-white/10 bg-[#0b0d10]"><Stat4 /></div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs font-mono text-[#7a8494] mt-20">
        AETHERIS & CO. DESIGN SYSTEM — 59 SELF-CONTAINED REACT COMPONENTS — MIDNIGHT NOIR PRECISION
      </footer>
    </div>
  );
}
