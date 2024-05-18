export interface InitialDataState {
  initialData: {
    exchangeRate: number;
  };
}

export interface SliceActions {
  initialDataActions: {
    setExchangeRate: (val: number) => void;
  };
}
