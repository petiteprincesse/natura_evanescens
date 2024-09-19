import "./Header.scss";
import { Layout, Col, Row, Select, Button, Space, Switch, Tooltip } from "antd";
import {
  IdcardTwoTone, UploadOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import forestIcon from "/forest.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState('area');

  function handleClick(item) {
    setActive(item);
  }
  return (
    <Layout.Header className="header-container">
      <Row>
        <Col span={3}>
          <Row justify="start">
            <img src={forestIcon} alt="forest" className="forest-icon" />
          </Row>
        </Col>
        <Col span={18}>
          <Row justify="center">
            <Col span={4}>
              <Row justify="center" align="middle" className="logIn-btn">
                <Link
                  to={"/map"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Button onClick={() => handleClick("map")} type={active == 'map' ? 'default' : 'text'}>
                    <span className="text">Карта</span>
                  </Button>
                </Link>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="center" className="select-row">
                <Select
                defaultValue='56'
                  onChange={() => handleClick("area")}
                  variant="borderless"
                  style={{
                    width: 300,
                    height: 65,
                  }}
                  showSearch
                  placeholder="ООПТ"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "52",
                      label: "Мещерский парк",
                    },
                    {
                      value: "53",
                      label: "Очаковский сосняк",
                    },
                    {
                      value: "54",
                      label: "Долина Раменки",
                    },
                    {
                      value: "55",
                      label: "Долина Давыдковской речки",
                    },
                    {
                      value: "56",
                      label: "Природно-исторический парк 'Москворецкий'",
                    },
                  ]}
                />
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center" align="middle" className="logIn-btn">
                <Link
                  to={"/animals"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Button type="text" onClick={() => handleClick("animals")}>
                    <span className="text">Животные</span>
                  </Button>
                </Link>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center" align="middle" className="logIn-btn">
                <Link
                  to={"/plants"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Button type="text" onClick={() => handleClick("plants")}>
                    <span className="text">Растения и грибы</span>
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3}>
          <Row justify="end" align="middle" className="logIn-btn">
            <Link
              to={"/auth"}
              style={{
                textDecoration: "none",
                width: "100%",
                height: "100%",
              }}
            >
              <Button
                icon={<IdcardTwoTone twoToneColor="#389e0d" />}
                type="text"
                onClick={() => handleClick("auth")}
              >
                <span className="text">Войти</span>
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default Header;
