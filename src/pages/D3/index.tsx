import React, { useEffect, useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card, Button } from "antd";
import { D3Markdown } from "./constant";
import * as d3 from "d3";
import RcCard from "@/components/RcCard";

const D3 = (props) => {
  const [dataset, setDataset] = useState([250, 210, 170, 130, 90])

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 }
    let body = d3.select("body");
    let svg = body.select("#mainsvg")
    svg.selectAll('g').remove()
    let g = svg.append("g")
      .attr("transform", "translate(" + marge.top + "," + marge.left + ")");

    let rectHeight = 30;
    g.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", 20)
      .attr("y", function (d, i) {
        return i * rectHeight;
      })
      .attr("width", function (d) {
        return d;
      })
      .attr("height", rectHeight - 5)
      .attr("fill", "blue");

    g.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .attr("x", function (d) {
        return 30 + d
      })
      .attr("y", function (d, i) {
        return i * rectHeight + 15;
      })
      .text(function (d) { return d })
  }

  useEffect(() => {
    handleInitChart()
  }, [])

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100))
    setDataset(arr)
    handleInitChart()
  }

  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <RcCard
            content={
              <>
                <Button onClick={setNewChartData}>设置新的数据</Button>
                <svg width="1200" height="180" id="mainsvg" className="svgs" />
              </>
            }
            code={D3Markdown}
            descriptionTitle={"d3柱状图"}
            description={
              <div>这是一个柱状图, 每次重新获取数据就重新渲染</div>
            }
          />
        </Card>
      </PageContainer>
    </>
  );
};
export default D3;
