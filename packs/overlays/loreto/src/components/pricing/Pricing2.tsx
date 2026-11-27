{/* Echo: comparison columns use cropped numerals and hover movement to distinguish boarding choices */}
import { EchoMeasure } from '../../system/echo';
import { SectionIntro, EchoCta } from '../../system/ui';

export default function Pricing2() {
  const options = [
    { index: '01', name: 'Full boarding', price: '$25,900', copy: 'A consistent residential rhythm for families beyond daily commuting distance.', featured: true },
    { index: '02', name: 'Weekly boarding', price: '$22,200', copy: 'School-week stability with weekends at home, for regional and interstate families.', featured: false }
  ];
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro dark index="02" eyebrow="Boarding fees" title="Two ways to belong here." copy="Boarding is priced as an addition to tuition, with a 10% sibling discount for second and subsequent daughters." />
        <div className="grid gap-5 md:grid-cols-2">
          {options.map((option) => (
            <article key={option.name} className={`group relative overflow-hidden border p-7 transition-colors duration-200 ease-crisp ${option.featured ? 'border-accent bg-white text-ink' : 'border-white/20 bg-ink text-white hover:border-white/50'}`}>
              <EchoMeasure index={option.index} tone={option.featured ? 'light' : 'dark'} surface={option.featured ? 'bg-white' : 'bg-ink'} />
              <div className="type-micro text-accent">{option.index}</div>
              <h3 className="type-editorial mt-8 text-5xl">{option.name}</h3>
              <div className="mt-8 text-3xl font-semibold tracking-[-0.04em]">{option.price}</div>
              <p className={`type-body mt-4 max-w-sm ${option.featured ? 'text-secondary' : 'text-white/65'}`}>{option.copy}</p>
              <div className="mt-8"><EchoCta dark={!option.featured}>Discuss boarding</EchoCta></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
