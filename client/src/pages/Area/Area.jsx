import "./Area.scss";

import React from "react";
import { Layout } from "antd";
const { Footer, Sider, Content } = Layout;
import Header from "../../components/Header/Header";
import SearchLine from "../../components/Search/Search";
import Animals from "../../components/Animals/Animals";
import Plants from "../../components/Plants/Plants";
import AreaMap from "../../components/AreaMap/AreaMap";
import UserForm from "../../components/UserForm/UserForm";

const Area = () => (
  <Layout>
    <Header />
    <SearchLine />
    <Animals />
    <Plants />
    <AreaMap />
    <UserForm />
  </Layout>
);
export default Area;
