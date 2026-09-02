import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlo Gennaro — Sviluppatore software",
  description:
    "Sviluppatore software specializzato in applicazioni web e mobile, backend e integrazioni.",
  applicationName: "Carlo Gennaro",
  authors: [{ name: "Carlo Gennaro" }],
  creator: "Carlo Gennaro",
  openGraph: {
    type: "website",
    title: "Carlo Gennaro — Sviluppatore software",
    description:
      "Sviluppo di applicazioni web e mobile, dall’idea al rilascio.",
    siteName: "Carlo Gennaro",
  },
  twitter: {
    card: "summary",
    title: "Carlo Gennaro — Sviluppatore software",
    description:
      "Sviluppo di applicazioni web e mobile, dall’idea al rilascio.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
