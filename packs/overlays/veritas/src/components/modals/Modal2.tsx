/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';

export function Modal2() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-md mx-auto">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#f6f8fa] border border-[#e2e8f0] flex items-center justify-center text-[#0f4c45] mb-6">
            <AlertCircle className="w-5 h-5" />
          </div>

          <h3 className="text-xl font-medium text-[#0a0e12] mb-2">Confirm Calibration Reset</h3>
          <p className="text-xs text-[#5b6b76] mb-6 leading-relaxed">
            Initiating a primary oscillator reset will temporarily disconnect telemetry feed #04 for approximately 42 seconds. Proceed with caution.
          </p>

          <div className="flex items-center gap-3">
            <button className="flex-1 py-2.5 rounded-full border border-[#e2e8f0] text-xs font-medium text-[#5b6b76] hover:bg-[#f1f4f8] transition-colors">
              Abort
            </button>
            <button className="flex-1 py-2.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37] transition-colors">
              Confirm Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
