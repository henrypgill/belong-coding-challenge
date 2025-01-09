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
            return payload;
        },
        clearTransactions: () => initialState,
    },
});

export default transactionsSlice.reducer;
export const transactionsActions = transactionsSlice.actions;
