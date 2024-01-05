"use client"
import { TableData } from '@/components/layoutComponents/TableData'
import { ExportOutlined, FileAddOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Flex, Input } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

const AccessoriesPage = () => {
  return (
    <main style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyItems: "flex-start",
        alignItems: "center",
      }}>

<Flex
                    justify="space-between"
                    align="center"
                    style={{ paddingTop: "2px", width: "100%" }}
                  >
                    <Title>Accessories</Title>
                    <Flex justify="flex-end" align="center" gap={10}>
                      <Button  size="large" icon={<ExportOutlined />}>
                        Export
                      </Button>
                      <Button type="primary" size="large" icon={<FileAddOutlined />}>
                        Add New
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    vertical
                    gap={20}
                    style={{
                      padding: "24px",
                      width: "100%",
                      backgroundColor: "#FFF",
                      borderRadius: "24px",
                    }}
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ width: "100%" }}
                    >
                      <Input
                        placeholder="Search.."
                        prefix={<SearchOutlined />}
                        size="large"
                        style={{ width: "40%" }}
                      />
                      <Flex justify="flex-end" align="center" gap={10}>
                        <Button size="large" icon={<FilterOutlined />}>
                          Apply Filter
                        </Button>
                      </Flex>
                    </Flex>
                    <TableData/>
                  </Flex>

      </main>
  )
}

export default AccessoriesPage