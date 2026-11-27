import React, { useState } from 'react';
import { Layers, Copy, Check, Search, ExternalLink, Terminal, Eye, Grid } from 'lucide-react';

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

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  path: string;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'TUTTI (44)' },
    { id: 'navbar', label: 'NAVBAR (4)' },
    { id: 'heroes', label: 'HEROES (5)' },
    { id: 'feature-grids', label: 'FEATURE GRIDS (4)' },
    { id: 'pricing', label: 'PRICING (4)' },
    { id: 'testimonials', label: 'TESTIMONIALS (3)' },
    { id: 'blog-cards', label: 'BLOG CARDS (4)' },
    { id: 'footers', label: 'FOOTERS (4)' },
    { id: 'contact-forms', label: 'CONTACT FORMS (3)' },
    { id: 'modals', label: 'MODALS (3)' },
    { id: 'media', label: 'MEDIA (3)' },
    { id: 'faqs', label: 'FAQS (3)' },
    { id: 'ctas', label: 'CTAS (3)' },
    { id: 'stats', label: 'STATS (3)' },
  ];

  const componentsList: ComponentItem[] = [
    // navbar
    { id: 'Navbar1', name: 'Navbar 1 // Condensed Wordmark & Tiny Links', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', name: 'Navbar 2 // Collage Strip Nav', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', name: 'Navbar 3 // Single Line Uppercase Nav', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', name: 'Navbar 4 // Split Nav with Rotated Vertical Edge', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // heroes
    { id: 'Hero1', name: 'Hero 1 // Full Collage Grid & Giant Title', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', name: 'Hero 2 // Enormous Condensed Numerals & Photo Strips', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', name: 'Hero 3 // Full-Bleed Face & Overlapping Title', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', name: 'Hero 4 // Grid Hero with Breaking Cell', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', name: 'Hero 5 // Manifesto Block beside Photo Column', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // feature-grids
    { id: 'FeatureGrid1', name: 'FeatureGrid 1 // Mini-Collage Production Cards', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', name: 'FeatureGrid 2 // Cast Face Plates & Stacked Names', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', name: 'FeatureGrid 3 // Season Programme Interlocked Puzzle Cells', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', name: 'FeatureGrid 4 // Asymmetric Grid with Rotated Edge Text', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // pricing
    { id: 'Pricing1', name: 'Pricing 1 // Ticket Tiers as Manifesto Cells', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', name: 'Pricing 2 // Table with Hairline Rows & Mono', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', name: 'Pricing 3 // Single Spotlight Performance', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', name: 'Pricing 4 // Horizontal Scroll of Production-Date Cards', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // testimonials
    { id: 'Testimonial1', name: 'Testimonial 1 // Critic Quotes in Dense Uppercase Blocks', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', name: 'Testimonial 2 // Quote Collage Wall', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', name: 'Testimonial 3 // Press Quotes in Tiny Stacked Captions', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // blog-cards
    { id: 'BlogCard1', name: 'BlogCard 1 // Journal Entries as Photo-Collage Cards', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'BlogCard2', name: 'BlogCard 2 // Index List with Huge Condensed Numerals', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'BlogCard3', name: 'BlogCard 3 // Mixed-Scale Magazine Grid', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'BlogCard4', name: 'BlogCard 4 // Featured Essay with Headline Bleed', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // footers
    { id: 'Footer1', name: 'Footer 1 // Giant Condensed Company Wordmark', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', name: 'Footer 2 // Collage Footer with Photo Strips', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', name: 'Footer 3 // Minimal Dense Uppercase Legal', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', name: 'Footer 4 // Manifesto Newsletter Signup with JOIN', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // contact-forms
    { id: 'ContactForm1', name: 'ContactForm 1 // Theatre Slip Booking Form', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'ContactForm2', name: 'ContactForm 2 // Split Form (Photo Collage & Inputs)', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'ContactForm3', name: 'ContactForm 3 // Minimal Single-Column Press Accreditation', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // modals
    { id: 'Modal1', name: 'Modal 1 // Production Detail Modal with Photo', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', name: 'Modal 2 // Performer Bio Modal', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', name: 'Modal 3 // Confirmation Ticket Stub with Numerals', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // media
    { id: 'Media1', name: 'Media 1 // Video Plate Framed in Collage Grid', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'Media2', name: 'Media 2 // Photo Gallery Interlocked Puzzle', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'Media3', name: 'Media 3 // Single Feature Plate with Credits Column', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // faqs
    { id: 'Faq1', name: 'Faq 1 // Accordion with Condensed Questions', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { id: 'Faq2', name: 'Faq 2 // Two-Column Dense Q&A', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { id: 'Faq3', name: 'Faq 3 // Single-Column Hairline Dividers', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },

    // ctas
    { id: 'Cta1', name: 'Cta 1 // Full-Width Condensed Action Phrase', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'Cta2', name: 'Cta 2 // Collage CTA (Photos & Type Interlocked)', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'Cta3', name: 'Cta 3 // Split CTA with Vertical Rotated Label', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // stats
    { id: 'Stat1', name: 'Stat 1 // Season Numbers as Monuments', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { id: 'Stat2', name: 'Stat 2 // Stat Row as Collage Strip', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { id: 'Stat3', name: 'Stat 3 // Single Spotlight Enormous Numeral', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
  ];

  const filteredComponents = componentsList.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyPath = (id: string, path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top Banner Header */}
      <header className="border-b-2 border-white bg-black sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-black font-mono-num text-[10px] px-2 py-0.5 uppercase font-bold">SYSTEM 44</span>
              <span className="font-mono-num text-[10px] text-zinc-400 uppercase">MANIFESTO COLLAGE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tighter mt-1">
              TEATRO DEL CAOS // DESIGN SYSTEM
            </h1>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
              <input 
                type="text" 
                placeholder="CERCA COMPONENTE..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-white pl-9 pr-3 py-2 text-xs font-mono-num text-white uppercase placeholder:text-zinc-600 focus:bg-white focus:text-black transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="border-t border-white overflow-x-auto">
          <div className="max-w-6xl mx-auto px-4 flex gap-2 py-2 whitespace-nowrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 font-mono-num text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-white text-black border-white font-bold' 
                    : 'bg-black text-white border-white/40 hover:border-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Showcase Area */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
        <div className="border-b border-white pb-4 flex justify-between items-center">
          <span className="font-mono-num text-xs uppercase text-zinc-400">
            VISUALIZZATI: {filteredComponents.length} DI 44 COMPONENTI AUTONOMI
          </span>
          <span className="font-mono-num text-xs uppercase text-zinc-400">
            STILE: MANIFESTO COLLAGE B&W
          </span>
        </div>

        {filteredComponents.length === 0 ? (
          <div className="border border-white p-12 text-center font-mono-num uppercase">
            NESSUN COMPONENTE TROVATO PER LA RICERCA "{searchQuery}"
          </div>
        ) : (
          filteredComponents.map((item, index) => (
            <div key={item.id} id={item.id} className="border-2 border-white bg-black">
              <div className="bg-white text-black px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white">
                <div className="flex items-center gap-2">
                  <span className="font-mono-num font-bold text-xs">[{index + 1}/44]</span>
                  <span className="font-display text-xl tracking-tight">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-num text-[10px] bg-black text-white px-2 py-0.5 uppercase">
                    {item.category}
                  </span>
                  <button 
                    onClick={() => handleCopyPath(item.id, item.path)}
                    className="bg-black text-white px-3 py-1 font-mono-num text-[10px] uppercase flex items-center gap-1 hover:bg-zinc-800"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedId === item.id ? 'PERCORSO COPIATO' : item.path}
                  </button>
                </div>
              </div>
              <div className="p-2 sm:p-4 bg-black overflow-hidden">
                {item.component}
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-white mt-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-xs font-mono-num uppercase text-zinc-400">
          <span>TEATRO DEL CAOS // SYSTEM 44 DESIGN SYSTEM</span>
          <span>TUTTI I COMPONENTI SONO AUTONOMI, PURO B&W MANIFESTO COLLAGE</span>
        </div>
      </footer>
    </div>
  );
}
