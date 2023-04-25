// Libs
import { Manrope } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

// Local
import styles from "@/styles/Home.module.css";
import { HorizontalLine } from "@/atoms/HorizontalLine";
import GlobalStyles from "@/soleAndAnkle/components/GlobalStyles";

const manrope = Manrope({ subsets: ["latin"] });

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const { pathname } = router;
  const displayHomeBtn = pathname !== "/";

  // #region special flexbox routes
  if (pathname === "/holy-grail-layout") {
    return (
      <>
        <Head>
          <title>CSS Snippets/Playground</title>
          <meta name="description" content="alex's CSS playground" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {props.children}
      </>
    );
  }

  if (pathname === "/sticky-sidebar") {
    return (
      <>
        <Head>
          <title>CSS Snippets/Playground</title>
          <meta name="description" content="alex's CSS playground" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={manrope.className}>
          <div className={styles.headerDiv}>
            <h1 className={styles.headerDiv_h1}>&nbsp;Fun with CSS 🔮</h1>
          </div>
          <HorizontalLine />
        </header>
        {props.children}
        <footer className={manrope.className}>
          <HorizontalLine />
          <div>
            <span>🔥</span>
            <p>alex&#39;s playground</p>
          </div>
        </footer>
      </>
    );
  }

  if (pathname === "/module-four-workshop") {
    return (
      <>
        <Head>
          <title>CSS Snippets/Playground</title>
          <meta name="description" content="alex's CSS playground" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
        <GlobalStyles />
      </>
    );
  }
  // #endregion special flexbox routes

  return (
    <>
      <Head>
        <title>CSS Snippets/Playground</title>
        <meta name="description" content="alex's CSS playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={manrope.className}>
        <div className={styles.headerDiv}>
          <h1 className={styles.headerDiv_h1}>&nbsp;Fun with CSS 🔮</h1>
        </div>
        <HorizontalLine />
      </header>
      <XMain className={`${manrope.className}`}>
        {displayHomeBtn && (
          <SCLink href="/">
            <HomeDiv>
              <HomeP>✨ home</HomeP>
            </HomeDiv>
          </SCLink>
        )}
        {props.children}
      </XMain>
      <footer className={manrope.className}>
        <HorizontalLine />
        <div>
          <span>🔥</span>
          <p>alex&#39;s playground</p>
        </div>
      </footer>
    </>
  );
}

const XMain = styled.main`
  position: relative;
`;

const SCLink = styled(Link)`
  position: sticky;
  top: 32px;
  left: 12px;

  text-decoration: none;
  z-index: 10;
`;

const HomeDiv = styled.div`
  /* so clickable portion doesn't run full screen width */
  display: inline-block;
  border: 1px solid hsl(0, 0%, 25%);
  /* seems more optically aligned with less padding on left than on the right */
  padding: 12px 16px 12px 12px;
  border-radius: ${12 / 16}rem;
  color: var(--color-primaryLight);
  background-color: rgba(34, 34, 34, 0.96);
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    border-color: hsl(0, 0%, 40%);
    background-color: rgba(25, 25, 25, 0.96);
  }
`;

const HomeP = styled.p`
  font-size: ${20 / 16}rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;
