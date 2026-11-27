import React, { useState } from 'react';
import { 
  Shield, Terminal, Layers, Cpu, Search, Copy, Check, Eye, Layout, Code, ExternalLink, Activity, ArrowUpRight
} from 'lucide-react';

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

// Stats imports
import { Stats1 } from './components/stats/Stats1';
import { Stats2 } from './components/stats/Stats2';
import { Stats3 } from './components/stats/Stats3';
import { Stats4 } from './components/stats/Stats4';

// Content imports
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
import { filterCatalogItems } from './utils/catalogFilter';

export default function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'assembled'>('catalog');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All 59 Components' },
    { id: 'content', name: 'Content (15)' },
    { id: 'navbar', name: 'Navbar (4)' },
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

  const componentsList = [
    // Navbars
    { id: 'Navbar1', category: 'navbar', name: 'Navbar 1: Solid Black Bar', desc: 'Solid black bar with heavy white wordmark + tiny mono links + orange CTA', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', category: 'navbar', name: 'Navbar 2: White Header', desc: 'White header with thick black bottom bar and small nav', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', category: 'navbar', name: 'Navbar 3: Asymmetric Header', desc: 'Asymmetric header — heavy logo block left, thin links right', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', category: 'navbar', name: 'Navbar 4: Fullscreen Menu', desc: 'Header opening full-screen heavy-black menu with tiny organized links', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'Hero1', category: 'heroes', name: 'Hero 1: Full-Width Headline & Stats', desc: 'Ultra-heavy uppercase headline spanning full width + high-contrast machinery image + black stat tiles row', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', category: 'heroes', name: 'Hero 2: Split Mass & Annotation', desc: 'Split hero — massive black type mass left, thin annotation column right with vast space', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', category: 'heroes', name: 'Hero 3: Vertical Bar & Stepped Content', desc: 'Hero with thick vertical black bar divider and stepped content', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', category: 'heroes', name: 'Hero 4: Full-Bleed Treated Plate', desc: 'Full-bleed treated image with heavy white headline and orange emphasis word', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', category: 'heroes', name: 'Hero 5: Bottom Heavy Stat Band', desc: 'Hero with bottom heavy stat band (solid black tiles: projects/years/equipment)', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'FeatureGrid1', category: 'feature-grids', name: 'Feature Grid 1: 3-Column Solid Tiles', desc: '3-column cards with solid black icon tiles and tiny mono text', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', category: 'feature-grids', name: 'Feature Grid 2: Alternating Rows', desc: 'Features as heavy-title/thin-annotation alternating rows', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', category: 'feature-grids', name: 'Feature Grid 3: Asymmetric Grid', desc: 'Asymmetric grid — dense black column + sparse white columns', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', category: 'feature-grids', name: 'Feature Grid 4: Mosaic Grid', desc: 'Services as black-tile mosaic with orange accents', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'Pricing1', category: 'pricing', name: 'Pricing 1: 3-Tier Panels', desc: '3-tier panels with heavy black price blocks and tiny feature rows', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', category: 'pricing', name: 'Pricing 2: Massive Centered Tile', desc: 'Single centered massive price tile with mono breakdown', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', category: 'pricing', name: 'Pricing 3: Asymmetric Flagship Tier', desc: 'Asymmetric pricing — solid black flagship tier flanked by thin tiers', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', category: 'pricing', name: 'Pricing 4: Heavy Matrix Table', desc: 'Comparison as heavy-row table', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'Testimonial1', category: 'testimonials', name: 'Testimonial 1: Large Heavy Quote', desc: 'Large heavy quote + thin attribution layer', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', category: 'testimonials', name: 'Testimonial 2: Black Mass Panel', desc: 'Quote in black mass panel with tiny client mono', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', category: 'testimonials', name: 'Testimonial 3: Alternating Zones', desc: 'Testimonial rows alternating heavy/light zones', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'BlogCard1', category: 'blog-cards', name: 'Blog Card 1: 3-Column Articles', desc: '3-column articles with high-contrast images and tiny mono dates', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'BlogCard2', category: 'blog-cards', name: 'Blog Card 2: Featured Panel + Rows', desc: 'Featured news as heavy black panel + thin article rows', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'BlogCard3', category: 'blog-cards', name: 'Blog Card 3: Numbered Register', desc: 'Archive as numbered register with outline numerals', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'BlogCard4', category: 'blog-cards', name: 'Blog Card 4: Editorial Wall', desc: 'Editorial wall with weight-staggered entries', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'Footer1', category: 'footers', name: 'Footer 1: Deep Black Mass', desc: 'Deep black mass with tiny organized mono columns and orange accents', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', category: 'footers', name: 'Footer 2: Wordmark & Thin Links', desc: 'Footer with heavy wordmark block + thin link columns', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', category: 'footers', name: 'Footer 3: Asymmetric Footer', desc: 'Asymmetric footer — dense left, sparse right', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', category: 'footers', name: 'Footer 4: Minimal Heavy Bar', desc: 'Minimal heavy-bar footer', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'ContactForm1', category: 'contact-forms', name: 'Contact Form 1: Split Panel Form', desc: 'Split — black contact panel left, thin form right', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'ContactForm2', category: 'contact-forms', name: 'Contact Form 2: Centered Heavy Submit', desc: 'Centered form with heavy black submit mass', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'ContactForm3', category: 'contact-forms', name: 'Contact Form 3: Newsletter Band', desc: 'Newsletter as solid black band with thin input line + orange button', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'Modal1', category: 'modals', name: 'Modal 1: Centered Dialog', desc: 'Centered dialog with heavy black title block', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', category: 'modals', name: 'Modal 2: Mass-Contrast Choice', desc: 'Confirm as mass-contrast choice (solid yes, outline no)', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', category: 'modals', name: 'Modal 3: Slide-Over Drawer', desc: 'Slide-over with thick black header mass', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'Media1', category: 'media', name: 'Media 1: Dimension-Line Plate', desc: 'Full-width plate with dimension-line frame', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'Media2', category: 'media', name: 'Media 2: Weight-Staggered Gallery', desc: 'Gallery as weight-staggered wall', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'Media3', category: 'media', name: 'Media 3: Video Housing Plate', desc: 'Video plate in heavy black housing', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'Faq1', category: 'faqs', name: 'FAQ 1: Accordion Rows', desc: 'Rows with heavy questions and tiny answers', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { id: 'Faq2', category: 'faqs', name: 'FAQ 2: Two-Column Index', desc: 'Two-column FAQ — black index column, white answer column', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { id: 'Faq3', category: 'faqs', name: 'FAQ 3: Numbered Numerals', desc: 'Numbered FAQ with outline numerals', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },

    // CTAs
    { id: 'Cta1', category: 'ctas', name: 'CTA 1: Ultra-Heavy Statement', desc: 'Ultra-heavy statement spanning full width + orange button on black mass', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'Cta2', category: 'ctas', name: 'CTA 2: Orange Inversion Band', desc: 'Orange inversion band with heavy white type', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'Cta3', category: 'ctas', name: 'CTA 3: Minimal Thick-Bar Action', desc: 'Minimal thick-bar + single action', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'Stats1', category: 'stats', name: 'Stats 1: Solid Black Tiles', desc: 'Solid black stat tiles with white mono (professionals/equipment/projects/years)', component: <Stats1 />, path: 'src/components/stats/Stats1.tsx' },
    { id: 'Stats2', category: 'stats', name: 'Stats 2: Heavy Numerals & Annotations', desc: 'Heavy numerals with thin annotation rows', component: <Stats2 />, path: 'src/components/stats/Stats2.tsx' },
    { id: 'Stats3', category: 'stats', name: 'Stats 3: Register Thick Dividers', desc: 'Register stats with thick divider bars', component: <Stats3 />, path: 'src/components/stats/Stats3.tsx' },
    { id: 'Stats4', category: 'stats', name: 'Stats 4: Dominant Tile & Support', desc: 'Single dominant black tile + small supporting tiles', component: <Stats4 />, path: 'src/components/stats/Stats4.tsx' },

    // Content (15 structurally distinct editorial & architectural sections)
    { id: 'Content1', category: 'content', name: 'Content 1: The Ledger', desc: 'Dense annotated extraction ledger with aligned data columns and hairline rules', component: <Content1 />, path: 'src/components/content/Content1.tsx' },
    { id: 'Content2', category: 'content', name: 'Content 2: The Spiral Staircase', desc: 'Diagonally descending process steps threaded by a continuous stepped conduit', component: <Content2 />, path: 'src/components/content/Content2.tsx' },
    { id: 'Content3', category: 'content', name: 'Content 3: The Interlock', desc: 'Zipper-mesh dual columns overlapping a continuous central vertical bar', component: <Content3 />, path: 'src/components/content/Content3.tsx' },
    { id: 'Content4', category: 'content', name: 'Content 4: The Exploded Diagram', desc: 'Central technical machinery plate with peripheral callouts and drawn leader lines', component: <Content4 />, path: 'src/components/content/Content4.tsx' },
    { id: 'Content5', category: 'content', name: 'Content 5: The Split Screen Argument', desc: 'Opposing inverted zones colliding at a central VS seam with contrasting internal layouts', component: <Content5 />, path: 'src/components/content/Content5.tsx' },
    { id: 'Content6', category: 'content', name: 'Content 6: The Margin Book', desc: 'Narrow prose column paired with vertically aligned marginalia, formulas, and core plate', component: <Content6 />, path: 'src/components/content/Content6.tsx' },
    { id: 'Content7', category: 'content', name: 'Content 7: The Film Strip', desc: 'Continuous sprocket-perforated band with unequal-width mixed-media frames', component: <Content7 />, path: 'src/components/content/Content7.tsx' },
    { id: 'Content8', category: 'content', name: 'Content 8: The Pinboard', desc: 'Controlled collision of overlapping rotated artifacts, photos, and assay slips', component: <Content8 />, path: 'src/components/content/Content8.tsx' },
    { id: 'Content9', category: 'content', name: 'Content 9: The Index', desc: 'Dense typographic table of contents with dot leaders and terse part groupings', component: <Content9 />, path: 'src/components/content/Content9.tsx' },
    { id: 'Content10', category: 'content', name: 'Content 10: The Interruption', desc: 'Full-bleed colossal typographic statement fragment with tucked negative-space notes', component: <Content10 />, path: 'src/components/content/Content10.tsx' },
    { id: 'Content11', category: 'content', name: 'Content 11: The Specimen Grid', desc: 'Irregularly spanning technical datasheet matrix separated by 1px hairline divisions', component: <Content11 />, path: 'src/components/content/Content11.tsx' },
    { id: 'Content12', category: 'content', name: 'Content 12: The Threaded Narrative', desc: 'Three distinct operational acts pierced by one continuous safety-orange conduit line', component: <Content12 />, path: 'src/components/content/Content12.tsx' },
    { id: 'Content13', category: 'content', name: 'Content 13: The Colophon', desc: 'Art-book back matter credits, role-name pairs, foundries, and datum specs', component: <Content13 />, path: 'src/components/content/Content13.tsx' },
    { id: 'Content14', category: 'content', name: 'Content 14: The Cascade', desc: 'Mathematical 12-track descending rhythm shifting horizontal position and width', component: <Content14 />, path: 'src/components/content/Content14.tsx' },
    { id: 'Content15', category: 'content', name: 'Content 15: The Inverted Vault', desc: 'Full black band housing a circular radial telemetry rotunda composition', component: <Content15 />, path: 'src/components/content/Content15.tsx' },
  ];

  const filteredComponents = filterCatalogItems(
    componentsList,
    selectedCategory,
    searchQuery
  );

  const handleCopyPath = (path: string, id: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-black font-sans selection:bg-[#f25c05] selection:text-black">
      {/* Top System Header */}
      <header className="bg-black text-white border-b-4 border-[#f25c05] font-mono sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex flex-col md:flex-row items-center justify-between py-4 md:py-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#f25c05] flex items-center justify-center text-black font-black">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-sans font-black text-xl tracking-tighter uppercase">TITAN FORGE INDUSTRIAL</h1>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Complete Design System // 59 Self-Contained Components</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="flex border-2 border-neutral-800 bg-neutral-900">
              <button 
                onClick={() => setActiveTab('catalog')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center space-x-2 transition-colors ${activeTab === 'catalog' ? 'bg-[#f25c05] text-black' : 'text-neutral-300 hover:text-white'}`}
              >
                <Code className="w-4 h-4" />
                <span>Component Catalog (59)</span>
              </button>
              <button 
                onClick={() => setActiveTab('assembled')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center space-x-2 transition-colors ${activeTab === 'assembled' ? 'bg-[#f25c05] text-black' : 'text-neutral-300 hover:text-white'}`}
              >
                <Layout className="w-4 h-4" />
                <span>Assembled Live Page</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'catalog' ? (
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Controls Bar */}
          <div className="bg-white border-4 border-black p-6 mb-12 shadow-none font-mono">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH 59 COMPONENTS..." 
                  className="w-full bg-[#f5f4f0] border-2 border-black pl-11 pr-4 py-3 text-xs uppercase font-mono focus:outline-none focus:border-[#f25c05]"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 text-[10px] uppercase font-bold tracking-wider border-2 transition-colors ${selectedCategory === cat.id ? 'bg-black text-white border-black' : 'bg-white text-neutral-700 border-black hover:bg-[#f5f4f0]'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Grid */}
          <div className="space-y-16">
            {filteredComponents.map((item) => (
              <div key={item.id} className="border-4 border-black bg-white shadow-none">
                {/* Component Header Bar */}
                <div className="bg-black text-white p-4 border-b-2 border-[#f25c05] flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className="bg-[#f25c05] text-black px-2 py-0.5 font-bold uppercase text-[10px]">{item.category}</span>
                    <span className="font-sans font-black text-lg uppercase tracking-tight">{item.name}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-neutral-400 text-[10px] hidden sm:inline">{item.path}</span>
                    <button 
                      onClick={() => handleCopyPath(item.path, item.id)}
                      className="bg-neutral-900 border border-neutral-700 px-3 py-1.5 hover:bg-[#f25c05] hover:text-black transition-colors flex items-center space-x-1.5 text-[10px]"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === item.id ? 'Copied Path!' : 'Copy Path'}</span>
                    </button>
                  </div>
                </div>

                {/* Component Description */}
                <div className="p-4 bg-neutral-100 border-b-2 border-black font-mono text-xs text-neutral-700 uppercase">
                  {item.desc}
                </div>

                {/* Component Live Render */}
                <div className="p-0 bg-[#f5f4f0] overflow-hidden">
                  {item.component}
                </div>
              </div>
            ))}

            {filteredComponents.length === 0 && (
              <div className="border-4 border-black bg-white p-12 text-center font-mono">
                <p className="text-neutral-600 uppercase text-sm mb-4">No components found matching your search query.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="bg-black text-white px-6 py-3 text-xs font-bold uppercase hover:bg-[#f25c05] hover:text-black transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>
      ) : (
        /* Assembled Landing Page Preview */
        <div className="w-full">
          <div className="bg-black text-white py-6 border-b-4 border-[#f25c05] text-center font-mono text-xs uppercase">
            <span>LIVE ASSEMBLED LANDING PAGE // USING DESIGN SYSTEM COMPONENTS</span>
          </div>

          <Navbar1 />
          <Hero1 />
          <Content1 />
          <Content4 />
          <Content10 />
          <Content15 />
          <Stats1 />
          <FeatureGrid1 />
          <Pricing1 />
          <Testimonial1 />
          <Faq1 />
          <ContactForm1 />
          <Cta1 />
          <Content13 />
          <Footer1 />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-[#f25c05] font-mono py-12 mt-16 select-none">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Shield className="w-5 h-5 text-[#f25c05]" />
            <span className="font-sans font-black uppercase">TITAN FORGE INDUSTRIAL DESIGN SYSTEM</span>
          </div>
          <div className="text-neutral-400 text-[10px] uppercase">
            59 SELF-CONTAINED REACT + TAILWIND COMPONENTS // HEAVYLINE INDUSTRIAL MASS STYLE
          </div>
        </div>
      </footer>
    </div>
  );
}
