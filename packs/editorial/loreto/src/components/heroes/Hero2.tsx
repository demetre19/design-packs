{/* Echo: cropped index and moving measure sit inside the editorial split panel */}
import { EchoMeasure } from '../../system/echo';
import { ArtPlate, EchoCta } from '../../system/ui';

export default function Hero2() {
  return (
    <section className="bg-ground text-ink">
      <div className="grid min-h-[86vh] md:grid-cols-[1.05fr_0.95fr]">
        <div className="group relative flex flex-col justify-center overflow-hidden border-b border-line px-5 py-16 md:border-b-0 md:border-r md:px-12">
          <EchoMeasure index="02" size="lg" surface="bg-ground" />
          <div className="type-micro mb-6 text-accent">Independent girls’ education</div>
          <h1 className="type-display max-w-4xl text-[clamp(2.8rem,12.5vw,4.45rem)] xl:text-[clamp(4rem,6vw,6rem)]">A stronger kind of confidence.</h1>
          <p className="type-body mt-8 max-w-lg text-lg text-secondary">
            Loreto College Marryatville shapes articulate, capable young women through serious scholarship and a culture that expects every girl to use her voice.
          </p>
          <div className="mt-10"><EchoCta>Start enrolment</EchoCta></div>
        </div>
        <div className="relative overflow-hidden bg-secondary">
          <ArtPlate label="Day and boarding" variant={0} className="min-h-[420px]" />
          <div className="absolute bottom-6 left-6 border border-white/40 bg-ink px-5 py-4 text-white">
            <div className="type-micro text-accent">Day + boarding</div>
            <div className="mt-1 text-xl font-semibold tracking-[-0.03em]">Reception to Year 12</div>
          </div>
        </div>
      </div>
    </section>
  );
}
