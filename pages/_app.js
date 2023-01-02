import { Roboto } from "@next/font/google";
import "../styles/general.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
