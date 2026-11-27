{/* Artifact: honours certificate book | Echo: oversized cropped distinctions sit behind the certificate plates | Interactions: plates separate laterally and caption rules extend on hover */}
import { Award, BookMarked } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const certificates = [
  ['SACE completion', '100%', '2025 cohort completed the South Australian Certificate of Education.'],
  ['ATAR 90+', '40%', 'Two in five students achieved an ATAR above 90.'],
  ['A-range results', '66.7%', 'Subject grades concentrated in the highest performance band.'],
  ['Merit evidence', '13', 'Thirteen subject merits across the senior cohort.']
];

export default function Content9() {
  return (
    <section className="overflow-hidden bg-ground px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl border-y border-line py-14">
        <EchoMeasure index="09" size="lg" surface="bg-ground" />
        <div className="type-micro flex items-center gap-2 text-accent"><Award size={14} /> Certificate book</div>
        <h2 className="type-editorial mt-4 max-w-3xl text-5xl md:text-7xl">Proof kept flat, legible and impossible to inflate.</h2>
        <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
          {certificates.map((item, i) => (
            <article key={item[0]} className="group relative min-h-[360px] flex-1 border border-line bg-paper p-6 transition-transform duration-200 ease-crisp hover:translate-x-3 md:-ml-8 md:first:ml-0" style={{ zIndex: i + 1 }}>
              <div className="flex items-center justify-between">
                <span className="type-micro text-secondary">CERT {String(i+1).padStart(2,'0')}</span>
                <BookMarked size={18} className="text-accent" />
              </div>
              <div className="type-display mt-14 text-7xl leading-none text-ink transition-transform duration-200 ease-crisp group-hover:translate-x-2 md:text-8xl">{item[1]}</div>
              <h3 className="type-editorial mt-8 text-3xl">{item[0]}</h3>
              <p className="type-body mt-3 text-sm text-secondary">{item[2]}</p>
              <div className="mt-8 h-[3px] w-14 bg-accent transition-all duration-200 ease-crisp group-hover:w-36" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
