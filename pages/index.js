import { useReducer, useState } from "react";

import Footer from "../components/common/Footer";
import Header from "../components/common/Head";
import HomePage from "../components/home/main";
import MainPage from "../components/main";
import {
  WALLET_INITIAL_STATE,
  walletReducer,
} from "../utility/reducers/wallet";

export default function Home() {
  const [walletState, walletDispatch] = useReducer(
    walletReducer,
    WALLET_INITIAL_STATE
  );
  const [title, setTitle] = useState("dNFT");

  return (
    <div>
      <Header title={title} />

      {walletState.isWalletConnected ? (
        <div>
          <MainPage walletState={walletState} walletDispatch={walletDispatch} />
        </div>
      ) : (
        <div>
          <HomePage walletState={walletState} walletDispatch={walletDispatch} />
        </div>
      )}

      <Footer />
    </div>
  );
}
