import { Button, Typography } from "antd";
import { useNavigate } from "react-router";

const { Text } = Typography;

function Home(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col items-center p-8 gap-y-8">
            <h1>Belong Coding Challenge</h1>
            <Text>
                Welcome to my coding challenge submission, and thank you for
                taking the time to review it.
            </Text>
            <Button size="large" onClick={() => navigate("valuations")}>
                Start
            </Button>
        </div>
    );
}

export default Home;
