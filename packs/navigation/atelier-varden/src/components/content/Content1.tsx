import React from 'react';

interface LedgerRow {
  ref: string;
  commission: string;
  site: string;
  system: string;
  area: string;
  elevation: string;
  disposition: string;
  note?: string;
}

const LEDGER_ROWS: LedgerRow[] = [
  {
    ref: 'AV-014',
    commission: 'Villa Varden Nord',
    site: 'Zürichberg, CH',
    system: 'Board-Formed Concrete / Fir',
    area: '380 m²',
    elevation: '+612.0 m',
    disposition: 'COMPLETE · 2025',
    note: 'Cantilevered slab anchored to glacial moraine stratum; zero perimeter columns.',
  },
  {
    ref: 'AV-017',
    commission: 'Engadin Stone Pavilion',
    site: 'St. Moritz, CH',
    system: 'Dry-Jointed Gneiss / Oak',
    area: '240 m²',
    elevation: '+1,840.5 m',
    disposition: 'COMPLETE · 2025',
  },
  {
    ref: 'AV-019',
    commission: 'Kamakura Horizon House',
    site: 'Kanagawa, JP',
    system: 'Charred Sugi / Seismic Core',
    area: '410 m²',
    elevation: '+34.2 m',
    disposition: 'COMPLETE · 2024',
    note: 'Tidal salt-mist resistant facade; subterranean rainwater cistern integrated.',
  },
  {
    ref: 'AV-021',
    commission: 'Värmdö Archipelago Studio',
    site: 'Stockholm, SE',
    system: 'Granite Plinth / Heart Pine',
    area: '290 m²',
    elevation: '+11.8 m',
    disposition: 'COMPLETE · 2024',
  },
  {
    ref: 'AV-023',
    commission: 'Aoyama Courtyard Annex',
    site: 'Minato-ku, Tokyo, JP',
    system: 'Fair-Faced Concrete / Steel',
    area: '520 m²',
    elevation: '+28.0 m',
    disposition: 'OCCUPIED · 2023',
    note: 'Triple-height internal light shaft calibrated for winter solstice azimuth.',
  },
  {
    ref: 'AV-026',
    commission: 'Vals Thermal Bathhouse',
    site: 'Graubünden, CH',
    system: 'Split Quartzite / Bronze',
    area: '310 m²',
    elevation: '+1,252.0 m',
    disposition: 'IN SITU · 2026',
  },
  {
    ref: 'AV-028',
    commission: 'Gotland Limestone Sanctuary',
    site: 'Visby, SE',
    system: 'Lime-Washed Masonry / Larch',
    area: '360 m²',
    elevation: '+19.4 m',
    disposition: 'DESIGN DEV · 2026',
  },
  {
    ref: 'AV-030',
    commission: 'Kyoto Moss Cloister',
    site: 'Sakyo-ku, Kyoto, JP',
    system: 'Rammed Earth / Hinoki',
    area: '330 m²',
    elevation: '+74.0 m',
    disposition: 'COMMISSION · 2026',
    note: 'Perimeter earthen wall dampens street acoustics by 44 dB.',
  },
];

export function Content1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#16171a]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                FOLIO 01 — ARCHIVAL PRACTICE LEDGER
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#16171a]">
              Schedule of Realized &amp; Active Envelopes
            </h2>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
            AUDIT PERIOD: 2023—2026 · CURRENCY: METRIC SI
          </div>
        </div>

        <div className="border border-[#e2e0d8] bg-[#fafaf8] overflow-x-auto">
          <table className="w-full min-w-[780px] text-left border-collapse">
            <thead>
              <tr className="bg-[#f0efeb] border-b border-[#16171a] text-[10px] font-mono uppercase tracking-[0.16em] text-stone-600">
                <th className="py-3 px-4 border-r border-[#e2e0d8] w-24 font-normal">Ref.</th>
                <th className="py-3 px-4 border-r border-[#e2e0d8] font-normal">Commission &amp; Site</th>
                <th className="py-3 px-4 border-r border-[#e2e0d8] font-normal">Tectonic System</th>
                <th className="py-3 px-4 border-r border-[#e2e0d8] text-right font-normal">Gross Area</th>
                <th className="py-3 px-4 border-r border-[#e2e0d8] text-right font-normal">Datum Elev.</th>
                <th className="py-3 px-4 text-right font-normal">Disposition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e0d8] text-xs">
              {LEDGER_ROWS.map((row) => (
                <React.Fragment key={row.ref}>
                  <tr className="hover:bg-[#f0efeb]/60 transition-colors">
                    <td className="py-3.5 px-4 border-r border-[#e2e0d8] font-mono text-[11px] text-[#b5482e] tabular-nums">
                      {row.ref}
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#e2e0d8]">
                      <div className="font-medium text-[#16171a]">{row.commission}</div>
                      <div className="text-[11px] font-mono text-stone-500">{row.site}</div>
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-stone-700 font-mono text-[11px]">
                      {row.system}
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-right font-mono tabular-nums text-[#16171a]">
                      {row.area}
                    </td>
                    <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-right font-mono tabular-nums text-stone-600">
                      {row.elevation}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-[11px] tracking-wider text-[#16171a] tabular-nums">
                      {row.disposition}
                    </td>
                  </tr>
                  {row.note && (
                    <tr className="bg-[#f0efeb]/45">
                      <td className="py-2 px-4 border-r border-[#e2e0d8] text-right font-mono text-[10px] text-stone-400">
                        ↳
                      </td>
                      <td colSpan={5} className="py-2 px-4 text-[11px] font-mono text-stone-600">
                        <span className="inline-block w-[4px] h-[4px] bg-[#b5482e] mr-2 align-middle" />
                        NOTE: {row.note}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-[#f0efeb] border-t border-[#16171a] text-[11px] font-mono uppercase tracking-widest text-[#16171a] tabular-nums">
                <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-[#b5482e]">SUM</td>
                <td className="py-3.5 px-4 border-r border-[#e2e0d8]">08 REGISTERED COMMISSIONS</td>
                <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-stone-500">CH · JP · SE</td>
                <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-right font-medium">2,840 m²</td>
                <td className="py-3.5 px-4 border-r border-[#e2e0d8] text-right text-stone-500">Δ 1,828.7 m</td>
                <td className="py-3.5 px-4 text-right text-[#b5482e]">VERIFIED</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
