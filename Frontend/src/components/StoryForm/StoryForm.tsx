import { Button, Card, Form, Input, Typography } from "antd";
import styles from "./Styles";
import FileBased64 from 'react-file-base64'
const { Title } = Typography;
function StoryForm() {
    const [form] = Form.useForm();
    const onSubmit = (values: any) => {
        // handle form submission
        console.log(values);
        
    };
    return (
        <Card style={styles.formCard}
            title={
                <Title level={4} style={styles.formTitle}>
                    Add Story
                </Title>
            }
        >
            <Form
                form={form}
                style={styles.formCard}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                size="middle"
                onFinish={onSubmit}
                validateTrigger={["onBlur", "onChange"]}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Username is required' }]}
                    validateStatus={form.getFieldError('username').length ? 'error' : ''}
                    help={form.getFieldError('username')[0]}
                >
                    <Input allowClear />
                </Form.Item>
                <Form.Item
                    name="caption"
                    label="Caption"
                    rules={[{ required: true, message: 'Caption is required' }]}
                    validateStatus={form.getFieldError('caption').length ? 'error' : ''}
                    help={form.getFieldError('caption')[0]}
                >
                    <Input.TextArea allowClear autoSize={{minRows : 2, maxRows : 6}}/>
                </Form.Item>
                  <Form.Item name="tags" label="Tags">
                     <Input.TextArea allowClear autoSize={{minRows : 2, maxRows : 6}}/>
                </Form.Item>
                 <Form.Item name="image" label="Image"
                  rules={[{ required: true, message: 'Image is required' }]}
                    validateStatus={form.getFieldError('image').length ? 'error' : ''}
                    help={form.getFieldError('image')[0]}>
                     <FileBased64 type="file" multiple={false}
                     onDone={(e: any) => {
                        form.setFieldsValue({ image: e.base64 });
                     }}
                     />
                </Form.Item>
                  <Form.Item wrapperCol={{span : '16',offset:6}}>
                     <Button type="primary" block htmlType="submit">Submit</Button>
                </Form.Item> 
            </Form>
        </Card>
    );
}
export default StoryForm;