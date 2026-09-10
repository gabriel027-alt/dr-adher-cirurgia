"use client";
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
      value: "Vídeo-Artroscopia",
      label: "Técnica Minimamente Invasiva",
      detail: "Preservação muscular e recuperação acelerada",
    },
    {
      value: "Aroldo Tourinho & Santa Casa",
      label: "Acreditação Hospitalar",
      detail: "CTI e centro cirúrgico de alta complexidade",
    },
  ];

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#070a10] border-t border-slate-850 overflow-hidden">
      {/* Luz focal cialítica de fundo */}
      <div className="lg:col-span-5 relative">
  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
    <Image
      src="/images/dr-adher.jpg"
      alt="Dr. Adher Leonardo Leite Moura"
      fill
      className="object-cover object-top
      priority
    />
  </div>
</div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Moldura Arquitetônica em Proporção Áurea com Monograma Autoral 'AL' */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 via-slate-800 to-sky-900/40 shadow-2xl shadow-black/90">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 aspect-[4/5] flex flex-col items-center justify-between p-7 sm:p-9 shadow-2xl border border-slate-800/80">
                
                {/* Top Seal Overlay: Sociedade Brasileira de Ortopedia */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-850 pb-3.5">
                  <span className="inline-flex items-center gap-1.5 text-champagne-accent font-semibold">
                    <BookmarkCheck className="w-3.5 h-3.5 text-champagne-accent" />
                    Membro Titular • SBOT
                  </span>
                  <span className="text-slate-400">Montes Claros - MG</span>
                </div>

                {/* Monograma Vetorial Autoral 'AL' (Adher Leonardo) em Traços Finos Dourados/Titânio */}
                <div className="my-auto text-center flex flex-col items-center">
                  <div className="relative mb-5 flex items-center justify-center">
                    <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-36 sm:h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#cbb26a">
                            <animate attributeName="stop-color" values="#cbb26a;#fef08a;#cbb26a" dur="8s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="50%" stopColor="#fef08a">
                            <animate attributeName="stop-color" values="#fef08a;#ffffff;#fef08a" dur="8s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#cbb26a">
                            <animate attributeName="stop-color" values="#cbb26a;#fef08a;#cbb26a" dur="8s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                        <linearGradient id="titaniumShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#94a3b8" />
                          <stop offset="50%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                      </defs>

                      {/* Anéis de precisão cirúrgica */}
                      <circle cx="80" cy="80" r="75" stroke="rgba(203, 178, 106, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="80" cy="80" r="68" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.8" />
                      
                      {/* Monograma 'A' estilizado em Ouro Nobre com Brilho Metálico Shimmer */}
                      <path d="M52 118 L80 42 L108 118" stroke="url(#goldShimmer)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M63 92 L97 92" stroke="url(#goldShimmer)" strokeWidth="2.2" strokeLinecap="round" />
                      
                      {/* Monograma 'L' entrelaçado em Aço Titânio */}
                      <path d="M80 62 L80 118 L122 118" stroke="url(#titaniumShimmer)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                      
                      {/* Vértice de precisão superior */}
                      <polygon points="80,34 83,38 80,42 77,38" fill="url(#goldShimmer)" />
                    </svg>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block">
                    Monograma Institucional
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif mt-1">
                    Dr. Adher Leonardo
                  </h3>
                  <p className="text-xs text-sky-300 font-medium max-w-xs mt-0.5">
                    Cirurgia de Ombro &amp; Joelho
                  </p>
                </div>

                {/* Badge metálica inferior com chanfro de 45°: Reserva técnica para fotografia */}
                <div className="w-full rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="text-[11px] font-mono font-semibold text-champagne-light uppercase tracking-wider">
                    Espaço Reservado para Fotografia Oficial
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Upload manual pronto para: public/dr-adher.jpg
                  </div>
                </div>
              </div>
            </div>

            {/* Selo Flutuante de Credenciais Oficiais CFM */}
            <div className="hidden sm:flex absolute -bottom-5 -right-3 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 p-3.5 rounded-2xl shadow-2xl items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-champagne-dark/20 border border-champagne-dark/40 text-champagne-accent">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{doctor.crm}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-champagne-accent">{doctor.rqe}</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Hospital Aroldo Tourinho &amp; Santa Casa
                </div>
              </div>
            </div>
          </div>

          {/* Texto de Autoridade Cirúrgica e Reputação Clínica */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-champagne-accent" /> 
              <span>Referência Médica no Norte de Minas</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif">
              Dr. Adher Leonardo Leite Moura
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-sky-300 font-medium font-sans">
              Especialista Titular em Cirurgia Artroscópica e Reconstrutiva de Ombro e Joelho
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                Com dedicação integral e exclusiva à ortopedia articular de alta complexidade em Montes Claros e região, o Dr. Adher Leonardo Leite Moura atua na restituição biomecânica e preservação funcional das articulações de ombro e joelho.
              </p>
              <p>
                Sua conduta privilegia diagnósticos de alta fidelidade e intervenções minimamente invasivas por vídeo-artroscopia, assegurando preservação biológica da musculatura, dor pós-operatória controlada por bloqueio loco-regional e reabilitação acelerada para retorno às atividades laborais e esportivas.
              </p>
            </div>

            {/* Grid com métricas de autoridade */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {authorityMetrics.map((metric, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80">
                  <div className="text-xs font-bold text-white font-sans">{metric.value}</div>
                  <div className="text-[11px] text-sky-400 font-medium mt-0.5">{metric.label}</div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-snug">{metric.detail}</div>
                </div>
              ))}
            </div>

            {/* Badges de Estrutura Física e Hospitais Parceiros */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <Building2 className="w-5 h-5 text-sky-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Presencial</h4>
                <p className="text-xs text-slate-400 mt-1">Clínica Articulare — Av. Dr. João Chaves, 188, Jardim São Luiz, Montes Claros - MG.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <Hospital className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Retaguarda Hospitalar</h4>
                <p className="text-xs text-slate-400 mt-1">Intervenções realizadas no Hospital Aroldo Tourinho e Santa Casa, com CTI e suporte intensivo.</p>
              </div>
            </div>

            {/* CTA de Triagem Prioritária */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#triagem"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 hover:from-sky-400 hover:to-teal-400 hover:scale-[1.015] active:scale-[0.985] transition-all"
              >
                <span>Agendar Avaliação ou 2ª Opinião</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
