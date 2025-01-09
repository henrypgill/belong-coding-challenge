import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ValuationsReducer from "./valuationsSlice";
import TransactionsReducer from "./transactionsSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        transactions: TransactionsReducer,
        valuations: ValuationsReducer,
    },
});

//export the store's dispatch and selector functions for ease of use
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
