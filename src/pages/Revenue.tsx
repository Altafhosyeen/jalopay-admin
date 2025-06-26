import React, { useState } from "react";
import { Table, Button, Tag, Modal, Form, Input } from "antd";
import { FilterOutlined,  EyeOutlined } from "@ant-design/icons";

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  ID: "Txn7456",
  Category: "Restaurant",
  Seller: "Altaf Hussain",
  OrderID: "6438",
  Revenue: "$120",
  Commission: "$12(10%)",
  NetRevenue: "$108",
  Status: "Pending",
  Action: "",
}));

export default function Revenue() {
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
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
    {
      title: "Seller",
      dataIndex: "Seller",
      key: "Seller",
    },
    {
      title: "OrderID",
      dataIndex: "OrderID",
      key: "OrderID",
    },
    {
      title: "Revenue",
      dataIndex: "Revenue",
      key: "Revenue",
    },
    {
      title: "Commission",
      dataIndex: "Commission",
      key: "Commission",
    },
    {
      title: "NetRevenue",
      dataIndex: "NetRevenue",
      key: "NetRevenue",
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
          <h5 className="text-lg font-semibold mt-2" style={{ color: "#A25dEF" }}>
            Total Revenue
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
              <option>Pending</option>
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
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "150px",
                  margin: "auto",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-shopping-cart"></i> Total Revenue
                </div>
                <div className="text-xl font-bold">$2801</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-3">
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} className="custom-table-header mt-4 px-3" />

        {/* Modal */}
        <Modal title="Total Revenue" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Submit">
          <Form form={form} layout="vertical">
            <Form.Item name="ID" label="ID" rules={[{ required: true, message: "Please enter ID" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Category" label="Category" rules={[{ required: true, message: "Please enter Category" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Seller" label="Seller" rules={[{ required: true, message: "Please enter Seller" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="OrderID" label="Order ID" rules={[{ required: true, message: "Please enter Order ID" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Revenue" label="Revenue" rules={[{ required: true, message: "Please enter Revenue" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Commission" label="Commission" rules={[{ required: true, message: "Please enter Commission" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="NetRevenue" label="Net Revenue" rules={[{ required: true, message: "Please enter Net Revenue" }]}>
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
