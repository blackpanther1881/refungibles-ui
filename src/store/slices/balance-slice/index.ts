import { StateCreator } from "zustand";
import { SliceActions, BalanceDataState } from "./types";

const initialState: BalanceDataState = {
  balanceData: {

  }
};

export type BalanceSlice = BalanceDataState & SliceActions;

export const createBalanceSlice: StateCreator<BalanceSlice> = (set) => ({
  ...initialState,
  balanceDataActions: {
      setBalances: (val) =>
      set((state) => ({
        balanceData: val
      })),
  }
});
