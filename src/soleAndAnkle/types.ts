import { StaticImageData } from "next/image";

export interface Shoe {
  slug: string;
  name: string;
  imageSrc: StaticImageData;
  price: number;
  salePrice: number | null;
  releaseDate: number;
  numOfColors: number;
}
