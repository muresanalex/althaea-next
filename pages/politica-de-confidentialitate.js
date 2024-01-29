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
