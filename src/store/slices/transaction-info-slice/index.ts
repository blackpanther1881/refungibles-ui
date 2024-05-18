import { StateCreator } from "zustand";
import {TransactionType, TxnStepInfo, TxnInfoModalHeader, TransactionStatus, TransactionSliceState} from "./types";

export interface TransactionSliceActions {
    transactionActions: {
        setTransactionProgress: (val: TransactionType) => void;
        setTransactionHash: (val: any) => void;
        setTransactionInfoModal: (val: boolean) => void;
        setTransactionStepInfo: (val: TxnStepInfo) => void;
        setTransactionModalHeader: (val: TxnInfoModalHeader) => void;
        setTxnFailed: (val: boolean) => void;
        setTxnToastVisibility: (val: boolean) => void;
        setTxnFailedResponse: (val: any) => void;
        setTransactionStatus: (val: TransactionStatus) => void;
        resetTransactionProgress: () => void;
        resetTransaction: () => void;
    };
}

const initialState: TransactionSliceState = {
    transactionInfo: {
        inProgress: false,
        name: "",
        txnHash: "",
        txnInfoModal: false,
        txnStepInfo: {
            stepNumber: 0,
            stepText: ""
        },
        txnInfoModalHeader: {
            srcInfo: {
                iconUrl: "",
                chain: ""
            },
            dstInfo: {
                iconUrl: "",
                chain: ""
            },
            helperText: ""
        },
        txFailed: false,
        txFailedResponse: "",
        txnToastVisibility: false,
        txnStatus: null
    }
};

export type TransactionSlice = TransactionSliceState & TransactionSliceActions;

export const createTransactionSlice: StateCreator<TransactionSlice> = (
    set
) => ({
    ...initialState,
    transactionActions: {
        setTransactionProgress: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    name: val,
                    inProgress: true
                }
            }));
        },
        setTransactionHash: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnHash: val
                }
            }));
        },
        setTransactionInfoModal: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnInfoModal: val
                }
            }));
        },
        setTransactionStepInfo: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnStepInfo: val
                }
            }));
        },
        setTransactionModalHeader: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnInfoModalHeader: val
                }
            }));
        },
        setTxnFailed: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txFailed: val
                }
            }));
        },
        setTxnToastVisibility: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnToastVisibility: val
                }
            }));
        },
        setTxnFailedResponse: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txFailedResponse: val
                }
            }));
        },
        setTransactionStatus: (val) => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    txnStatus: val
                }
            }));
        },
        resetTransactionProgress: () => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    inProgress: false
                }
            }));
        },
        resetTransaction: () => {
            set((state) => ({
                transactionInfo: {
                    ...state.transactionInfo,
                    inProgress: false,
                    txFailed: false,
                    txFailedResponse: "",
                    txnStatus: null,
                    txnStepInfo: { stepNumber: 0, stepText: "" }
                }
            }));
        }
    }
});
