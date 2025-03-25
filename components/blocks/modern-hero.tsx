import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface HeroSection {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const HeroSection = ({
  heading = "Tu puerta de entrada a Web3",
  description = "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  reviews = {
    count: 200,
    avatars: [
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: HeroSection) => {
  return (
    <section className="py-32">
      {/* Purple glow */}
      <div className="absolute -left-[40%] top-[5%] h-[60vh] w-[50vw] rounded-full bg-purple-500/30 blur-[120px]" />

      {/* Green glow */}
      <div className="absolute -right-[40%] bottom-[5%] h-[60vh] w-[50vw] rounded-full bg-green-400/30 blur-[120px]" />

      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>

        <Button asChild variant="outline" size="lg">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground"
            href="https://forms.gle/TZQn5UM4xs1eiR6G8"
          >
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

            <span className="text-muted-foreground">+5K miembros</span>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
