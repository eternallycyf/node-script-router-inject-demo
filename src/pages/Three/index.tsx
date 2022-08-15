import { useRef, useEffect } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import RcCard from "@/components/RcCard";
import { markDownText } from "./constant";
import * as THREE from "three";

const EchartsReact = () => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <PageContainer>
        <RcCard
          content={
            <>
              <h1>2.demo</h1>
            </>
          }
          code={markDownText}
          descriptionTitle={"threeJS"}
          description={"threeJS"}
        />
      </PageContainer>
    </>
  );
};

export default EchartsReact;
