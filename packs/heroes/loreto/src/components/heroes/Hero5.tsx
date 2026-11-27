{/* Echo: minimal centred composition keeps a cropped numeral behind the primary action */}
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Hero5() {
  return (
    <section className="group relative flex min-h-[78vh] items-center overflow-hidden bg-ground px-5 py-20 text-center text-ink">
      <EchoMeasure index="05" size="lg" surface="bg-ground" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="type-micro mb-6 text-accent">Loreto College Marryatville</div>
        <h1 className="type-editorial text-6xl md:text-[clamp(4rem,10vw,7.5rem)]">The confidence to become.</h1>
        <p className="type-body mx-auto mt-6 max-w-xl text-lg text-secondary">Independent girls’ education from Reception to Year 12, with boarding in Adelaide’s east.</p>
        <div className="mt-10 flex justify-center"><EchoCta>Request a prospectus</EchoCta></div>
      </div>
    </section>
  );
}
