{/* Echo: logo index uses oversized cropped type as the unifying institutional mark */}
import { partnerMarks } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function LogoCloud2() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro index="02" eyebrow="Affiliations" title="Connected beyond one campus." />
        <div className="group relative grid overflow-hidden border border-line bg-paper md:grid-cols-5">
          <EchoMeasure index="02" size="md" surface="bg-paper" />
          {partnerMarks.map((mark) => <div key={mark} className="flex min-h-32 items-center justify-center border-b border-r border-line p-5 text-center text-sm font-semibold text-secondary transition-colors duration-200 ease-crisp last:border-r-0 hover:bg-white hover:text-ink md:border-b-0">{mark}</div>)}
        </div>
      </div>
    </section>
  );
}
