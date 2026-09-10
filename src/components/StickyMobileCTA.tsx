"use client";

import React from "react";
import doctorContent from "@/data/doctorContent";
import { MessageCircle, ShieldCheck } from "lucide-react";

export const StickyMobileCTA: React.FC = () => {
  const { doctor, hero } = doctorContent;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 block md:hidden p-3 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-white truncate">
            {doctor.name}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-slate-400">
            <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
            <span>{doctor.crm} • {doctor.rqe}</span>
          </div>
        </div>

        <a
          href="#triagem"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-sky-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4 fill-slate-950 text-slate-950" />
          <span>Fazer Triagem</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
