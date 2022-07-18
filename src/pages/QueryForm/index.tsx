import { FC } from "react";
import { Card } from "antd";
import { Filter } from "./queryform";
import { filterList } from "./constant";
import { PageContainer } from "@ant-design/pro-layout";

const Queryform: FC<any> = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <PageContainer>
      <Card title="我的" style={{ margin: 24, height: "81vh" }}>
        <Filter
          filterList={filterList}
          onSearch={(values: any) => onSearch(values)}
        />
      </Card>
    </PageContainer>
  );
};

export default Queryform;
