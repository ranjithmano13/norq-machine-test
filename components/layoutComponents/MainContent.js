import { SearchOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { Input } from 'postcss'
import React from 'react'

const MainContent = () => {
  return (
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
  )
}

export default MainContent