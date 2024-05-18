
export interface BalanceDataState {
  balanceData: any
}

export interface SliceActions {
  balanceDataActions: {
    setBalances: (val: number) => void;
  };
}
