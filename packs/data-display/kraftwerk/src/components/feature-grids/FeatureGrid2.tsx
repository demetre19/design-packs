import React, { useState } from 'react';
import { CheckSquare, Square, Terminal } from 'lucide-react';

export function FeatureGrid2() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: false, 3: true });

  const toggle = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const rows = [
    { ref: 'ROW-A1', title: 'Telemetry Logging & Real-time Cloud Stream', status: 'ACTIVE' },
    { ref: 'ROW-A2', title: 'Active Damper Calibration (Milliseconds)', status: 'ACTIVE' },
    { ref: 'ROW-A3', title: 'Aerodynamic Drag Reduction System (DRS)', status: 'STANDBY' },
    { ref: 'ROW-A4', title: 'Emergency Fire Suppression Integration', status: 'ACTIVE' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111111] bg-white">
        <div className="p-4 bg-[#111] text-[#e8e8e6] flex justify-between items-center text-[10px] uppercase tracking-widest">
          <span className="font-bold">[DATASHEET CHECKLIST // MODULE B]</span>
          <span>SELECT VERIFICATION ITEMS</span>
        </div>

        <div className="divide-y divide-[#111]">
          {rows.map((row, idx) => (
            <div 
              key={idx} 
              onClick={() => toggle(idx)}
              className="p-4 flex items-center justify-between hover:bg-[#f0f0ee] transition-colors cursor-pointer text-[10px]"
            >
              <div className="flex items-center space-x-4">
                <span className="text-[#666] font-bold">{row.ref}</span>
                <span className="font-bold text-xs uppercase">{row.title}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[9px] px-2 py-0.5 border border-[#111] bg-[#e8e8e6]">{row.status}</span>
                {checkedItems[idx] ? (
                  <CheckSquare className="w-5 h-5 text-[#111]" />
                ) : (
                  <Square className="w-5 h-5 text-[#888]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
