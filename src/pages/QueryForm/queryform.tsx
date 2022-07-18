import React, { useState, useEffect, useMemo } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  InputNumber,
  AutoComplete,
  Select,
  DatePicker,
  TreeSelect,
  Switch,
  Cascader,
  TimePicker,
} from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./queryform.less";
const { RangePicker } = DatePicker;

const { Option } = Select;
const { TreeNode } = TreeSelect;

interface FilterProps {
  filterList: any[];
  autoSearch?: boolean;
  onSearch?: Function;
  onReset?: Function;
  [key: string]: any;
}

// 避免引起命名冲突，把oject的key都转化为小写
function setKeystoLocaleLowerCase(obj: any) {
  return obj.map((item: any) => {
    return Object.fromEntries(
      Object.entries(item).map(([k, v]) => [k.toLowerCase(), v]),
    );
  });
}

export const Filter = ({
  filterList,
  autoSearch = false,
  onSearch,
  onReset,
  ...props
}: FilterProps) => {
  const [form] = Form.useForm();
  const [list, setList] = useState(setKeystoLocaleLowerCase(filterList));
  const [isMore, setIsMore] = useState(true);
  const [offsetSpan, setOffsetSpan] = useState(0);

  useEffect(() => {
    setList(isMore ? list.slice(0, 2) : setKeystoLocaleLowerCase(filterList));
    setOffsetSpan(isMore ? 0 : 2 - (list.length % 3));
  }, [isMore]);

  const lisLen = useMemo(() => {
    return list.length;
  }, [list.length]);

  const span = useMemo(() => {
    return lisLen >= 5 ? 4 : (24 - 2.5) / lisLen;
  }, [lisLen]);

  const onFinish = (values: { [key: string]: string | number | undefined }) => {
    onSearch && onSearch(values);
  };

  const getFormElement = (tagname: string, oItem: any) => {
    /** onPressEnter会自动执行 */
    let item: any = {};
    for (let key in oItem) {
      if (oItem.hasOwnProperty(key)) {
        if (key !== "defaultvalue") {
          item[key] = oItem[key];
        }
      }
    }
    item = {
      ...item,
      onChange: () => autoSearch && onFinish(form.getFieldsValue()),
      onSelect: () => autoSearch && onFinish(form.getFieldsValue()),
    };
    switch (tagname) {
      case "input":
        return <Input allowClear {...item} />;
      case "inputnumber":
        return <InputNumber min={0} {...item} />;
      case "autocomplete":
        return (
          <AutoComplete
            allowClear
            options={item.options}
            filterOption={(inputValue: any, option: any) => {
              return (
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              );
            }}
            {...item}
          />
        );
      case "switch":
        return <Switch checkedChildren="开" unCheckedChildren="关" {...item} />;
      case "select":
        const selectlist = item.list || item.selectlist || [];
        return (
          <Select allowClear {...item}>
            {item.render && item.render()}
            {!item.render &&
              selectlist.map((cl: any) => {
                const oName = cl.key || cl.text || cl.name;
                return (
                  <Option key={cl.id} value={cl.id}>
                    {oName}
                  </Option>
                );
              })}
          </Select>
        );
      case "treeselect":
        const treeSelectList = item.list || item.selectlist || [];
        return (
          <TreeSelect allowClear multiple treeData={treeSelectList} {...item} />
        );
      case "datepicker":
        return <DatePicker {...item} />;
      case "rangepicker":
        return <RangePicker {...item} />;
      case "timepicker":
        return <TimePicker {...item} />;
      case "rangetimepicker":
        return <TimePicker.RangePicker {...item} />;
      case "cascader":
        return <Cascader {...item} />;
      default:
        return "";
    }
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      style={{ textAlign: "center" }}
      {...props}
    >
      <Row gutter={24}>
        {list.map((item: any, i: number) => {
          const tagname = (item.tagname || "").toLowerCase();

          if (tagname !== "input" && item.rules) {
            // delete item.rules;
            item.rules = null;
          }

          const itemName = item.key;
          return (
            <Col
              span={tagname === "switch" ? 2.5 : span}
              key={item.key + i}
              style={{
                minWidth: tagname === "switch" ? "auto" : "200px",
              }}
            >
              <Form.Item
                name={itemName}
                label={item.label}
                rules={item.rules ? [item.rules] : []}
              >
                {getFormElement(tagname, item)}
              </Form.Item>
            </Col>
          );
        })}

        <Col
          md={6}
          style={{ minWidth: "100px", marginBottom: 30 }}
          className={styles.marginL15}
          offset={offsetSpan * 10}
        >
          <span onClick={() => setIsMore(!isMore)}>
            {isMore ? (
              <>
                <span>展开 </span>
                <UpOutlined className={styles.SearchUp} />
              </>
            ) : (
              <>
                <span>收起 </span>
                <UpOutlined className={styles.SearchDown} />
              </>
            )}
          </span>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
              onReset && onReset();
            }}
          >
            重置
          </Button>
          <Button type="primary" htmlType="submit">
            筛选
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
