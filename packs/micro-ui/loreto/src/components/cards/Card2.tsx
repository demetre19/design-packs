{/* Record type: merit certificate plate | Echo: oversized cropped result measure becomes the certificate seal | Hover: certificate rule extends and result numeral moves inward */}
import { Award } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card2() {
  return (
    <article className="group relative h-[430px] w-full max-w-sm overflow-hidden border border-line bg-paper p-6 text-ink">
      <EchoMeasure index="A+" size="lg" surface="bg-paper" />
      <div className="flex items-start justify-between"><span className="type-micro text-accent">Certificate plate</span><Award className="text-accent" size={20} /></div>
      <div className="mt-24">
        <div className="type-micro text-secondary">English Literary Studies</div>
        <h3 className="type-editorial mt-4 text-4xl">Merit for sustained argument and original critical voice.</h3>
      </div>
      <div className="absolute inset-x-6 bottom-6 border-t border-ink pt-4">
        <div className="type-micro flex justify-between text-secondary"><span>SACE 2025</span><span>Subject merit</span></div>
        <div className="mt-4 h-[3px] w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
      </div>
    </article>
  );
}
