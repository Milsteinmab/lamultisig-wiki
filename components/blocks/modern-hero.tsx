import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-12 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{avatar.alt.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">+5K</div>
            <p className="text-left font-medium text-muted-foreground">
              miembros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
