{/* Echo: split testimonial carries a cropped index behind the parent portrait panel */}
import { EchoMeasure } from '../../system/echo';
import { ArtPlate, EchoCta } from '../../system/ui';

export default function Testimonial3() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-line bg-white md:grid-cols-[0.9fr_1.1fr]">
        <div className="group relative min-h-[420px] overflow-hidden bg-secondary">
          <div className="absolute inset-0"><ArtPlate label="Family story" variant={1} /></div>
          <EchoMeasure index="03" tone="dark" size="lg" surface="bg-secondary" />
        </div>
        <div className="p-8 md:p-12">
          <div className="type-micro text-accent">A parent’s measure</div>
          <blockquote className="type-editorial mt-6 text-4xl md:text-6xl">“She didn’t become louder. She became clearer.”</blockquote>
          <p className="type-body mt-6 max-w-lg text-secondary">One family describes the difference between confidence as performance and confidence as conviction: their daughter now speaks with precision because she expects to be listened to.</p>
          <div className="mt-10"><EchoCta>Read family stories</EchoCta></div>
        </div>
      </div>
    </section>
  );
}
