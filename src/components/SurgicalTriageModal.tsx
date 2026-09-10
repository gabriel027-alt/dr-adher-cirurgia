"use client";

import React, { useState } from "react";
import { ShieldCheck, ChevronRight, ArrowLeft, Send, Activity, FileSearch, FileCheck } from "lucide-react";

interface TriageState {
  joint: string;
  condition: string;
  hasMri: string;
  name: string;
  isSecondOpinion: boolean;
  mriSummary: string;
}

export default function SurgicalTriageModal() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<TriageState>({
    joint: "",
    condition: "",
    hasMri: "",
    name: "",
    isSecondOpinion: false,
    mriSummary: "",
  });

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5538988061551";
    
    // Disparo de Analytics / GTM DataLayer
    if (typeof window !== "undefined") {
      const w = window as any;
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "conversion_lead_cirurgico",
          joint: data.joint,
          condition: data.condition,
          isSecondOpinion: data.isSecondOpinion,
          hasMri: data.hasMri,
        });
      }
    }

    const secondOpinionText = data.isSecondOpinion 
      ? `\n*Tipo de Atendimento:* Segunda Opinião Cirúrgica Expressa`
      : "";
    const mriDetails = data.mriSummary.trim()
      ? `\n*Detalhes do Laudo / Exame:* ${data.mriSummary.trim()}`
      : "";
    const mriAttachment = data.hasMri.includes("Sim, possuo exames recentes")
      ? `\n• *Documentos:* Laudo/Imagens de Ressonância Magnética prontos para envio.`
      : "";

    const text = encodeURIComponent(
      `Olá! Gostaria de agendar avaliação com o Dr. Adher Leonardo na Clínica Articulare.\n\n` +
      `*Paciente:* ${data.name}\n` +
      `*Articulação:* ${data.joint}\n` +
      `*Quadro atual:* ${data.condition}\n` +
      `*Possui Ressonância:* ${data.hasMri}` +
      secondOpinionText +
      mriDetails +
      mriAttachment +
      `\n\n[Origem: site_institucional | triagem_cirurgica]`
    );
    window.open(`https://wa.me/${phone}?text=${text}&utm_source=site_institucional&utm_campaign=triagem_cirurgica`, "_blank");
  };

  return (
    <section id="triagem" className="py-20 bg-[#070a10] border-y border-slate-850 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" /> Triagem Especializada de Articulação
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-serif">
            Agendamento Qualificado &amp; Segunda Opinião Cirúrgica
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Preencha os dados do seu quadro articular para direcionamento prioritário à equipe de acolhimento da Clínica Articulare.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-850 pb-4">
            <span className="text-xs font-medium text-slate-400">Etapa {step} de 4</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s <= step ? "w-8 bg-sky-500" : "w-4 bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Passo 1: Articulação */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Qual articulação necessita de atenção clínica?</h3>
              <p className="text-xs text-slate-400 mb-4">Selecione a região anatômica acometida:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Ombro", desc: "Manguito Rotador, Luxação Recidivante, Bursite, Instabilidade de Bankart" },
                  { title: "Joelho", desc: "Ligamento Cruzado (LCA), Menisco, Condropatias, Instabilidade Rotacional" },
                ].map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => {
                      setData({ ...data, joint: item.title });
                      setStep(2);
                    }}
                    className="flex flex-col p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-sky-500/60 hover:bg-slate-900 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-white text-base group-hover:text-sky-300 transition-colors">{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Passo 2: Condição Atual */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Qual a sua situação clínica no momento?</h3>
              <p className="text-xs text-slate-400 mb-4">Isso auxilia na priorização do tempo cirúrgico:</p>
              <div className="space-y-2.5">
                {[
                  { label: "Já possuo indicação cirúrgica com outro médico e busco 2ª Opinião", isSecond: true },
                  { label: "Dor persistente sem melhora com medicamentos, bloqueios ou fisioterapia", isSecond: false },
                  { label: "Sofri entorse / trauma recente com inchaço, estalido ou perda de força", isSecond: false },
                  { label: "Sensação de falseio ou instabilidade recorrente (articulação saindo do lugar)", isSecond: false },
                ].map((cond, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setData({ ...data, condition: cond.label, isSecondOpinion: cond.isSecond });
                      setStep(3);
                    }}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                      cond.isSecond
                        ? "border-champagne-dark/50 bg-champagne-dark/10 text-champagne-light hover:border-champagne-accent hover:bg-champagne-dark/20"
                        : "border-slate-800 bg-slate-900/80 hover:border-sky-500/60 hover:bg-slate-900 text-slate-200"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {cond.isSecond && <FileCheck className="w-4 h-4 text-champagne-accent shrink-0" />}
                      <span>{cond.label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Voltar
              </button>
            </div>
          )}

          {/* Passo 3: Exames de Imagem */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Você já realizou Ressonância Magnética ou Raio-X?</h3>
              <p className="text-xs text-slate-400 mb-4">A análise das imagens é determinante para o diagnóstico do Dr. Adher Leonardo:</p>
              <div className="space-y-2.5">
                {[
                  "Sim, possuo exames recentes em mãos (menos de 6 meses)",
                  "Sim, mas foram realizados há mais de 6 meses",
                  "Não realizei nenhum exame de imagem ainda",
                ].map((mri, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setData({ ...data, hasMri: mri });
                      setStep(4);
                    }}
                    className="w-full p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-sky-500/60 hover:bg-slate-900 text-left text-sm text-slate-200 transition-all flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <FileSearch className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{mri}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Voltar
              </button>
            </div>
          )}

          {/* Passo 4: Nome, Laudo de RM opcional e Envio Direto ao WhatsApp */}
          {step === 4 && (
            <form onSubmit={handleFinish}>
              <h3 className="text-lg font-semibold text-white mb-1">Finalizar Triagem Médica</h3>
              <p className="text-xs text-slate-400 mb-4">
                Seus dados serão encaminhados com prioridade à recepção da Clínica Articulare.
              </p>

              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nome Completo do Paciente *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                />
              </div>

              {/* Campo para laudo de ressonância ou observação para 2ª opinião */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {data.isSecondOpinion 
                    ? "Descreva resumidamente o diagnóstico prévio ou laudo da RM (Opcional)"
                    : "Resumo do laudo da Ressonância / Sintomas adicionais (Opcional)"}
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ruptura transfixante do supraespinal / Ruptura completa do LCA"
                  value={data.mriSummary}
                  onChange={(e) => setData({ ...data, mriSummary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/70 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs"
                />
              </div>

              {/* Resumo da Triagem */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 text-xs text-slate-300 space-y-1">
                <div><strong>Região:</strong> {data.joint}</div>
                <div><strong>Condição:</strong> {data.condition}</div>
                <div><strong>Exame de Imagem:</strong> {data.hasMri}</div>
                {data.hasMri.includes("Sim, possuo exames recentes") && (
                  <div className="text-sky-300 font-medium pt-1 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/40 text-sky-400">Anexo Automático</span>
                    <span>Laudo de RM pré-anexado para envio à recepção</span>
                  </div>
                )}
                {data.isSecondOpinion && (
                  <div className="text-champagne-accent font-semibold pt-1 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-champagne-dark/30 border border-champagne-dark/40">2ª Opinião</span>
                    <span>Triagem classificada como Segunda Opinião Cirúrgica Prioritária</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 font-bold text-slate-950 text-sm hover:from-sky-400 hover:to-teal-400 transition-all duration-200 shadow-lg shadow-sky-500/20 hover:scale-[1.015] active:scale-[0.985]"
              >
                <Send className="w-4 h-4" /> Enviar Triagem à Equipe do Dr. Adher
              </button>
              
              <button
                type="button"
                onClick={() => setStep(3)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Corrigir informações
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Dr. Adher Leonardo Leite Moura • CRM-MG 36.233 • RQE 11.269
            </span>
            <span>Clínica Articulare • Montes Claros - MG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
