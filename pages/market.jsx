import Head from "next/head";
import Nav from "../components/navigation/Nav";
import MarketPage from "../components/marketPage/MarketComponent";

function Market() {
  return (
    <>
      <Head>
        <title>Freedomland - market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-row">
        <Nav />
        <div className="m-2 flex flex-grow p-2 ">
          <MarketPage />
        </div>
      </div>
    </>
  );
}

export default Market;
