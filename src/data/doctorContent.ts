import { DoctorContent, DoctorContentSchema } from "@/schemas/doctorSchema";

const rawDoctorContent = {
  doctor: {
    name: "Dr. Adher Leonardo Leite Moura",
    crm: "CRM-MG 36.233",
    rqe: "RQE 11.269",
    clinicName: "Clínica Articulare",
    address: "Av. Dr. João Chaves, 188 - Jardim São Luiz, Montes Claros - MG",
    hospitals: "Hospital Aroldo Tourinho / Santa Casa de Montes Claros",
    title: "Especialista em Ortopedia, Artroscopia e Cirurgia de Ombro e Joelho",
    bio: "Cirurgião ortopedista com sólida formação dedicada a procedimentos minimamente invasivos, artroscopia articular e reconstruções complexas de ombro e joelho. Atua com padrão de excelência clínica e cirúrgica na Clínica Articulare em Montes Claros - MG, com intervenções cirúrgicas no Hospital Aroldo Tourinho e Santa Casa, priorizando a restituição anatômica precisa, controle álgico pós-operatório avançado e retorno funcional acelerado dos pacientes.",
    whatsappNumber: "(38) 98806-1551",
    whatsappUrl:
      "https://wa.me/5538988061551?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20cir%C3%BArgica%20com%20o%20Dr.%20Adher%20Leonardo",
  },
  hero: {
    badge: "Especialista em Ombro & Joelho • CRM-MG 36.233 • RQE 11.269",
    headline: "Cirurgia Articular Avançada para Restauração Biomecânica de Ombro e Joelho",
    subheadline:
      "Tratamento cirúrgico especializado e minimamente invasivo para lesões do manguito rotador, luxação recidivante, instabilidade articular, meniscos e ligamento cruzado anterior (LCA).",
    ctaPrimaryText: "Agendar Avaliação Cirúrgica",
    ctaSecondaryText: "Conhecer Patologias Tratadas",
    surgeryFocus: [
      "Artroscopia de Ombro & Joelho",
      "Reparo do Manguito Rotador com Âncoras",
      "Reconstrução Anatômica do LCA",
      "Instabilidade de Bankart & Hill-Sachs",
      "Sutura & Preservação Meniscal",
    ],
  },
  pathologyGrid: [
    {
      id: "manguito-rotador",
      joint: "Ombro",
      title: "Reparo Artroscópico do Manguito Rotador",
      indication:
        "Rupturas parciais ou completas dos tendões supraespinal, infraespinal ou subescapular causadas por sobrecarga crônica ou trauma, com dor noturna e fraqueza para elevação do braço.",
      techniqueDescription:
        "Reinserção tendinosa anatômica com âncoras biocompativeis e sutura com fios de ultra-resistência (UHMWPE) por vídeo-artroscopia milimétrica, sem lesão da musculatura sadia.",
      recoveryTime:
        "Tipóia de proteção de 4 a 6 semanas, seguida de reabilitação fisioterapêutica progressiva e fortalecimento orientado.",
      tag: "Artroscopia de Alta Precisão",
    },
    {
      id: "bankart-hill-sachs",
      joint: "Ombro",
      title: "Instabilidade Anterior & Luxação Recidivante",
      indication:
        "Episódios repetidos de luxação do ombro ('ombro saindo do lugar'), frequentemente associados à lesão labral de Bankart e/ou lesão óssea de Hill-Sachs no úmero.",
      techniqueDescription:
        "Reancoragem labral artroscópica (Reparo de Bankart) e, se necessário, preenchimento do defeito de Hill-Sachs (Remplissage) para restabelecer a estabilidade articular completa.",
      recoveryTime:
        "Imobilização temporária por 4 semanas, ganho progressivo de amplitude e retorno a esportes de contato em cerca de 6 meses.",
      tag: "Estabilidade Articular",
    },
    {
      id: "reconstrucao-lca",
      joint: "Joelho",
      title: "Reconstrução Anatômica do Ligamento Cruzado Anterior (LCA)",
      indication:
        "Ruptura ligamentar decorrente de entorse esportiva com estalido e instabilidade rotacional ('falseio' ao mudar de direção no joelho).",
      techniqueDescription:
        "Reconstrução artroscópica anatômica com enxerto tendinoso autólogo e fixação estável com dispositivos corticais e parafusos de interferência milimétricos.",
      recoveryTime:
        "Apoio precoce com muletas nas primeiras semanas, ganho de extensão imediato, trote aos 4-5 meses e retorno pleno aos pivôs esportivos em 9 meses.",
      tag: "Retorno Esportivo Seguro",
    },
    {
      id: "lesoes-meniscais",
      joint: "Joelho",
      title: "Artroscopia & Sutura e Preservação Meniscal",
      indication:
        "Lesões traumáticas ou degenerativas nos meniscos medial ou lateral, gerando bloqueio articular, inchaço recorrente e dor localizada na interlinha.",
      techniqueDescription:
        "Prioridade clínica em sutura meniscal ('all-inside' / 'inside-out') para preservação do amortecedor natural da cartilagem; meniscectomia parcial econômica quando o reparo biológico não for viável.",
      recoveryTime:
        "Recuperação rápida; carga protegida nas primeiras semanas em casos de sutura para cicatrização segura do tecido fibrocartilaginoso.",
      tag: "Preservação da Cartilagem",
    },
    {
      id: "condropatias-artrose",
      joint: "Joelho",
      title: "Tratamento de Condropatias & Artrose Articular",
      indication:
        "Desgaste e erosão da cartilagem patelofemoral e tibiofemoral, estalidos dolorosos ao agachar e rigidez matinal limitante.",
      techniqueDescription:
        "Desbridamento biológico e condroplastia artroscópica, associados a terapias de viscossuplementação com ácido hialurônico de alta viscosidade.",
      recoveryTime:
        "Alívio álgico substancial, retorno às atividades de baixo impacto e fortalecimento neuromuscular orientado em fisioterapia.",
      tag: "Terapias Biológicas",
    },
    {
      id: "impacto-subacromial",
      joint: "Ombro",
      title: "Síndrome do Impacto & Capsulite Adesiva",
      indication:
        "Dor em arco de movimento por atrito acromial ou rigidez severa na cápsula articular do ombro refratária ao tratamento medicamentoso e fisioterapêutico inicial.",
      techniqueDescription:
        "Descompressão subacromial artroscópica e acromioplastia, ou liberação capsular seletiva de 360 graus para descompressão imediata.",
      recoveryTime:
        "Início imediato da fisioterapia motora nas primeiras 24h para consolidação do arco de movimento recuperado.",
      tag: "Descompressão Articular",
    },
  ],
  clinicAuthority: {
    title: "Referência em Cirurgia Articular na Clínica Articulare",
    subtitle:
      "Atendimento médico cirúrgico fundamentado em diagnóstico por imagem de alta definição, tecnologia artroscópica moderna e foco estrito na recuperação funcional da sua articulação.",
    stats: [
      {
        number: "Cirurgia Articular",
        label: "Especialista em Ombro e Joelho",
      },
      {
        number: "CRM-MG 36.233",
        label: "RQE 11.269 (Ortopedia)",
      },
      {
        number: "Vídeo-Artroscopia",
        label: "Procedimentos Minimamente Invasivos",
      },
      {
        number: "Clínica Articulare",
        label: "Jardim São Luiz - Montes Claros",
      },
    ],
    scheduleNotice: {
      title: "Grade de Atendimento Ambulatorial",
      badge: "Clínica Articulare • Montes Claros - MG",
      description:
        "Consultas cirúrgicas eletivas, segundas opiniões e avaliações de exames de imagem realizadas presencialmente na Clínica Articulare nos seguintes turnos:",
      days: [
        {
          day: "Segunda-feira",
          period: "Tarde (13:30 às 18:00)",
        },
        {
          day: "Terça-feira",
          period: "Manhã e Tarde (08:00 às 18:00)",
        },
        {
          day: "Quarta-feira",
          period: "Manhã (08:00 às 12:00)",
        },
        {
          day: "Sexta-feira",
          period: "Manhã (08:00 às 12:00)",
        },
      ],
      location: "Clínica Articulare",
      address: "Av. Dr. João Chaves, 188 - Jardim São Luiz, Montes Claros - MG (Atendimento Presencial com Agendamento Prévio)",
      particularNotice:
        "Atendimento com tempo estendido de consulta para exame físico biomecânico minucioso, conferência atenta das imagens de ressonância e explicação detalhada do plano terapêutico.",
      reimbursementNotice:
        "Suporte Completo ao Reembolso de Convênios: Disponibilizamos laudos cirúrgicos completos, codificação da tabela TUSS e documentação para você solicitar o reembolso das consultas e honorários à sua operadora de saúde.",
      ctaText: "Consultar Horários e Agendar na Recepção",
    },
  },
  faq: [
    {
      question: "Como funciona a cirurgia por artroscopia de ombro e joelho?",
      answer:
        "A artroscopia é uma cirurgia minimamente invasiva na qual uma microcâmera de fibra óptica e instrumentos cirúrgicos milimétricos são inseridos na articulação por pequenos portais (incisões de cerca de 0,5 cm). O cirurgião visualiza todas as estruturas anatômicas em telas de alta definição com aumento de até 10 vezes, permitindo reparar tendões, ligamentos e cartilagens com âncoras biocompativeis sem cortes musculares desnecessários, reduzindo o trauma cirúrgico, sangramento e a dor pós-operatória.",
    },
    {
      question: "Qual é a anestesia utilizada nos procedimentos cirúrgicos?",
      answer:
        "Utilizamos anestesia moderna e segura realizada por médicos anestesiologistas especializados. Frequentemente associamos bloqueios nervosos loco-regionais guiados por ultrassonografia com sedação profunda e tranquila. Isso significa que o paciente dorme com total conforto durante o procedimento e acorda sem dor, mantendo alívio prolongado pelas primeiras 24 horas pós-operatórias.",
    },
    {
      question: "O que são as âncoras de sutura aplicadas no Manguito Rotador e Bankart?",
      answer:
        "As âncoras cirúrgicas são microdispositivos biocompativeis ou bioabsorvíveis que são fixados ao osso. Elas contêm fios cirúrgicos de ultra-alta resistência que refixam o tendão ou lábio articular lesionado de volta à sua inserção óssea anatômica original, mantendo a fixação estável até que o corpo realize a cicatrização biológica completa.",
    },
    {
      question: "Quanto tempo dura o período de repouso e quando poderei trabalhar ou treinar?",
      answer:
        "O repouso varia conforme a patologia operada. Para manguito rotador e Bankart, utiliza-se tipóia estofada protetora por 4 a 6 semanas. Para LCA e sutura de menisco, utilizam-se muletas com apoio precoce orientado. Trabalhos em escritório ou computador geralmente podem ser retomados em 7 a 14 dias. A reabilitação fisioterapêutica inicia-se precocemente, com liberação esportiva gradual monitorada entre 4 e 9 meses.",
    },
    {
      question: "O Dr. Adher Leonardo atende convênios médicos ou apenas consultas particulares?",
      answer:
        "O atendimento ambulatorial e cirúrgico é prioritariamente particular, garantindo o tempo e a dedicação minuciosa que casos articulares complexos exigem. No entanto, prestamos total assessoria para o Reembolso Médico: emitimos relatório detalhado, recibo e códigos TUSS para que o paciente solicite o ressarcimento das consultas e cirurgias junto ao seu plano de saúde (Bradesco Saúde, SulAmérica, Amil, Unimed, Cassi, etc.). As despesas hospitalares podem ser cobertas pelo plano nos hospitais credenciados.",
    },
    {
      question: "Quais exames devo levar na primeira consulta presencial?",
      answer:
        "É fundamental trazer todos os exames recentes da articulação acometida, principalmente os exames de Ressonância Magnética (RM) — com os laudos e os arquivos de imagem em CD ou link de acesso digital —, além de Radiografias (RX) e Ultrassonografias prévias. A análise direta das imagens pelo Dr. Adher Leonardo é determinante para o diagnóstico de precisão.",
    },
  ],
  surgicalProtocol: [
    {
      stepNumber: 1,
      title: "Consulta Especializada & Avaliação de Imagem",
      description:
        "Exame físico ortopédico aprofundado, manobras biomecânicas específicas para ombro e joelho e análise detalhada dos exames de ressonância magnética.",
    },
    {
      stepNumber: 2,
      title: "Planejamento Cirúrgico 3D & Biomecânico",
      description:
        "Definição milimétrica da técnica operatória, seleção de âncoras biocompativeis ou enxertos tendinosos e alinhamento dos objetivos de recuperação do paciente.",
    },
    {
      stepNumber: 3,
      title: "Procedimento Artroscópico Minimamente Invasivo",
      description:
        "Cirurgia realizada em ambiente hospitalar de ponta, com vídeo em alta definição, anestesia com bloqueio loco-regional e preservação máxima dos tecidos nobres.",
    },
    {
      stepNumber: 4,
      title: "Reabilitação Fisioterapêutica Integrada",
      description:
        "Protocolo pós-operatório estruturado em comunicação contínua com a equipe de fisioterapia, com reavaliações periódicas até a alta definitiva e retorno às atividades plenas.",
    },
  ],
  footer: {
    legalNotice:
      "Em conformidade com a Resolução CFM nº 2.336/2023 e o Código de Ética Médica: As informações disponibilizadas neste portal possuem finalidade estritamente orientativa e educativa. A indicação de qualquer procedimento cirúrgico ou plano terapêutico depende impreterivelmente de consulta médica presencial, anamnese detalhada, exame físico biomecânico e análise criteriosa de exames complementares de imagem. Imagens, diagramas e ilustrações têm caráter didático e não constituem garantia de resultados ou desfechos clínicos individuais.",
    crmDisclaimer:
      "Diretor Técnico / Responsável Médico: Dr. Adher Leonardo Leite Moura • CRM-MG 36.233 • RQE 11.269 (Especialista em Ortopedia e Traumatologia)",
    location:
      "Clínica Articulare • Av. Dr. João Chaves, 188 - Jardim São Luiz, Montes Claros - MG",
    copyright:
      `© ${new Date().getFullYear()} Dr. Adher Leonardo Leite Moura. Todos os direitos reservados. Clínica Articulare.`,
  },
};

// Strict Zod parsing ensures at runtime and compile time that data matches the schema
export const doctorContent: DoctorContent = DoctorContentSchema.parse(rawDoctorContent);
export default doctorContent;
