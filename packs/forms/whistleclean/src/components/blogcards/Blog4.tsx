{/* Echo: a featured article on a teal plate with the eucalyptus line drawing; the card is a link, so its reading-time rule wipes white on hover, 300ms */}
import { articles } from "../../brand";
import { Gumlines } from "../../echo";


/* Feature card: a wide teal plate with an inline SVG eucalyptus contour, title set large. SAMPLE article. */
export default function Blog4({ index = 3 }: { index?: number }) {
  const a = articles[index % articles.length];
  return (
    <div className="w-full max-w-[640px] overflow-hidden rounded-[16px] bg-teal text-paper">
      <a href="#" className="wc-draw-host group grid grid-cols-1 sm:grid-cols-[1fr_200px]">
        <div className="p-8 sm:p-10">
          <p className="wc-label text-mist">Featured · {a.date}</p>
          <h3 className="wc-display mt-5 text-[clamp(26px,3vw,36px)]">{a.title}</h3>
          <div className="relative mt-10 h-px bg-paper/30" aria-hidden="true"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
          <p className="mt-5 text-[14px] text-mist">{a.read} read</p>
        </div>
        <Gumlines className="hidden h-full w-full sm:block" />
      </a>
    </div>
  );
}
