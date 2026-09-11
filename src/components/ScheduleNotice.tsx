"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import doctorContent from "@/data/doctorContent";
import {
  Calendar,
  Clock,
  MapPin,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  BadgePercent,
  HelpCircle,
  Navigation,
  ExternalLink,
} from "lucide-react";

interface TussItem {
  id: string;
  name: string;
  joint: "Ombro" | "Joelho";
  code: string;
  category: string;
  docsRequired: string[];
  slaAns: string;
  notes: string;
}

const tussCatalog: TussItem[] = [
  {
    id: "manguito",
    name: "Reparo Artroscópico do Manguito Rotador",
    joint: "Ombro",
    code: "TUSS 30724010",
    category: "Cirurgia Artroscópica Reconstrutiva",
    docsRequired: ["Relatório médico detalhado com fotos artroscópicas", "Laudo da Ressonância Magnética", "Recibo formal com discriminação de equipe cirúrgica"],
    slaAns: "Até 30 dias após protocolo no aplicativo",
    notes: "Cobertura de materiais especiais (âncoras biocompativeis e fios de ultra-resistência) cobertos pelo plano nos hospitais credenciados.",
  },
  {
    id: "lca",
    name: "Reconstrução do Ligamento Cruzado Anterior (LCA)",
    joint: "Joelho",
    code: "TUSS 30726056",
    category: "Cirurgia Ligamentar Video-Assistida",
    docsRequired: ["Relatório cirúrgico com justificativa clínica e TUSS", "Exame de RM comprovando a ruptura ligamentar", "Discriminação da equipe (Cirurgião, Auxiliar, Instrumentador)"],
    slaAns: "Até 30 dias para liberação do reembolso",
    notes: "O paciente pode solicitar a prévia de reembolso antes da data cirúrgica para previsibilidade financeira total.",
  },
  {
    id: "menisco",
    name: "Sutura & Preservação Meniscal Artroscópica",
    joint: "Joelho",
    code: "TUSS 30726021",
    category: "Preservação da Cartilagem Articular",
    docsRequired: ["Laudo cirúrgico de preservação anatômica", "Comprovante de internação hospitalar", "Nota de honorários profissionais"],
    slaAns: "Até 30 dias úteis conforme normativa ANS",
    notes: "Geralmente associada a procedimentos combinados de cartilagem ou ligamentares.",
  },
  {
    id: "bankart",
    name: "Reparo de Bankart & Instabilidade Glenoumeral",
    joint: "Ombro",
    code: "TUSS 30724029",
    category: "Estabilização Capsulolabral de Ombro",
    docsRequired: ["Relatório de luxações recidivantes e perda de estabilidade", "RM demonstrando a lesão labral", "Relatório de materiais de fixação óssea"],
    slaAns: "Até 30 dias para ressarcimento bancário",
    notes: "Planos como Bradesco Saúde Top, SulAmérica Especial e Unimed Executivo possuem tabelas de reembolso atrativas para este procedimento.",
  },
];

