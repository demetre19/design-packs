{/* Artifact: the founder's long-form essay on the one-clean-one-tree promise | Echo: a sticky reading line wipes teal as the essay is read; the essay's tree tally is drawn in eucalyptus leaves | Interactions: the reading line follows scroll; hovering the tally lowers each leaf in turn, 260ms; series and related links wipe their lines, 300ms */}
import { useRef } from "react";
import { bySlug, fmtDate, seriesName } from "../../journal";
import { Leaf } from "../../echo";
import { Byline, PullQuote, ReadingLine, SeriesNav, related, useReadProgress } from "../../editorial/kit";

/* LONG-FORM ESSAY, CENTRED — a single 62ch column, centred title block, drop cap, pull quotes that break wider than the measure. */
export default function Post1() {
  const e = bySlug("tree-every-clean");
  const ref = useRef<HTMLElement>(null);
  const p = useReadProgress(ref);
  return (
    <article ref={ref} className="bg-ground pb-24">
      <ReadingLine progress={p} label={seriesName(e.series)} />
      <header className="mx-auto max-w-[760px] px-5 pt-20 text-center sm:px-8">
        <p className="wc-label text-teal">{seriesName(e.series)} · {e.format}</p>
        <h1 className="wc-display mt-6 text-[clamp(38px,6vw,72px)]">{e.title}</h1>
        <p className="mx-auto mt-6 max-w-[46ch] text-[19px] leading-relaxed text-muted">{e.dek}</p>
        <Byline entry={e} className="mt-8" />
      </header>
      <div className="mx-auto mt-16 max-w-[62ch] px-5 text-[18px] leading-[1.8] sm:px-0 [&>p+p]:mt-6">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[64px] first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-teal">
          In 2014 we had one van, three cleaners and a promise we had not costed. For every visit, we would plant a tree. It sounded like a slogan, and in some weeks it felt like one. But we wrote it into our first service agreement, which meant we had to keep it whether the month was good or bad.
        </p>
        <p>
          The arithmetic is simple and a little uncomfortable. An office cleaned three nights a week earns about a hundred and fifty trees a year. Multiply that by every site on our books and the promise stops being a gesture. It becomes a line item, and line items get questioned every time margins tighten.
        </p>
        <p>
          We have been asked, more than once, whether a carbon offset would be cheaper. It probably would. But an offset is a certificate in a drawer. A tree is a thing a client can ask about, a number on a monthly report that goes up because the floor was cleaned. We wanted the work and the return to be the same unit.
        </p>
      </div>
      <PullQuote cite={`${bySlug("tree-every-clean").title}`} className="mx-auto max-w-[880px] px-5 sm:px-8">
        A tree is a thing a client can ask about. We wanted the work and the return to be the same unit.
      </PullQuote>
      <div className="mx-auto max-w-[62ch] px-5 text-[18px] leading-[1.8] sm:px-0 [&>p+p]:mt-6">
        <p>
          The promise also changed how we clean. When every visit plants something, it is hard to justify products that do harm on the way down the drain. That is how we ended up with eucalyptus oil-based products for most of the work, and why we supply a safety data sheet for every one of them. The tree made the bleach look out of place.
        </p>
        <p>
          It changed hiring too. People who want to work for a cleaning company that plants trees tend to be people who notice things. They tell you when a tap is dripping or a fridge seal has gone. That habit of noticing is worth more to a client than any product we buy.
        </p>
        <p>
          Twelve years in, the promise is still in the agreement, in clause 8.3, and it is still not cheap. We keep it because it keeps us honest. Each month, a client can see exactly how many times we came, and exactly how many trees went into the ground because we did.
        </p>
      </div>
      <figure className="wc-leaf-host mx-auto mt-14 max-w-[62ch] px-5 sm:px-0">
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 border-y border-line py-5" aria-hidden="true">
          {Array.from({ length: 52 }, (_, i) => (
            <span key={i} className="relative block h-[14px] w-[34px]"><Leaf className="left-0 top-0" style={{ transitionDelay: `${i * 12}ms` }} /></span>
          ))}
        </div>
        <figcaption className="wc-label mt-3 text-muted">One leaf per clean: a weekly office for a year, 52 trees. Sample.</figcaption>
      </figure>
      <footer className="mx-auto mt-20 max-w-[760px] px-5 sm:px-8">
        <div className="border-t border-ink pt-6 text-center">
          <p className="text-[15px]">Written by <span className="font-semibold">Ivan Tan</span>, who founded Whistle Clean in 2014 and still reads every monthly tree report.</p>
          <p className="wc-label mt-2 text-muted">Published {fmtDate(e.date)}</p>
        </div>
        <SeriesNav entry={e} className="mt-10" />
        <div className="mt-12">
          <p className="wc-label text-center text-muted">Further reading</p>
          <ol className="mx-auto mt-4 max-w-[560px]">
            {related(e).map((r, i) => (
              <li key={r.slug}>
                <a href={`#${r.slug}`} className="wc-draw-host group relative flex items-baseline gap-4 py-3">
                  <span className="wc-label w-6 text-teal">{i + 1}</span>
                  <span className="flex-1 text-[16px] font-medium transition-colors duration-[260ms] ease-care group-hover:text-teal">{r.title}</span>
                  <span className="text-[13px] text-muted">{r.read} min</span>
                  <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </footer>
    </article>
  );
}
