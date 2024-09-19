import "./AreaMap.scss";
import {
  Input,
  Col,
  Row,
  Card
} from "antd";


function AreaMap() {

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
          <span>Карта парка</span>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          width: "100vw",
          backgroundColor: "#f6ffed",
          padding: '0'
        }}
      >
        <Card
          style={{
            width: "90%",
            padding: '0',
            borderRadius: '15px'
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A819193017a27dbafe1ee7d64cc5d53f01518ef10e132ccfa2b161dcd489f762e"
            width="100%"
            height="500"
            frameborder="0"
          ></iframe>
        </Card>
      </Row>
    </>
  );
}

export default AreaMap;
