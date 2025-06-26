import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input } from "antd";
import {
  FilterOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { SCREEN_PATH } from "../constants";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  id: 4652,
  customerName: "R. Alex",
  seller: "Divine Dine",
  type: index % 2 === 0 ? "Ride" : "Delivery",
  pickup: "56 Street, Main Road, Berlin",
  dropoff: "57 Street, Main Road, Berlin",
  status:
    index % 3 === 0 ? "Pickup" : index % 3 === 1 ? "On The Way" : "En-Route",
}));

export default function ActiveBooking() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Form values:", values);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Pickup",
      dataIndex: "pickup",
      key: "pickup",
    },
    {
      title: "Drop-Off",
      dataIndex: "dropoff",
      key: "dropoff",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "Pickup"
              ? "blue"
              : status === "On The Way"
              ? "purple"
              : "orange"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          className="text-purple-600 hover:text-purple-800"
          onClick={showModal}
        />
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Header */}
      <div className="d-flex mb-4 px-3 flex flex-col sm:flex-row">
        <div className="d-flex items-center gap-2">
          <ArrowLeftOutlined style={{ color: "#A25dEF" }} />
          <h5 className="text-lg font-semibold" style={{ color: "#A25dEF" }}>
            Active Bookings
          </h5>
        </div>
        <div className="ms-auto">
          <div className="d-flex gap-2">
            <Button
              icon={<FilterOutlined />}
              className="bg-light border-0"
              style={{ color: "#A25dEF" }}
            />
            <select
              className="rounded bg-light px-2 py-1 text-sm border-0"
              style={{ color: "#A25dEF" }}
            >
              <option>Today</option>
              <option>This Week</option>
            </select>
            <select
              className="border-0 bg-light rounded px-2 py-1 text-sm"
              style={{ color: "#A25dEF" }}
            >
              <option>Restaurant</option>
              <option>Driver</option>
            </select>
          </div>
        </div>
      </div>

      {/* Badge */}
      <Link to={`${SCREEN_PATH.Dashboard.pathname}/Active-Booking`} className="text-decoration-none">
        <div
          className="text-center mt-5 mb-3 m-auto px-2 py-2 rounded-4"
          style={{
            width: "170px",
            color: "#A25dEF",
            border: "1px solid #A25dEF",
          }}
        >
          <div className="font-semibold">
            <i className="fa fa-solid fa-car"></i> Active Bookings
          </div>
          <div className="text-xl font-bold">120</div>
        </div>
      </Link>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          className="custom-table-header
            [&_.ant-table-thead>tr>th]:!bg-[#A25dEF]
            [&_.ant-table-thead>tr>th]:!text-white
            [&_.ant-pagination-item-active]:!bg-purple-100
            px-3
          "
        />

        {/* Modal */}
        <Modal
          title="Active Bookings"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="customerName"
              label="Customer Name"
              rules={[
                { required: true, message: "Please enter customer name" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Seller"
              label="Seller"
              rules={[{ required: true, message: "Seller" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Type"
              label="Type"
              rules={[{ required: true, message: "Type" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Pickup"
              label="Pickup"
              rules={[{ required: true, message: "Pickup" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Drop-off"
              label="Drop-off"
              rules={[{ required: true, message: "Drop-off" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Status"
              label="Status"
              rules={[{ required: true, message: "Status" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
