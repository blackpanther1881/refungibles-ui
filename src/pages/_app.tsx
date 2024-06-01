import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/components.css";
import "../components/base/dropdown/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Refungibles</title>
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
};

export default MyApp;
