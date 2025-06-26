import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input, Select } from "antd";
import { FilterOutlined, EyeOutlined } from "@ant-design/icons";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  ID: "RP-8683",
  Name: "Quick Ride",
  NoOfCar: "15",
  NoOfDriver: "15",
  TotalRiders: "168",
  Revenue: "$956",
  AvgRating: "4.8/5",
  Status: index % 3 === 0 ? "Active" : index % 3 === 1 ? "InActive" : "En-Route",
  Action: "",
}));

export default function RidePartner() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Form Values:", values);
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      title: "No.Of.Cars",
      dataIndex: "NoOfCar",
      key: "NoOfCar",
    },
    {
      title: "No.Of.Driver",
      dataIndex: "NoOfDriver",
      key: "NoOfDriver",
    },
    {
      title: "Total Riders",
      dataIndex: "TotalRiders",
      key: "TotalRiders",
    },
    {
      title: "Revenue",
      dataIndex: "Revenue",
      key: "Revenue",
    },
    {
      title: "Avg Rating",
      dataIndex: "AvgRating",
      key: "AvgRating",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (Status) => <Tag color={Status === "Active" ? "blue" : Status === "InActive" ? "red" : "orange"}>{Status}</Tag>,
    },
    {
      title: "Action",
      key: "Action",
      render: () => <Button type="link" icon={<EyeOutlined />} className="text-purple-600 hover:text-purple-800" onClick={showModal} />,
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md text-purple-700">
      {/* Header */}
      <div className="d-flex mb-4 px-3 flex flex-col sm:flex-row flex-wrap">
        <div className="d-flex items-center gap-2">
          <h5 className="text-lg font-semibold" style={{ color: "#A25dEF" }}>
            All Ride Partners
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
              <option>Revenue</option>
              <option>Shipping</option>
            </select>
            <select className="border-0 bg-light rounded px-1 py-1 text-sm" style={{ color: "#A25dEF" }}>
              <option>All</option>
              <option>Driver</option>
            </select>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="container">
        <div className="row gy-3 justify-content-center mt-4">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="text-center px-2 py-2 rounded-4" style={{ width: "190px", color: "#A25dEF", border: "1px solid #A25dEF" }}>
              <div className="font-semibold">
                <i className="fa fa-solid fa-users"></i> Total Ride Partners
              </div>
              <div className="text-xl font-bold">120</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="text-center px-2 py-2 rounded-4" style={{ width: "190px", color: "#A25dEF", border: "1px solid #A25dEF" }}>
              <div className="font-semibold">
                <i className="fa-regular fa-user"></i> Active Ride Partners
              </div>
              <div className="text-xl font-bold">100</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="text-center px-2 py-2 rounded-4" style={{ width: "170px", color: "#A25dEF", border: "1px solid #A25dEF" }}>
              <div className="font-semibold">
                <i className="fa fa-solid fa-car"></i> Total Rides
              </div>
              <div className="text-xl font-bold">1250</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="text-center px-2 py-2 rounded-4" style={{ width: "150px", color: "#A25dEF", border: "1px solid #A25dEF" }}>
              <div className="font-semibold">
                <i className="fa fa-solid fa-clock"></i> Total Revenue
              </div>
              <div className="text-xl font-bold">120</div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-3">
        <div className="d-flex px-3 mb-2">
          <div className="ms-auto">
            <select className="rounded-2 form-select shadow-none" style={{ color: "#A25dEF", border: "1px solid #A25def" }}>
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
            px-3"
        />

        {/* Modal */}
        <Modal title="All Ride List" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Submit">
          <Form form={form} layout="vertical">
            <Form.Item name="ID" label="ID" rules={[{ required: true, message: "Please enter ID" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="Name" label="Name" rules={[{ required: true, message: "Please enter Name" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="NoOfCar" label="No. of Cars" rules={[{ required: true, message: "Please enter No. of Cars" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="NoOfDriver" label="No. of Drivers" rules={[{ required: true, message: "Please enter No. of Drivers" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="TotalRiders" label="Total Riders" rules={[{ required: true, message: "Please enter Total Riders" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="Revenue" label="Revenue" rules={[{ required: true, message: "Please enter Revenue" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="AvgRating" label="Average Rating" rules={[{ required: true, message: "Please enter Average Rating" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="Status" label="Status" rules={[{ required: true, message: "Please enter Status" }]}>
              <Select placeholder="Select Status">
                <Select.Option value="Active">Active</Select.Option>
                <Select.Option value="InActive">InActive</Select.Option>
                <Select.Option value="Pending">Pending</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
