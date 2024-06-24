import { StateCreator } from "zustand";
import { SliceActions, SwapTransactionState } from "./types";
import { dummyTokenList } from "@/utils/config";
import { AssetProps } from "@/utils/types";

const selectedItem = dummyTokenList["ethereum"][0];
const selectedOutItem = dummyTokenList["optimism"][2];

const initialState: SwapTransactionState = {
  swapTransaction: {
    swapInToken: selectedItem,
    swapOutToken: selectedOutItem
  },
  limitTransaction: {
    limitInToken: selectedItem,
    limitOutToken: selectedOutItem
  }
};

export type SwapTransactionSlice = SwapTransactionState & SliceActions;

export const createSwapTransactionSlice: StateCreator<SwapTransactionSlice> = (
  set
) => ({
  ...initialState,
  swapTransactionActions: {
    setSwapInToken: (val: AssetProps) =>
      set((state) => ({
        swapTransaction: {
          ...state.swapTransaction,
          swapInToken: val
        }
      })),
    setSwapOutToken: (val: AssetProps) =>
      set((state) => ({
        swapTransaction: {
          ...state.swapTransaction,
          swapOutToken: val
        }
      }))
  },
  limitTransactionActions: {
    setLimitInToken: (val: AssetProps) =>
      set((state) => ({
        limitTransaction: {
          ...state.limitTransaction,
          limitInToken: val
        }
      })),
    setLimitOutToken: (val: AssetProps) =>
      set((state) => ({
        limitTransaction: {
          ...state.limitTransaction,
          limitOutToken: val
        }
      }))
  }
});
