"use client";
 
import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Grid cirúrgico com pulsação de feixe horizontal */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="surgical-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.75" />
            <circle cx="64" cy="64" r="1" fill="rgba(56, 189, 248, 0.35)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#surgical-grid)" />
      </svg>

      {/* Foco Cirúrgico Principal (Luz Cialítica Direcionada com respiração lenta) */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full blur-[140px] opacity-25 mix-blend-screen animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(20,184,166,0.15) 45%, transparent 70%)',
          animationDuration: '9s'
        }}
      />

      {/* Feixe Lateral Articular (Drift orgânico de profundidade) */}
      <div 
        className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(203,178,106,0.25) 0%, rgba(14,165,233,0.1) 50%, transparent 70%)',
          animation: 'floatSlow 16s ease-in-out infinite alternate'
        }}
      />

      {/* Feixe Inferior de Estabilidade */}
      <div 
        className="absolute bottom-[5%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, rgba(15,23,42,0.8) 60%, transparent 80%)',
          animation: 'floatSlow 20s ease-in-out infinite alternate-reverse'
        }}
      />

      {/* Linha de Varredura Laser de Precisão (Surgical Scan Line) */}
      <div 
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/25 to-transparent opacity-60"
        style={{
          animation: 'scanDown 14s linear infinite'
        }}
      />

      {/* Ruído Analógico Tátil */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default AmbientBackground;
