import RcCard from "@/components/RcCard";
import { Button, Space, Card, Table } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/lib/table/interface";
import * as ExcelJs from "exceljs";
import {
  generateHeaders,
  saveWorkbook,
  downloadExcel,
  downloadFiles2ZipWithFolder,
  downloadFiles2Zip,
} from "./utils";
import { baseMarkdown } from "./markdown";

interface SimpleDemoProps {}

interface StudentInfo {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const columns: ColumnsType<any> = [
  {
    width: 50,
    dataIndex: "id",
    key: "id",
    title: "ID",
  },
  {
    width: 100,
    dataIndex: "name",
    key: "name",
    title: "姓名",
  },
  {
    width: 50,
    dataIndex: "age",
    key: "age",
    title: "年龄",
  },
  {
    width: 80,
    dataIndex: "gender",
    key: "gender",
    title: "性别",
  },
];

export default () => {
  const [list, setList] = useState<StudentInfo[]>([]);

  useEffect(() => {
    generateData();
  }, []);

  function generateData() {
    const arr: StudentInfo[] = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i,
        name: `小明${i}号`,
        age: i,
        gender: i % 2 === 0 ? "男" : "女",
      });
    }
    setList(arr);
  }

  function onExportBasicExcel() {
    // 创建工作簿
    const workbook = new ExcelJs.Workbook();
    // 添加sheet
    const worksheet = workbook.addWorksheet("demo sheet");
    // 设置 sheet 的默认行高
    worksheet.properties.defaultRowHeight = 20;
    // 设置列
    worksheet.columns = generateHeaders(columns);
    // 添加行
    worksheet.addRows(list);
    // 导出excel
    saveWorkbook(workbook, "simple-demo.xlsx");
  }

  function onExportBasicExcelWithStyle() {
    // 创建工作簿
    const workbook = new ExcelJs.Workbook();
    // 添加sheet
    const worksheet = workbook.addWorksheet("demo sheet");
    // 设置 sheet 的默认行高
    worksheet.properties.defaultRowHeight = 20;
    // 设置列
    worksheet.columns = generateHeaders(columns);
    // 给表头添加背景色。因为表头是第一行，可以通过 getRow(1) 来获取表头这一行
    const headerRow = worksheet.getRow(1);
    // 直接给这一行设置背景色
    // headerRow.fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: {argb: 'dff8ff'},
    // }
    // 通过 cell 设置样式，更精准
    headerRow.eachCell((cell, colNum) => {
      // 设置背景色
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "dff8ff" },
      };
      // 设置字体
      cell.font = {
        bold: true,
        italic: true,
        size: 12,
        name: "微软雅黑",
        color: { argb: "ff0000" },
      };
      // 设置对齐方式
      cell.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: false,
      };
    });
    // 添加行
    const rows = worksheet.addRows(list);
    // 设置每行的样式
    rows?.forEach((row) => {
      // 设置字体
      row.font = {
        size: 11,
        name: "微软雅黑",
      };
      // 设置对齐方式
      row.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: false,
      };
    });
    // 导出excel
    saveWorkbook(workbook, "simple-demo.xlsx");
  }

  function onExportExcel() {
    downloadExcel({
      filename: "test",
      sheets: [
        {
          sheetName: "test",
          columns: columns,
          dataSource: list,
        },
      ],
    });
  }

  function onExportZip() {
    downloadFiles2Zip({
      zipName: "压缩包",
      files: [
        {
          filename: "test",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
            {
              sheetName: "test2",
              columns: columns,
              dataSource: list,
            },
          ],
        },
        {
          filename: "test2",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
          ],
        },
        {
          filename: "test3",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
          ],
        },
      ],
    });
  }

  function onExportFolderZip() {
    downloadFiles2ZipWithFolder({
      zipName: "压缩包",
      folders: [
        {
          folderName: "文件夹1",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "文件夹2",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "文件夹2/文件夹2-1",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "文件夹2/文件夹2-1/文件夹2-1-1",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
                {
                  sheetName: "test2",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
      ],
    });
  }

  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <RcCard
            content={
              <>
                <Space align="center" direction="horizontal">
                  <Button type={"primary"} onClick={onExportBasicExcel}>
                    导出excel
                  </Button>
                  <Button
                    type={"primary"}
                    onClick={onExportBasicExcelWithStyle}
                  >
                    导出带样式excel
                  </Button>
                  <Button type={"primary"} onClick={onExportExcel}>
                    封装方法导出excel
                  </Button>
                  <Button type={"primary"} onClick={onExportZip}>
                    导出zip
                  </Button>
                  <Button type={"primary"} onClick={onExportFolderZip}>
                    导出分文件夹zip
                  </Button>
                </Space>
                <Table columns={columns} dataSource={list} />
              </>
            }
            code={baseMarkdown}
            descriptionTitle={"基础表格导出"}
            description={
              <div>
                真正导出的代码只有几行，重点看 onExportBasicExcel方法：
                先创建工作簿和 sheet 页，这两行是固定代码。如果需要多
                sheet，则创建多个 sheet 即可。后续对表格的所有操作，都是对
                worksheet 的操作。
                设置表格的默认行高。这步非必要，但是设置了更美观。否则会出现有内容的行跟没有内容的行行高不一致的情况。
                设置列数据（表头）和每行的数据。
              </div>
            }
          />
        </Card>
      </PageContainer>
    </>
  );
};
