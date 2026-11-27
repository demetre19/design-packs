{/* Echo: affiliations sit inside a cropped measure rather than a conventional badge wall */}
import { partnerMarks } from '../../system/content';
import { EchoMeasure } from '../../system/echo';

export default function LogoCloud1() {
  return (
    <section className="group relative overflow-hidden border-y border-line bg-paper px-5 py-12 text-ink md:px-10">
      <EchoMeasure index="01" size="sm" surface="bg-paper" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-5">
        {partnerMarks.map((mark) => <span key={mark} className="text-sm font-semibold tracking-[-0.02em] text-secondary transition-colors duration-200 ease-crisp hover:text-ink">{mark}</span>)}
      </div>
    </section>
  );
}
