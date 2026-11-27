{/* Echo: the seam between image and text is a hairline that wipes teal on hover, 300ms, as the title turns teal, 260ms */}
import { articles } from "../../brand";


/* Standard article card: 4:3 plate, hairline seam, label row, title. SAMPLE article. */
export default function Blog1({ index = 0 }: { index?: number }) {
  const a = articles[index % articles.length];
  return (
    <a href="#" className="wc-draw-host group block w-full max-w-[380px]">
      <img src={`https://picsum.photos/seed/${a.seed}/760/570`} alt="" className="aspect-[4/3] w-full rounded-t-[10px] object-cover" />
      <div className="relative h-px bg-line" aria-hidden="true"><span className="wc-draw absolute inset-0" /></div>
      <div className="pt-6">
        <p className="wc-label text-muted">{a.tag} · {a.read}</p>
        <h3 className="wc-heading mt-3 text-[21px] transition-colors duration-[260ms] ease-care group-hover:text-teal">{a.title}</h3>
        <p className="mt-3 text-[14px] text-muted">{a.date}</p>
      </div>
    </a>
  );
}
