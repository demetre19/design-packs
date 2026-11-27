{/* Echo: footer columns sit over a cropped year whose notch moves on hover */}
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Footer3() {
  return (
    <footer className="bg-ground text-ink">
      <div className="group relative mx-auto max-w-7xl overflow-hidden px-5 py-16 md:px-10">
        <EchoMeasure index="120" size="lg" surface="bg-ground" />
        <div className="relative z-10 grid gap-10 border-y border-line py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="type-micro text-accent">Next step</div>
            <div className="type-editorial mt-3 max-w-2xl text-5xl">Visit once. Listen carefully.</div>
          </div>
          <EchoCta>Book a tour</EchoCta>
        </div>
        <div className="relative z-10 mt-10 grid gap-8 text-sm text-secondary md:grid-cols-4">
          {['Admissions', 'Learning', 'Boarding', 'Policies'].map((head) => (
            <div key={head}><div className="type-micro mb-4 text-ink">{head}</div><div className="space-y-2"><a href="#" className="block hover:text-ink">Overview</a><a href="#" className="block hover:text-ink">Key dates</a><a href="#" className="block hover:text-ink">Contact</a></div></div>
          ))}
        </div>
      </div>
    </footer>
  );
}
