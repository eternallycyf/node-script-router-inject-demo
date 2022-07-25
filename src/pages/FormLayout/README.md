```js
/* 注意
1.Form.Item 内只能放置一个表单 不要放置其他内容
  如果要添加文字等 放在 Form.Item组件 的前面或者后面
2.InputNumber 不能直接触发数字自动双向绑定
  需要这样
    <Form.Item>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name="1">
                  <InputNumber min={0}  max={100} />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>
  或者
  <Form.Item>
    <Form.Item name='xxx'>
      <InputNumber/>
    </Form.Item>
  </Form.Item>
3.主要外层先用 一个Form.Item包裹 这个Form.Item 不绑定name
  只绑定 lable 和 style 等
*/
<Form.Item label="名称一" style={{ marginBottom: 0 }}>

    <Form.Item
        style={{ display: 'inline-flex',  width: 'calc(45% - 4px)' }}
    >
        <Input  />
    </Form.Item>

    <Form.Item
        style={{ display: 'inline-flex', 
                width: 'calc(55% - 4px)', marginLeft: '8px' }}
        name="name2"
    >
       <Input  />
    </Form.Item>

    <Form.Item label="InputNumber表单" style={{ height: 32 }}>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name='inputNumber1' >
                  <InputNumber
                    className={styles.modalInputNumber}
                    min={0}
                    max={100}
                  />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>

</Form.Item>
4. 直接通过 Row Col 控制布局
<Row>
  <Col span={12}>
    <Form.Item />
  </Col>
    <Col span={12}>
      <Form.Item />
  </Col>
</Row>
5. labelCol wrapperCol 可以指定px宽度
labelCol={{flex:'0 0 100px'}}
wrapperCol={{flex:'0 0 100px'}}
style={{ display: 'inline-flex',  width: 'calc(45% - 4px)' }}
```