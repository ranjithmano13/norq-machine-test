import { BellOutlined, SearchOutlined, UserSwitchOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Divider, Flex, Input } from 'antd'
import React from 'react'

const Header = () => {
  return (
    <Header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                  }}
                >
                  <Flex
                    justify="space-around"
                    align="center"
                    gap={10}
                    style={{ height: "100%", width: "60%" }}
                  >
                    <Input
                      placeholder="Search.."
                      prefix={<SearchOutlined />}
                      size="large"
                      style={{ width: "50%" }}
                    />
                    <p style={{ wordBreak: "none", whiteSpace: "nowrap" }}>
                      MONDAY,20th March 01:57 AM
                    </p>
                  </Flex>

                  <Flex align="center" gap={10} style={{ height: "100%" }}>
                    <Button
                      shape="default"
                      style={{ padding: "10px", display: "flex" }}
                    >
                      <Badge dot>
                        <BellOutlined />
                      </Badge>
                    </Button>
                    <Button
                      shape="default"
                      icon={<UserSwitchOutlined />}
                    ></Button>

                    <Divider
                      type="vertical"
                      style={{ height: "60%" }}
                      orientation="center"
                    />
                    <Avatar
                      size="large"
                      src={"https://picsum.photos/200/200"}
                    />
                    <Flex
                      vertical
                      justify="center"
                      align="center"
                      style={{ height: "100%" }}
                    >
                      <p style={{ marginBottom: "-22px", padding: 0 }}>
                        John Doe
                      </p>
                      <p style={{ marginTop: "-22px", padding: 0 }}>
                        Super Admin
                      </p>
                    </Flex>
                  </Flex>
                </Header>
  )
}

export  {Header}