import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eu o Leto - Portfolio",
  description: "Portfolio do desenvolvedor font-end Elielthon(Leto) Souza. Sinta-se a vontade para enviar uma proposta.",
};

const font = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
