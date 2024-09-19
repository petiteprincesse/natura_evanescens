import "./Map.scss";

import React from "react";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;
import Header from "../../components/Header/Header";
import MainMap from "../../components/MainMap/MainMap";

const Map = () => (
  <Layout>
    <Header />
    <MainMap />
  </Layout>
);
export default Map;
