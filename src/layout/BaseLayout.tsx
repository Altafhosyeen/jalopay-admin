import { Layout, Menu, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "../route";

const { Header, Sider, Content } = Layout;

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={ADMIN_ROUTES.map((route) => ({
            key: route.key,
            icon: route.icon,
            label: route.label,
            children: route.children?.map((child) => ({
              key: child.key,
              icon: child.icon,
              label: child.label,
            })),
          }))}
          onClick={({ key }) => {
            // 🔍 Find clicked route from both top-level and children
            const flatRoutes = ADMIN_ROUTES.flatMap((r) =>
              r.children ? [r, ...r.children] : [r]
            );
            const matched = flatRoutes.find((r) => r.key === key);
            if (matched) {
              navigate(matched.pathname);
            }
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
