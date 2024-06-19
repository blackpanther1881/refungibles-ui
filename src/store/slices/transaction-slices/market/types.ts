import { AssetProps } from "@/utils/types";

export interface SwapTransactionState {
  swapTransaction: {
    swapInToken: AssetProps;
    swapOutToken: AssetProps;
  };
}

export interface SliceActions {
  swapTransactionActions: {
    setSwapInToken: (val: AssetProps) => void;
    setSwapOutToken: (val: AssetProps) => void;
  };
}
