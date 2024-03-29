import { Button, Form, Input } from 'antd'
import React from 'react'
import './addComment.scss'

interface commentProps{
  handleSubmit:(comment:string)=>Promise<any>
  onBlur:(e:any)=>void
}

const AddComment:React.FC<commentProps> = ({ handleSubmit, onBlur }) => {
  const [form] = Form.useForm()

  const onFinish = async (values:any) => {
    await handleSubmit(values.comment)
    form.setFieldsValue({ comment: '' })
  }

  return <div className={'comment-input-area'}>
    <Form
      form={form}
      onFinish={onFinish}
    >
      <Form.Item name={'comment'}>
        <Input.TextArea
          autoSize
          autoFocus
          placeholder={'输入评论...'} onBlur={onBlur}/>
      </Form.Item>
      <Form.Item>
        <Button
          type={'primary'}
          htmlType={'submit'}
        >
            评论
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default AddComment
