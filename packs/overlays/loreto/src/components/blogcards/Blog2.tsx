{/* Echo: media-forward article card keeps the measure in the image’s lower edge */}
import { articles } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Blog2() {
  const item = articles[1];
  return (
    <article className="group overflow-hidden border border-line bg-white text-ink">
      <div className="relative h-64 overflow-hidden bg-secondary">
        <div className="h-full transition-transform duration-200 ease-crisp group-hover:translate-x-2"><ArtPlate label="Boarding" variant={3} /></div>
        <EchoMeasure index={item.index} tone="dark" size="sm" surface="bg-secondary" />
      </div>
      <div className="p-6">
        <div className="type-micro text-accent">{item.tag}</div>
        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
        <p className="type-body mt-3 text-sm text-secondary">{item.copy}</p>
      </div>
    </article>
  );
}
