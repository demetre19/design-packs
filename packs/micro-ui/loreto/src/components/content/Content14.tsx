{/* Artifact: first-day transition ritual card | Echo: cropped day sequence number sits under the ritual line | Interactions: each ritual marker travels sideways and its connector line extends on hover */}
import { DoorOpen, HandHeart, MapPin, Sunrise, type LucideIcon } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

type Ritual = { icon: LucideIcon; time: string; title: string; copy: string };

const rituals: Ritual[] = [
  { icon: Sunrise, time: '07:50', title: 'Arrive before the noise', copy: 'Peer leaders meet new students at the lower gate and walk them in before the yard fills.' },
  { icon: DoorOpen, time: '08:20', title: 'Open the right room', copy: 'Home-group teachers introduce the room as a working place, not a performance space.' },
  { icon: HandHeart, time: '10:05', title: 'Use the first name', copy: 'Every new student is spoken to by name before recess; staff verify, not assume.' },
  { icon: MapPin, time: '15:15', title: 'Leave knowing tomorrow', copy: 'The day ends with one map, one person and one question already answered.' }
];

export default function Content14() {
  return (
    <section className="bg-paper px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <EchoMeasure index="14" size="lg" surface="bg-paper" />
        <div className="type-micro text-accent">First-day ritual card</div>
        <h2 className="type-editorial mt-4 max-w-4xl text-5xl md:text-7xl">Belonging is choreographed in small exact movements.</h2>
        <div className="relative mt-16 border-l border-ink pl-8 md:pl-14">
          {rituals.map((ritual, i) => {
            const Icon = ritual.icon;
            return (
              <article key={ritual.time} className={`group relative mb-12 max-w-2xl ${i % 2 ? 'md:ml-24' : ''}`}>
                <div className="absolute -left-[42px] top-2 h-[3px] w-8 bg-accent transition-all duration-200 ease-crisp group-hover:w-16 md:-left-[66px] md:w-12" />
                <div className="flex items-start gap-5 transition-transform duration-200 ease-crisp group-hover:translate-x-3">
                  <div className="border border-ink p-3"><Icon size={20} className="text-accent" /></div>
                  <div>
                    <div className="type-micro text-secondary">{ritual.time}</div>
                    <h3 className="type-editorial mt-2 text-3xl md:text-4xl">{ritual.title}</h3>
                    <p className="type-body mt-3 text-sm text-secondary">{ritual.copy}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
