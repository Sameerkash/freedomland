import Head from "next/head";
import Nav from "../components/navigation/Nav";
import MainPage from "../components/mainPage/MainComponent";

function dashboard() {
  return (
    <>
      <Head>
        <title>Freedomland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-row">
        <Nav />
        <div className="m-2 flex flex-grow p-2 ">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default dashboard;
