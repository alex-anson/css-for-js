// Libs
import Head from "next/head";
import { Manrope } from "next/font/google";

// Local
import { HorizontalLine } from "@/atoms/HorizontalLine";
import { MaxWidthWrapperSection } from "@/components/MaxWidthWrapperSection";

// Styles
import styles from "@/styles/Home.module.css";
import { Petals } from "@/atoms/Petals";
import { CardVersion1 } from "@/components/CardVersion1";
import { CenterAbsolutePositioning } from "@/components/CenterAbsolutePositioning";
import { BubbleBorder } from "@/components/BubbleBorder";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS Snippets/Playground</title>
        <meta name="description" content="alex's CSS playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={manrope.className}>
        <header className={styles.header}>
          <h1 className={styles.header_h1}>&nbsp;Fun with CSS 🔮</h1>
        </header>
        <HorizontalLine />
        <MaxWidthWrapperSection />
        <Petals petalSize={80} />
        <CardVersion1 />
        <CenterAbsolutePositioning />
        <BubbleBorder />
      </main>
    </>
  );
}
