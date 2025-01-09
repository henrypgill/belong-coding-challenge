import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Transactions } from "./transactions/Transactions.tsx";
import { Valuations } from "./valuations/Valuations.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route path="/valuations" element={<Valuations />} />
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
