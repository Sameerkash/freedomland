import Head from "next/head";
import Nav from "../components/navigation/Nav";
import MainPage from "../components/mainPage/MainComponent";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Freedomland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
