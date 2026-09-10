"use client";

import React from "react";
import doctorContent from "@/data/doctorContent";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Hospital,
  ChevronRight,
  FileText,
  Clock,
} from "lucide-react";

export const HeroSurgical: React.FC = () => {
  const { doctor, hero } = doctorContent;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Fundo suave com iluminação clínica sutil */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Coluna Esquerda: Autoridade Clínica, Headline e Ações */}
          <div className="lg:col-span-7 flex flex-col items-start opacity-100">
            {/* Badge Institucional com RQE Oficial e Pulso de Presença */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-slate-900/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-sky-300">
                  {hero.badge}
                </span>
              </div>
            </div>

            {/* Headline com impacto clínico e sobriedade editorial */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl font-serif">
              {hero.headline}
            </h1>

            {/* Subheadline que filtra patologias reais */}
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl font-normal max-w-2xl">
              {hero.subheadline}
            </p>

            {/* Pílulas de Foco Cirúrgico Especializado */}
            <div className="mt-6 flex flex-wrap gap-2 pt-1">
              {hero.surgeryFocus.map((focus, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  {focus}
                </span>
              ))}
            </div>

            {/* CTAs de Ação com Direcionamento à Triagem Especializada */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
              <a
                href="#triagem"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-200 hover:from-sky-400 hover:to-teal-400 hover:scale-[1.015] active:scale-[0.985]"
              >
                <Calendar className="h-4 w-4 text-slate-950" />
                <span>Iniciar Triagem Cirúrgica</span>
                <ChevronRight className="h-4 w-4 text-slate-950 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-4 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 text-center"
              >
                <span>Conhecer Dr. Adher Leonardo</span>
              </a>
            </div>

            {/* Rodapé de credenciais e segurança física */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <Building2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Clínica Articulare • Montes Claros</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Hospital className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Cirurgias na Santa Casa e Aroldo Tourinho</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Card Clínico Sóbrio e de Altíssima Autoridade */}
          <div className="lg:col-span-5 opacity-100">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              {/* Header do Card Médico */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Avaliação Cirúrgica Especializada
                  </span>
                </div>
                <span className="rounded border border-sky-500/30 bg-sky-950/60 px-2 py-0.5 font-mono text-[11px] text-sky-300">
                  RQE 11.269
                </span>
              </div>

              {/* Informações Centrais */}
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Análise Criteriosa de Exames de Imagem
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Conferência direta das imagens de Ressonância Magnética (RM) e radiografias para indicação cirúrgica precisa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-start gap-3">
                    <Hospital className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Ambiente Hospitalar Estruturado
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Procedimentos realizados com tecnologia de vídeo em alta definição, anestesia moderna com bloqueio e CTI de retaguarda.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Atendimento com Tempo Dedicado
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                        Consultas sem pressa, exame físico biomecânico detalhado e esclarecimento minucioso sobre a recuperação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodapé do Card */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">
                  {doctor.name}
                </span>
                <span className="font-mono text-[11px] text-emerald-400">
                  {doctor.crm}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSurgical;
