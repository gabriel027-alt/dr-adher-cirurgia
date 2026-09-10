"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorContent from "@/data/doctorContent";
import { PathologyItem, JointType } from "@/schemas/doctorSchema";
import {
  Activity,
  Clock,
  ArrowRight,
  Stethoscope,
  ChevronDown,
  FileText,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

interface SurgicalDetailMeta {
  duration: string;
  preservation: string;
  materials: string;
  anesthesia: string;
  physiotherapy: string;
  tussCode: string;
  biomechanicsNote: string;
}

const pathologyDetailsMap: Record<string, SurgicalDetailMeta> = {
  "manguito-rotador": {
    duration: "60 a 90 minutos",
    materials: "Âncoras biocompatíveis e fios de alta resistência (UHMWPE)",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Preservação integral do músculo deltoide via portais artroscópicos de 4mm",
    tussCode: "TUSS 30724010",
    biomechanicsNote: "Fixação anatômica em dupla fileira (Double-Row) com resistência mecânica imediata.",
  },
  "bankart-hill-sachs": {
    duration: "75 a 100 minutos",
    materials: "Âncoras biocompatíveis e fios de alta resistência (UHMWPE)",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Reancoragem labral anatômica com âncoras bioabsorvíveis sem secção tendinosa",
    tussCode: "TUSS 30724029",
    biomechanicsNote: "Restauração do efeito 'chock-block' do lábio glenoidal contra luxações recorrentes.",
  },
  "reconstrucao-lca": {
    duration: "60 a 80 minutos",
    materials: "Botão cortical de titânio e parafuso bioabsorvível com fios UHMWPE",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Túneis anatômicos de alta precisão com preservação dos cotos biológicos",
    tussCode: "TUSS 30726056",
    biomechanicsNote: "Enxerto posicionado exatamente na pegada anatômica para restauração da estabilidade rotacional (pivot-shift negativo).",
  },
  "lesoes-meniscais": {
    duration: "45 a 60 minutos",
    materials: "Dispositivos de sutura meniscal all-inside com fios de alta resistência (UHMWPE)",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Prioridade absoluta para sutura 'all-inside', preservando o amortecedor da cartilagem",
    tussCode: "TUSS 30726021",
    biomechanicsNote: "Preservação da distribuição de carga fêmoro-tibial, prevenindo artrose precoce.",
  },
  "condropatias-artrose": {
    duration: "45 a 70 minutos",
    materials: "Matriz de regeneração biológica e viscossuplementação de alta densidade",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Regularização biomecânica e microfraturas/viscossuplementação sem prótese",
    tussCode: "TUSS 30726072",
    biomechanicsNote: "Otimização da viscosidade do líquido sinovial e alívio do atrito subcondral.",
  },
  "impacto-subacromial": {
    duration: "40 a 60 minutos",
    materials: "Radiofrequência bipolar artroscópica de plasma frio",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Descompressão subacromial artroscópica sem corte ósseo agressivo",
    tussCode: "TUSS 30724045",
    biomechanicsNote: "Eliminação do atrito mecânico acromial durante a elevação do braço.",
  },
};

// Fine-stroke minimalist vector illustration for Manguito Rotador with continuous suture pulse
const TendonAnchorVector = () => (
  <svg viewBox="0 0 200 64" className="w-full h-14 stroke-current fill-none" strokeWidth="1.5">
    {/* Humeral head curved boundary */}
    <path d="M10 54 Q 60 16, 190 22" stroke="#334155" strokeDasharray="3 3" />
    {/* Tendon flap repositioned */}
    <path d="M10 40 C 45 30, 85 24, 150 24" stroke="#38bdf8" strokeWidth="2" />
    
    {/* Fio de sutura biológico ativo com pulso luminoso em dupla fileira */}
    <path d="M80 30 L 130 27 L 115 48 L 65 48 Z" stroke="#cbb26a" strokeWidth="1.6" className="animate-suture-trace" />
    
    {/* Âncoras Biocompativeis */}
    <circle cx="80" cy="30" r="3" fill="#38bdf8" className="animate-pulse" />
    <circle cx="130" cy="27" r="3" fill="#38bdf8" className="animate-pulse" />
    <circle cx="65" cy="48" r="2.5" fill="#cbb26a" />
    <circle cx="115" cy="48" r="2.5" fill="#cbb26a" />
    <text x="125" y="58" fill="#94a3b8" fontSize="7" fontFamily="monospace" letterSpacing="1">
      TENSÃO EQUILIBRADA
    </text>
  </svg>
);

// Fine-stroke minimalist vector illustration for ACL reconstruction with active graft tunnel
const LigamentTunnelVector = () => (
  <svg viewBox="0 0 200 64" className="w-full h-14 stroke-current fill-none" strokeWidth="1.5">
    {/* Femoral & Tibial contours */}
    <path d="M15 15 Q 65 15, 80 34 Q 65 55, 15 55" stroke="#334155" strokeDasharray="3 3" />
    <path d="M185 15 Q 135 15, 120 34 Q 135 55, 185 55" stroke="#334155" strokeDasharray="3 3" />
    {/* Anatomical graft path with continuous luminous pulse */}
    <path d="M50 24 L 150 46" stroke="#2dd4bf" strokeWidth="2.8" className="animate-graft-pulse" />
    {/* Cortical button fixation */}
    <rect x="42" y="21" width="8" height="4.5" rx="1" fill="#cbb26a" transform="rotate(-25 46 23)" />
    {/* Tibial interference screw */}
    <rect x="145" y="44" width="8" height="4.5" rx="1" fill="#cbb26a" transform="rotate(-25 149 46)" />
    <text x="15" y="60" fill="#94a3b8" fontSize="7" fontFamily="monospace" letterSpacing="1">
      TÚNEL ANATÔMICO 3D
    </text>
  </svg>
);

// Spotlight Card component with asymmetric editorial features
const SpotlightPathologyCard: React.FC<{
  item: PathologyItem;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isFeatured?: boolean;
}> = ({ item, isExpanded, onToggleExpand, isFeatured = false }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const details = pathologyDetailsMap[item.id] || {
    duration: "60 minutos",
    materials: "Âncoras biocompatíveis e fios de alta resistência (UHMWPE)",
    anesthesia: "Bloqueio loco-regional com sedação leve (alta hospitalar no mesmo dia)",
    physiotherapy: "Protocolo de proteção com início em 24-48h",
    preservation: "Técnica minimamente invasiva artroscópica",
    tussCode: "CBHPM / TUSS",
    biomechanicsNote: "Preservação biomecânica funcional.",
  };

  return (
    <motion.div
      layout
      layoutId={`pathology-${item.id}`}
      initial={false}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        layout: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-slate-900/75 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 ${
        isFeatured
          ? "border-sky-500/30 lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90"
          : "border-slate-800 lg:col-span-1"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Surgical Spotlight Follow Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          background: isHovered
            ? `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12), transparent 75%)`
            : "none",
        }}
      />

      <div>
        {/* Top Header: Joint, Tag & Featured Label */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3.5">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                item.joint === "Ombro"
                  ? "border border-sky-500/30 bg-sky-950/60 text-sky-300"
                  : "border border-teal-500/30 bg-teal-950/60 text-teal-300"
              }`}
            >
              <Activity className="h-3 w-3" />
              {item.joint}
            </span>

            {isFeatured && (
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-champagne-dark/40 bg-champagne-dark/10 px-2.5 py-0.5 text-[10px] font-mono text-champagne-accent">
                Alta Complexidade • Artroscopia
              </span>
            )}
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            {item.tag}
          </span>
        </div>

        {/* Fine vector anatomical diagram for featured cards */}
        {isFeatured && (
          <div className="mt-4 rounded-xl border border-slate-800/90 bg-slate-950/80 p-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
              <span>Esquema Biomecânico de Reparo</span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
                {item.id === "manguito-rotador" ? "Dinâmica em Dupla Fileira" : "Tração Ligamentar Ativa"}
              </span>
            </div>
            {item.id === "manguito-rotador" && <TendonAnchorVector />}
            {item.id === "reconstrucao-lca" && <LigamentTunnelVector />}
          </div>
        )}

        {/* Title */}
        <h3
          className={`mt-4 font-bold text-white transition-colors duration-200 group-hover:text-sky-300 font-sans ${
            isFeatured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {item.title}
        </h3>

        {/* Indication */}
        <div className="mt-3.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Indicação Clínica
          </div>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
            {item.indication}
          </p>
        </div>

        {/* Technique Summary Box */}
        <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-400">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
            <span>Técnica Cirúrgica de Precisão</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">
            {item.techniqueDescription}
          </p>
          {isFeatured && (
            <p className="mt-2 text-[11px] text-slate-400 border-t border-slate-800/60 pt-2 italic">
              {details.biomechanicsNote}
            </p>
          )}
        </div>
      </div>

      {/* Expandable Protocol Details (Accordion) */}
      <div className="mt-5 border-t border-slate-800/80 pt-4">
        <button
          type="button"
          onClick={onToggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`protocol-details-${item.id}`}
          className="flex w-full items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1 cursor-pointer group/acc"
        >
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-sky-400" />
            {isExpanded ? "Ocultar Detalhes do Protocolo" : "Ver Detalhes do Protocolo Cirúrgico"}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-sky-400 transition-transform duration-300 ease-out ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* CSS Grid Accordion Container (0fr -> 1fr native 60 FPS GPU transition) */}
        <div
          id={`protocol-details-${item.id}`}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden min-h-0">
            <div className="mt-3 space-y-2 rounded-xl bg-slate-950/90 p-3.5 border border-slate-800 text-[11px] text-slate-300 shadow-inner">
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-400 font-medium shrink-0">Material Utilizado:</span>
                <span className="font-semibold text-sky-300 text-right">{details.materials}</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-t border-slate-850/70 pt-1.5">
                <span className="text-slate-400 font-medium shrink-0">Anestesia:</span>
                <span className="text-right text-slate-200">{details.anesthesia}</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-t border-slate-850/70 pt-1.5">
                <span className="text-slate-400 font-medium shrink-0">Fisioterapia:</span>
                <span className="text-right text-teal-300 font-medium">{details.physiotherapy}</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-t border-slate-850/70 pt-1.5">
                <span className="text-slate-400 font-medium shrink-0">Tempo Cirúrgico:</span>
                <span className="font-semibold text-white">{details.duration}</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-t border-slate-850/70 pt-1.5">
                <span className="text-slate-400 font-medium shrink-0">Preservação Tecidual:</span>
                <span className="text-right text-slate-200">{details.preservation}</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-t border-slate-850/70 pt-1.5">
                <span className="text-slate-400 font-medium shrink-0">Codificação ANS (TUSS):</span>
                <span className="font-mono font-bold text-sky-400">{details.tussCode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recovery Line */}
        <div className="mt-4 flex items-start gap-2 text-xs text-slate-400">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
          <div>
            <span className="font-semibold text-slate-300">Recuperação: </span>
            <span>{item.recoveryTime}</span>
          </div>
        </div>

        {/* Direct Action Link to Triage */}
        <a
          href="#triagem"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 px-3 text-xs font-semibold text-sky-300 transition-all duration-200 hover:border-sky-400 hover:bg-sky-500/15 hover:text-white"
        >
          <span>Fazer Triagem Desta Condição</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export const PathologyBentoGrid: React.FC = () => {
  const { pathologyGrid } = doctorContent;
  const [selectedJoint, setSelectedJoint] = useState<"Todos" | JointType>("Todos");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const filteredItems =
    selectedJoint === "Todos"
      ? pathologyGrid
      : pathologyGrid.filter((item) => item.joint === selectedJoint);

  const handleToggle = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="patologias" className="relative py-20 lg:py-28 bg-[#070a10]">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-sky-500/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Serif Typography */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 backdrop-blur-md">
            <Stethoscope className="h-3.5 w-3.5" />
            <span>Indicações &amp; Técnicas Cirúrgicas</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            Tratamento Especializado de Patologias Articulares
          </h2>

          <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
            Diagnóstico cirúrgico de precisão e reconstruções minimamente invasivas projetadas para restauração biomecânica, alívio duradouro da dor e preservação articular.
          </p>

          {/* Interactive Joint Tabs with Framer Motion layoutId */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-slate-800 bg-slate-950/90 p-1.5 backdrop-blur-md">
            {(["Todos", "Ombro", "Joelho"] as const).map((tab) => {
              const isActive = selectedJoint === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedJoint(tab)}
                  className={`relative rounded-lg px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md shadow-sky-500/20"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-lg border border-sky-500/40 bg-gradient-to-r from-sky-500/20 to-teal-500/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === "Ombro" && <span className="h-2 w-2 rounded-full bg-sky-400" />}
                    {tab === "Joelho" && <span className="h-2 w-2 rounded-full bg-teal-400" />}
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Grid breaking repetitive AI template symmetry */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: PathologyItem) => {
              const isFeatured = item.id === "manguito-rotador" || item.id === "reconstrucao-lca";
              return (
                <SpotlightPathologyCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedCardId === item.id}
                  onToggleExpand={() => handleToggle(item.id)}
                  isFeatured={isFeatured}
                />
              );
            })}

            {/* Asymmetric Second Opinion Bento Tile */}
            <motion.div
              key="tile-second-opinion"
              layout
              layoutId="pathology-second-opinion"
              initial={false}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                layout: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-champagne-dark/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-7 backdrop-blur-xl lg:col-span-1 shadow-xl"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-champagne-dark/40 bg-champagne-dark/10 px-3 py-1 text-[11px] font-semibold text-champagne-accent uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Segunda Opinião</span>
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-bold text-white font-sans">
                  Já possui cirurgia indicada por outro profissional?
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Envie o laudo de sua Ressonância Magnética para reavaliação criteriosa de indicação operatória pelo Dr. Adher Leonardo.
                </p>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">Reavaliação Expressa:</div>
                  <div className="mt-0.5">Conferência minuciosa de lesões parciais vs. transfixantes.</div>
                </div>
              </div>

              <a
                href="#triagem"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-champagne-accent to-champagne-light py-2.5 px-4 text-xs font-bold text-slate-950 shadow-md hover:scale-[1.015] active:scale-[0.985] transition-transform"
              >
                <span>Solicitar Segunda Opinião</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-950" />
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PathologyBentoGrid;
