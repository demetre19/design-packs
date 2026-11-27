{/* Echo: oversized proof numerals are themselves cropped by the section edge */}
import { proofStats } from '../../system/content';
import { EchoMeasure } from '../../system/echo';

export default function Stats1() {
  return (
    <section className="group relative overflow-hidden border-y border-line bg-paper px-5 py-16 text-ink md:px-10">
      <EchoMeasure index="01" size="lg" surface="bg-paper" />
      <div className="mx-auto grid max-w-7xl gap-px bg-line md:grid-cols-4">
        {proofStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 transition-colors duration-200 ease-crisp hover:bg-ground">
            <div className="type-editorial text-6xl md:text-7xl">{stat.value}</div>
            <div className="type-micro mt-4 text-accent">{stat.label}</div>
            <div className="mt-2 text-sm text-secondary">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
