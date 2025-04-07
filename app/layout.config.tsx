import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="h-8">
        <Image
          src="/la_multisig.png"
          alt="La Multisig Logo"
          width={120}
          height={32}
          priority
          className="h-full w-auto"
        />
      </div>
    ),
  },
  links: [
    {
      icon: <BookIcon />,
      text: "Wiki",
      url: "/docs",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/La-Multisig/lamultisig-wiki",
};
