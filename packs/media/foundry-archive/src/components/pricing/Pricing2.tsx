import React from 'react';
import { Shield, Check, FileText } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. FOUNDRY CATALOG PRICING TABLE</h2>
          <span className="text-xs text-neutral-500">TABLE 04-B</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-neutral-800 text-neutral-500 uppercase">
              <tr>
                <th className="p-4">License Class</th>
                <th className="p-4">Workstations</th>
                <th className="p-4">Formats</th>
                <th className="p-4">Archive Access</th>
                <th className="p-4 text-right">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              <tr>
                <td className="p-4 font-bold text-white">Single User / Student</td>
                <td className="p-4">1 Workstation</td>
                <td className="p-4">OTF / TTF</td>
                <td className="p-4">Standard</td>
                <td className="p-4 text-right font-bold">$45</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Studio Professional</td>
                <td className="p-4">Up to 10 Seats</td>
                <td className="p-4">OTF / WOFF2</td>
                <td className="p-4">Complete Vault</td>
                <td className="p-4 text-right font-bold">$180</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Enterprise Foundry</td>
                <td className="p-4">Unlimited</td>
                <td className="p-4">All Formats + Source</td>
                <td className="p-4">VIP Curator</td>
                <td className="p-4 text-right font-bold">$750</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
