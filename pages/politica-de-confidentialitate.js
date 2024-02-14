import { useState, useEffect } from "react";

import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PrivacyPolicy from "../components/privacy-policy/PrivacyPolicy";

const MOBILE_VIEW_SCREEN_SIZE = 978;

export default function PrivacyPolicyPage() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleScreenSize() {
      setIsMobileView(window.innerWidth <= MOBILE_VIEW_SCREEN_SIZE);
    }

    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    window.addEventListener("orientationchange", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
      window.removeEventListener("orientationchange", handleScreenSize);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Politica de confidentialitate si protejarea datelor cu caracter personal."
        />
        <title>Farmacia Althaea - Politica de confidențialitate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isMobileView={isMobileView} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
