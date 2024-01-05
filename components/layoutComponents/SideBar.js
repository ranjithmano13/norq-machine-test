"use client"
import { AppstoreOutlined, ContainerOutlined, DatabaseOutlined, DeploymentUnitOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Flex, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logoipsum-285.svg";

const getItems = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  
  const items = [
    getItems(
      "MENU",
      1,
      null,
      [
        getItems(
          "Dashboard",
          "menu-grp-item-1",
          <AppstoreOutlined style={{ fontSize: "18px" }} />,
          null
        ),
        getItems(
          "Accounts",
          "menu-grp-item-2",
          <UserOutlined style={{ fontSize: "18px" }} />,
          null
        ),
        getItems(
          "Inventories",
          "menu-grp-item-3",
          <DatabaseOutlined style={{ fontSize: "18px" }} />,
          [
            getItems("Manufacturer", "menu-grp-item-3-sub-1"),
            getItems("SIM", "menu-grp-item-3-sub-2"),
            getItems("Accessories", "menu-grp-item-3-sub-3"),
          ]
        ),
        getItems(
          "Reports",
          "menu-grp-item-4",
          <ContainerOutlined style={{ fontSize: "18px" }} />,
          null
        ),
        getItems(
          "Swap to Customers",
          "menu-grp-item-5",
          <DeploymentUnitOutlined style={{ fontSize: "18px" }} />,
          null
        ),
      ],
      "group"
    ),
  
    getItems(
      "SUPPORT",
      2,
      null,
      [
        getItems(
          "Settings",
          "support-grp-item-1",
          <SettingOutlined style={{ fontSize: "18px" }} />
        ),
        getItems(
          "Logout",
          "support-grp-item-2",
          <LogoutOutlined style={{ fontSize: "18px" }} />
        ),
      ],
      "group"
    ),
  ];
const SideBar = () => {
  return (
    <Sider width={"20%"} theme="light"  style={{fontWeight:"bold",color:"#8697AB"}}>
    <Flex
      justify="flex-start"
      align="center"
      gap={10}
      vertical
      style={{ width: "100%", height: "100%", padding: "12px" }}
    >
      <Image src={logo} />
      <Menu
        mode="inline"
        items={items}
        style={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
        defaultOpenKeys={["menu-grp-item-3"]}
        defaultSelectedKeys={["menu-grp-item-3-sub-3"]}
      />
    </Flex>
  </Sider>
  )
}

export default SideBar