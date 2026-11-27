import React, { useState } from 'react';
import { Compass, Ruler, Layers, Grid, FileText, CheckCircle2, ChevronRight, Sliders, Eye, Code, Layout } from 'lucide-react';

// Import all 44 components
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

import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

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

import { FAQ1 } from './components/faqs/FAQ1';
import { FAQ2 } from './components/faqs/FAQ2';
import { FAQ3 } from './components/faqs/FAQ3';

import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

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
  const [activeTab, setActiveTab] = useState<'gallery' | 'master'>('gallery');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);

  const allComponents: ComponentItem[] = [
    // Navbar
    { id: 'navbar-1', name: 'Navbar 1: Title-Block Logo & Grid Links', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'navbar-2', name: 'Navbar 2: Bottom Dimension Edge', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'navbar-3', name: 'Navbar 3: Centered Practice Name & Links', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'navbar-4', name: 'Navbar 4: Detail Panel Dropdown', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'hero-1', name: 'Hero 1: Centered Reference & Framed Plate', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'hero-2', name: 'Hero 2: Inverted Paper with Title Block', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'hero-3', name: 'Hero 3: Section-Elevation Measurement Grid', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'hero-4', name: 'Hero 4: Hatched Panel & Leader Lines', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'hero-5', name: 'Hero 5: Split Hero with Tall Framed Plate', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'feature-1', name: 'Feature Grid 1: 3-Column Detail Cards', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'feature-2', name: 'Feature Grid 2: Numbered Details (01/02/03)', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'feature-3', name: 'Feature Grid 3: Alternating Elevation Rows', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'feature-4', name: 'Feature Grid 4: 2x2 Center-Line Matrix', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'pricing-1', name: 'Pricing 1: 3-Tier Framed Panels (Approved)', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'pricing-2', name: 'Pricing 2: Drawing-Revision Selector', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'pricing-3', name: 'Pricing 3: Single Centered Scope Sheet', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'pricing-4', name: 'Pricing 4: Specification Comparison Table', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'testimonial-1', name: 'Testimonial 1: Framed Quote & Leader Lines', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'testimonial-2', name: 'Testimonial 2: Quote Details Grid', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'testimonial-3', name: 'Testimonial 3: Featured Reference Letter', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'blog-1', name: 'Blog 1: 3-Column Articles as Plates', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'blog-2', name: 'Blog 2: Featured Project + Index Rows', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'blog-3', name: 'Blog 3: Drawing Register Archive', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'blog-4', name: 'Blog 4: Article Header with Title Block', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'footer-1', name: 'Footer 1: Navy Band & Title Block', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'footer-2', name: 'Footer 2: Ruled Drawing-Register Footer', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'footer-3', name: 'Footer 3: Minimal Sheet-Number Footer', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'footer-4', name: 'Footer 4: Specification Contact Rows', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'contact-1', name: 'Contact 1: Split Form & Project Details', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'contact-2', name: 'Contact 2: Centered Form in ISO Frame', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'contact-3', name: 'Contact 3: Drawing Subscription Strip', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'modal-1', name: 'Modal 1: Centered Drawing Dialog', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'modal-2', name: 'Modal 2: Approval-Stamp Choice Dialog', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'modal-3', name: 'Modal 3: Slide-Over Specification Panel', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'media-1', name: 'Media 1: Framed Photo & Dimension Caption', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'media-2', name: 'Media 2: Gallery Sheet Grid', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'media-3', name: 'Media 3: Video Plate with Play Marker', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'faq-1', name: 'FAQ 1: Ruled Rows with Toggles', category: 'faqs', component: <FAQ1 />, path: 'src/components/faqs/FAQ1.tsx' },
    { id: 'faq-2', name: 'FAQ 2: Two-Column Technical FAQ', category: 'faqs', component: <FAQ2 />, path: 'src/components/faqs/FAQ2.tsx' },
    { id: 'faq-3', name: 'FAQ 3: Numbered Detail Index FAQ', category: 'faqs', component: <FAQ3 />, path: 'src/components/faqs/FAQ3.tsx' },

    // CTAs
    { id: 'cta-1', name: 'CTA 1: Large Statement & Hatch Button', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'cta-2', name: 'CTA 2: Split CTA with Framed Plate', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'cta-3', name: 'CTA 3: Minimal Reference & Action', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'stat-1', name: 'Stat 1: Measurement-Style Numbers', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { id: 'stat-2', name: 'Stat 2: Title Block Statistics Register', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { id: 'stat-3', name: 'Stat 3: Specification Rows', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
    { id: 'stat-4', name: 'Stat 4: Big Numerals & Grid References', category: 'stats', component: <Stat4 />, path: 'src/components/stats/Stat4.tsx' },
  ];

  const categories = [
    { id: 'all', label: 'All 44 Components' },
    { id: 'navbar', label: 'Navbar (4)' },
    { id: 'heroes', label: 'Heroes (5)' },
    { id: 'feature-grids', label: 'Feature Grids (4)' },
    { id: 'pricing', label: 'Pricing (4)' },
    { id: 'testimonials', label: 'Testimonials (3)' },
    { id: 'blog-cards', label: 'Blog Cards (4)' },
    { id: 'footers', label: 'Footers (4)' },
    { id: 'contact-forms', label: 'Contact Forms (3)' },
    { id: 'modals', label: 'Modals (3)' },
    { id: 'media', label: 'Media (3)' },
    { id: 'faqs', label: 'FAQs (3)' },
    { id: 'ctas', label: 'CTAs (3)' },
    { id: 'stats', label: 'Stats (4)' },
  ];

  const filteredComponents = selectedCategory === 'all'
    ? allComponents
    : allComponents.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen blueprint-bg text-white font-mono selection:bg-cyan-300 selection:text-[#1b3a5c]">
      {/* Top Architectural Header */}
      <header className="border-b border-white/30 bg-[#142d48] px-6 py-4 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="border border-white/40 p-2 bg-[#1b3a5c]">
              <Compass className="w-6 h-6 text-cyan-300 animate-pulse" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-widest uppercase">Atelier Orthogonal</h1>
              <p className="text-[10px] text-cyan-300 tracking-wider">44-COMPONENT TECHNICAL DRAWING DESIGN SYSTEM</p>
            </div>
          </div>

          {/* View Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setActiveTab('gallery'); setSelectedComponent(null); }}
              className={`px-4 py-2 text-xs font-bold uppercase border transition-colors cursor-pointer flex items-center gap-2 ${activeTab === 'gallery' ? 'bg-cyan-400 text-[#1b3a5c] border-cyan-400' : 'border-white/30 hover:bg-white/10'}`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Component Gallery (44)</span>
            </button>
            <button
              onClick={() => { setActiveTab('master'); setSelectedComponent(null); }}
              className={`px-4 py-2 text-xs font-bold uppercase border transition-colors cursor-pointer flex items-center gap-2 ${activeTab === 'master' ? 'bg-cyan-400 text-[#1b3a5c] border-cyan-400' : 'border-white/30 hover:bg-white/10'}`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Master Assembled System</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {activeTab === 'gallery' && !selectedComponent && (
          <div className="space-y-8">
            {/* Category Filter Bar */}
            <div className="border border-white/30 p-4 bg-[#142d48] flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors cursor-pointer ${selectedCategory === cat.id ? 'bg-cyan-400 text-[#1b3a5c] border-cyan-400 font-bold' : 'border-white/25 hover:bg-white/10 text-cyan-100'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedComponent(item)}
                  className="border-2 border-white/30 p-5 bg-[#142d48] hover:border-cyan-300 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] text-cyan-300 border-b border-white/20 pb-2">
                      <span className="border border-cyan-300/40 px-1.5 py-0.5">{item.category.toUpperCase()}</span>
                      <span>STATUS: READY</span>
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-cyan-100 font-mono">FILE: /{item.path}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-xs text-cyan-300">
                    <span className="flex items-center gap-1 group-hover:underline">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Component</span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Component Inspection View */}
        {activeTab === 'gallery' && selectedComponent && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/30 pb-4">
              <div>
                <button
                  onClick={() => setSelectedComponent(null)}
                  className="text-xs text-cyan-300 hover:underline mb-2 block cursor-pointer"
                >
                  &larr; BACK TO 44-COMPONENT GALLERY
                </button>
                <h2 className="text-2xl font-bold uppercase tracking-tight">{selectedComponent.name}</h2>
                <p className="text-xs text-cyan-200 mt-1">PATH: /{selectedComponent.path}</p>
              </div>
              <div className="border border-cyan-300 px-3 py-1 text-xs text-cyan-300">
                SCALE 1:50 | VERIFIED
              </div>
            </div>

            {/* Rendered Component Box */}
            <div className="border-2 border-white/40 p-4 bg-[#11263d] shadow-2xl">
              <div className="text-[10px] text-cyan-300 border-b border-white/20 pb-2 mb-4 flex justify-between">
                <span>COMPONENT LIVE PREVIEW</span>
                <span>ISO BORDER FRAME</span>
              </div>
              <div className="overflow-x-auto">
                {selectedComponent.component}
              </div>
            </div>
          </div>
        )}

        {/* Master Assembled System View */}
        {activeTab === 'master' && (
          <div className="space-y-12">
            <div className="border-2 border-white/40 p-6 bg-[#142d48] text-center space-y-3">
              <span className="text-xs text-cyan-300 border border-cyan-300 px-3 py-1">MASTER ASSEMBLED SYSTEM</span>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Atelier Orthogonal Live Blueprint Preview</h2>
              <p className="text-xs text-cyan-100 max-w-2xl mx-auto">
                A cohesive architectural demonstration integrating multiple components from our 44-element technical drawing design system.
              </p>
            </div>

            <div className="space-y-8 border-2 border-white/30 p-4 bg-[#11263d]">
              <Navbar1 />
              <Hero1 />
              <FeatureGrid1 />
              <Pricing1 />
              <Testimonial1 />
              <BlogCard1 />
              <ContactForm1 />
              <Footer1 />
            </div>
          </div>
        )}
      </main>

      {/* Footer info */}
      <footer className="border-t border-white/30 py-6 text-center text-[10px] text-cyan-300 mt-20">
        ATELIER ORTHOGONAL ARCHITECTURAL PRACTICE // ALL 44 COMPONENTS FULLY COMPILED & VERIFIED
      </footer>
    </div>
  );
}
