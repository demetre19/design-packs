import React, { useState } from 'react';
import { allComponents, categories, ComponentItem, filterComponents } from './components/registry';
import { Navbar1 } from './components/navbar/Navbar1';
import { Hero1 } from './components/heroes/Hero1';
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { Pricing1 } from './components/pricing/Pricing1';
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { Stat1 } from './components/stats/Stat1';
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { Footer1 } from './components/footers/Footer1';
import { Content1 } from './components/content/Content1';
import { Content4 } from './components/content/Content4';
import { Content10 } from './components/content/Content10';
import { Content15 } from './components/content/Content15';
import { Search, Layers, Eye, Code, Compass } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'catalog' | 'preview' | 'assembled'>('catalog');
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem>(allComponents[0]);
  const [showCode, setShowCode] = useState<boolean>(false);

  const filteredComponents = filterComponents(allComponents, activeCategory, searchQuery);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#16171a] font-sans selection:bg-[#b5482e] selection:text-[#fafaf8]">
      {/* Top Architectural Header */}
      <header className="w-full bg-[#fafaf8] border-b border-[#e2e0d8] sticky top-0 z-50">
        <div className="px-6 py-3 flex items-center justify-between border-b border-[#e2e0d8]/60 text-[10px] font-mono tracking-widest text-stone-500 uppercase">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span>ATELIER VARDEN — DESIGN SYSTEM ARCHIVE 2026</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span>{allComponents.length} SELF-CONTAINED REACT COMPONENTS</span>
            <span>·</span>
            <span>DATUM CLEAN ARCHITECTURAL STYLE</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <h1 className="text-xl font-medium tracking-tight text-[#16171a]">ATELIER VARDEN</h1>
            <span className="text-xs font-mono text-stone-400 pl-2">SYSTEM v5.9</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button 
              onClick={() => setViewMode('catalog')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-none flex items-center space-x-2 ${viewMode === 'catalog' ? 'bg-[#b5482e] text-[#fafaf8]' : 'bg-[#f0efeb] text-[#16171a] border border-[#e2e0d8] hover:border-[#16171a]'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Catalog ({allComponents.length})</span>
            </button>
            <button 
              onClick={() => setViewMode('preview')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-none flex items-center space-x-2 ${viewMode === 'preview' ? 'bg-[#b5482e] text-[#fafaf8]' : 'bg-[#f0efeb] text-[#16171a] border border-[#e2e0d8] hover:border-[#16171a]'}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Component Inspector</span>
            </button>
            <button 
              onClick={() => setViewMode('assembled')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-none flex items-center space-x-2 ${viewMode === 'assembled' ? 'bg-[#b5482e] text-[#fafaf8]' : 'bg-[#f0efeb] text-[#16171a] border border-[#e2e0d8] hover:border-[#16171a]'}`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Assembled Site Flow</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      {viewMode === 'catalog' && (
        <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          {/* Intro Hero Banner */}
          <div className="bg-[#f0efeb] border border-[#e2e0d8] p-8 lg:p-12 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">STYLE CONSTITUTION — DATUM CLEAN ARCHITECTURAL</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#16171a] leading-snug">
              Architecture as calm authority in {allComponents.length} components.
            </h2>
            <p className="text-stone-600 text-sm max-w-3xl leading-relaxed">
              Pure warm-white surfaces (#fafaf8) with pale stone panels (#f0efeb). Generous margins, content in confident horizontal bands, exact rectangular frames, ink in near-black (#16171a), and one accent in deep brick-terracotta (#b5482e). All {allComponents.length} self-contained React + Tailwind components are fully rendered below.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-stone-500 uppercase">
              <span>· {categories.length} Categories</span>
              <span>· {allComponents.length} Self-Contained Files</span>
              <span>· Monospace Spec Registers</span>
              <span>· Sharp Corners / Zero Shadows</span>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-[#f0efeb] border border-[#e2e0d8] p-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-none transition-colors ${activeCategory === 'all' ? 'bg-[#16171a] text-[#fafaf8]' : 'bg-[#fafaf8] text-stone-600 border border-[#e2e0d8] hover:border-[#16171a]'}`}
              >
                All ({allComponents.length})
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-none transition-colors ${activeCategory === cat.id ? 'bg-[#16171a] text-[#fafaf8]' : 'bg-[#fafaf8] text-stone-600 border border-[#e2e0d8] hover:border-[#16171a]'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <input 
                type="text" 
                placeholder="Search elements..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fafaf8] border border-[#e2e0d8] pl-9 pr-4 py-2 text-xs font-mono text-[#16171a] focus:outline-none focus:border-[#b5482e]"
              />
            </div>
          </div>

          {/* Components Grid */}
          <div className="space-y-16">
            {categories.filter(cat => activeCategory === 'all' || cat.id === activeCategory).map(cat => {
              const itemsInCat = filteredComponents.filter(c => c.category === cat.id);
              if (itemsInCat.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e2e0d8]">
                    <div className="flex items-center space-x-2">
                      <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
                      <h3 className="text-lg font-medium text-[#16171a] uppercase tracking-wider font-mono">{cat.name}</h3>
                    </div>
                    <span className="text-xs font-mono text-stone-400">[{itemsInCat.length} ELEMENTS]</span>
                  </div>

                  <div className="space-y-12">
                    {itemsInCat.map(item => {
                      const Comp = item.component;
                      return (
                        <div key={item.id} className="border border-[#e2e0d8] bg-[#f0efeb] p-6 space-y-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-[#e2e0d8]">
                            <div>
                              <div className="text-[10px] font-mono uppercase text-stone-500 tracking-widest">{item.category} / {item.id}</div>
                              <h4 className="text-xl font-medium text-[#16171a]">{item.name}</h4>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button 
                                onClick={() => { setSelectedComponent(item); setViewMode('preview'); }}
                                className="px-3 py-1.5 bg-[#fafaf8] border border-[#e2e0d8] text-xs font-mono uppercase tracking-wider hover:border-[#16171a] transition-colors"
                              >
                                Inspect Isolated
                              </button>
                            </div>
                          </div>

                          {/* Live Rendered Component */}
                          <div className="border border-[#e2e0d8] bg-[#fafaf8] overflow-hidden">
                            <Comp />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {viewMode === 'preview' && (
        <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Component Selector */}
          <div className="lg:col-span-4 bg-[#f0efeb] border border-[#e2e0d8] p-6 space-y-6 h-fit sticky top-24">
            <div className="flex items-center space-x-2 pb-4 border-b border-[#e2e0d8]">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Component Inspector ({allComponents.length})</span>
            </div>

            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-2">
              {allComponents.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedComponent(c)}
                  className={`w-full text-left p-3 text-xs font-mono uppercase tracking-wider flex justify-between items-center transition-colors border ${selectedComponent.id === c.id ? 'bg-[#16171a] text-[#fafaf8] border-[#16171a]' : 'bg-[#fafaf8] text-[#16171a] border-[#e2e0d8] hover:border-stone-400'}`}
                >
                  <span className="truncate">{c.name}</span>
                  <span className="text-[10px] text-stone-400 pl-2">{c.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Inspection View */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#e2e0d8]">
                <div>
                  <div className="text-xs font-mono uppercase text-stone-500">{selectedComponent.category} / {selectedComponent.id}</div>
                  <h2 className="text-2xl font-medium text-[#16171a]">{selectedComponent.name}</h2>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-widest flex items-center space-x-2 border transition-colors ${showCode ? 'bg-[#16171a] text-[#fafaf8] border-[#16171a]' : 'bg-[#fafaf8] text-[#16171a] border-[#e2e0d8] hover:border-[#16171a]'}`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>{showCode ? 'Hide Import' : 'View Import'}</span>
                  </button>
                </div>
              </div>

              {showCode && (
                <div className="bg-[#16171a] text-[#fafaf8] p-4 font-mono text-xs overflow-x-auto border border-stone-800">
                  <code>{selectedComponent.codeSnippet}</code>
                </div>
              )}

              <div className="border border-[#e2e0d8] bg-[#fafaf8] overflow-hidden">
                <selectedComponent.component />
              </div>
            </div>
          </div>
        </main>
      )}

      {viewMode === 'assembled' && (
        <main className="w-full">
          <div className="bg-[#f0efeb] border-b border-[#e2e0d8] py-6 px-6 text-center font-mono text-xs uppercase tracking-widest text-stone-600">
            [ ASSEMBLED WEBSITE FLOW PREVIEW — ATELIER VARDEN PRACTICE ]
          </div>
          <Navbar1 />
          <Hero1 />
          <Stat1 />
          <Content1 />
          <FeatureGrid1 />
          <Content4 />
          <Content10 />
          <Pricing1 />
          <Content15 />
          <Testimonial1 />
          <BlogCard1 />
          <ContactForm1 />
          <Footer1 />
        </main>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#fafaf8] border-t border-[#e2e0d8] py-12 mt-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-stone-500 uppercase tracking-widest">
          <div className="flex items-center space-x-3">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="font-medium text-[#16171a]">ATELIER VARDEN ARCHITECTURAL SYSTEM</span>
            <span>—</span>
            <span>{allComponents.length} COMPONENTS VERIFIED</span>
          </div>
          <div>
            ZÜRICH · TOKYO · STOCKHOLM
          </div>
        </div>
      </footer>
    </div>
  );
}
