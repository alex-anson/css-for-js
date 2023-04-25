/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

import { Shoe } from "./types";

// Media
import techChal from "../../public/sole-and-ankle/tech-challenge.jpg";
import metcon from "../../public/sole-and-ankle/metcon-5.jpg";
import phantom from "../../public/sole-and-ankle/phantom.jpg";
import pegasus from "../../public/sole-and-ankle/pegasus.jpg";
import joyride from "../../public/sole-and-ankle/joyride.jpg";
import legend from "../../public/sole-and-ankle/legend-academy.jpg";
import reactInf from "../../public/sole-and-ankle/react-infinity.jpg";
import flyknit from "../../public/sole-and-ankle/phantom-flyknit.jpg";
import lebron from "../../public/sole-and-ankle/lebron.jpg";

const SHOES: Shoe[] = [
  {
    slug: "tech-challenge",
    name: "NikeCourt Tech Challenge 20",
    imageSrc: techChal,
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: "metcon-5",
    name: "Nike Metcon 5 AMP",
    imageSrc: metcon,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: "phantom",
    name: "Nike Phantom Vision",
    imageSrc: phantom,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: "pegasus",
    name: "Nike Air Zoom Pegasus",
    imageSrc: pegasus,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: "joyride",
    name: "Nike Joyride Dual Run",
    imageSrc: joyride,
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: "legend-academy",
    name: "Nike Tiempo Legend 8",
    imageSrc: legend,
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: "react-infinity",
    name: "Nike React Infinity Pro",
    imageSrc: reactInf,
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: "phantom-flyknit",
    name: "Nike React Phantom Run Flyknit 2",
    imageSrc: flyknit,
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
  {
    slug: "lebron",
    name: "LeBron 17",
    imageSrc: lebron,
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
  },
];

export default SHOES;
