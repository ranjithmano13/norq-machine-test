
import { Table } from 'antd';
import React from 'react'
import {
 
  MoreOutlined,
 
} from "@ant-design/icons";
const columnData = [
  {
    title: 'Accessories Code',
    dataIndex: 'accessoriesCode',
    sorter:true
  },
  {
    title: 'Item Name',
    dataIndex: 'itemName',
    sorter:true
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    sorter:true
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    sorter:true
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    sorter:true
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    sorter:true
  },
  {
    title: 'Date of Purchase',
    dataIndex: 'dateOfPurchase',
    sorter:true
  },
  {
    title: 'Action',
    dataIndex: 'action',
    align:"center"
    
  },
];

const tableData = [
  {
  key: 1,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:2030,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 2,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 3,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 4,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 5,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 6,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 7,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 8,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 9,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 10,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 11,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 12,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 13,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 14,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 15,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 16,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
  {
  key: 17,
  accessoriesCode:242628426,
  itemName: "ABC",
  manufacturer: "Vguard",
  quantity:200,
  unitPrice:120,
  totalPrice:24000,
  dateOfPurchase:"23.02.2023",
  action:<MoreOutlined />
},
]
const TableData = () => {
  return (
    <Table columns={columnData} dataSource={tableData} scroll={{y:500}}/>
  )
}

export  {TableData}