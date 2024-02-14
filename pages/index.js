import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Homeopathy from "../components/homeopathy/Homeopathy";
import Contact from "../components/contact/Contact";
import Qa from "../components/qa/Qa";
import Footer from "../components/footer/Footer";
import CookieConsent from "react-cookie-consent";

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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Farmacia Althaea din Bistrița este locul perfect pentru a găsi soluții homeopate pentru problemele dumneavoastră de sănătate."
        />
        <title>Farmacia Althaea - medicamente homeopate in Bistrița</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isMobileView={isMobileView} />
      <main>
        <Hero isMobileView={isMobileView} />
        <About />
        <Homeopathy />
        <Qa isMobileView={isMobileView} />
        <Contact />
      </main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="De acord"
        cookieName="consentCookie"
        style={{ background: "var(--grey)" }}
        buttonStyle={{
          color: "white",
          background: "var(--secondary)",
          fontSize: "14px",
        }}
        expires={150}
        onAccept={() => window.location.reload()}
      >
        Website-ul nostru utilizează cookie-uri pentru a vă oferi o experiență
        online personalizată.
      </CookieConsent>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
