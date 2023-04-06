// Libs
import Head from "next/head";
import { Manrope } from "next/font/google";

// Local
import styles from "@/styles/Home.module.css";
import { blockOne } from "@/utils/lorem.js";

import { HorizontalLine } from "@/atoms/HorizontalLine";
import { MaxWidthWrapperSection } from "@/components/MaxWidthWrapperSection";
import { Petals } from "@/atoms/Petals";
import { CardVersion1 } from "@/components/CardVersion1";
import { CenterAbsolutePositioning } from "@/components/CenterAbsolutePositioning";
import { BubbleBorder } from "@/components/BubbleBorder";
import { WatchEcommerce } from "@/components/WatchEcommerce";
import { TriangleBorder, TriangleLoremJSX } from "@/components/TriangleBorder";
import { RectangleBorder } from "@/components/RectangleBorder";
import { DecorativeBlobs } from "@/components/DecorativeBlobs";
import { SynergisticIncExample } from "@/components/SynergisticIncExample";
import { CardVersion2 } from "@/components/CardVersion2";
import { CardVersion3 } from "@/components/CardVersion3";
import { HorizontalOverflow } from "@/components/HorizontalOverflow";
import { StickyNav } from "@/components/StickyNav";
import { VisuallyHiddenExample } from "@/components/VisuallyHiddenExample";
import { SemanticHTML } from "@/components/SemanicHTML";
import { StyledComponentsCodeExample } from "@/components/StyledComponentsCodeExample";

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
        <header>
          <div className={styles.headerDiv}>
            <h1 className={styles.header_h1}>&nbsp;Fun with CSS 🔮</h1>
          </div>
          <HorizontalLine />
        </header>
        <MaxWidthWrapperSection />
        <Petals petalSize={80} />
        <CardVersion1 />
        <CenterAbsolutePositioning />
        <BubbleBorder>{{ content: blockOne }}</BubbleBorder>
        <TriangleBorder>{{ content: <TriangleLoremJSX /> }}</TriangleBorder>
        <RectangleBorder />
        <WatchEcommerce />
        <DecorativeBlobs />
        <SynergisticIncExample />
        <CardVersion2 />
        <CardVersion3 />
        <HorizontalOverflow />
        <StickyNav />
        <VisuallyHiddenExample />
        <SemanticHTML />
        <StyledComponentsCodeExample />
      </main>
      <footer>
        <HorizontalLine />
        <div>
          <span>🔥</span>
          <p>alex&#39;s playground</p>
        </div>
      </footer>
    </>
  );
}
