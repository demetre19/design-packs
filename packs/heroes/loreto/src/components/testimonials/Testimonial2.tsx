{/* Echo: testimonial cards use cropped numbering and a moving baseline notch on hover */}
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';
import { quotes } from '../../system/content';

export default function Testimonial2() {
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro dark index="02" eyebrow="Family evidence" title="What changes when a girl is properly heard." />
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {quotes.map((item, i) => (
            <figure key={item.name} className="group relative min-h-[360px] overflow-hidden bg-ink p-7 transition-colors duration-200 ease-crisp hover:bg-[#152C4D]">
              <EchoMeasure index={`0${i + 1}`} tone="dark" size="sm" surface="bg-ink" />
              <blockquote className="type-body mt-20 text-xl leading-8 text-white/84">“{item.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-white/15 pt-4">
                <div className="font-semibold">{item.name}</div><div className="text-sm text-white/55">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
