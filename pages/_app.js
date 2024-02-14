import { Roboto } from "@next/font/google";
import GoogleAnalytics from "../components/googleAnalytics/GoogleAnalytics";
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
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
