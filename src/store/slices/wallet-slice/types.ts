import { JsonRpcSigner } from "ethers";

export interface WalletInfo {
  walletConnection: boolean;
  signer: JsonRpcSigner | null;
  account: string;
}

export interface WalletDataState {
  walletData: {
    walletModal: boolean;
    walletName: string;
    networkModal: boolean;
    walletInfo: WalletInfo;
    walletLoader: boolean;
  };
  sideBar: {
    show: boolean;
  };
}

export interface SliceActions {
  walletDataActions: {
    setWalletModal: (val: boolean) => void;
    setWalletName: (val: string) => void;
    setNetworkModal: (val: boolean) => void;
    setWalletLoader: (val: boolean) => void;
    setWalletInfo: (val: WalletInfo) => void;
    handleMobileSidebar: (val: boolean) => void;
  };
}

export interface ConnectBnbWalletParams {
  contract: any;
  wallet: string;
}
