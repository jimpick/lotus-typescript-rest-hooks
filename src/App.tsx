import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Routes from "./Routes";

const { Header, Content } = Layout;

export default () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Lotus Issues</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/closed">Closed</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/open">Open</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/version">Version</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/versionws1">VersionWS1</Link>
        </Menu.Item>
        {/*<Menu.Item key="4"><Link to="/profile">Profile</Link></Menu.Item>*/}
      </Menu>
    </Header>
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      <Routes />
    </Content>
  </Layout>
);
