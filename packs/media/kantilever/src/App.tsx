import React, { useState } from 'react';
import {
  Eye,
  Compass,
  ArrowUpRight,
  Check,
  Copy,
  Building2,
  Grid,
  Layers as LayersIcon,
  DollarSign,
  MessageSquare,
  BookOpen,
  FileText,
  Send,
  HelpCircle,
  BarChart3,
  LayoutTemplate,
} from 'lucide-react';
import { filterComponentsByCategory, getCategoryCounts } from './utils/registry';

// Import all 44 original components
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

import { Blog1 } from './components/blog-cards/Blog1';
import { Blog2 } from './components/blog-cards/Blog2';
import { Blog3 } from './components/blog-cards/Blog3';
import { Blog4 } from './components/blog-cards/Blog4';

import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

import { Contact1 } from './components/contact-forms/Contact1';
import { Contact2 } from './components/contact-forms/Contact2';
import { Contact3 } from './components/contact-forms/Contact3';

import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

import { FAQ1 } from './components/faqs/FAQ1';
import { FAQ2 } from './components/faqs/FAQ2';
import { FAQ3 } from './components/faqs/FAQ3';

import { CTA1 } from './components/ctas/CTA1';
import { CTA2 } from './components/ctas/CTA2';
import { CTA3 } from './components/ctas/CTA3';

import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

