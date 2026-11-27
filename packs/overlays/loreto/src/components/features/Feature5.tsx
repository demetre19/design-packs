{/* Echo: annotated figure uses cropped type as the annotation measure rather than decoration */}
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Feature5() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionIntro index="05" eyebrow="Annotated culture" title="The conditions underneath the outcomes." copy="Results are visible. The structure that produces them is quieter." />
        </div>
        <div className="group relative overflow-hidden border border-line bg-white p-5">
          <EchoMeasure index="05" size="md" surface="bg-white" />
          <svg viewBox="0 0 760 520" className="h-auto w-full" role="img" aria-label="Diagram of Loreto learning conditions">
            <rect x="40" y="40" width="680" height="440" fill="#F4F1EA" />
            <line x1="40" y1="150" x2="720" y2="150" stroke="#D8D2C4" />
            <line x1="40" y1="260" x2="720" y2="260" stroke="#D8D2C4" />
            <line x1="40" y1="370" x2="720" y2="370" stroke="#D8D2C4" />
            <text x="70" y="110" fill="#10233F" fontSize="31" fontWeight="700">Scholarship</text>
            <text x="70" y="220" fill="#10233F" fontSize="31" fontWeight="700">Voice</text>
            <text x="70" y="330" fill="#10233F" fontSize="31" fontWeight="700">Belonging</text>
            <text x="70" y="440" fill="#10233F" fontSize="31" fontWeight="700">Momentum</text>
            {[150, 260, 370, 480].map((y, i) => <rect key={y} x="470" y={y - 35} width={70 + i * 32} height="8" fill="#C69A3A" />)}
          </svg>
          <div className="grid gap-px border-t border-line bg-line text-sm md:grid-cols-4">
            {['Challenge', 'Contribution', 'Care', 'Direction'].map((item) => <div key={item} className="bg-white p-4 font-semibold">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
