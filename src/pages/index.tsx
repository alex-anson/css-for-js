// Libs
import Head from "next/head";
import { Manrope } from "next/font/google";

// Local
import styles from "@/styles/Home.module.css";
import { HorizontalLine } from "@/atoms/HorizontalLine";

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
        {/* move header to a Layout.tsx file, add to _app.tsx */}
        <header>
          <div className={styles.headerDiv}>
            <h1 className={styles.header_h1}>&nbsp;Fun with CSS 🔮</h1>
          </div>
          <HorizontalLine />
        </header>
        put buttons to each module here. TODO:
      </main>
      {/* TODO: move to Layout.tsx */}
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
