{/* Echo: active nav item exposes a small cropped measure beneath the word */}
import { Menu, Search } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { navItems } from '../../system/content';

export default function Navbar1() {
  return (
    <header className="group relative overflow-hidden border-b border-line bg-paper text-ink">
      <EchoMeasure index="01" size="sm" surface="bg-paper" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#" className="focus-ring font-black tracking-[-0.05em] text-2xl">LORETO</a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => <a key={item} href="#" className={`focus-ring relative py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:text-accent ${i === 0 ? 'text-accent' : 'text-ink'}`}>{item}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button className="focus-ring p-2" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button className="focus-ring p-2 md:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
          <a href="#" className="focus-ring hidden border border-ink px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent md:inline-flex">Apply</a>
        </div>
      </div>
    </header>
  );
}
