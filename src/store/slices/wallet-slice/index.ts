import { StateCreator } from "zustand";
import { SliceActions, WalletDataState } from "./types";

const initialState: WalletDataState = {
  walletData: {
    walletModal: false,
    walletName: "",
    networkModal: false,
    walletInfo: {
      account: "",
      walletConnection: false,
      signer: null
    },
    walletLoader: false
  },
  sideBar: {
    show: false
  }
};

export type WalletSlice = WalletDataState & SliceActions;

export const createWalletSlice: StateCreator<WalletSlice> = (set) => ({
  ...initialState,
  walletDataActions: {
    setWalletName: (val) =>
      set((state) => ({
        walletData: {
          ...state.walletData,
          walletName: val
        }
      })),
    setWalletModal: (val) =>
      set((state) => ({
        walletData: {
          ...state.walletData,
          walletModal: val
        }
      })),
    setNetworkModal: (val) =>
      set((state) => ({
        walletData: {
          ...state.walletData,
          networkModal: val
        }
      })),
    setWalletLoader: (val) =>
      set((state) => ({
        walletData: {
          ...state.walletData,
          walletLoader: val
        }
      })),
    setWalletInfo: (val) =>
      set((state) => ({
        walletData: {
          ...state.walletData,
          walletInfo: val
        }
      })),
    handleMobileSidebar: (val) =>
      set((state) => ({
        sideBar: {
          ...state.sideBar,
          show: val
        }
      }))
  }
});
