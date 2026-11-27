{/* Echo: a list row whose top rule wipes teal on hover, 300ms, as the title and arrow turn teal, 260ms */}
import { ArrowUpRight } from "lucide-react";
import { articles } from "../../brand";


/* Index row: thumbnail on 2 columns, title on 7, meta on 3. Built to stack in a list. SAMPLE article. */
export default function Blog3({ index = 2 }: { index?: number }) {
  const a = articles[index % articles.length];
  return (
    <a href="#" className="wc-draw-host group relative grid w-full grid-cols-[88px_1fr] items-center gap-5 border-t border-line py-6 sm:grid-cols-[112px_1fr_auto] sm:gap-8">
      <span className="wc-draw absolute inset-x-0 -top-px" aria-hidden="true" />
      <div>
        <img src={`https://picsum.photos/seed/${a.seed}/224/224`} alt="" className="aspect-square w-full rounded-[4px] object-cover" />
      </div>
      <div className="min-w-0">
        <p className="wc-label text-muted">{a.tag}</p>
        <h3 className="wc-heading mt-2 text-[19px] transition-colors duration-[260ms] ease-care group-hover:text-teal">{a.title}</h3>
      </div>
      <p className="col-span-2 flex items-center gap-3 text-[14px] text-muted sm:col-span-1">
        {a.date} · {a.read}
        <ArrowUpRight size={16} strokeWidth={1.75} className="transition-colors duration-[260ms] ease-care group-hover:text-teal" aria-hidden="true" />
      </p>
    </a>
  );
}
