{/* Record type: a journal article | Echo: the title sits on a rule that wipes teal | Hover: the title turns teal, 260ms, and its rule wipes, 300ms */}
import { articles } from "../../brand";


/* Tall image-led article card: a 2:3 photograph and a two-line title. About 260 × 480. SAMPLE article. */
export default function Card13({ i = 1 }: { i?: number }) {
  const a = articles[i % articles.length];
  return (
    <a href="#" className="wc-draw-host group block w-full max-w-[260px]">
      <div>
        <img src={`https://picsum.photos/seed/${a.seed}-tall/520/780`} alt="" className="aspect-[2/3] w-full rounded-[10px] object-cover" />
      </div>
      <p className="wc-label mt-5 text-muted">{a.date} · {a.read}</p>
      <h3 className="wc-heading mt-2 text-[19px] transition-colors duration-[260ms] ease-care group-hover:text-teal">{a.title}</h3>
      <span className="relative mt-4 block h-px bg-line"><span className="wc-draw absolute inset-0" /></span>
    </a>
  );
}
