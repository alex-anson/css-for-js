// Libs
import type { AppProps } from "next/app";

// Local
import "@/styles/globals.css";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
