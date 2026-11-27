{/* Echo: a text-only card on the edge glint, which laps its border once on hover, 900ms; the read link turns teal, 260ms */}
import { ArrowRight } from "lucide-react";
import { articles } from "../../brand";
import { Glint } from "../../echo";

/* Text card: no image, label voice on top, title in the heading voice, a single leaf link. SAMPLE article. */
export default function Blog2({ index = 1 }: { index?: number }) {
  const a = articles[index % articles.length];
  return (
    <Glint radius={16} className="w-full max-w-[380px]" faceClassName="flex min-h-[260px] flex-col p-7">
      <p className="wc-label text-teal">{a.tag}</p>
      <h3 className="wc-heading mt-4 flex-1 text-[23px]">{a.title}</h3>
      <div className="mt-8 flex items-end justify-between gap-4">
        <a href="#" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition-colors duration-[260ms] ease-care hover:text-teal">Read article<ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" /></a>
        <span className="wc-label text-muted">{a.read}</span>
      </div>
    </Glint>
  );
}
