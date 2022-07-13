import { Button } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { history } from "umi";
const Home: React.FC = () => {
  const toAddPage = () => history.push("/access/add");
  return (
    <PageContainer>
      <Button onClick={() => toAddPage()}>配置</Button>
    </PageContainer>
  );
};

export default Home;
