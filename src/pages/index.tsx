import Head from "next/head";
import { Manrope } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HorizontalLine } from "@/atoms/HorizontalLine";
import { MaxWidthWrapperSection } from "@/components/maxWidthWrapperSection";

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
          <h1 className={styles.header_h1}>Fun with CSS. 🔮</h1>
        </header>
        <HorizontalLine />
        <MaxWidthWrapperSection />
      </main>
    </>
  );
}
