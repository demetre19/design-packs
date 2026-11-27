{/* Echo: horizontal article row uses the cropped measure as a reading position marker */}
import { ArrowRight } from 'lucide-react';
import { articles } from '../../system/content';
import { EchoMeasure } from '../../system/echo';

export default function Blog3() {
  const item = articles[2];
  return (
    <article className="group relative grid overflow-hidden border-y border-line bg-ground py-6 text-ink transition-colors duration-200 ease-crisp hover:bg-paper md:grid-cols-[110px_1fr_auto] md:items-center">
      <EchoMeasure index={item.index} size="sm" surface="bg-ground" />
      <div className="type-micro text-accent">{item.tag}</div>
      <div className="pr-8">
        <h3 className="type-editorial text-4xl md:text-5xl">{item.title}</h3>
        <p className="type-body mt-2 max-w-xl text-secondary">{item.copy}</p>
      </div>
      <div className="mt-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] md:mt-0">
        {item.read}<ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
      </div>
    </article>
  );
}
