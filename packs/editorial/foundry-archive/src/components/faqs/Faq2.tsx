import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq2() {
  const faqs = [
    { year: "1957", q: "How were optical master sizes calibrated?", a: "Master sizes were hand-cut for each optical degree rather than geometrically scaled." },
    { year: "1961", q: "What role did Jan Tschichold play?", a: "Tschichold supervised the photometric reduction of the Imprimerie Nationale strikes." },
    { year: "1983", q: "Are historical ligatures included?", a: "Yes, complete historical ligature sets recorded in the 1900 specimen catalog are embedded." }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. ACCORDION WITH YEAR-INDEXED QUESTIONS</h2>
          <span className="text-xs text-neutral-500">CHRONOLOGICAL INDEX</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 divide-y divide-neutral-800 text-xs">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <span className="text-xl font-bold text-white">{f.year}</span>
                <div>
                  <h3 className="font-bold text-neutral-200 mb-1">{f.q}</h3>
                  <p className="font-sans text-neutral-400">{f.a}</p>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
