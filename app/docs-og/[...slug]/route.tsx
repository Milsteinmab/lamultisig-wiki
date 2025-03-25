import { generateOGImage } from "fumadocs-ui/og";
import { metadataImage } from "../../../lib/metadata";

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: "La Multisig | Web3 Knowledge Hub",
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
