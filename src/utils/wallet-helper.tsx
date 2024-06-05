import { ethers } from "ethers";
import { useAppStore } from "@/store";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const handleMetamaskWallet = async (actions: any) => {
  try {
    let ethereum;
    if (window.ethereum?.providers) {
      ethereum = window.ethereum?.providers.find((item: any) => {
        return item && item.isMetaMask;
      });
    } else {
      ethereum = window.ethereum;
    }
    if (!ethereum || !ethereum.on) {
      console.log("MetaMask wallet not installed");
      throw Error("MetaMask wallet not installed");
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts && accounts.length !== 0) {
      const account = accounts[0];
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      useAppStore.getState().walletDataActions.setWalletInfo({
        walletConnection: true,
        signer: signer,
        account: account
      });
      actions();
    }
  } catch (e) {
    console.log("error occured: wallet", e);
  }
};
