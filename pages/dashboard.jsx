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
      <div className="flex flex-row">
        <Nav />
        <MainPage />
      </div>
    </>
  );
}

// <div className="flex-[4_4_0%]">
// <Nav />
// </div>
// <div className="m-2 flex flex-[6_6_0%]  p-2">
// <MainPage />
// </div>

export default dashboard;
