import React from 'react';
import { QrCode, FileText, Calculator } from 'lucide-react';

export default function SmartGstVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] bg-[#0E1017] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs rounded-xs flex-shrink-0">
            GT
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#F8FAFC] font-mono font-bold text-[11px] sm:text-xs tracking-wider truncate">
                SMART GST // INVOICE SYNTHESIZER
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 border border-white/[0.08] text-[#94A3B8] rounded-xs hidden xs:inline">
                iText PDF
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-mono truncate">
              B2B QR-CODE ENCODING & MULTI-TIER TAX COMPUTATION
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] sm:text-[11px] font-mono rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            GSTIN VALIDATED
          </span>
        </div>
      </div>

      {/* Center Invoice Preview Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-4">
        {/* Left Column: Tax Calculation Engine */}
        <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 rounded-xs">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#94A3B8]">
                <Calculator size={13} className="text-[#8B5CF6]" />
                <span className="text-[10px] sm:text-xs">DYNAMIC TAX SPLIT (18%)</span>
              </div>
              <span className="text-[#64748B] text-[10px]">HSN: 998313</span>
            </div>

            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between p-2 bg-[#08090D] border border-white/[0.06] rounded-xs text-[10px] sm:text-xs">
                <span className="text-[#94A3B8]">Taxable Subtotal</span>
                <span className="text-[#F8FAFC] font-medium">₹ 42,000.00</span>
              </div>
              <div className="flex justify-between p-2 bg-[#08090D] border border-white/[0.06] rounded-xs text-[10px] sm:text-xs">
                <span className="text-[#94A3B8]">CGST (9%) + SGST (9%)</span>
                <span className="text-[#22D3EE] font-medium">₹ 3,780 + ₹ 3,780</span>
              </div>
              <div className="flex justify-between p-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xs text-[10px] sm:text-xs">
                <span className="text-[#F8FAFC] font-bold">Total Invoice Value</span>
                <span className="text-[#A78BFA] font-bold">₹ 49,560.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: ZXing B2B QR Code & PDF Export */}
        <div className="md:col-span-5 flex flex-col justify-between p-3 sm:p-4 bg-[#131520] border border-white/[0.08] rounded-xs">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                <QrCode size={13} className="text-[#8B5CF6]" />
                ZXING 2D DIGEST
              </span>
              <span className="text-[#22D3EE] text-[9px] sm:text-[10px]">ENCODED</span>
            </div>

            {/* Stylized QR Visual */}
            <div className="h-18 sm:h-20 w-full bg-[#08090D] border border-white/[0.08] flex items-center justify-center gap-2.5 sm:gap-3 p-2 rounded-xs">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white p-1 flex items-center justify-center rounded-xs flex-shrink-0">
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
              <div className="text-[9px] sm:text-[10px] font-mono text-[#94A3B8] space-y-0.5 min-w-0">
                <p className="text-[#F8FAFC] font-medium">B2B Standard</p>
                <p className="text-[8px] sm:text-[9px] text-[#64748B]">IRN Embedded</p>
                <p className="text-[#22D3EE] text-[8px] sm:text-[9px]">Verified Structure</p>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
            <span className="text-[#64748B]">iText PDF</span>
            <span className="text-[#F8FAFC] font-medium flex items-center gap-1 text-[10px] sm:text-xs">
              <FileText size={11} className="text-[#8B5CF6]" /> 240ms Export
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-[#64748B]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>JAVA SE</span>
          <span>•</span>
          <span>ZXING</span>
          <span>•</span>
          <span>iTEXT PDF</span>
        </div>
        <span className="text-[#8B5CF6]">GST REGULATORY COMPLIANCE</span>
      </div>
    </div>
  );
}
