import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Valuation } from "../core/types";

const initialState: Valuation[] = [];

export const valuationsSlice = createSlice({
    name: "valuations",
    initialState: initialState,
    reducers: {
        setValuations: (_state, { payload }: PayloadAction<Valuation[]>) => {
            return payload;
        },
        clearValuations: () => initialState,
    },
});

export default valuationsSlice.reducer;
export const valuationsActions = valuationsSlice.actions;
