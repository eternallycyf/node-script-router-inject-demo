export const filterList = [
  {
    tagName: "input",
    key: "name",
    label: "模糊搜索",
    placeholder: "请输入姓名/ID/手机后4位/站点地址",
  },
  {
    tagName: "datepicker",
    key: "datepickerItem",
    label: "创建日期",
    allowClear: true,
  },
  {
    tagName: "select",
    key: "site",
    label: "站点",
    defaultValue: null,
    placeholder: "请选择站点",
    selectList: [
      {
        id: 0,
        name: "站点1",
      },
      {
        id: 1,
        name: "站点2",
      },
    ],
  },
  {
    tagName: "treeselect",
    key: "state",
    label: "状态",
    defaultValue: null,
    placeholder: "请选择状态",
    fieldNames: {
      label: "name",
      value: "id",
      children: "children",
    },
    selectlist: [
      {
        title: "Node1",
        value: "0-0",
        children: [
          {
            title: "Child Node1",
            value: "0-0-1",
          },
          {
            title: "Child Node2",
            value: "0-0-2",
          },
        ],
      },
      {
        title: "Node2",
        value: "0-1",
      },
    ],
  },
];
