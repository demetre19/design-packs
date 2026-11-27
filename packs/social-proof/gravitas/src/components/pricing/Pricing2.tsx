import React from 'react';
import { Check, Shield, ArrowUpRight } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Pricing 02 // Hairline Specimen Table</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Comprehensive Rights Matrix</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">LEGAL TERMS SPECIFIED</span>
        </div>

        <div className="border border-neutral-800 bg-neutral-950 overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 bg-neutral-900/50">
                <th className="p-4 font-normal">LICENSE CLASS</th>
                <th className="p-4 font-normal">DESKTOP</th>
                <th className="p-4 font-normal">WEB (WOFF2)</th>
                <th className="p-4 font-normal">SERVER / APP</th>
                <th className="p-4 font-normal text-right">PRICE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 text-neutral-300">
              <tr>
                <td className="p-4 font-bold text-white">Individual Master</td>
                <td className="p-4 text-white">1 User</td>
                <td className="p-4 text-neutral-500">10k Views/mo</td>
                <td className="p-4 text-neutral-500">No</td>
                <td className="p-4 text-right font-bold text-white">$49</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Studio Edition</td>
                <td className="p-4 text-white">10 Users</td>
                <td className="p-4 text-white">500k Views/mo</td>
                <td className="p-4 text-neutral-500">Optional</td>
                <td className="p-4 text-right font-bold text-white">$180</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Foundry Worldwide</td>
                <td className="p-4 text-white">Unlimited</td>
                <td className="p-4 text-white">Unlimited</td>
                <td className="p-4 text-white">Included</td>
                <td className="p-4 text-right font-bold text-white">$540</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-[10px] font-mono text-neutral-400 flex justify-between">
          <span>* ALL LICENSES INCLUDE FUTURE WEIGHT UPGRADES FREE OF CHARGE.</span>
          <span>SECURE ENCRYPTED CHECKOUT VIA STRIPE</span>
        </div>
      </div>
    </section>
  );
}
