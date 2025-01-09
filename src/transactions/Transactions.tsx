import { Table, Typography } from "antd";
import { TableProps } from "antd/es/table";
import { useState } from "react";
import { TransactionWithDate } from "../core/types";
import { useAppSelector } from "../redux/store";
import { formatDate } from "../core/utils";
import { ColumnFilterItem } from "antd/es/table/interface";
const { Text } = Typography;

const transactionTypeFilters: ColumnFilterItem[] = [
    {
        text: "payment",
        value: "PAYMENT",
    },
    {
        text: "investment",
        value: "INVESTMENT",
    },
];

export function Transactions(): JSX.Element {
    const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

    const transactionState = useAppSelector((state) => state.transactions);
    const transactions = transactionState.map((t) => {
        return { ...t, date: new Date(t.date) };
    });

    const columns: TableProps<TransactionWithDate>["columns"] = [
        {
            title: "date",
            dataIndex: "date",
            key: "date",
            render: (_, item) => (
                <Text key={item.id}>{formatDate(item.date)}</Text>
            ),
            sorter: (a, b) => a.date.getTime() - b.date.getTime(),
            defaultSortOrder: "descend",
        },
        {
            title: "amount",
            dataIndex: "amount",
            key: "amount",
            render: (_, item) => <Text key={item.id}>{item.amount}</Text>,
            sorter: (a, b) => a.amount - b.amount,
        },
        {
            title: "type",
            dataIndex: "type",
            key: "type",
            render: (_, item) => (
                <Text key={item.id}>
                    {item.type === "INVESTMENT" ? "Investment" : "Payment"}
                </Text>
            ),

            filters: transactionTypeFilters,
            onFilter: (value, record) => record.type === value,
        },
        // {
        //     title: "id",
        //     dataIndex: "id",
        //     key:  "id",
        // },
        // {
        //     title: "subType",
        //     dataIndex: "subType",
        //     key:  "subType",
        // },
        // {
        //     title: "reference",
        //     dataIndex: "reference",
        //     key:  "reference",
        // },
        // {
        //     title: "status",
        //     dataIndex: "status",
        //     key:  "status",
        // },
    ];

    function ExpandedRow({
        transaction,
    }: {
        transaction: TransactionWithDate;
    }) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 32,
                    alignItems: "center",
                    paddingLeft: 64,
                    // justifyContent: "center"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        columnGap: 16,
                    }}
                >
                    <Text>
                        {transaction.type === "INVESTMENT"
                            ? "Invesment Type"
                            : "Payment Type"}
                    </Text>
                    <Text>{transaction.subType}</Text>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        columnGap: 16,
                    }}
                >
                    <Text>Reference</Text>
                    <Text>{transaction.reference}</Text>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        columnGap: 16,
                    }}
                >
                    <Text>Status</Text>
                    <Text>{transaction.status}</Text>
                </div>
            </div>
        );
    }

    return (
        <>
            <Table<TransactionWithDate>
                dataSource={transactions}
                columns={columns}
                rowKey={(record) => record.id}
                expandable={{
                    expandedRowRender: (record) => (
                        <ExpandedRow transaction={record} />
                    ),
                    onExpandedRowsChange: (expandedKeys) =>
                        //@ts-expect-error type mismatch between react keys and string
                        setExpandedRowKeys(expandedKeys),
                    expandedRowKeys: expandedRowKeys,
                }}
            />
        </>
    );
}

// const onUploadedFilter: ColumnType<LabelingDataItem>["onFilter"] = (
//     value,
//     record
// ) => {
//     switch (value) {
//         case "today":
//             return getStartOfDay() < record.uploaded;
//         case "week":
//             return get7DaysAgo() < record.uploaded;
//         case "month":
//             return getMonthAgo() < record.uploaded;
//         case "year":
//             return getStartOfYear() < record.uploaded;
//         default:
//             return true;
//     }
// };
