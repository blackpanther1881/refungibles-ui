import { AssetProps } from "@/utils/types";

export interface SwapTransactionState {
  swapTransaction: {
    swapInToken: AssetProps;
    swapOutToken: AssetProps;
  };
  limitTransaction: {
    limitInToken: AssetProps;
    limitOutToken: AssetProps;
  };
}

export interface SliceActions {
  swapTransactionActions: {
    setSwapInToken: (val: AssetProps) => void;
    setSwapOutToken: (val: AssetProps) => void;
  };
  limitTransactionActions: {
    setLimitInToken: (val: AssetProps) => void;
    setLimitOutToken: (val: AssetProps) => void;
  };
}
