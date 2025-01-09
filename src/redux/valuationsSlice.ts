import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { [key: string]: any }[] = [];

export const valuationsSlice = createSlice({
    name: "valuations",
    initialState: initialState,
    reducers: {
        addImage: (state, { payload }: PayloadAction<any>) => {
            return [...state, payload];
        },
        clearConnections: () => initialState,
    },
});

export default valuationsSlice.reducer;
export const labelingActions = valuationsSlice.actions;
