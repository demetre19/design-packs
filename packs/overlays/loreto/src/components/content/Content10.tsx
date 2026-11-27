{/* Artifact: term timetable strip | Echo: cropped week number runs underneath the timetable axis | Interactions: class blocks move along the time axis and their connector rules extend laterally */}
import { CalendarDays, Music2, Sigma, FlaskConical, Languages, Palette, type LucideIcon } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

type Block = { time: string; title: string; icon: LucideIcon; detail: string; x: number; y: number };

const blocks: Block[] = [
  { time: '08:30', title: 'Mathematics', icon: Sigma, detail: 'Algebraic reasoning / Room M4', x: 8, y: 18 },
  { time: '10:10', title: 'Chemistry', icon: FlaskConical, detail: 'Titration practical / Lab 2', x: 29, y: 18 },
  { time: '12:20', title: 'Languages', icon: Languages, detail: 'French oral rehearsal / L1', x: 50, y: 14 },
  { time: '13:40', title: 'Music', icon: Music2, detail: 'Senior ensemble / Hall', x: 67, y: 16 },
  { time: '15:05', title: 'Visual art', icon: Palette, detail: 'Portfolio critique / Studio', x: 84, y: 12 }
];

export default function Content10() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <EchoMeasure index="10" tone="dark" size="lg" surface="bg-ink" />
        <div className="type-micro flex items-center gap-2 text-accent"><CalendarDays size={14} /> Term timetable</div>
        <h2 className="type-editorial mt-4 max-w-4xl text-5xl md:text-7xl">A serious day is sequenced, not stuffed.</h2>
        <div className="relative mt-16 hidden h-[460px] border-y border-white/15 md:block">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" />
          {blocks.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.time} className="group absolute w-[150px]" style={{ left: `${item.x}%`, top: `${item.y + 90}px` }}>
                <div className="type-micro mb-3 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2">{item.time}</div>
                <div className="absolute -top-8 left-0 h-8 w-px bg-accent" />
                <div className="border border-white/20 bg-white/[0.04] p-4 transition-transform duration-200 ease-crisp group-hover:translate-x-3">
                  <Icon className="text-accent" size={20} />
                  <h3 className="type-editorial mt-4 text-2xl">{item.title}</h3>
                  <p className="type-body mt-2 text-xs text-white/58">{item.detail}</p>
                </div>
                <div className="mt-3 h-px w-10 bg-accent transition-all duration-200 ease-crisp group-hover:w-28" />
              </article>
            );
          })}
        </div>
        <div className="mt-10 space-y-4 md:hidden">
          {blocks.map((item) => {
            const Icon = item.icon;
            return <div key={item.time} className="border border-white/20 p-4"><div className="type-micro text-accent">{item.time}</div><Icon className="mt-3" size={18} /><h3 className="type-editorial mt-3 text-2xl">{item.title}</h3><p className="text-xs text-white/60">{item.detail}</p></div>
          })}
        </div>
      </div>
    </section>
  );
}
