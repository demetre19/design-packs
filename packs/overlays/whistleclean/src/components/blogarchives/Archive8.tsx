{/* Artifact: a walkthrough of the floor, room after room, as the cleaner sees it | Echo: each tall plate is a link whose caption rule wipes teal; the scroll position is marked by a hairline wiped across the strip | Interactions: the strip scrolls sideways with arrow buttons; the progress hairline wipes with it; hovering a plate wipes its rule, 300ms */}
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { entries, fmtDate, seriesName } from "../../journal";
import { Container, Section } from "../../echo";

/* THE WALKTHROUGH — image-forward horizontal strip of tall plates that bleeds off the right edge; captions sit under each plate. */
export default function Archive8() {
  const strip = useRef<HTMLUListElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    const on = () => setP(el.scrollWidth <= el.clientWidth ? 1 : el.scrollLeft / (el.scrollWidth - el.clientWidth));
    on();
    el.addEventListener("scroll", on, { passive: true });
    return () => el.removeEventListener("scroll", on);
  }, []);
  const go = (d: number) => strip.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <Section className="overflow-x-clip bg-paper">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="wc-label text-muted">Journal · Walkthrough</p>
            <h1 className="wc-display mt-4 text-[clamp(36px,5vw,60px)]">Walk the archive</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors duration-[260ms] ease-care hover:border-teal hover:bg-teal hover:text-paper"><ArrowLeft size={18} strokeWidth={1.75} /></button>
            <button onClick={() => go(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors duration-[260ms] ease-care hover:border-teal hover:bg-teal hover:text-paper"><ArrowRight size={18} strokeWidth={1.75} /></button>
          </div>
        </div>
        <div className="relative mt-6 h-px bg-line" aria-hidden="true"><span className="absolute inset-y-0 left-0 bg-teal" style={{ width: `${Math.max(8, p * 100)}%` }} /></div>
      </Container>
      <ul ref={strip} className="mt-10 flex snap-x gap-6 overflow-x-auto pb-6 pl-[max(20px,calc((100vw-1240px)/2+48px))] pr-10 [scrollbar-width:none]">
        {entries.map((e) => (
          <li key={e.slug} className="w-[min(300px,72vw)] shrink-0 snap-start">
            <a href={`#${e.slug}`} className="wc-draw-host group block">
              <img src={`https://picsum.photos/seed/${e.seed}-tall/600/840`} alt="" className="aspect-[5/7] w-full rounded-[10px] object-cover" />
              <span className="relative mt-4 block h-px bg-line"><span className="wc-draw absolute inset-0" /></span>
              <span className="wc-label mt-3 block text-muted">{String(e.no).padStart(2, "0")} · {seriesName(e.series)} · {fmtDate(e.date, "short")}</span>
              <span className="mt-1.5 block text-[17px] font-semibold leading-snug transition-colors duration-[260ms] ease-care group-hover:text-teal">{e.title}</span>
              <span className="mt-1 block text-[13px] text-muted">{e.format} · {e.read} min</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
