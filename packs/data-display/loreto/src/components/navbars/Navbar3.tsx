{/* Echo: utility strip and primary row share one cropped navigation measure */}
import { Search, Menu } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { navItems } from '../../system/content';

export default function Navbar3() {
  return (
    <header className="group relative overflow-hidden border-b border-line bg-ground text-ink">
      <EchoMeasure index="03" size="sm" surface="bg-ground" />
      <div className="hidden border-b border-line px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary md:block md:px-10">International students · Loreto Connect · Contact</div>
      <div className="flex h-20 items-center justify-between px-5 md:px-10">
        <a href="#" className="focus-ring text-2xl font-black tracking-[-0.05em]">Loreto College</a>
        <nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <a key={item} href="#" className="text-sm font-semibold text-secondary transition-colors duration-200 ease-crisp hover:text-ink">{item}</a>)}</nav>
        <div className="flex items-center gap-2"><Search className="h-5 w-5" /><Menu className="h-5 w-5 lg:hidden" /></div>
      </div>
    </header>
  );
}
