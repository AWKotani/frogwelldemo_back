import { Form, Input, DatePicker, TimePicker, Button } from 'antd';
import { useState } from 'react';
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const ReservationForm = (() => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = (values) => {
    setIsSubmitting(true);
    // 送信処理などの実装
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="reservation-form"
      onFinish={handleFinish}
    >
      <Form.Item
        label="名前"
        name="name"
        rules={[
          {
            required: true,
            message: 'こたになおや',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="日時"
        name="datetime"
        rules={[
          {
            required: true,
            message: '日時を選択してください',
          },
        ]}
      >
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
        />
      </Form.Item>

      <Form.Item
        label="メモ"
        name="note"
        rules={[
          {
            required: true,
            message: 'メモを入力してください',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          送信
        </Button>
        <Button htmlType="button" onClick={handleReset}>
          リセット
        </Button>
      </Form.Item>
    </Form>
  );
});

// export default ReservationForm;
