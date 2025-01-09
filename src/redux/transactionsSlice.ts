import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { [key: string]: any }[] = [];

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        addImage: (state, { payload }: PayloadAction<any>) => {
            return [...state, payload];
        },
        clearConnections: () => initialState,
    },
});

export default transactionsSlice.reducer;
export const labelingActions = transactionsSlice.actions;
