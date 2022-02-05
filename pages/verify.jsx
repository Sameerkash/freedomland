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
      <div className="flex min-h-screen flex-row">
        <Nav />
        <div className="flex flex-grow">
          <VerifyPageComponent />
        </div>
      </div>
    </>
  );
}

export default verify;
