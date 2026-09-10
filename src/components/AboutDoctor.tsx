import Image from "next/image";
import React from "react";
import { ShieldCheck, Award, Building2, Hospital, ArrowRight, BookmarkCheck } from "lucide-react";
import doctorContent from "@/data/doctorContent";

export default function AboutDoctor() {
  const { doctor } = doctorContent;

  const authorityMetrics = [
    {
      value: "Especialista Titular",
      label: "Ortopedia & Traumatologia",
      detail: "RQE 11.269 registrado no CRM-MG",
    },
    {
      value: "Vídeo Artroscopia",
      label: "Técnica Minimamente Invasiva",
      detail: "Preservação muscular e recuperação acelerada",
    },
    {
      value: "Aroldo Tourinho & Santa Casa",
      label: "Acreditação Hospitalar",
      detail: "UTI e centro cirúrgico de alta complexidade",
    },
  ];

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#070a10] border-t border-slate-850 overflow-hidden">
      {/* Luz focal cialítica de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Imagem */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/dr-adher.jpg"
                alt="Dr. Adher Leonardo Leite Moura"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-[#0b1320]/90 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl shadow-2xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Membro Titular</div>
                  <div className="text-sm font-bold text-white">SBOT • CRM-MG</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Excelência em Ortopedia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Dr. Adher Leonardo Leite Moura
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed font-light">
              Especialista dedicado ao tratamento avançado das patologias do ombro e joelho, unindo precisão cirúrgica por vídeo artroscopia e reabilitação focada na recuperação plena do movimento.
            </p>

            {/* Grid de Métricas de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {authorityMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="text-sm font-bold text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-xs font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-[11px] text-slate-400">{metric.detail}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#triagem"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Iniciar Triagem Cirúrgica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}