// Import 15 new bespoke content sections
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

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.FC;
  path: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content',
  navbar: 'Navbar',
  heroes: 'Heroes',
  'feature-grids': 'Feature Grids',
  pricing: 'Pricing',
  testimonials: 'Testimonials',
  'blog-cards': 'Blog Cards',
  footers: 'Footers',
  'contact-forms': 'Contact Forms',
  modals: 'Modals',
  media: 'Media',
  faqs: 'FAQs',
  ctas: 'CTAs',
  stats: 'Stats',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'website'>('explorer');
  const [selectedCategory, setSelectedCategory] = useState<string>('content');
  const [activeComponentId, setActiveComponentId] = useState<string>('Content1');
  const [copied, setCopied] = useState(false);

  const componentList: ComponentItem[] = [
    // Content (15)
    { id: 'Content1', name: 'Content 1 // The Ledger', category: 'content', icon: LayoutTemplate, component: Content1, path: 'src/components/content/Content1.tsx' },
    { id: 'Content2', name: 'Content 2 // The Spiral Staircase', category: 'content', icon: LayoutTemplate, component: Content2, path: 'src/components/content/Content2.tsx' },
    { id: 'Content3', name: 'Content 3 // The Interlock', category: 'content', icon: LayoutTemplate, component: Content3, path: 'src/components/content/Content3.tsx' },
    { id: 'Content4', name: 'Content 4 // The Exploded Diagram', category: 'content', icon: LayoutTemplate, component: Content4, path: 'src/components/content/Content4.tsx' },
    { id: 'Content5', name: 'Content 5 // The Split Screen Argument', category: 'content', icon: LayoutTemplate, component: Content5, path: 'src/components/content/Content5.tsx' },
    { id: 'Content6', name: 'Content 6 // The Margin Book', category: 'content', icon: LayoutTemplate, component: Content6, path: 'src/components/content/Content6.tsx' },
    { id: 'Content7', name: 'Content 7 // The Film Strip', category: 'content', icon: LayoutTemplate, component: Content7, path: 'src/components/content/Content7.tsx' },
    { id: 'Content8', name: 'Content 8 // The Pinboard', category: 'content', icon: LayoutTemplate, component: Content8, path: 'src/components/content/Content8.tsx' },
    { id: 'Content9', name: 'Content 9 // The Index', category: 'content', icon: LayoutTemplate, component: Content9, path: 'src/components/content/Content9.tsx' },
    { id: 'Content10', name: 'Content 10 // The Interruption', category: 'content', icon: LayoutTemplate, component: Content10, path: 'src/components/content/Content10.tsx' },
    { id: 'Content11', name: 'Content 11 // The Specimen Grid', category: 'content', icon: LayoutTemplate, component: Content11, path: 'src/components/content/Content11.tsx' },
    { id: 'Content12', name: 'Content 12 // The Threaded Narrative', category: 'content', icon: LayoutTemplate, component: Content12, path: 'src/components/content/Content12.tsx' },
    { id: 'Content13', name: 'Content 13 // The Colophon', category: 'content', icon: LayoutTemplate, component: Content13, path: 'src/components/content/Content13.tsx' },
    { id: 'Content14', name: 'Content 14 // The Cascade', category: 'content', icon: LayoutTemplate, component: Content14, path: 'src/components/content/Content14.tsx' },
    { id: 'Content15', name: 'Content 15 // The Inverted Vault', category: 'content', icon: LayoutTemplate, component: Content15, path: 'src/components/content/Content15.tsx' },

    // Navbar
    { id: 'Navbar1', name: 'Navbar 1 // Wordmark + CTA', category: 'navbar', icon: Compass, component: Navbar1, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', name: 'Navbar 2 // Diagonal Dash', category: 'navbar', icon: Compass, component: Navbar2, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', name: 'Navbar 3 // Angled Strip Banner', category: 'navbar', icon: Compass, component: Navbar3, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', name: 'Navbar 4 // Fullscreen Sliced Menu', category: 'navbar', icon: Compass, component: Navbar4, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'Hero1', name: 'Hero 1 // Split Seam + Numeral', category: 'heroes', icon: Building2, component: Hero1, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', name: 'Hero 2 // Hatch Accent Grid', category: 'heroes', icon: Building2, component: Hero2, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', name: 'Hero 3 // Full Bleed Scrim', category: 'heroes', icon: Building2, component: Hero3, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', name: 'Hero 4 // Stat Strip Blocks', category: 'heroes', icon: Building2, component: Hero4, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', name: 'Hero 5 // Tall Trapezoid Mask', category: 'heroes', icon: Building2, component: Hero5, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'FeatureGrid1', name: 'Feature Grid 1 // Diagonal Top', category: 'feature-grids', icon: Grid, component: FeatureGrid1, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', name: 'Feature Grid 2 // Numbered Rows', category: 'feature-grids', icon: Grid, component: FeatureGrid2, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', name: 'Feature Grid 3 // Alternating Media', category: 'feature-grids', icon: Grid, component: FeatureGrid3, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', name: 'Feature Grid 4 // 2x2 Hairline Matrix', category: 'feature-grids', icon: Grid, component: FeatureGrid4, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'Pricing1', name: 'Pricing 1 // Flagship Ribbon', category: 'pricing', icon: DollarSign, component: Pricing1, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', name: 'Pricing 2 // Project Tiers', category: 'pricing', icon: DollarSign, component: Pricing2, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', name: 'Pricing 3 // Centered Angled Price', category: 'pricing', icon: DollarSign, component: Pricing3, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', name: 'Pricing 4 // Comparison Matrix', category: 'pricing', icon: DollarSign, component: Pricing4, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'Testimonial1', name: 'Testimonial 1 // Bold Quote Index', category: 'testimonials', icon: MessageSquare, component: Testimonial1, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', name: 'Testimonial 2 // Staggered Grid', category: 'testimonials', icon: MessageSquare, component: Testimonial2, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', name: 'Testimonial 3 // Watermark Echo', category: 'testimonials', icon: MessageSquare, component: Testimonial3, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'Blog1', name: 'Blog 1 // Parallelogram Articles', category: 'blog-cards', icon: BookOpen, component: Blog1, path: 'src/components/blog-cards/Blog1.tsx' },
    { id: 'Blog2', name: 'Blog 2 // Featured Story + Specs', category: 'blog-cards', icon: BookOpen, component: Blog2, path: 'src/components/blog-cards/Blog2.tsx' },
    { id: 'Blog3', name: 'Blog 3 // Indexed Register', category: 'blog-cards', icon: BookOpen, component: Blog3, path: 'src/components/blog-cards/Blog3.tsx' },
    { id: 'Blog4', name: 'Blog 4 // Split Composition', category: 'blog-cards', icon: BookOpen, component: Blog4, path: 'src/components/blog-cards/Blog4.tsx' },

    // Footers
    { id: 'Footer1', name: 'Footer 1 // Charcoal Band', category: 'footers', icon: FileText, component: Footer1, path: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', name: 'Footer 2 // Angled Top Edge', category: 'footers', icon: FileText, component: Footer2, path: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', name: 'Footer 3 // Minimal Indexed', category: 'footers', icon: FileText, component: Footer3, path: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', name: 'Footer 4 // Watermark Wordmark', category: 'footers', icon: FileText, component: Footer4, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'Contact1', name: 'Contact 1 // Split Form + Studio', category: 'contact-forms', icon: Send, component: Contact1, path: 'src/components/contact-forms/Contact1.tsx' },
    { id: 'Contact2', name: 'Contact 2 // Narrow Secure Form', category: 'contact-forms', icon: Send, component: Contact2, path: 'src/components/contact-forms/Contact2.tsx' },
    { id: 'Contact3', name: 'Contact 3 // Newsletter Strip', category: 'contact-forms', icon: Send, component: Contact3, path: 'src/components/contact-forms/Contact3.tsx' },

    // Modals
    { id: 'Modal1', name: 'Modal 1 // Centered Dialog', category: 'modals', icon: LayersIcon, component: Modal1, path: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', name: 'Modal 2 // Dual Angular Buttons', category: 'modals', icon: LayersIcon, component: Modal2, path: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', name: 'Modal 3 // Slide-Over Drawer', category: 'modals', icon: LayersIcon, component: Modal3, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'Media1', name: 'Media 1 // Full-Width Caption Band', category: 'media', icon: Eye, component: Media1, path: 'src/components/media/Media1.tsx' },
    { id: 'Media2', name: 'Media 2 // Parallelogram Gallery', category: 'media', icon: Eye, component: Media2, path: 'src/components/media/Media2.tsx' },
    { id: 'Media3', name: 'Media 3 // Video Angular Play', category: 'media', icon: Eye, component: Media3, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'FAQ1', name: 'FAQ 1 // Hairline Toggles', category: 'faqs', icon: HelpCircle, component: FAQ1, path: 'src/components/faqs/FAQ1.tsx' },
    { id: 'FAQ2', name: 'FAQ 2 // Two-Column Matrix', category: 'faqs', icon: HelpCircle, component: FAQ2, path: 'src/components/faqs/FAQ2.tsx' },
    { id: 'FAQ3', name: 'FAQ 3 // Watermark Numbered', category: 'faqs', icon: HelpCircle, component: FAQ3, path: 'src/components/faqs/FAQ3.tsx' },

    // CTAs
    { id: 'CTA1', name: 'CTA 1 // Bold Statement + Band', category: 'ctas', icon: ArrowUpRight, component: CTA1, path: 'src/components/ctas/CTA1.tsx' },
    { id: 'CTA2', name: 'CTA 2 // Split Angled Image', category: 'ctas', icon: ArrowUpRight, component: CTA2, path: 'src/components/ctas/CTA2.tsx' },
    { id: 'CTA3', name: 'CTA 3 // Minimal Action Band', category: 'ctas', icon: ArrowUpRight, component: CTA3, path: 'src/components/ctas/CTA3.tsx' },

    // Stats
    { id: 'Stat1', name: 'Stat 1 // Angled Left Edge Blocks', category: 'stats', icon: BarChart3, component: Stat1, path: 'src/components/stats/Stat1.tsx' },
    { id: 'Stat2', name: 'Stat 2 // Big Watermark Echoes', category: 'stats', icon: BarChart3, component: Stat2, path: 'src/components/stats/Stat2.tsx' },
    { id: 'Stat3', name: 'Stat 3 // Aligned Column Table', category: 'stats', icon: BarChart3, component: Stat3, path: 'src/components/stats/Stat3.tsx' },
    { id: 'Stat4', name: 'Stat 4 // Yellow Accent Strip', category: 'stats', icon: BarChart3, component: Stat4, path: 'src/components/stats/Stat4.tsx' },
  ];

  const categories = getCategoryCounts(componentList, CATEGORY_LABELS);
  const filteredComponents = filterComponentsByCategory(componentList, selectedCategory);

  const activeComponent = componentList.find((c) => c.id === activeComponentId) || componentList[0];
  const ActiveComp = activeComponent.component;

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const nextList = filterComponentsByCategory(componentList, catId);
    if (nextList.length > 0 && !nextList.some((c) => c.id === activeComponentId)) {
      setActiveComponentId(nextList[0].id);
    }
  };

  const handleCopyPath = () => {
    navigator.clipboard.writeText(activeComponent.path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#14161a] font-sans selection:bg-[#ffc72c] selection:text-[#14161a]">
      {/* Top System Bar */}
      <header className={`bg-[#14161a] text-[#f7f6f3] border-b border-[#f7f6f3]/10 z-50 ${activeTab === 'explorer' ? 'sticky top-0' : 'relative'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-20 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#ffc72c] transform skew-x-[-12deg] shrink-0" />
            <div>
              <span className="font-extrabold tracking-tight text-base sm:text-lg uppercase block leading-none">
                KANTILEVER<span className="text-[#ffc72c] ml-1">//</span> DESIGN SYSTEM
              </span>
              <span className="text-[10px] font-mono text-[#f7f6f3]/50 uppercase">
                {componentList.length} Self-Contained React + Tailwind Components
              </span>
            </div>
          </div>

          <div className="flex items-center bg-[#f7f6f3]/10 p-1 font-mono text-[11px] sm:text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('explorer')}
              className={`px-3 sm:px-4 py-2 uppercase font-bold transition-colors whitespace-nowrap ${
                activeTab === 'explorer' ? 'bg-[#ffc72c] text-[#14161a]' : 'text-[#f7f6f3] hover:text-[#ffc72c]'
              }`}
            >
              Component Explorer ({componentList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('website')}
              className={`px-3 sm:px-4 py-2 uppercase font-bold transition-colors whitespace-nowrap ${
                activeTab === 'website' ? 'bg-[#ffc72c] text-[#14161a]' : 'text-[#f7f6f3] hover:text-[#ffc72c]'
              }`}
            >
              Showcase Website
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'explorer' ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#14161a] text-[#f7f6f3] p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#ffc72c]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#ffc72c]">ELEMENT FAMILIES</span>
              </div>
              <div className="space-y-1 max-h-[340px] overflow-y-auto pr-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 text-xs font-mono uppercase transition-colors block ${
                      selectedCategory === cat.id
                        ? 'bg-[#ffc72c] text-[#14161a] font-bold'
                        : 'text-[#f7f6f3]/75 hover:text-[#ffc72c] hover:bg-[#f7f6f3]/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#14161a] text-[#f7f6f3] p-5 space-y-3">
              <span className="font-mono text-xs text-[#ffc72c] uppercase">// SELECT COMPONENT</span>
              <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
                {filteredComponents.map((comp) => (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setActiveComponentId(comp.id)}
                    className={`w-full text-left px-3 py-2.5 text-xs font-sans uppercase font-bold transition-colors block ${
                      activeComponentId === comp.id
                        ? 'bg-[#ffc72c] text-[#14161a]'
                        : 'text-[#f7f6f3]/80 hover:text-[#ffc72c] hover:bg-[#f7f6f3]/5'
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Viewer & Inspection Panel */}
          <div className="lg:col-span-9 space-y-6">
            <div className="bg-[#14161a] text-[#f7f6f3] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#ffc72c] uppercase">// INSPECTED COMPONENT</span>
                <h1 className="text-2xl font-extrabold uppercase">{activeComponent.name}</h1>
                <span className="font-mono text-xs text-[#f7f6f3]/60">{activeComponent.path}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyPath}
                className="px-4 py-2 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center gap-2 shrink-0"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Path Copied!' : 'Copy File Path'}
              </button>
            </div>

            {/* Live Component Render Stage */}
            <div className="border-2 border-[#14161a] bg-[#f7f6f3] overflow-hidden">
              <div className="bg-[#14161a] text-[#ffc72c] px-4 py-2 font-mono text-[10px] uppercase flex items-center justify-between">
                <span>// LIVE RENDERED STATE (FINAL)</span>
                <span>MERIDIAN ANGLE ARCHITECTURE</span>
              </div>
              <div className="w-full overflow-x-auto">
                <ActiveComp />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Assembled Showcase Website using original + new Content sections */
        <div className="space-y-0">
          <Navbar1 />
          <Hero1 />
          <Content1 />
          <Content4 />
          <Content5 />
          <Content7 />
          <Content10 />
          <Content15 />
          <Content13 />
          <Footer1 />
        </div>
      )}
    </div>
  );
}
