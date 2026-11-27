{/* Echo: oversized cropped quote index sits behind the testimonial and moves on hover */}
import { Quote } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { quotes } from '../../system/content';

export default function Testimonial1() {
  const item = quotes[0];
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="group relative mx-auto max-w-6xl overflow-hidden border border-line bg-paper p-7 md:p-12">
        <EchoMeasure index="01" size="lg" surface="bg-paper" />
        <Quote className="h-8 w-8 text-accent" />
        <blockquote className="type-editorial mt-8 max-w-4xl text-4xl md:text-7xl">“{item.quote}”</blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <div><div className="font-semibold">{item.name}</div><div className="text-sm text-secondary">{item.role}</div></div>
        </div>
      </div>
    </section>
  );
}
