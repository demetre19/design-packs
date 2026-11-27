{/* Echo: primary CTA banner uses a large cropped enrolment index and a moving baseline notch */}
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Cta1() {
  return (
    <section className="bg-ground px-5 py-16 md:px-10">
      <div className="group relative mx-auto flex max-w-7xl flex-col overflow-hidden border border-line bg-paper p-7 text-ink md:min-h-[360px] md:flex-row md:items-end md:justify-between md:p-12">
        <EchoMeasure index="01" size="lg" surface="bg-paper" />
        <div className="relative z-10 max-w-3xl">
          <div className="type-micro text-accent">Enrolment</div>
          <h2 className="type-editorial mt-4 text-5xl md:text-8xl">See her future in person.</h2>
        </div>
        <div className="relative z-10 mt-8 md:mt-0"><EchoCta>Book a college tour</EchoCta></div>
      </div>
    </section>
  );
}
