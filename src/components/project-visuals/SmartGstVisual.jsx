import React from 'react';
import { QrCode, FileText, Calculator } from 'lucide-react';

export default function SmartGstVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] bg-[#0c0d0f] border border-white/10 p-5 sm:p-7 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs">
            GT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-xs tracking-wider">SMART GST // INVOICE SYNTHESIZER</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70">iText PDF</span>
            </div>
            <p className="text-[10px] text-white/40 font-mono">B2B QR-CODE ENCODING & MULTI-TIER TAX COMPUTATION</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/15 text-white/80 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
            GSTIN VALIDATED
          </span>
        </div>
      </div>

      {/* Center Invoice Preview Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
        {/* Left Column: Tax Calculation Engine */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-4 bg-black/60 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <Calculator size={13} className="text-[#D4FF32]" />
                <span>DYNAMIC TAX SPLIT (18% GST)</span>
              </div>
              <span className="text-white/40">HSN: 998313</span>
            </div>

            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between p-2 bg-[#080809] border border-white/8">
                <span className="text-white/60">Taxable Subtotal</span>
                <span className="text-white font-medium">₹ 42,000.00</span>
              </div>
              <div className="flex justify-between p-2 bg-[#080809] border border-white/8">
                <span className="text-white/60">CGST (9%) + SGST (9%)</span>
                <span className="text-[#D4FF32] font-medium">₹ 3,780 + ₹ 3,780</span>
              </div>
              <div className="flex justify-between p-2 bg-white/5 border border-white/15">
                <span className="text-white font-bold">Total Invoice Value</span>
                <span className="text-white font-bold">₹ 49,560.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: ZXing B2B QR Code & PDF Export */}
        <div className="md:col-span-5 flex flex-col justify-between p-4 bg-black/60 border border-white/10">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
              <span className="flex items-center gap-1.5">
                <QrCode size={13} className="text-[#D4FF32]" />
                ZXING 2D DIGEST
              </span>
              <span className="text-[#D4FF32] text-[10px]">ENCODED</span>
            </div>

            {/* Stylized QR Visual */}
            <div className="h-20 w-full bg-[#080809] border border-white/10 flex items-center justify-center gap-3 p-2">
              <div className="w-14 h-14 bg-white p-1 flex items-center justify-center">
                <div className="w-full h-full border-2 border-black grid grid-cols-3 gap-0.5 p-0.5">
                  <div className="bg-black col-span-1 row-span-1" />
                  <div className="border border-black" />
                  <div className="bg-black" />
                  <div className="bg-black" />
                  <div className="bg-black" />
                  <div className="border border-black" />
                  <div className="bg-black" />
                  <div className="border border-black" />
                  <div className="bg-black" />
                </div>
              </div>
              <div className="text-[10px] font-mono text-white/60 space-y-0.5">
                <p className="text-white font-medium">B2B Standard</p>
                <p className="text-[9px] text-white/40">IRN Hash Embedded</p>
                <p className="text-[#D4FF32] text-[9px]">Verified Structure</p>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/40">iText PDF Stream</span>
            <span className="text-white font-medium flex items-center gap-1">
              <FileText size={11} className="text-[#D4FF32]" /> 240ms Export
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-white/40">
        <div className="flex items-center gap-3">
          <span>JAVA SE</span>
          <span>•</span>
          <span>ZXING BARCODE</span>
          <span>•</span>
          <span>iTEXT PDF ENGINE</span>
        </div>
        <span className="text-white/70">GST REGULATORY COMPLIANCE</span>
      </div>
    </div>
  );
}
