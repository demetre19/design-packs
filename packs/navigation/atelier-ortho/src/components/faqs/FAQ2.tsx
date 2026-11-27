import React from 'react';
import { FileText } from 'lucide-react';

export function FAQ2() {
  const faqs = [
    { q: "What is the typical turnaround for Schematic Design?", a: "Typically 3 to 4 weeks depending on zoning requirements and site survey availability." },
    { q: "Do you handle local zoning board submissions?", a: "Yes, our team prepares complete zoning documentation and represents projects at hearings." },
    { q: "What software formats are supported for BIM deliverables?", a: "Autodesk Revit, AutoCAD, IFC, and Rhino 3D with full parametric metadata." },
    { q: "How are structural tolerances verified during construction?", a: "Through rigorous on-site laser surveys and weekly engineering supervision reports." },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">FAQ SECTION // 02</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Two-Column Technical Inquiries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md space-y-3">
              <div className="text-[10px] text-[#1b3a5c]/60">INQUIRY [{idx + 1}]</div>
              <h3 className="text-xs font-bold uppercase tracking-wide">{faq.q}</h3>
              <p className="text-xs text-[#1b3a5c]/80 leading-relaxed pt-2 border-t border-[#1b3a5c]/20">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
