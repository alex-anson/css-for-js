// #region Imports
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
import { BreadcrumbType, Breadcrumbs } from "@/actualComponents/Breadcrumbs";
import { ButtonTable } from "@/compositions/buttonModule3";
import { ButtonLevelsTable } from "@/compositions/buttonModule3";
import SupportTicketModal from "@/components/SupportTicketModal";
import MiniComponentLibrary from "@/compositions/workshopMod3-miniComponentLib/MiniComponentLibrary";
import FlexboxFacebook from "@/components/FlexboxFacebook";
import FlexWrapLayout from "@/components/FlexWrapLayout";
import FlexPhotoViewer from "@/actualComponents/FlexPhotoViewer";
import TableOfContents from "@/components/TableOfContents";
// #endregion Imports

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
        <Breadcrumbs
          crumbs={getBreadcrumbs()}
          lastBreadcrumb="Sectionals"
          handleClick={(text) => console.log(`clicked ${text}`)}
        />
        <ButtonTable />
        <ButtonLevelsTable />
        <SupportTicketModal />

        <HorizontalLine styles={{ marginTop: "6rem" }} />
        <MiniComponentLibrary />
        <HorizontalLine styles={{ marginBottom: "4rem" }} />

        <FlexboxFacebook />
        <FlexWrapLayout />
        <FlexPhotoViewer />
        <TableOfContents />
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

function getBreadcrumbs(): BreadcrumbType["crumbs"] {
  const crumbMap = new Map();
  crumbMap.set("Home", "#home");
  crumbMap.set("Living Room", "#home/living");
  crumbMap.set("Couches", "#home/living/couch");
  return crumbMap;
}
