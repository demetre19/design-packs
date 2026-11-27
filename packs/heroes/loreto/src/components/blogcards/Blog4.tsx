{/* Echo: compact index card lets oversized type become the dominant visual field */}
import { articles } from '../../system/content';
import { EchoMeasure } from '../../system/echo';

export default function Blog4() {
  const item = articles[3];
  return (
    <article className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-ink p-6 text-white">
      <EchoMeasure index={item.index} tone="dark" size="lg" surface="bg-ink" />
      <div className="type-micro text-accent">{item.tag}</div>
      <div className="relative z-10">
        <h3 className="max-w-md text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
        <p className="type-body mt-3 max-w-sm text-sm text-white/65">{item.copy}</p>
        <div className="mt-5 text-sm text-white/50">{item.read}</div>
      </div>
    </article>
  );
}
