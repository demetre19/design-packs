{/* Record type: a client review | Echo: the rating is five reversed leaves on a rule instead of stars | Hover: the five leaves settle one after another with a 12ms stagger, 260ms each, filling white */}
import { Star } from "lucide-react";
import { testimonials } from "../../brand";


/* Inverted review on teal. Portrait, about 320 × 340. SAMPLE quote. */
export default function Card8({ i = 2 }: { i?: number }) {
  const t = testimonials[i % testimonials.length];
  return (
    <article tabIndex={0} className="wc-draw-host flex w-full max-w-[320px] flex-col rounded-[16px] bg-teal p-7 text-paper outline-none">
      <div className="flex gap-1.5 text-paper" role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, n) => <Star key={n} size={15} strokeWidth={1.5} fill="currentColor" aria-hidden="true" />)}
      </div>
      <blockquote className="mt-6 flex-1 text-[18px] leading-relaxed">{t.quote}</blockquote>
      <p className="mt-8 border-t border-paper/25 pt-4 text-[14px] font-semibold">{t.name}</p>
      <p className="text-[13px] text-mist">{t.org}</p>
    </article>
  );
}
