{/* Echo: a teal footer with the eucalyptus line drawing tucked into its right edge; footer links turn white on hover */}
import { brand, suburbs } from "../../brand";
import { Container, Gumlines } from "../../echo";

/* Statement footer: the wordmark set across the full measure, suburbs as a running line, legal row beneath. */
export default function Footer2() {
  return (
    <footer className="relative isolate overflow-hidden bg-teal text-paper">
      <Gumlines className="pointer-events-none absolute -right-10 top-0 -z-10 hidden h-full w-[260px] md:block" />
      <Container className="pb-8 pt-20">
        <div className="wc-draw-host relative pb-6">
          <p className="wc-display text-[clamp(56px,12vw,168px)] leading-[0.9]">Whistle Clean</p>
          <div className="relative mt-6 h-px bg-paper/30" aria-hidden="true"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[16px] tabular-nums">{brand.phone}</p>
            <p className="mt-2 max-w-[30ch] text-[14px] text-mist">{brand.address}</p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="wc-label text-mist">Service area</p>
            <p className="mt-3 text-[15px] leading-relaxed text-paper/90">{suburbs.join(" · ")}</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/20 pt-6 text-[13px] text-mist sm:flex-row sm:justify-between">
          <p>© 2026 {brand.name}</p>
          <p className="flex gap-6"><a href="#" className="hover:text-paper">Privacy</a><a href="#" className="hover:text-paper">Terms</a><a href="#" className="hover:text-paper">Careers</a></p>
        </div>
      </Container>
    </footer>
  );
}
