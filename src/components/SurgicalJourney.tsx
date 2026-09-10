"use client";

import React from "react";
import { motion } from "framer-motion";
import doctorContent from "@/data/doctorContent";
import { SurgicalProtocolStep } from "@/schemas/doctorSchema";
import {
  FileSearch,
  Compass,
  Building2,
  HeartPulse,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export const SurgicalJourney: React.FC = () => {
  const { surgicalProtocol, doctor } = doctorContent;

  const stepIcons = [
    <FileSearch key="1" className="h-6 w-6 text-sky-400" />,
    <Compass key="2" className="h-6 w-6 text-teal-400" />,
    <Building2 key="3" className="h-6 w-6 text-sky-400" />,
    <HeartPulse key="4" className="h-6 w-6 text-emerald-400" />,
  ];

  return (
    <section id="jornada" className="relative py-20 lg:py-28 bg-slate-950/40 border-y border-slate-850">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Protocolo Cirúrgico Estruturado</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            A Jornada do Paciente Cirúrgico
          </h2>

          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Um percurso rigoroso e planejado para garantir previsibilidade, segurança no bloco cirúrgico e rápida recuperação biomecânica.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {surgicalProtocol.map((step: SurgicalProtocolStep, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-sky-500/5"
            >
              {/* Step indicator and Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/80 shadow-inner">
                  {stepIcons[index % stepIcons.length]}
                </div>
                <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 rounded-full px-2.5 py-1">
                  ETAPA 0{step.stepNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-white leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-300 flex-1">
                {step.description}
              </p>

              {/* Subtle line indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Fase 0{step.stepNumber}/04</span>
                <ChevronRight className="h-4 w-4 text-sky-400/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 flex justify-center">
          <a
            href="#triagem"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-sky-300 backdrop-blur-md transition-all duration-200 hover:bg-sky-500/20 hover:text-white"
          >
            <span>Iniciar Triagem Pré-Cirúrgica</span>
            <ChevronRight className="h-4 w-4 text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurgicalJourney;
