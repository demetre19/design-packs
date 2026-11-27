{/* Echo: gallery grid uses cropped numbering over abstract editorial plates */}
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Gallery1() {
  const plates = ['Courtyard', 'Studio', 'Library'];
  return (
    <section className="bg-ground px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {plates.map((label, i) => (
          <figure key={label} className={`group relative overflow-hidden border border-line bg-secondary ${i === 1 ? 'md:translate-y-10' : ''}`}>
            <div className="h-[430px] transition-transform duration-200 ease-crisp group-hover:translate-x-2"><ArtPlate label={label} variant={i} /></div>
            <EchoMeasure index={`0${i + 1}`} tone="dark" size="sm" surface="bg-secondary" />
          </figure>
        ))}
      </div>
    </section>
  );
}
