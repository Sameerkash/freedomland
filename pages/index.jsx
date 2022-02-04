import Head from "next/head";
import Nav from "../components/navigation/Nav";
import MainPage from "../components/mainPage/MainComponent";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Landing />
      {/* <Head>
        <title>Freedomland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-row">
        <Nav />
        <div className="flex flex-grow items-center justify-center">
          <MainPage />

        </div>
      </div> */}
    </>
  );
}
