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
      value: "Vídeo Artroscopia",
      label: "Técnica Minimamente Invasiva",
      detail: "Preservação muscular e recuperação acelerada",
    },
    {
      value: "Aroldo Tourinho & Santa Casa",
      label: "Acreditação Hospitalar",
      detail: "UTI e centro cirúrgico de alta complexidade",
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
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}