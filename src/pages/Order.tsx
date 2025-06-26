import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input } from "antd";
import { FilterOutlined,  EyeOutlined } from "@ant-design/icons";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  OrderID: "#QR-001234",
  Seller: "Talha Ashraf",
  Customer: "Altaf Hussain",
  Amount: "$75",
  Payment: "Credit Card",
  OrderDate: "11/4/2024",
  Status: index % 3 === 0 ? "Pending" : index % 3 === 1 ? "Confirmed" : "En-Route",
  Action: "",
}));

export default function Order() {
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
      title: "OrderID",
      dataIndex: "OrderID",
      key: "OrderID",
    },
    {
      title: "Seller",
      dataIndex: "Seller",
      key: "Seller",
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      key: "Customer",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
    {
      title: "Payment",
      dataIndex: "Payment",
      key: "Payment",
    },
    {
      title: "OrderDate",
      dataIndex: "OrderDate",
      key: "OrderDate",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (Status) => <Tag color={Status === "Pending" ? "blue" : Status === "Pending" ? "purple" : "orange"}>{Status}</Tag>,
    },
    {
      title: "Action",
      key: "Action",
      render: () => <Button type="link" icon={<EyeOutlined />} className="text-purple-600 hover:text-purple-800" onClick={showModal} />,
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md text-purple-700 py-3">
      {/* Header */}
      <div className="d-flex mb-4 px-3 flex flex-col sm:flex-row flex-wrap">
        <div className="d-flex items-center gap-2">
          {/* <ArrowLeftOutlined style={{ color: "#A25dEF" }} /> */}
          <h5 className="text-lg font-semibold" style={{ color: "#A25dEF" }}>
            Orders
          </h5>
        </div>
        <div className="ms-auto">
          <div className="d-flex gap-3 flex-lg-nowrap flex-wrap">
            <input type="text" className="form-control shadow-none bg-light border-0" placeholder="search" />
            <Button icon={<FilterOutlined />} className="bg-light border-0 px-2" style={{ color: "#A25dEF" }} />
            <select className="rounded bg-light px-2 py-1 text-sm border-0" style={{ color: "#A25dEF" }}>
              <option>0 Jun - 21 Feb</option>
              <option>This Week</option>
            </select>
            <select className="border-0 bg-light rounded px-2 py-1 text-sm" style={{ color: "#A25dEF" }}>
              <option>Restaurant</option>
              <option>Driver</option>
            </select>
            <select className="border-0 bg-light rounded px-2 py-1 text-sm" style={{ color: "#A25dEF" }}>
              <option>Pickup</option>
              <option>Driver</option>
            </select>
            <select className="border-0 bg-light rounded px-1 py-1 text-sm" style={{ color: "#A25dEF" }}>
              <option>All</option>
              <option>Driver</option>
            </select>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="container">
        <div className="row gy-3 justify-content-center mt-4">
          {/* Total Order */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "150px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-shopping-cart"></i> Total Order
                </div>
                <div className="text-xl font-bold">2801</div>
              </div>
            </a>
          </div>

          {/* Delivered Order */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "155px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-truck"></i> Delivered Order
                </div>
                <div className="text-xl font-bold">2601</div>
              </div>
            </a>
          </div>

          {/* Cancel Ordered */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "150px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-cut"></i> Cancel Ordered
                </div>
                <div className="text-xl font-bold">160</div>
              </div>
            </a>
          </div>

          {/* Returned Order */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "150px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-user"></i> Returned Order
                </div>
                <div className="text-xl font-bold">40</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-3">
        <div className="d-flex px-3 mb-2">
          <div></div>
          <div className="ms-auto">
            <select name="" id="" className="rounded-2 form-select shadow-none" style={{ color: "#A25dEF", border: "1px solid #A25def" }}>
              <option value="">Action</option>
              <option value="">All</option>
              <option value="">Pending</option>
              <option value="">Confirmed</option>
              <option value="">Preparing</option>
              <option value="">Ready For Pick</option>
              <option value="">Cancelled</option>
              <option value="">Return</option>
            </select>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          className="custom-table-header mt-2
            [&_.ant-table-thead>tr>th]:!bg-[#A25dEF]
            [&_.ant-table-thead>tr>th]:!text-white
            [&_.ant-pagination-item-active]:!bg-purple-100
            px-3
          "
        />

        {/* Modal */}
        <Modal title="Order Reviews" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Submit">
          <Form form={form} layout="vertical">
            <Form.Item name="OrderID" label="Order ID" rules={[{ required: true, message: "Please enter Order ID" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Seller" label="Seller" rules={[{ required: true, message: "Please enter Seller" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Customer" label="Customer" rules={[{ required: true, message: "Please enter Customer" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Amount" label="Amount" rules={[{ required: true, message: "Please enter Amount" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Payment" label="Payment" rules={[{ required: true, message: "Please enter Payment method" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="OrderDate" label="Order Date" rules={[{ required: true, message: "Please enter Order Date" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Status" label="Status" rules={[{ required: true, message: "Please enter Status" }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
