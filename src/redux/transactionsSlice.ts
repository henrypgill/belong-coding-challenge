import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../core/types";

const initialState: Transaction[] = [];

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        setTransactions: (
            _state,
            { payload }: PayloadAction<Transaction[]>
        ) => {
            const sortedTransactions = payload.sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            return sortedTransactions;
        },
        clearTransactions: () => initialState,
    },
});

export default transactionsSlice.reducer;
export const transactionsActions = transactionsSlice.actions;
