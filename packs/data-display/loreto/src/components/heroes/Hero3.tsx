{/* Echo: the typographic-only hero uses the cropped year as its central measure */}
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Hero3() {
  return (
    <section className="group relative min-h-[88vh] overflow-hidden border-b border-line bg-paper px-5 py-10 text-ink md:px-10">
      <EchoMeasure index="1905" size="lg" surface="bg-paper" />
      <div className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-between">
        <div className="flex justify-between border-b border-ink pb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
          <span>Loreto</span><span>Est. 1905</span>
        </div>
        <div className="py-14">
          <h1 className="type-display max-w-6xl text-[clamp(2.9rem,14vw,12rem)]">Girls with a voice worth hearing.</h1>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <p className="type-body max-w-md text-lg text-secondary md:col-span-2">A day and boarding school in Marryatville where academic excellence is matched by the confidence to use it.</p>
            <div className="md:justify-self-end"><EchoCta>Discover why Loreto</EchoCta></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 border-t sm:grid-cols-3 border-line pt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
          <span>Early Learning</span><span>Junior School</span><span>Senior School</span>
        </div>
      </div>
    </section>
  );
}
