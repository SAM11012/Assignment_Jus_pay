import { useState } from "react";
import { Table, Avatar, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  CalendarOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import "./MainTable.css";

import Pagination from "./Pagination";
interface User {
  name: string;
  avatar: string;
}

interface DataType {
  key: string;
  orderId: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: string;
  statusColor: string;
}

const data: DataType[] = [
  {
    key: "1",
    orderId: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738446057/Image2_cwsl4u.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    key: "2",
    orderId: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/Kate_morrisan_tochvq.svg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "green",
  },
  {
    key: "3",
    orderId: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514077/drew_canno_pcbpyh.svg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "cyan",
  },
  {
    key: "4",
    orderId: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/orlando_diggs_a2ywri.svg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "gold",
  },
  {
    key: "5",
    orderId: "#CM9805",
    user: { name: "Andi Lane", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514044/Andi_lanes_ackxcq.svg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "gray",
  },
  {
    key: "6",
    orderId: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738446057/Image2_cwsl4u.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    key: "7",
    orderId: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/Kate_morrisan_tochvq.svg" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "green",
  },
  {
    key: "8",
    orderId: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514077/drew_canno_pcbpyh.svg" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "cyan",
  },
  {
    key: "9",
    orderId: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514078/orlando_diggs_a2ywri.svg" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "gold",
  },
  {
    key: "10",
    orderId: "#CM9805",
    user: { name: "Andi Lane", avatar: "https://res.cloudinary.com/daudgeu0r/image/upload/v1738514044/Andi_lanes_ackxcq.svg" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "gray",
  },
  
];

const CustomTable = ({ isDark }: { isDark: boolean }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Fetching data for page ${page}`);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: <Checkbox />,
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, record.key]);
            } else {
              setSelectedRowKeys(
                selectedRowKeys.filter((key) => key !== record.key)
              );
            }
          }}
        />
      ),
      width: 10,
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
      render: (text) => (
        <span style={{ color: "var(--table-body-text)" }}>{text}</span>
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      render: (user: User) => (
        <div className="flex items-center gap-2">
          <Avatar src={user.avatar} />
          <span style={{ color: "var(--table-body-text)" }}>{user.name}</span>
        </div>
      ),
    },
    {
      title: "Project",
      dataIndex: "project",
      render: (text) => (
        <span style={{ color: "var(--table-body-text)" }}>{text}</span>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (text) => (
        <div
          className="flex items-center justify-between "
          style={{ color: "var(--table-body-text)" }}
        >
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => (
        <div
          className="flex items-center gap-2"
          style={{ color: "var(--table-body-text)" }}
        >
          <CalendarOutlined
            className=""
            style={{ color: "var(--table-body-text)" }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <div
          className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
            record.status === "Complete"
              ? " text-green-600"
              : record.status === "In Progress"
              ? " text-blue-600"
              : record.status === "Pending"
              ? " text-cyan-600"
              : record.status === "Approved"
              ? " text-yellow-600"
              : "text-gray-600"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full mr-2 ${
              record.status === "Complete"
                ? "bg-green-600"
                : record.status === "In Progress"
                ? "bg-blue-600"
                : record.status === "Pending"
                ? "bg-cyan-600"
                : record.status === "Approved"
                ? "bg-yellow-600"
                : "bg-gray-600"
            }`}
          ></span>
          {text}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_,record) => (
        selectedRowKeys.includes(record.key) ? (
          <MoreOutlined
            style={{ color: "var(--table-body-text)",transform:'rotate(90deg)' }}
            className="text-lg"
          />
        ) : null
      ),
      width: 40,
    },
  ];

  return (
    <>
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        className="custom-table"
        size="small"
        style={{position:'relative'}}
      />
      <div style={{marginTop:'16px',position:'absolute',right:'28px'}}>
        <Pagination isDark={isDark} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default CustomTable;
