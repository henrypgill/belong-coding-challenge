import { message, Tabs } from "antd";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import "./App.css";
import { useAppDispatch } from "./redux/store";
import { transactionsActions } from "./redux/transactionsSlice";
import { valuationsActions } from "./redux/valuationsSlice";
import { belongApi } from "./services/encordAPI";

function App() {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const location = useLocation();

    async function fetchAndSetValuations() {
        const result = await belongApi.fetchValuations();
        if (result.success) {
            dispatch(valuationsActions.setValuations(result.valuations));
        } else {
            messageApi.open({
                type: "error",
                content:
                    "Could not load valuation data, please try again later.",
            });
        }
    }

    async function fetchAndSetTransactions() {
        const result = await belongApi.fetchTransactions();
        console.log(result);
        if (result.success) {
            dispatch(transactionsActions.setTransactions(result.transactions));
        } else {
            messageApi.open({
                type: "error",
                content:
                    "Could not load transaction data, please try again later.",
            });
        }
    }

    async function fetchAndSetData() {
        fetchAndSetValuations();
        fetchAndSetTransactions();
    }

    useEffect(() => {
        fetchAndSetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tabs = [
        {
            label: "Transactions",
            key: "/transactions",
        },
        {
            label: "Valuations",
            key: "/valuations",
        },
    ];

    return (
        <>
            {contextHolder}
            <Tabs
                centered
                items={tabs}
                activeKey={location.pathname}
                onChange={(tab) => navigate(`${tab}`)}
            />
                <Outlet />
        </>
    );
}

export default App;
