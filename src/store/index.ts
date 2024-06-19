"use client";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { createBalanceSlice, BalanceSlice } from "./slices/balance-slice";
import { createWalletSlice, WalletSlice } from "./slices/wallet-slice";
import {
  createSwapTransactionSlice,
  SwapTransactionSlice
} from "./slices/transaction-slices/market";
import {
  createInitialDataSlice,
  InitialDataSlice
} from "./slices/initial-data-slice";
import {
  TransactionSlice,
  createTransactionSlice
} from "./slices/transaction-info-slice";
import { mountStoreDevtool } from "simple-zustand-devtools";

type StoreState = BalanceSlice &
  WalletSlice &
  InitialDataSlice &
  SwapTransactionSlice;

export const useAppStore = createWithEqualityFn<StoreState>()(
  (...a) => ({
    ...createBalanceSlice(...a),
    ...createWalletSlice(...a),
    ...createInitialDataSlice(...a),
    ...createSwapTransactionSlice(...a)
  }),
  shallow
);

mountStoreDevtool("appStore", useAppStore);
