import { ethers } from "ethers";
import { WALLET_OPTIONS } from "../../utility/reducers/wallet";

export default function HomePage({ walletState, walletDispatch }) {
  async function connect() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const allWalletAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      walletDispatch({
        type: WALLET_OPTIONS.SET_WALLET_ADDRESS,
        payload: ethers.utils.getAddress(allWalletAccounts[0]),
      });
      walletDispatch({ type: WALLET_OPTIONS.PROVIDER, payload: provider });
      walletDispatch({
        type: WALLET_OPTIONS.IS_WALLET_CONNECTED,
        payload: true,
      });
    }
  }

  return (
    <div>
      <div>
        <div>
          <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
            <div className="md:flex-1 md:mr-10">
              <h1 className="font-pt-serif text-5xl font-bold mb-7">
                Mint Your {"  "}
                <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
                  dNFT
                </span>
              </h1>
              <p className="font-pt-serif font-semibold mb-7">
                Create your dynamic NFT in few seconds.
              </p>
              <div className="font-montserrat" onClick={connect}>
                <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                  Connect
                </button>
                <button
                  className="px-6 py-4 border-2 border-black border-solid rounded-lg"
                  onClick={connect}
                >
                  Metamask
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
