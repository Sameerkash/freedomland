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
      <div className="flex flex-row">
        <Nav />
        <MarketPage />
      </div>
    </>
  );
}

export default Market;
