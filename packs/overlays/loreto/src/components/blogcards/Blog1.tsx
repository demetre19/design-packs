{/* Echo: editorial card crops its article index at the edge and moves it on hover */}
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../../system/content';
import { EchoMeasure } from '../../system/echo';

export default function Blog1() {
  const item = articles[0];
  return (
    <article className="group relative min-h-[430px] overflow-hidden border border-line bg-paper p-6 text-ink transition-colors duration-200 ease-crisp hover:bg-white">
      <EchoMeasure index={item.index} size="sm" surface="bg-paper" />
      <div className="type-micro text-accent">{item.tag}</div>
      <h3 className="type-editorial mt-24 max-w-md text-5xl">{item.title}</h3>
      <p className="type-body mt-5 max-w-sm text-secondary">{item.copy}</p>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-line pt-4 text-sm text-secondary">
        <span>{item.read}</span><ArrowUpRight className="h-4 w-4 text-ink transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
      </div>
    </article>
  );
}
