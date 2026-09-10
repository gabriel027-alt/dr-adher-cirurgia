"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorContent from "@/data/doctorContent";
import { FaqItem } from "@/schemas/doctorSchema";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export const SurgicalFaq: React.FC = () => {
  const { faq, doctor } = doctorContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-20 lg:py-28 bg-slate-950/50 border-t border-slate-850">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 backdrop-blur-md">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Esclarecimentos Clínicos</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-serif">
            Perguntas Frequentes sobre os Procedimentos
          </h2>

          <p className="mt-3 text-base text-slate-300">
            Respostas detalhadas sobre anestesia, recuperação, âncoras e segurança cirúrgica.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faq.map((item: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-sky-500/40 bg-slate-900/80 shadow-lg shadow-sky-500/5"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sky-400"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="border-t border-slate-800/80 px-5 pb-6 pt-4 sm:px-6">
                        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional question footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Possui exames recentes ou uma indicação cirúrgica prévia para avaliar?
          </p>
          <a
            href={doctor.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar com a recepção da Clínica Articulare via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurgicalFaq;
