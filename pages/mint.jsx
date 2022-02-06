import SellComponent from "../components/sell/SellComponent";
import Head from "next/head";
import Nav from "../components/navigation/Nav";

function mint() {
  return (
    <>
      <Head>
        <title>Freedomland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex  flex-row">

        <div></div>
        <Nav />
        <SellComponent />
      </div>
    </>
  );
}

export default mint;
