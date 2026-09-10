import type { Metadata, Viewport } from "next";
import "./globals.css";
import doctorContent from "@/data/doctorContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-dr-adher.vercel.app"),
  title: `${doctorContent.doctor.name} | Cirurgia de Ombro e Joelho • ${doctorContent.doctor.crm} • ${doctorContent.doctor.rqe}`,
  description: `${doctorContent.hero.subheadline} Atendimento presencial de excelência na Clínica Articulare em Montes Claros - MG.`,
  keywords: [
    "Dr. Adher Leonardo Leite Moura",
    "Ortopedista Montes Claros",
    "Cirurgia de Ombro Montes Claros",
    "Cirurgia de Joelho Montes Claros",
    "Manguito Rotador Artroscopia",
    "Reconstrução LCA",
    "Reparo de Bankart",
    "Clínica Articulare",
    "CRM-MG 36.233",
    "RQE 11.269",
    "Reembolso Cirúrgico",
  ],
  authors: [{ name: doctorContent.doctor.name }],
  robots: "index, follow",
  openGraph: {
    title: `${doctorContent.doctor.name} | Cirurgia de Ombro e Joelho • ${doctorContent.doctor.crm}`,
    description: doctorContent.hero.subheadline,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://site-dr-adher.vercel.app/dr-adher.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Adher Leonardo Leite Moura - Especialista em Cirurgia de Ombro e Joelho",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctorContent.doctor.name} | Cirurgia de Ombro e Joelho`,
    description: doctorContent.hero.subheadline,
    images: [
      {
        url: "https://site-dr-adher.vercel.app/dr-adher.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Adher Leonardo Leite Moura - Especialista em Cirurgia de Ombro e Joelho",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#070a10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  name: "Dr. Adher Leonardo Leite Moura",
  image: "https://site-dr-adher.vercel.app/dr-adher.jpg",
  medicalSpecialty: ["OrthopedicSurgery", "SportsMedicine"],
  telephone: "+55-38-98806-1551",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. João Chaves, 188",
    addressLocality: "Montes Claros",
    addressRegion: "MG",
    postalCode: "39401-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -16.7325,
    longitude: -43.8647,
  },
  memberOf: [
    {
      "@type": "MedicalOrganization",
      name: "Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)",
    },
  ],
  identifier: [
    { "@type": "PropertyValue", name: "CRM", value: "CRM-MG 36.233" },
    { "@type": "PropertyValue", name: "RQE", value: "11.269" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070a10] text-slate-100 min-h-screen antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