export const ScheduleNotice: React.FC = () => {
  const { clinicAuthority, doctor } = doctorContent;
  const { scheduleNotice, stats } = clinicAuthority;
  const [activeTussId, setActiveTussId] = useState<string>("manguito");

  const selectedTuss = tussCatalog.find((item) => item.id === activeTussId) || tussCatalog[0];

  return (
    <section id="horarios" className="relative py-20 lg:py-28 bg-slate-950/60 border-t border-slate-850">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Authority Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-5 backdrop-blur-xl text-center shadow-sm"
            >
              <div className="text-base sm:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-200">
                {stat.number}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Master Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 lg:p-12 shadow-2xl backdrop-blur-2xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left side: Schedule Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/60 px-3.5 py-1 text-xs font-semibold text-sky-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>{scheduleNotice.badge}</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-serif">
                {scheduleNotice.title}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300">
                {scheduleNotice.description}
              </p>

              {/* Weekly Shifts Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheduleNotice.days.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 transition-colors hover:border-sky-500/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        {item.day}
                      </div>
                      <div className="text-xs font-medium text-slate-300">
                        {item.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota Institucional de Planejamento Cirúrgico Ético */}
              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-sky-500/20 bg-sky-950/40 p-3 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white font-semibold">Planejamento Cirúrgico:</strong> Recomenda-se antecedência mínima para procedimentos eletivos devido aos prazos regulamentares da ANS para autorização de materiais especiais (OPME).
                </p>
              </div>

              {/* Location, Geolocation Card & GPS Direct Route */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{scheduleNotice.location}</span>
                        <span className="rounded bg-sky-950 px-2 py-0.5 font-mono text-[10px] text-sky-300 border border-sky-500/30">Jardim São Luiz</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {scheduleNotice.address}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">
                        Montes Claros - MG • Estacionamento conveniado no local
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Clinica+Articulare+Montes+Claros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-xs font-bold text-sky-300 hover:bg-sky-500/20 hover:text-white transition-all shadow-sm shrink-0 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Navigation className="h-3.5 w-3.5 text-sky-400" />
                    <span>Abrir Trajeto no GPS</span>
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>
                </div>

                {/* Grid Visual com Fachada e Recepção Real */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="group relative h-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md">
                    <Image
                      src="/images/frentearticulare1.jpg"
                      alt="Fachada Clínica Articulare Montes Claros"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="rounded bg-sky-950/90 border border-sky-500/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-sky-300">
                        Fachada Oficial
                      </span>
                      <p className="mt-1 text-xs font-semibold text-white">Sede Própria no Jardim São Luiz</p>
                    </div>
                  </div>

                  <div className="group relative h-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md">
                    <Image
                      src="/images/dentroarticulare.jpg"
                      alt="Recepção e Espera Clínica Articulare"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="rounded bg-teal-950/90 border border-teal-500/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-teal-300">
                        Estrutura
                      </span>
                      <p className="mt-1 text-xs font-semibold text-white">Ambiente Climatizado &amp; Exclusivo</p>
                    </div>
                  </div>
                </div>

                {/* Dark Custom Interactive Google Maps Embed */}
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-800/80 aspect-[16/6] relative bg-slate-900 shadow-inner">
                  <iframe
                    title="Localização Clínica Articulare no Google Maps"
                    src="https://maps.google.com/maps?q=Clinica%20Articulare%2C%20Av.%20Dr.%20Jo%C3%A3o%20Chaves%2C%20188%20-%20Jardim%20S%C3%A3o%20Luiz%2C%20Montes%20Claros%20-%20MG&t=m&z=16&output=embed&iwloc=near"
                    className="w-full h-full border-0 filter invert-[0.92] hue-rotate-[185deg] contrast-[1.1] opacity-85 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right side: Exclusive Consultation Card & Direct Triage Action */}
            <div className="lg:col-span-5 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-950/90 p-6 lg:p-7 shadow-xl">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Atendimento Cirúrgico Exclusivo
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    {scheduleNotice.particularNotice}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-800 pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Documentação Completa para Reembolso
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    {scheduleNotice.reimbursementNotice}
                  </p>
                </div>
              </div>

              <div className="mt-2 border-t border-slate-800 pt-5">
                <a
                  href="#triagem"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 py-3.5 px-5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-200 hover:from-sky-400 hover:to-teal-400 hover:scale-[1.015] active:scale-[0.985]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{scheduleNotice.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Surgical Reimbursement & TUSS Guide Module */}
        <div className="mt-16 rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-champagne-dark/40 bg-champagne-dark/10 px-3 py-1 text-xs font-semibold text-champagne-accent mb-2">
                <BadgePercent className="h-3.5 w-3.5" />
                <span>Direito do Paciente • RN 506 da ANS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                Guia &amp; Simulador de Reembolso Cirúrgico (Livre Escolha)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
                Você pode ser operado pelo Dr. Adher Leonardo com equipe cirúrgica de sua confiança e solicitar o ressarcimento dos honorários ao seu plano de saúde.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 px-3.5 py-2 text-xs font-mono text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Bradesco • SulAmérica • Unimed • Amil • Cassi</span>
              </span>
            </div>
          </div>

          {/* 3-Step Reimbursement Workflow */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-sky-400">
                <span className="font-bold">PASSO 01</span>
                <span className="rounded bg-sky-950 px-2 py-0.5 border border-sky-500/30">Clínica Articulare</span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">
                Laudo Médico &amp; Codificação TUSS
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                O Dr. Adher Leonardo emite laudo detalhado justificando a necessidade cirúrgica e discriminando todos os códigos oficiais da tabela TUSS/CBHPM.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-teal-400">
                <span className="font-bold">PASSO 02</span>
                <span className="rounded bg-teal-950 px-2 py-0.5 border border-teal-500/30">App da Operadora</span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">
                Solicitação Digital de Prévia
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Você envia os documentos pelo aplicativo do seu convênio para obter o cálculo formal da prévia de reembolso antes mesmo do dia do procedimento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-champagne-accent">
                <span className="font-bold">PASSO 03</span>
                <span className="rounded bg-slate-900 px-2 py-0.5 border border-champagne-dark/40 text-champagne-light">Ressarcimento</span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-white">
                Depósito Direto em Conta
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Após a cirurgia, a operadora efetua o depósito do reembolso diretamente na sua conta corrente para quitação dos honorários da equipe.
              </p>
            </div>
          </div>

          {/* Interactive Procedure TUSS Selector */}
          <div className="mt-10 border-t border-slate-800/90 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Códigos TUSS Oficiais por Procedimento
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Selecione uma intervenção cirúrgica para visualizar a codificação e exigências:
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Rol da ANS Atualizado
              </span>
            </div>

            {/* TUSS Selection Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tussCatalog.map((item) => {
                const isSelected = item.id === activeTussId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTussId(item.id)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                      isSelected
                        ? "border border-sky-400 bg-sky-500/20 text-white shadow-md shadow-sky-500/10"
                        : "border border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${item.joint === "Ombro" ? "bg-sky-400" : "bg-teal-400"}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active TUSS Card Preview */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850 pb-4">
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {selectedTuss.category} • {selectedTuss.joint}
                  </span>
                  <h5 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {selectedTuss.name}
                  </h5>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-sky-500/40 bg-sky-950/60 px-3.5 py-1.5 font-mono text-sm font-bold text-sky-300">
                  <FileText className="h-4 w-4 text-sky-400" />
                  <span>{selectedTuss.code}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Documentação Fornecida pela Clínica Articulare:
                  </h6>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedTuss.docsRequired.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-slate-850 bg-slate-900/60 p-4">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Prazo Médio de Resposta:
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {selectedTuss.slaAns}
                    </div>
                    <p className="mt-2 text-[11px] text-slate-400 leading-relaxed">
                      {selectedTuss.notes}
                    </p>
                  </div>

                  <a
                    href="#triagem"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 py-2 px-3 text-xs font-semibold text-sky-300 hover:bg-sky-500/20 hover:text-white transition-colors"
                  >
                    <span>Consultar Reembolso Deste Procedimento</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleNotice;