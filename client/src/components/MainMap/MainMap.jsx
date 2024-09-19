import "./MainMap.scss";
import { Layout, Col, Row, Select, Button, Space, Switch, Tooltip } from "antd";
import {
  IdcardTwoTone,
  UploadOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import forestIcon from "/forest.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Card } from 'antd';
import map from "/Map.jpeg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function MainMap() {

  return (
    <Card
      title="ООПТ города Москвы"
      bordered={false}
      style={{
        fontSize: '2rem',
        width: "98vw",
        margin: "1rem",
      }}
    >
      <TransformWrapper>
        <TransformComponent>
          <img src={map} alt="map" width={1600} />
        </TransformComponent>
      </TransformWrapper>
    </Card>
  );
}

export default MainMap;
