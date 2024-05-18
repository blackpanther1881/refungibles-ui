import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Persistence App</title>s
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
};

export default MyApp;
