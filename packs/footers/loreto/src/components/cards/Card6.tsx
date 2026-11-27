{/* Record type: examination seating ticket | Echo: cropped seat number becomes the ticket control mark | Hover: the verification strip extends and ticket details move laterally */}
import { ScanLine } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card6() {
  return (
    <article className="group relative h-[155px] w-full max-w-lg overflow-hidden border-y border-ink bg-paper text-ink">
      <EchoMeasure index="06" size="sm" surface="bg-paper" />
      <div className="flex h-full items-stretch">
        <div className="flex w-20 items-center justify-center border-r border-dashed border-line"><ScanLine className="text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={22} /></div>
        <div className="flex flex-1 items-center justify-between gap-5 px-5">
          <div className="transition-transform duration-200 ease-crisp group-hover:translate-x-2"><div className="type-micro text-secondary">Methods / Exam hall</div><h3 className="type-editorial mt-2 text-3xl">Seat B-14</h3></div>
          <div className="type-micro grid grid-cols-1 gap-x-6 sm:grid-cols-2 gap-y-3 text-[9px] text-secondary"><span>START 09:00</span><span>ROWS A–F</span><span>CALC YES</span><span>ID CHECK</span></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
    </article>
  );
}
