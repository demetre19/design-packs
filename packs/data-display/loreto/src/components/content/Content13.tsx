{/* Artifact: curriculum meeting minutes | Echo: cropped resolution number anchors the minutes margin | Interactions: resolutions move into alignment and annotation rules draw sideways on hover */}
import { ClipboardList, MessageSquareText } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const minutes = [
  ['RES 24-17', 'Protect unstructured thinking time in Year 9.', 'Motion carried after reviewing workload mapping across four faculties.'],
  ['RES 24-18', 'Extend senior peer-mentoring into science practicals.', 'Pilot begins Term 2 with Year 12 students paired to Year 10 laboratory groups.'],
  ['RES 24-19', 'Publish assessment criteria in student language.', 'Faculties revise rubrics before moderation week.']
];

export default function Content13() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-l border-accent pl-5 md:pl-12">
        <EchoMeasure index="13" tone="dark" size="lg" surface="bg-ink" />
        <div className="type-micro flex items-center gap-2 text-accent"><ClipboardList size={14} /> Meeting minutes</div>
        <h2 className="type-editorial mt-4 max-w-4xl text-5xl md:text-7xl">Good intentions become enforceable when they are minuted.</h2>
        <div className="mt-16 space-y-12">
          {minutes.map((minute, i) => (
            <article key={minute[0]} className="group relative flex flex-col md:flex-row md:items-start">
              <div className="type-micro w-32 shrink-0 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2">{minute[0]}</div>
              <div className="relative mt-4 flex-1 border-t border-white/15 pt-6 md:ml-10 md:mt-0">
                <div className="absolute left-0 top-0 h-px w-20 bg-accent transition-all duration-200 ease-crisp group-hover:w-64" />
                <h3 className="type-editorial max-w-2xl text-3xl md:text-4xl">{minute[1]}</h3>
                <p className="type-body mt-3 max-w-xl text-sm text-white/62">{minute[2]}</p>
                <div className="type-micro mt-5 flex items-center gap-2 text-white/40"><MessageSquareText size={14} /> Minute {String(i+1).padStart(2,'0')} / carried</div>
              </div>
              <div className="hidden w-28 text-right text-white/12 md:block"><span className="type-display text-7xl">{String(i+17)}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
