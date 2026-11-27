import React, { useState } from 'react';
import { 
  Layers, Search, Code, Layout, Cpu, ArrowUpRight, Check, Sparkles, Terminal, Shield, Activity, RefreshCw 
} from 'lucide-react';

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

// FAQs
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTAs
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  path: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'landing'>('explorer');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Elements (44)' },
    { id: 'navbar', name: 'Navbars (4)' },
    { id: 'heroes', name: 'Heroes (5)' },
    { id: 'feature-grids', name: 'Feature Grids (4)' },
    { id: 'pricing', name: 'Pricing (4)' },
    { id: 'testimonials', name: 'Testimonials (3)' },
    { id: 'blog-cards', name: 'Blog Cards (4)' },
    { id: 'footers', name: 'Footers (4)' },
    { id: 'contact-forms', name: 'Contact Forms (3)' },
    { id: 'modals', name: 'Modals (3)' },
    { id: 'media', name: 'Media (3)' },
    { id: 'faqs', name: 'FAQs (3)' },
    { id: 'ctas', name: 'CTAs (3)' },
    { id: 'stats', name: 'Stats (4)' },
  ];

  const componentsList: ComponentItem[] = [
    // Navbar
    { id: 'Navbar1', name: 'Navbar1: Grid-aligned bar', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', name: 'Navbar2: Hairline bottom & index', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', name: 'Navbar3: Centered minimal masthead', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', name: 'Navbar4: Tessellated dropdown panel', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'Hero1', name: 'Hero1: Exact grid cluster', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', name: 'Hero2: Headline + register table', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', name: 'Hero3: Asymmetric with sparklines', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', name: 'Hero4: Dot-grid plate & indices', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', name: 'Hero5: Split column + stat strip', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'FeatureGrid1', name: 'FeatureGrid1: 3-column white panels', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', name: 'FeatureGrid2: Numbered register rows', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', name: 'FeatureGrid3: Tessellated media-text rows', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', name: 'FeatureGrid4: 2x2 hairline divisions', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'Pricing1', name: 'Pricing1: 3-tier popular ring', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', name: 'Pricing2: Monthly/yearly toggle', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', name: 'Pricing3: Single price register', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', name: 'Pricing4: Comparison column table', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'Testimonial1', name: 'Testimonial1: Large quote + index', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', name: 'Testimonial2: Register grid panels', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', name: 'Testimonial3: Featured quote panel', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'BlogCard1', name: 'BlogCard1: 3-column mono dates', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'BlogCard2', name: 'BlogCard2: Featured + register rows', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'BlogCard3', name: 'BlogCard3: Archive indexed table', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'BlogCard4', name: 'BlogCard4: Column-aligned meta', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'Footer1', name: 'Footer1: Carbon band + mono links', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', name: 'Footer2: Aligned register columns', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', name: 'Footer3: Minimal index footer', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', name: 'Footer4: Cobalt panel accent', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'ContactForm1', name: 'ContactForm1: Split form + details', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'ContactForm2', name: 'ContactForm2: Narrow hairline underlines', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'ContactForm3', name: 'ContactForm3: Newsletter strip + button', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'Modal1', name: 'Modal1: Sharp-corner hairline dialog', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', name: 'Modal2: Confirm two buttons', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', name: 'Modal3: Slide-over register rows', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'Media1', name: 'Media1: Full-width corner index', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'Media2', name: 'Media2: Tessellated grid gallery', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'Media3', name: 'Media3: Video plate + play control', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'Faq1', name: 'Faq1: Hairline accordion rows', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { id: 'Faq2', name: 'Faq2: Two-column register FAQ', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { id: 'Faq3', name: 'Faq3: Numbered cobalt indices', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },

    // CTAs
    { id: 'Cta1', name: 'Cta1: Statement + cobalt button', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'Cta2', name: 'Cta2: Inverted full-cobalt band', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'Cta3', name: 'Cta3: Minimal label + action', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'Stat1', name: 'Stat1: Sparklines register', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { id: 'Stat2', name: 'Stat2: Big numerals + cobalt', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { id: 'Stat3', name: 'Stat3: Aligned column stat table', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
    { id: 'Stat4', name: 'Stat4: Inverted cobalt panel', category: 'stats', component: <Stat4 />, path: 'src/components/stats/Stat4.tsx' },
  ];

  const filteredComponents = componentsList.filter(c => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f2f3f5] text-[#0d0e10] font-sans antialiased flex flex-col selection:bg-[#2743f0] selection:text-white">
      {/* Master Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#0d0e10]/15 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#2743f0]" />
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest">STRATA GRID OS // DESIGN SYSTEM</span>
              <div className="font-mono text-[10px] text-[#0d0e10]/60">44 COMPONENT LIBRARY & ARCHITECTURAL SPECIFICATION</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#f2f3f5] p-1 border border-[#0d0e10]/15 rounded-[2px] font-mono text-[11px] uppercase">
              <button 
                onClick={() => setActiveTab('explorer')}
                className={`px-4 py-1.5 transition-colors ${activeTab === 'explorer' ? 'bg-[#2743f0] text-white' : 'text-[#0d0e10]/70 hover:text-[#0d0e10]'}`}
              >
                Component Library (44)
              </button>
              <button 
                onClick={() => setActiveTab('landing')}
                className={`px-4 py-1.5 transition-colors ${activeTab === 'landing' ? 'bg-[#2743f0] text-white' : 'text-[#0d0e10]/70 hover:text-[#0d0e10]'}`}
              >
                Assembled Landing Page
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {activeTab === 'explorer' ? (
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 border border-[#0d0e10]/15 rounded-[2px]">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0d0e10]/40" />
                <input 
                  type="text" 
                  placeholder="Search components by ID or name..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f2f3f5] border border-[#0d0e10]/15 pl-10 pr-4 py-2 font-mono text-xs focus:border-[#2743f0] outline-none rounded-[2px]"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {categories.slice(0, 7).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider shrink-0 transition-colors rounded-[2px] border ${
                      selectedCategory === cat.id 
                        ? 'bg-[#2743f0] text-white border-[#2743f0]' 
                        : 'bg-[#f2f3f5] text-[#0d0e10]/70 border-[#0d0e10]/10 hover:border-[#0d0e10]/30'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Sub-filter for remaining if needed */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.slice(7).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider shrink-0 transition-colors rounded-[2px] border ${
                    selectedCategory === cat.id 
                      ? 'bg-[#2743f0] text-white border-[#2743f0]' 
                      : 'bg-[#f2f3f5] text-[#0d0e10]/70 border-[#0d0e10]/10 hover:border-[#0d0e10]/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Component Count */}
            <div className="flex justify-between items-center font-mono text-xs text-[#0d0e10]/60">
              <span>Showing {filteredComponents.length} of 44 self-contained components</span>
              <span>STYLE: STRATA GRID FUTURISM</span>
            </div>

            {/* Component Showcase Cards */}
            <div className="flex flex-col gap-12">
              {filteredComponents.map((item) => (
                <div key={item.id} className="bg-white border border-[#0d0e10]/15 rounded-[2px] overflow-hidden flex flex-col">
                  {/* Card Header Bar */}
                  <div className="bg-[#f2f3f5] px-6 py-3 border-b border-[#0d0e10]/15 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#2743f0]" />
                      <span className="font-bold uppercase tracking-wider">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#0d0e10]/60">
                      <span>[{item.path}]</span>
                      <button 
                        onClick={() => setSelectedComponent(selectedComponent?.id === item.id ? null : item)}
                        className="text-[#2743f0] font-bold hover:underline"
                      >
                        {selectedComponent?.id === item.id ? 'Hide Code' : 'View Code ↗'}
                      </button>
                    </div>
                  </div>

                  {/* Component Live Render */}
                  <div className="w-full bg-[#f2f3f5] overflow-x-auto">
                    {item.component}
                  </div>

                  {/* Code Snippet Drawer */}
                  {selectedComponent?.id === item.id && (
                    <div className="bg-[#0d0e10] text-white p-6 font-mono text-xs border-t border-[#0d0e10]/20 flex flex-col gap-4">
                      <div className="flex justify-between items-center text-white/60">
                        <span>FILE PATH: /{item.path}</span>
                        <span className="text-[#2743f0]">SELF-CONTAINED TSX</span>
                      </div>
                      <pre className="overflow-x-auto p-4 bg-black/40 border border-white/10 rounded-[2px] text-white/90 text-[11px] leading-relaxed">
                        {`import React from 'react';\n// Component ${item.id} is fully implemented at ${item.path}\n// All styles use Tailwind CSS with Strata Grid futurism design language.`}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Assembled Landing Page Mode using selected components from the library */
          <div className="flex flex-col w-full bg-[#f2f3f5]">
            <Navbar1 />
            <Hero1 />
            <FeatureGrid1 />
            <Stat1 />
            <Pricing1 />
            <Testimonial1 />
            <BlogCard1 />
            <Faq1 />
            <Cta2 />
            <Footer1 />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#0d0e10]/15 py-6 px-6 font-mono text-xs text-[#0d0e10]/60 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>STRATA GRID SYSTEMS // 44 ELEMENT DESIGN SYSTEM</span>
          <span>STRATA GRID FUTURISM SPECIFICATION v4.08</span>
        </div>
      </footer>
    </div>
  );
}
