{/* Echo: gallery rows use cropped indices rather than decorative badges */}
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Gallery3() {
  const tiles = ['Garden', 'Classroom', 'Performance', 'Boarding'];
  return (
    <section className="bg-ink px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/15 md:grid-cols-4">
        {tiles.map((label, i) => (
          <figure key={label} className="group relative overflow-hidden bg-ink">
            <div className="h-[320px] opacity-90 transition-transform duration-200 ease-crisp group-hover:translate-x-2"><ArtPlate label={label} variant={i} dark /></div>
            <EchoMeasure index={`0${i + 1}`} tone="dark" size="sm" surface="bg-ink" />
            <figcaption className="p-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
