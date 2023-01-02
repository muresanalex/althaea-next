import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Farmacia Althaea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </>
  );
}
