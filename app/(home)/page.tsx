import HeroSection from "@/components/blocks/modern-hero";

const data = {
  heading: "Tu puerta de entrada a Web3",
  description:
    "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  button: {
    text: "Ir a la wiki",
    url: "/docs",
  },
  reviews: {
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
};

export default function Hero7Demo() {
  return <HeroSection {...data} />;
}
