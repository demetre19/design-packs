{/* Echo: asymmetric split uses a large cropped index behind the active feature row */}
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const rows = [
  { icon: BookOpen, title: 'Serious scholarship', copy: 'Academic stretch without reducing girls to outcomes.' },
  { icon: Users, title: 'Voice and leadership', copy: 'Purposeful development of confidence, judgement and public presence.' },
  { icon: Trophy, title: 'Proof that matters', copy: '100% SACE completion and 40% of the 2025 cohort achieving ATAR 90+.' }
];

export default function Feature2() {
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="group relative overflow-hidden border border-white/15 p-8">
          <EchoMeasure index="02" tone="dark" size="lg" surface="bg-ink" />
          <div className="type-micro text-accent">The Loreto difference</div>
          <h2 className="type-editorial mt-4 text-5xl md:text-7xl">Confidence is taught on purpose.</h2>
          <p className="type-body mt-6 max-w-md text-white/70">Not as a slogan, but as a deliberate educational condition: visible in classrooms, co-curricular life and the way girls are expected to contribute.</p>
        </div>
        <div className="divide-y divide-white/12 border-y border-white/12">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <a href="#" key={row.title} className="group/row grid gap-4 py-7 transition-colors duration-200 ease-crisp hover:bg-white/[0.03] md:grid-cols-[48px_1fr_auto] md:items-center">
                <Icon className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">{row.title}</h3>
                  <p className="type-body mt-2 text-white/62">{row.copy}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-accent transition-transform duration-200 ease-crisp group-hover/row:translate-x-2" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
