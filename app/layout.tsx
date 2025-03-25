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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
