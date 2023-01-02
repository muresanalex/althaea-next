import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const MOBILE_VIEW_SCREEN_SIZE = 978;

export default function Home() {
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
        <title>Farmacia Althaea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isMobileView={isMobileView} />
      <main>
        <Hero isMobileView={isMobileView} />
      </main>
    </>
  );
}
