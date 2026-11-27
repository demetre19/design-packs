{/* Echo: editorial gallery uses a large cropped index behind the lead colour plate */}
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Gallery2() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <figure className="group relative min-h-[520px] overflow-hidden bg-secondary">
          <ArtPlate label="Campus" variant={2} className="absolute inset-0" />
          <EchoMeasure index="01" tone="dark" size="lg" surface="bg-secondary" />
        </figure>
        <div className="grid gap-5">
          {['Music', 'Sport'].map((label, i) => <figure key={label} className="group relative h-[250px] overflow-hidden bg-secondary"><div className="h-full transition-transform duration-200 ease-crisp group-hover:translate-x-2"><ArtPlate label={label} variant={i} /></div><EchoMeasure index={`0${i + 2}`} tone="dark" size="sm" surface="bg-secondary" /></figure>)}
        </div>
      </div>
    </section>
  );
}
