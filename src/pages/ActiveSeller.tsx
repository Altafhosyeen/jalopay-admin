import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input } from "antd";
import { FilterOutlined, ArrowLeftOutlined, EyeOutlined } from "@ant-design/icons";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  Name: "Talha Ashraf",
  Category: "Restaurant",
  Revenue: "$1896",
  Orders: "986",
  Ratings: "4.8/5",
  LastActivity: "Order Delivery",
  Action: "",
}));

export default function ActiveSeller() {
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
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
    {
      title: "Revenue",
      dataIndex: "Revenue",
      key: "Revenue",
    },
    {
      title: "Orders",
      dataIndex: "Orders",
      key: "Orders",
    },
    {
      title: "Ratings",
      dataIndex: "Ratings",
      key: "Ratings",
    },
    {
      title: "LastActivity",
      dataIndex: "LastActivity",
      key: "LastActivity",
    },
    {
      title: "Action",
      key: "Action",
      render: () => <Button type="link" icon={<EyeOutlined />} className="text-purple-600 hover:text-purple-800" onClick={showModal} />,
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Header */}
      <div className="d-flex mb-4 px-3 flex flex-col sm:flex-row flex-wrap">
        <div className="d-flex items-center gap-2">
          <ArrowLeftOutlined style={{ color: "#A25dEF" }} />
          <h5 className="text-lg font-semibold" style={{ color: "#A25dEF" }}>
            Active Seller
          </h5>
        </div>
        <div className="ms-auto">
          <div className="d-flex gap-3">
            <input type="text" className="form-control shadow-none bg-light border-0" placeholder="search" />
            <Button icon={<FilterOutlined />} className="bg-light border-0 px-2" style={{ color: "#A25dEF" }} />
            <select className="rounded bg-light px-2 py-1 text-sm border-0" style={{ color: "#A25dEF" }}>
              <option>Today</option>
              <option>This Week</option>
            </select>
            <select className="border-0 bg-light rounded px-2 py-1 text-sm" style={{ color: "#A25dEF" }}>
              <option>Restaurant</option>
              <option>Driver</option>
            </select>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div
        className="text-center mt-5 mb-3 m-auto px-2 py-2 rounded-4"
        style={{
          width: "150px",
          color: "#A25dEF",
          border: "1px solid #A25dEF",
        }}
      >
        <div className="font-semibold">
          <i className="fa fa-solid fa-user"></i> Active Seller
        </div>
        <div className="text-xl font-bold">28</div>
      </div>

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
        <Modal title="Active Seller" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Submit">
          <Form form={form} layout="vertical">
            <Form.Item name="Name" label="Name" rules={[{ required: true, message: "Please enter name" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Category" label="Category" rules={[{ required: true, message: "Please enter category" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Revenue" label="Revenue" rules={[{ required: true, message: "Please enter revenue" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Orders" label="Orders" rules={[{ required: true, message: "Please enter orders" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Ratings" label="Ratings" rules={[{ required: true, message: "Please enter ratings" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="LastActivity" label="Last Activity" rules={[{ required: true, message: "Please enter last activity" }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
