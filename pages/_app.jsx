import "../styles/globals.css";
import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

import { serverUrl, appId } from '../services/moralis';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider  serverUrl={serverUrl} appId={appId} >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
