{/* Echo: footer wordmark is paired with a cropped year and moving measure */}
import { MapPin, Phone, Mail } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { brand, navItems } from '../../system/content';

export default function Footer1() {
  return (
    <footer className="bg-ink text-white">
      <div className="group relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-10">
        <EchoMeasure index="1905" tone="dark" size="lg" surface="bg-ink" />
        <div className="relative z-10">
          <div className="type-editorial max-w-md text-5xl">Loreto College Marryatville</div>
          <p className="type-body mt-5 max-w-sm text-white/62">Educating strong, passionate and confident girls and young women since 1905.</p>
        </div>
        <div className="relative z-10">
          <div className="type-micro mb-5 text-accent">Explore</div>
          <div className="grid gap-3 text-sm text-white/72">{navItems.map((item) => <a className="transition-colors duration-200 ease-crisp hover:text-accent" href="#" key={item}>{item}</a>)}</div>
        </div>
        <div className="relative z-10">
          <div className="type-micro mb-5 text-accent">Contact</div>
          <div className="space-y-3 text-sm text-white/72">
            <div className="flex gap-3"><MapPin className="h-4 w-4 text-accent" />{brand.address}</div>
            <div className="flex gap-3"><Phone className="h-4 w-4 text-accent" />{brand.phone}</div>
            <div className="flex gap-3"><Mail className="h-4 w-4 text-accent" />info@loreto.sa.edu.au</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">CRICOS 00629G · Privacy · Policies · © 2027 Loreto College</div>
    </footer>
  );
}
