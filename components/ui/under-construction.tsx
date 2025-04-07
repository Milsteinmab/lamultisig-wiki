import { Card, Cards } from "fumadocs-ui/components/card";
import { Github, Hourglass } from "lucide-react";

export function UnderConstruction() {
  return (
    <Cards>
      <Card
        href="https://x.com/LaMultisig"
        title="Sección en construcción"
        icon={<Hourglass />}
      >
        Seguinos en Twitter para enterarte de las novedades.
      </Card>

      <Card
        href="https://github.com/La-Multisig/lamultisig-wiki/issues"
        title="Contruibuí a la wiki"
        icon={<Github />}
      >
        Crea un issue o un pull request para ayudarnos a mejorar la wiki.
      </Card>
    </Cards>
  );
}
