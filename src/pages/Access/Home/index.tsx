import { Button, Card } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { history } from "umi";
const Home: React.FC = () => {
  const toAddPage = () => history.push("/access/add");
  return (
    <PageContainer>
      <Card style={{ margin: 24 }}>
        <Button onClick={() => toAddPage()}>配置</Button>
      </Card>
    </PageContainer>
  );
};

export default Home;
