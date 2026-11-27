import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Code, Eye, Layers, Sparkles, Layout, Check, Terminal } from 'lucide-react';

// Navbar imports
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Hero imports
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grid imports
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing imports
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonial imports
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Card imports
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footer imports
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Form imports
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modal imports
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media imports
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// FAQ imports
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTA imports
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stat imports
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'assembled'>('explore');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComponent, setSelectedComponent] = useState<{ name: string; category: string; component: React.ReactNode; path: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = [
    { id: 'all', name: 'all 44 elements' },
    { id: 'navbar', name: 'navbar (4)' },
    { id: 'heroes', name: 'heroes (5)' },
    { id: 'feature-grids', name: 'feature-grids (4)' },
    { id: 'pricing', name: 'pricing (4)' },
    { id: 'testimonials', name: 'testimonials (3)' },
    { id: 'blog-cards', name: 'blog-cards (4)' },
    { id: 'footers', name: 'footers (4)' },
    { id: 'contact-forms', name: 'contact-forms (3)' },
    { id: 'modals', name: 'modals (3)' },
    { id: 'media', name: 'media (3)' },
    { id: 'faqs', name: 'faqs (3)' },
    { id: 'ctas', name: 'ctas (3)' },
    { id: 'stats', name: 'stats (3)' },
  ];

  const allComponents = [
    // navbar
    { name: 'Navbar1', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { name: 'Navbar2', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { name: 'Navbar3', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { name: 'Navbar4', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },
    // heroes
    { name: 'Hero1', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { name: 'Hero2', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { name: 'Hero3', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { name: 'Hero4', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { name: 'Hero5', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },
    // feature-grids
    { name: 'FeatureGrid1', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { name: 'FeatureGrid2', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { name: 'FeatureGrid3', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { name: 'FeatureGrid4', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },
    // pricing
    { name: 'Pricing1', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { name: 'Pricing2', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { name: 'Pricing3', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { name: 'Pricing4', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },
    // testimonials
    { name: 'Testimonial1', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { name: 'Testimonial2', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { name: 'Testimonial3', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },
    // blog-cards
    { name: 'BlogCard1', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { name: 'BlogCard2', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { name: 'BlogCard3', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { name: 'BlogCard4', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },
    // footers
    { name: 'Footer1', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { name: 'Footer2', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { name: 'Footer3', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { name: 'Footer4', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },
    // contact-forms
    { name: 'ContactForm1', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { name: 'ContactForm2', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { name: 'ContactForm3', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },
    // modals
    { name: 'Modal1', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { name: 'Modal2', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { name: 'Modal3', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },
    // media
    { name: 'Media1', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { name: 'Media2', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { name: 'Media3', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },
    // faqs
    { name: 'Faq1', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { name: 'Faq2', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { name: 'Faq3', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },
    // ctas
    { name: 'Cta1', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { name: 'Cta2', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { name: 'Cta3', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },
    // stats
    { name: 'Stat1', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { name: 'Stat2', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { name: 'Stat3', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
  ];

  const filteredComponents = selectedCategory === 'all' 
    ? allComponents 
    : allComponents.filter(c => c.category === selectedCategory);

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Top Meta Bar */}
      <header className="w-full max-w-6xl mx-auto px-6 py-4 border-b border-black/15">
        <div className="flex items-center justify-between text-[9px] tracking-widest uppercase text-black/60 mb-2">
          <span>atelier nera [gallery sans]</span>
          <span>44 self-contained components</span>
          <span>system v4.4</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
          <div>
            <h1 className="font-light text-xl tracking-tight lowercase">atelier nera design system</h1>
            <p className="font-light text-xs text-black/50">calm, confident, expensive silence in 44 modular React components</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('explore')}
              className={`px-4 py-2 text-xs font-light lowercase transition-colors ${activeTab === 'explore' ? 'bg-black text-white' : 'border border-black/20 hover:border-black'}`}
            >
              component index ({allComponents.length})
            </button>
            <button 
              onClick={() => setActiveTab('assembled')}
              className={`px-4 py-2 text-xs font-light lowercase transition-colors ${activeTab === 'assembled' ? 'bg-black text-white' : 'border border-black/20 hover:border-black'}`}
            >
              live monograph view
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'assembled' ? (
          <div className="space-y-16">
            <div className="text-center py-12 border-b border-black/10">
              <span className="text-[9px] uppercase tracking-widest text-black/40 mb-3 block">coherent gallery monograph</span>
              <h2 className="font-light text-4xl md:text-6xl tracking-tighter lowercase mb-4">assembled presentation</h2>
              <p className="font-light text-xs text-black/60 max-w-md mx-auto">
                A continuous narrative built from selected components of the Atelier Nera system.
              </p>
            </div>

            {/* Assembled Page flow */}
            <Navbar1 />
            <Hero1 />
            <FeatureGrid1 />
            <Pricing1 />
            <Testimonial1 />
            <BlogCard1 />
            <Stat1 />
            <Faq1 />
            <Cta1 />
            <Footer1 />
          </div>
        ) : (
          <div className="space-y-12">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-black/10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-[11px] font-light lowercase whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id 
                      ? 'bg-black text-white' 
                      : 'bg-neutral-50 text-black/70 hover:bg-neutral-100 border border-black/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredComponents.map((item, idx) => (
                <div key={idx} className="border border-black/15 p-6 bg-white flex flex-col justify-between space-y-6 group hover:border-black transition-all">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-black/40">
                    <span>{item.category} / {item.name}</span>
                    <button 
                      onClick={() => handleCopyPath(item.path)}
                      className="hover:text-black underline lowercase"
                    >
                      {copiedCode ? 'copied path!' : item.path}
                    </button>
                  </div>

                  {/* Render Component Preview inside a clean box */}
                  <div className="border border-black/10 p-4 bg-white overflow-hidden max-h-[450px] overflow-y-auto">
                    {item.component}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <span className="text-xs font-light lowercase text-black/60">{item.name}.tsx (self-contained)</span>
                    <button
                      onClick={() => setSelectedComponent(item)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors"
                    >
                      inspect <ArrowRight className="w-3 h-3 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal Inspector */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-black max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
              <span className="text-xs uppercase tracking-widest font-light">{selectedComponent.path}</span>
              <button 
                onClick={() => setSelectedComponent(null)}
                className="text-sm uppercase tracking-widest hover:text-black/60"
              >
                [close ×]
              </button>
            </div>
            <div className="p-8 overflow-y-auto flex-1 space-y-6">
              <div className="text-[10px] uppercase tracking-wider text-black/50">live isolated preview</div>
              <div className="border border-black/10 p-6">
                {selectedComponent.component}
              </div>
              <div className="pt-4 border-t border-black/10 flex justify-between items-center">
                <span className="text-xs font-light lowercase text-black/60">gallery sans architecture — zero runtime dependencies required beyond tailwind &amp; lucide</span>
                <button 
                  onClick={() => handleCopyPath(selectedComponent.path)}
                  className="px-4 py-2 bg-black text-white text-xs font-light lowercase hover:bg-black/80"
                >
                  {copiedCode ? 'path copied!' : 'copy file path'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-12 border-t border-black/10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-black/50 gap-4">
          <span>atelier nera gallery sans system — 44 elements</span>
          <span>milan / paris — 2026</span>
        </div>
      </footer>
    </div>
  );
}
