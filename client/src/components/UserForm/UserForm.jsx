import "./UserForm.scss";
import {
  Col,
  Row,
  Card,
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
import { UploadOutlined } from "@ant-design/icons";


function UserForm() {
  
  return (
    <>
      <Row
        style={{
          padding: "1rem",
          width: "100vw",
          backgroundColor: "#f6ffed",
        }}
        align="middle"
      >
        <Col sm={2}></Col>
        <Col className="main-text" style={{ marginBottom: "1rem" }}>
          <span>Форма обратной связи</span>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          width: "100vw",
          backgroundColor: "#f6ffed",
          padding: "0",
        }}
      >
        <Form style={{ width: "80%" }}>
          <Form.Item label="Выберите тип">
            <Select style={{ backgroundColor: "white" }}>
              <Select.Option value="animals">Животные</Select.Option>
              <Select.Option value="plants">Растения</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Выберите вид">
            <Select style={{ backgroundColor: "white" }}>
              <Select.Option value="animals">Млекопитающие</Select.Option>
              <Select.Option value="plants">Птицы</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Кого вы встретили">
            <Select style={{ backgroundColor: "white" }}>
              <Select.Option value="animals">Мышка</Select.Option>
              <Select.Option value="plants">Крыска</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Вы можете оставить комментарий">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Выберите дату">
            <Row>
              <Col sm={4}>
                <DatePicker />
              </Col>
              <Col sm={5}>
                <Upload>
                  <Button icon={<UploadOutlined />}>Загрузите фото</Button>
                </Upload>
              </Col>
              <Col sm={4}>
                <Button style={{ display: "inline-block" }}>Отправить</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}

export default UserForm;
