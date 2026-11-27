{/* Echo: dark statistics panel moves its cropped completion number on hover */}
import { EchoMeasure } from '../../system/echo';
import { proofStats } from '../../system/content';

export default function Stats2() {
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="group relative mx-auto max-w-7xl overflow-hidden border border-white/15 p-7 md:p-10">
        <EchoMeasure index="100" tone="dark" size="lg" surface="bg-ink" />
        <div className="type-micro text-accent">Class of 2025</div>
        <h2 className="type-editorial mt-3 max-w-3xl text-5xl md:text-7xl">Proof with discipline behind it.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {proofStats.map((stat) => <div key={stat.label} className="border-t border-white/20 pt-4"><div className="text-4xl font-semibold tracking-[-0.05em]">{stat.value}</div><div className="mt-2 text-sm text-white/60">{stat.label}</div></div>)}
        </div>
      </div>
    </section>
  );
}
