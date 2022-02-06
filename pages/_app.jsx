import "../styles/globals.css";
import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import MoralisContext from "../context/MoralisContext";

import { serverUrl, appId, Moralis } from "../services/moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisContext.Provider value={Moralis}>
      <MoralisProvider serverUrl={serverUrl} appId={appId}>
        <Component {...pageProps} />;
      </MoralisProvider>
    </MoralisContext.Provider>
  );
}

export default MyApp;
