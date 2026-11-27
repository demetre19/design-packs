{/* Artifact: scholarship evidence dossier | Echo: cropped folio number clips beneath layered papers | Interactions: dossier sheets and evidence tabs slide laterally on hover */}
import { FileText, Landmark, Stamp } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const sheetPositions = [
  'lg:left-0 lg:top-0 lg:rotate-[-1.1deg]',
  'lg:left-[9%] lg:top-[205px] lg:rotate-[1.2deg]',
  'lg:left-[18%] lg:top-[410px] lg:rotate-[-1.1deg]'
];

const sheets = [
  ['Academic evidence', 'Consistent A-range outcomes in mathematics and English; external competition results attached.', 'TAB A'],
  ['Character evidence', 'References describe persistence, generosity under pressure and initiative without prompting.', 'TAB B'],
  ['Interview notes', 'Candidate spoke clearly about the questions she wants to keep asking, not only the marks she has earned.', 'TAB C']
];

export default function Content6() {
  return (
    <section className="overflow-hidden bg-ink px-5 py-24 text-white md:px-10">
      <div className="relative mx-auto max-w-7xl">
        <EchoMeasure index="06" tone="dark" size="lg" surface="bg-ink" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="relative z-10 lg:w-[38%]">
            <div className="type-micro flex items-center gap-2 text-accent"><Stamp size={14} /> Scholarship dossier</div>
            <h2 className="type-editorial mt-4 text-5xl md:text-7xl">A scholarship file rewards evidence, not polish.</h2>
            <p className="type-body mt-6 max-w-md text-sm text-white/65">The dossier translates a selection process into visible documents: what is read, what matters, and how the decision is grounded.</p>
          </div>
          <div className="relative mt-8 min-h-[620px] flex-1 lg:mt-0">
            {sheets.map((sheet, i) => (
              <article
                key={sheet[0]}
                className={`group relative mx-auto mb-6 max-w-xl border border-white/15 bg-paper p-6 text-ink transition-transform duration-200 ease-crisp hover:translate-x-5 md:p-8 lg:absolute lg:mb-0 lg:w-[78%] ${sheetPositions[i]}`}
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <div className="type-micro text-secondary">{sheet[2]}</div>
                    <h3 className="type-editorial mt-4 text-3xl md:text-4xl">{sheet[0]}</h3>
                  </div>
                  <FileText className="text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={26} />
                </div>
                <p className="type-body mt-5 max-w-md text-sm text-secondary">{sheet[1]}</p>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
                  <span className="type-micro text-[10px] text-secondary">Selection file / confidential</span>
                  <span className="h-[3px] w-20 bg-accent transition-all duration-200 ease-crisp group-hover:w-36" />
                </div>
              </article>
            ))}
            <div className="absolute bottom-0 right-0 flex items-center gap-3 border border-white/15 px-4 py-3 text-white/70"><Landmark size={16} className="text-accent" /><span className="type-micro">Panel read · 40 min</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
