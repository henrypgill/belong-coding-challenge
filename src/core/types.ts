export interface Valuation {
    date: string;
    value: number;
}

export interface Transaction {
    id: string;
    type: "INVESTMENT" | "PAYMENT";
    subType: "BUY_ORDER" | "SINGLE_PAYMENT" | "TOPUP_PAYMENT" | "WITHDRAWAL";
    date: string;
    amount: number;
    status:
        | "COMPLETED"
        | "FAILED"
        | "CANCELLED"
        | "RECONCILLED"
        | "PENDING"
        | "MANUAL_CONFIMED";
    reference: string;
}
