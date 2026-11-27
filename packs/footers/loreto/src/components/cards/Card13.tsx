{/* Record type: heritage object accession tag | Echo: cropped accession number overlays the object plate | Hover: provenance layer slides in from the right */}
import { Archive } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Card13() {
  return (
    <article className="group relative h-[410px] w-full max-w-sm overflow-hidden border border-line bg-ground text-ink">
      <EchoMeasure index="13" size="sm" surface="bg-ground" />
      <div className="flex h-[54%] border-b border-line"><ArtPlate label="OBJ-1938-14" variant={2} dark /></div>
      <div className="p-5">
        <div className="type-micro flex items-center gap-2 text-accent"><Archive size={14} /> Accession tag</div>
        <h3 className="type-editorial mt-4 text-3xl">Debating shield, 1938</h3>
        <p className="type-body mt-3 text-xs text-secondary">Silver plate on timber backing. Evidence that argument was treated as a public discipline generations ago.</p>
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[72%] translate-x-full flex-col justify-center border-l border-ink bg-paper p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Provenance</div><p className="type-body mt-3 text-xs text-secondary">Transferred from the old assembly hall during the 1996 archive audit. Conservation priority: medium.</p></aside>
    </article>
  );
}
