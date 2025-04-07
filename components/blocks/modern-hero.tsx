import { Github, Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Balancer from "react-wrap-balancer";

interface HeroSection {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const HeroSection = ({
  heading = "Tu puerta de entrada a Web3",
  description = "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
}: HeroSection) => {
  return (
    <section className="relative py-32 h-full">
      {/* Purple glow */}
      <div className="pointer-events-none fixed -left-[40%] top-0 aspect-square w-[80%] rounded-full bg-purple-500/20 blur-[120px] md:-left-[15%] md:top-[20%] md:w-[35%] md:blur-[140px]" />

      {/* Green glow */}
      <div className="pointer-events-none fixed -right-[40%] top-1/2 aspect-square w-[80%] rounded-full bg-green-400/20 blur-[120px] md:-right-[15%] md:top-[60%] md:w-[35%] md:blur-[140px]" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            <Balancer>{heading}</Balancer>
          </h1>

          <p className="text-balance text-muted-foreground lg:text-lg">
            <Balancer>{description}</Balancer>
          </p>
        </div>

        <Button asChild variant="outline" size="lg">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground"
            href="https://github.com/La-Multisig/lamultisig-wiki/issues"
          >
            <Github />
            Proponer tópicos
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          className="mt-10 ml-4 bg-purple-800 text-white"
        >
          <Link href={button.url}>{button.text}</Link>
        </Button>

        <div>
          <Badge
            variant="outline"
            className="mx-auto mt-4 flex items-center gap-2 bg-black p-2"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star
                  key={index}
                  className="h-3 w-3 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <span className="text-muted-foreground">+3.6K miembros</span>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
