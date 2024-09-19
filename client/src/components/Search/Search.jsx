import "./Search.scss";
import { Input, Col, Row } from "antd";
const { Search } = Input;

function SearchLine() {

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Row
      style={{
        margin: "0",
        backgroundColor: "white",
        padding: "0.5rem",
      }}
      align="middle"
      justify="end"
    >
      <Col span={1}></Col>
      <Col span={6}>
        <Row justify="start" className="main-text">
          Природно-исторический парк 'Москворецкий'
        </Row>
      </Col>
      <Col span={1}></Col>
      <Col span={9}>
        <Search
          placeholder="Поиск по парку"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

export default SearchLine;
