{/* Record type: enrolment ledger entry | Echo: cropped entry number forms the ledger margin | Hover: a lateral registrar note slides in while the measure notch advances */}
import { ArrowUpRight, UserRoundPlus } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card1() {
  return (
    <article className="group relative min-h-[210px] w-full max-w-3xl overflow-hidden border border-ink bg-paper text-ink">
      <EchoMeasure index="01" size="sm" surface="bg-paper" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="border-b border-line p-5 md:w-[31%] md:border-b-0 md:border-r">
          <div className="type-micro flex items-center gap-2 text-accent"><UserRoundPlus size={14} /> Entry R-2027-086</div>
          <h3 className="type-editorial mt-8 text-4xl">Year 7 intake</h3>
          <div className="type-micro mt-4 text-secondary">Major entry / day</div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[['Interview','12 Mar'],['Scholarship','Open'],['Boarding','No'],['Status','Register']].map(x=><div key={x[0]}><div className="type-micro text-[9px] text-secondary">{x[0]}</div><div className="type-editorial mt-2 text-xl">{x[1]}</div></div>)}
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
            <span className="type-micro text-[9px] text-secondary">Registrar initial check complete</span>
            <ArrowUpRight className="text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={18} />
          </div>
        </div>
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[42%] translate-x-full flex-col justify-center border-l border-ink bg-ground px-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0">
        <div className="type-micro text-accent">Registrar note</div>
        <p className="type-body mt-3 text-xs text-secondary">Family requested boarding conversion if a place opens in Term 3.</p>
      </aside>
    </article>
  );
}
