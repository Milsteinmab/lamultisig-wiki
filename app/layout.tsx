import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "La Multisig | Web3 Knowledge Hub",
  description:
    "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  openGraph: {
    type: "website",
    url: "https://lamultisig.xyz",
    title: "La Multisig | Web3 Knowledge Hub",
    description:
      "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        {/* Purple glow */}
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

        {/* Green glow */}
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 translate-y-0 rounded-full bg-green-400/20 blur-[120px]" />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
