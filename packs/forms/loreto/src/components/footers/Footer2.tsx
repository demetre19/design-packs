{/* Echo: minimal footer uses cropped typography as a closing page measure */}
import { EchoMeasure } from '../../system/echo';
import { navItems } from '../../system/content';

export default function Footer2() {
  return (
    <footer className="group relative overflow-hidden border-t border-line bg-paper px-5 py-12 text-ink md:px-10">
      <EchoMeasure index="07" size="lg" surface="bg-paper" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="type-micro text-accent">Loreto</div>
          <div className="type-editorial mt-2 text-4xl">Strong voices. Open futures.</div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary">{navItems.map((item) => <a href="#" className="transition-colors duration-200 ease-crisp hover:text-ink" key={item}>{item}</a>)}</div>
      </div>
    </footer>
  );
}
