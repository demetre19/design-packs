{/* Artifact: morning roll call book | Echo: register folio measure crops through the book’s centre gutter | Interactions: ruled names extend their baselines and status slips move laterally on hover */}
import { Check, Feather } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const leftRoll = [
  ['Amara N.', 'Year 8', 'present', 'first answer volunteered in science'],
  ['Eloise W.', 'Year 11', 'present', 'music captain, senior ensemble'],
  ['Mabel C.', 'Year 5', 'present', 'newspaper club submission due']
];
const rightRoll = [
  ['Zara H.', 'Year 12', 'present', 'physics mentor, junior lab'],
  ['Ingrid S.', 'Year 7', 'boarding', 'regional SA, first term'],
  ['Tessa R.', 'Year 3', 'present', 'reader leader this week']
];

function RollLine({ student, side }: { student: string[]; side: 'left' | 'right' }) {
  return (
    <article className="group relative flex items-center border-b border-line py-4">
      <div className={`absolute bottom-0 h-px w-14 bg-accent transition-all duration-200 ease-crisp group-hover:w-full ${side === 'left' ? 'left-0' : 'right-0'}`} />
      <div className="type-editorial w-32 text-xl md:w-36 md:text-2xl">{student[0]}</div>
      <div className="type-micro hidden w-16 text-secondary md:block">{student[1]}</div>
      <div className="ml-auto flex items-center gap-3">
        <span className="type-body hidden max-w-[190px] text-xs text-secondary lg:block">{student[3]}</span>
        <span className="type-micro flex items-center gap-1 border border-line bg-paper px-2 py-1 text-[9px] transition-transform duration-200 ease-crisp group-hover:translate-x-2"><Check size={12} className="text-accent" />{student[2]}</span>
      </div>
    </article>
  );
}

export default function Content5() {
  return (
    <section className="bg-paper px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-line bg-ground p-5 md:p-10">
        <EchoMeasure index="05" size="lg" surface="bg-ground" />
        <div className="flex flex-col border-b border-ink pb-8 md:flex-row md:items-end">
          <div>
            <div className="type-micro flex items-center gap-2 text-accent"><Feather size={14} /> Roll call book</div>
            <h2 className="type-editorial mt-4 max-w-2xl text-5xl md:text-7xl">Every girl is read as a person before she is counted.</h2>
          </div>
          <p className="type-body mt-6 max-w-sm text-sm text-secondary md:ml-auto md:mt-0">Attendance is administration. Attention is culture. The everyday register becomes evidence of a school where names carry context.</p>
        </div>
        <div className="relative mt-8 md:flex">
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-ink/25 md:block" />
          <div className="md:w-1/2 md:pr-10">
            <div className="type-micro mb-5 flex justify-between text-secondary"><span>Left folio</span><span>08:42</span></div>
            {leftRoll.map((student) => <RollLine key={student[0]} student={student} side="left" />)}
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 md:pl-10">
            <div className="type-micro mb-5 flex justify-between text-secondary"><span>Right folio</span><span>Term 01 / Week 08</span></div>
            {rightRoll.map((student) => <RollLine key={student[0]} student={student} side="right" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
