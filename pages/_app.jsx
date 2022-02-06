import "../styles/globals.css";
import { AppProps } from "next/app";
import MoralisContext from "../context/MoralisContext";
import Moralis from "../services/moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisContext.Provider value={Moralis}>
      <Component {...pageProps} />;
    </MoralisContext.Provider>
  );
}

export default MyApp;
