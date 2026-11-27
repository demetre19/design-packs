{/* Artifact: heritage object index | Echo: cropped catalogue number becomes the archive accession measure | Interactions: object rows open laterally, catalogue rules draw, and reference tags slide */}
import { Archive, Box, FileDigit, KeyRound, type LucideIcon } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

type ArchiveObject = { ref: string; title: string; material: string; copy: string; icon: LucideIcon };

const objects: ArchiveObject[] = [
  { ref: 'OBJ-1905-01', title: 'Foundation enrolment book', material: 'Paper, iron gall ink, linen binding', copy: 'Records the first names entered when the college opened in 1905.', icon: Box },
  { ref: 'OBJ-1938-14', title: 'Debating shield', material: 'Silver plate, timber backing', copy: 'Evidence that argument was treated as a public discipline generations ago.', icon: KeyRound },
  { ref: 'OBJ-1976-22', title: 'Science practical notebook', material: 'Graph paper, cloth tape', copy: 'A student record of titration experiments and corrections made in her own hand.', icon: FileDigit },
  { ref: 'OBJ-2004-09', title: 'House relay baton', material: 'Powder-coated aluminium', copy: 'A small object carrying decades of noise, competition and communal loyalty.', icon: Archive }
];

export default function Content15() {
  return (
    <section className="surface-archive bg-ground px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-y border-ink py-12">
        <EchoMeasure index="15" size="lg" surface="bg-ground" />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="lg:w-[55%]">
            <div className="type-micro text-accent">Heritage object index</div>
            <h2 className="type-editorial mt-4 text-5xl md:text-7xl">The archive does not sentimentalise objects. It interrogates them.</h2>
          </div>
          <p className="type-body max-w-sm text-sm text-secondary lg:ml-auto">A catalogue of material evidence from 120 years of girls learning in public, private, loud and precise ways.</p>
        </div>
        <div className="mt-14 border-t border-line">
          {objects.map((object) => {
            const Icon = object.icon;
            return (
              <article key={object.ref} className="group relative flex flex-col border-b border-line py-6 md:flex-row md:items-center">
                <div className="absolute bottom-0 left-0 h-px w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
                <div className="type-micro w-36 text-secondary transition-transform duration-200 ease-crisp group-hover:translate-x-2">{object.ref}</div>
                <div className="mt-4 flex w-full items-start gap-5 md:mt-0 md:w-[34%]">
                  <Icon className="mt-1 shrink-0 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={22} />
                  <div>
                    <h3 className="type-editorial text-3xl">{object.title}</h3>
                    <div className="type-micro mt-2 text-[9px] text-secondary">{object.material}</div>
                  </div>
                </div>
                <p className="type-body mt-4 max-w-xl text-sm text-secondary md:ml-auto md:mt-0">{object.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
