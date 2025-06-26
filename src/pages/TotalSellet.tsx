import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input } from "antd";
import {
  FilterOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { SCREEN_PATH } from "../constants";
import { Link } from "react-router-dom";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  ID: "R323-25",
  Name: "Talha Ashraf",
  Category: "Restaurant",
  Revenue: "$3967",
  NoofProduct: "17",
  Order: "965",
  Rating: "4.8/5",
  Status:
    index % 3 === 0 ? "Active" : index % 3 === 1 ? "InActive" : "En-Route",
  Action: "",
}));

export default function TotalSeller() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  console.log("ffffffffffffffff");
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
      dataIndex: "ID",
      key: "ID",
    },
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
      title: "NoofProduct",
      dataIndex: "NoofProduct",
      key: "NoofProduct",
    },
    {
      title: "Order",
      dataIndex: "Order",
      key: "Order",
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (Status) => (
        <Tag
          color={
            Status === "Pending"
              ? "blue"
              : Status === "Pending"
              ? "purple"
              : "orange"
          }
        >
          {Status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "Action",
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
    <div className="p-6 bg-white shadow-md rounded-md text-purple-700 py-3">
      {/* Header */}
      <div className="d-flex mb-4 px-3 flex flex-col sm:flex-row flex-wrap">
        <div className="d-flex items-center gap-2">
          {/* <ArrowLeftOutlined style={{ color: "#A25dEF" }} /> */}
          <h5 className="text-lg font-semibold" style={{ color: "#A25dEF" }}>
            Total Sellers
          </h5>
        </div>
        <div className="ms-auto">
          <div className="d-flex gap-3 flex-lg-nowrap flex-wrap">
            <input
              type="text"
              className="form-control shadow-none bg-light border-0"
              placeholder="search"
            />
            <Button
              icon={<FilterOutlined />}
              className="bg-light border-0 px-2"
              style={{ color: "#A25dEF" }}
            />
            <select
              className="rounded bg-light px-2 py-1 text-sm border-0"
              style={{ color: "#A25dEF" }}
            >
              <option>0 Jun - 21 Feb</option>
              <option>This Week</option>
            </select>
            <select
              className="border-0 bg-light rounded px-2 py-1 text-sm"
              style={{ color: "#A25dEF" }}
            >
              <option>Restaurant</option>
              <option>Driver</option>
            </select>
            <select
              className="border-0 bg-light rounded px-2 py-1 text-sm"
              style={{ color: "#A25dEF" }}
            >
              <option>Revenue</option>
              <option>shipping</option>
            </select>
            <select
              className="border-0 bg-light rounded px-1 py-1 text-sm"
              style={{ color: "#A25dEF" }}
            >
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
            <Link
              to={`${SCREEN_PATH.Seller_Management.pathname}/total-seller`}
              className="text-decoration-none"
            >
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "150px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-users"></i> Total Sellers
                </div>
                <div className="text-xl font-bold">120</div>
              </div>
            </Link>
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
                  <i className="fa fa-solid fa-user"></i> Active Sellers
                </div>
                <div className="text-xl font-bold">90</div>
              </div>
            </a>
          </div>

          {/* Cancel Ordered */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "170px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-clock-rotate-left"></i> Pending
                  Approve
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
                  <i className="fa fa-solid fa-star"></i> Average Rating
                </div>
                <div className="text-xl font-bold">4.6</div>
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
            <select
              name=""
              id=""
              className="rounded-2 form-select shadow-none"
              style={{ color: "#A25dEF", border: "1px solid #A25def" }}
            >
              <option value="">Action</option>
              <option value="">Active</option>
              <option value="">InActive</option>
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
        <Modal
          title="All Seller List"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="ID"
              label="ID"
              rules={[{ required: true, message: "Please enter ID" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Name"
              label="Name"
              rules={[{ required: true, message: "Please enter Name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Category"
              label="Category"
              rules={[{ required: true, message: "Please enter Category" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Revenue"
              label="Revenue"
              rules={[{ required: true, message: "Please enter Revenue" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="NoofProduct"
              label="No. of Products"
              rules={[
                { required: true, message: "Please enter No. of Products" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Order"
              label="Order"
              rules={[{ required: true, message: "Please enter Order" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Rating"
              label="Rating"
              rules={[{ required: true, message: "Please enter Rating" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Status"
              label="Status"
              rules={[{ required: true, message: "Please enter Status" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
