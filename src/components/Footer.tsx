"use client";

import React from "react";
import doctorContent from "@/data/doctorContent";
import { Activity, ShieldCheck, MapPin, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const { footer, doctor } = doctorContent;

  return (
    <footer className="border-t border-slate-850 bg-slate-950 py-12 text-slate-400 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/30 bg-slate-900 shadow-inner">
                <Activity className="h-5 w-5 text-sky-400" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {doctor.name}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              {doctor.bio}
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{footer.crmDisclaimer}</span>
            </div>
          </div>

          {/* Location & Clinic Info */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Localização
            </h4>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
              <span>{footer.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Phone className="h-4 w-4 text-teal-400 shrink-0" />
              <span>{doctor.whatsappNumber}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação Rápida
            </h4>
            <a
              href="#sobre"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              Sobre o Dr. Adher Leonardo
            </a>
            <a
              href="#triagem"
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold transition-colors"
            >
              Triagem Pré-Cirúrgica
            </a>
            <a
              href="#patologias"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              Patologias de Ombro e Joelho
            </a>
            <a
              href="#jornada"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              Jornada do Paciente Cirúrgico
            </a>
            <a
              href="#horarios"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              Grade Clínica e Reembolso
            </a>
            <a
              href="#duvidas"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              Perguntas Frequentes
            </a>
          </div>
        </div>

        {/* Legal Disclaimer Box - Compliance CFM 2.336/2023 */}
        <div className="mt-10 rounded-xl border border-slate-800/90 bg-slate-900/50 p-5 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-center gap-2 font-semibold text-champagne-accent mb-2">
            <ShieldCheck className="h-4 w-4 text-champagne-accent" />
            <span>Nota de Esclarecimento Ético &amp; Resolução CFM nº 2.336/2023</span>
          </div>
          <p>{footer.legalNotice}</p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-6 text-xs text-slate-400 sm:flex-row">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-400">
              Cirurgia Articular de Alta Precisão
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
