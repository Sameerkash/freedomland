import Head from "next/head";
import Nav from "../components/navigation/Nav";
import VerifyPageComponent from "../components/verifyPage/VerifyPageComponent";

function verify() {
  return (
    <>
      <Head>
        <title>Freedomland - verify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex  flex-row">
        <Nav />
        <VerifyPageComponent />
      </div>
    </>
  );
}

export default verify;
