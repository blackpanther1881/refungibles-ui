import { StateCreator } from "zustand";
import { SliceActions, InitialDataState } from "./types";

const initialExchangeRate = 1;

const initialState: InitialDataState = {
  initialData: {
    exchangeRate: initialExchangeRate,
  }
};

export type InitialDataSlice = InitialDataState & SliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  initialDataActions: {
    setExchangeRate: (val) =>
      set((state) => ({
        initialData: {
          ...state.initialData,
          exchangeRate: val
        }
      })),
  }
});
