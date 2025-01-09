import { Typography } from "antd";
import { useAppSelector } from "../redux/store";
const { Text, Title } = Typography;

export function Valuations(): JSX.Element {

    const transactions = useAppSelector(s => s.transactions)
    const valuations = useAppSelector(s => s.valuations)

    const currentValuation = valuations.map(v => {return {value: v.value, date: new Date(v.date).getTime()}}).sort((a, b) => a.date - b.date)[0].value

    function calculateTotalInvested() {
        let totalInvested = 0

        const payments = transactions.filter(t => t.type === "PAYMENT")
        const paymentsIn = payments.filter(t =>  t.subType === "TOPUP_PAYMENT" || t.subType === "SINGLE_PAYMENT")
        const paymentsOut = payments.filter(t =>  t.subType === "WITHDRAWAL")

        paymentsIn.forEach(p => totalInvested += p.amount)
        paymentsOut.forEach(p => totalInvested -= p.amount)

        return totalInvested
    }

    function calculateReturn() {
        const totalInvested = calculateTotalInvested()
        const percentageReturn = ((currentValuation - totalInvested) / (totalInvested)).toFixed(2)
        return percentageReturn
    }
    

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            padding: 16,
            rowGap: 16,
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Title level={3}>Transaction History</Title>
            <div
            style={cardStyle}
            >
                <Title level={5} style={{padding: 0, margin: 0}}>Total Invested</Title>
                <Text>{`£${calculateTotalInvested()}`}</Text>
            </div>
            <div
            style={cardStyle}
            >
                <Title level={5} style={{padding: 0, margin: 0}}>% Return</Title>
                <Text>{`${calculateReturn()}%`}</Text>
            </div>
            <div
            style={cardStyle}
            >
                <Title level={5} style={{padding: 0, margin: 0}}>Current Valuation</Title>
                <Text>{`£${currentValuation}`}</Text>
            </div>
        </div>
    );
}


const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: "lightgray",
    borderRadius: 16
} as  const