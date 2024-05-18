
export type TransactionType =
    | "stake"
    | "ibcStaking"
    | "unstake"
    | "claim"
    | "deposit"
    | "withdraw"
    | "delegationStaking"
    | "tokenizedSharesStaking"
    | "swap"
    | "redeemSharesStaking"
    | "";

export type TransactionStatus = "failed" | "success" | null;

export interface TxnStepInfo {
    stepNumber: number;
    stepText: string;
}

export interface TxnInfoModalHeader {
    srcInfo: {
        iconUrl: string;
        chain: string;
    };
    dstInfo: {
        iconUrl: string;
        chain: string;
    };
    helperText: string;
}
export type TransactionSliceState = {
    transactionInfo: {
        inProgress: boolean;
        name: TransactionType;
        txnHash?: string;
        txnInfoModal?: boolean;
        txnStepInfo?: TxnStepInfo;
        txnInfoModalHeader: TxnInfoModalHeader;
        txFailed: boolean;
        txFailedResponse: any;
        txnToastVisibility: boolean;
        txnStatus: TransactionStatus;
    };
};
