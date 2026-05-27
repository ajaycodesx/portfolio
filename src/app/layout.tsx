import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Renjith | Senior Full Stack Developer & Backend Architect",
  description: "Professional portfolio of Ajay Renjith, a Senior Full Stack Developer & Django Specialist. Crafting high-performance web applications, custom CRM/CMS portals, and interactive 3D frontend systems.",
  keywords: [
    "Ajay Renjith",
    "Full Stack Developer",
    "Backend Architect",
    "Django REST Framework Specialist",
    "React & Next.js Developer",
    "Python Developer",
    "VPS Infrastructure Hosting",
    "Docker Specialist",
    "CyberPanel & AAPanel",
    "Interactive 3D WebGL Portfolio",
    "Enterprise Software Engineer",
    "B2B SaaS Architecture"
  ],
  authors: [{ name: "Ajay Renjith" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  },
  alternates: {
    canonical: "https://ajayrenjith.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ajay Renjith | Senior Full Stack Developer & Django Specialist",
    description: "Explore the professional portfolio of Ajay Renjith. Specialized in high-scale backend architectures, Django REST Framework, Next.js, React, and interactive 3D WebGL user interfaces.",
    url: "https://ajayrenjith.dev",
    siteName: "Ajay Renjith - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Renjith | Senior Full Stack Developer & Backend Architect",
    description: "Immersive 3D portfolio showcasing high-performance web applications, interactive 3D React visuals, and backend architectures.",
    creator: "@ajayrenjith",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
