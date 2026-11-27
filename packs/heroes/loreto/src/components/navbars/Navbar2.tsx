{/* Echo: centred masthead uses the cropped year behind restrained navigation */}
import { Menu } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { navItems } from '../../system/content';

export default function Navbar2() {
  return (
    <header className="group relative overflow-hidden bg-ink text-white">
      <EchoMeasure index="1905" tone="dark" size="sm" surface="bg-ink" />
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-5 md:px-10">
        <button className="focus-ring p-2 md:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
        <nav className="hidden gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 md:flex">{navItems.slice(0, 3).map((item) => <a key={item} href="#" className="transition-colors duration-200 ease-crisp hover:text-accent">{item}</a>)}</nav>
        <a href="#" className="focus-ring justify-self-center text-center"><span className="block text-xl font-black tracking-[-0.05em]">LORETO</span><span className="block text-[10px] uppercase tracking-[0.22em] text-white/55">Marryatville</span></a>
        <nav className="hidden justify-end gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 md:flex">{navItems.slice(3).map((item) => <a key={item} href="#" className="transition-colors duration-200 ease-crisp hover:text-accent">{item}</a>)}</nav>
      </div>
    </header>
  );
}
