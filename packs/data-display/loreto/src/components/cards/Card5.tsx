{/* Record type: science practical specimen tag | Echo: cropped sample measure overlays the plate edge | Hover: specimen annotation slides in from the right */}
import { FlaskConical } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Card5() {
  return (
    <article className="group relative h-[430px] w-full max-w-xs overflow-hidden border border-line bg-paper text-ink">
      <div className="h-[45%] border-b border-line"><ArtPlate label="LAB PLATE" variant={1} /></div>
      <EchoMeasure index="05" size="sm" surface="bg-paper" />
      <div className="p-5">
        <div className="type-micro flex items-center gap-2 text-accent"><FlaskConical size={14} /> Sample C-17</div>
        <h3 className="type-editorial mt-4 text-3xl">Titration endpoint, trial three</h3>
        <p className="type-body mt-3 text-xs text-secondary">Volume corrected after replicate reading. Precision note initialled by supervising teacher.</p>
        <div className="mt-5 h-[3px] w-12 bg-accent transition-all duration-200 ease-crisp group-hover:w-32" />
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[70%] translate-x-full flex-col justify-center border-l border-ink bg-ground p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0">
        <div className="type-micro text-accent">Practical annotation</div>
        <p className="type-body mt-3 text-xs text-secondary">Student identified the anomaly before checking the mark scheme. That is the evidence being recorded.</p>
      </aside>
    </article>
  );
}
