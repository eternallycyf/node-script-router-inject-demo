```js
import { TransferClassForm } from "@/components/TransferForm";
import styles from './index.less'
import React from 'react'
import { Form, Button } from 'antd'
import type { FormInstance } from 'antd/es/form';
export default class TransferDemo extends React.Component {
  TransferRef = React.createRef()
  formRef = React.createRef<FormInstance>();
  state = {
    mockData: []
  }
  componentDidMount() {
    this.setState({
      mockData: Array.from({
        length: 20,
      }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      }))
    })
  }
  testData = () => {
    this.setState({
      mockData: Array.from({
        length: 10,
      }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      }))
    })
  }

  transferOkCallBack = () => {
    const { getData } = this.TransferRef.current
    const ref = this.formRef.current
    console.log(ref?.getFieldValue('test'))
  }

  onFinish = (values: any) => {
    console.log(values)
  };

  render() {
    return (
      <>
        <button onClick={() => {
          this.TransferRef.current.useVisible(true)
        }}>打开</button>
        <button onClick={() => this.testData()}>set</button>
        <Form ref={this.formRef} onFinish={this.onFinish}>
          <Form.Item>
            <TransferClassForm
              formRef={this.formRef}
              originData={this.state.mockData}
              TransferRef={this.TransferRef}
              transferOkCallBack={() => this.transferOkCallBack()}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

      </>
    )
  }
}
```