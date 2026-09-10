"use client";

import React, { useState } from "react";
import doctorContent from "@/data/doctorContent";
import { Activity, ShieldCheck, Calendar, Menu, X, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { doctor, hero } = doctorContent;

  const navLinks = [
    { label: "Patologias Tratadas", href: "#patologias" },
    { label: "Jornada Cirúrgica", href: "#jornada" },
    { label: "Grade Clínica", href: "#horarios" },
    { label: "Dúvidas Frequentes", href: "#duvidas" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand & CRM */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-500/30 bg-slate-900/80 shadow-inner shadow-sky-500/10 transition-transform duration-300 group-hover:scale-105">
            <Activity className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold tracking-tight text-white transition-colors group-hover:text-sky-300 sm:text-lg">
                {doctor.name}
              </span>
              <span className="hidden text-slate-500 sm:inline">|</span>
              <span className="hidden text-xs font-medium uppercase tracking-wider text-sky-400 sm:inline">
                {doctor.clinicName}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{doctor.crm} • {doctor.rqe}</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          <a
            href="#sobre"
            className="text-xs font-medium tracking-wide uppercase text-slate-300 transition-colors duration-200 hover:text-sky-400"
          >
            Sobre
          </a>
          <a
            href="#patologias"
            className="text-xs font-medium tracking-wide uppercase text-slate-300 transition-colors duration-200 hover:text-sky-400"
          >
            Patologias
          </a>
          <a
            href="#triagem"
            className="text-xs font-medium tracking-wide uppercase text-sky-400 transition-colors duration-200 hover:text-sky-300 font-semibold"
          >
            Triagem
          </a>
          <a
            href="#jornada"
            className="text-xs font-medium tracking-wide uppercase text-slate-300 transition-colors duration-200 hover:text-sky-400"
          >
            Jornada
          </a>
          <a
            href="#horarios"
            className="text-xs font-medium tracking-wide uppercase text-slate-300 transition-colors duration-200 hover:text-sky-400"
          >
            Grade Clínica
          </a>
          <a
            href="#duvidas"
            className="text-xs font-medium tracking-wide uppercase text-slate-300 transition-colors duration-200 hover:text-sky-400"
          >
            Dúvidas
          </a>
        </nav>

        {/* Quick Triage Action CTA */}
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href="#triagem"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-sky-500/40 bg-gradient-to-r from-sky-500/10 to-teal-500/10 px-4 py-2 text-xs font-medium text-sky-300 shadow-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/20 hover:text-white"
          >
            <Calendar className="h-3.5 w-3.5 text-sky-400 transition-transform group-hover:scale-110" />
            <span>Triagem Cirúrgica</span>
            <ArrowRight className="h-3 w-3 text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white md:hidden"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={doctor.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-sky-500/40 bg-sky-500/15 py-2.5 text-xs font-medium text-sky-300 hover:bg-sky-500/25"
              >
                <Calendar className="h-4 w-4 text-sky-400" />
                <span>{hero.ctaPrimaryText}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
