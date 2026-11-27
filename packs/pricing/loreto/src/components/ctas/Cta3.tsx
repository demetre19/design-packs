{/* Echo: minimal centred CTA uses cropped numerals as a quiet pressure behind the action */}
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Cta3() {
  return (
    <section className="group relative overflow-hidden bg-paper px-5 py-24 text-center text-ink">
      <EchoMeasure index="03" size="lg" surface="bg-paper" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="type-editorial text-5xl md:text-7xl">The best way to understand it is to stand inside it.</h2>
        <div className="mt-10 flex justify-center"><EchoCta>Reserve a tour place</EchoCta></div>
      </div>
    </section>
  );
}
