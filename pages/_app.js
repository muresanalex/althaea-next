import { Roboto } from "@next/font/google";
import Script from "next/script";
import "../styles/general.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
      <Script strategy="lazyOnload" id="ga">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
