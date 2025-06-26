import React, { useState } from "react";
import { Table, Button , Modal, Form, Input } from "antd";
import { FilterOutlined, ArrowLeftOutlined, EyeOutlined } from "@ant-design/icons";
;

const data = Array.from({ length: 13 }).map((_, index) => ({
  key: index,
  Name: "Talha Ashraf",
  Revenue: "&6534",
  Orders: "986",
  AvgRating: "4.8/5",
  TotalRevinue: "32%",
  Status: "Active",
  Action: "",
}));

export default function Category() {
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
      title: "Avg.Rating",
      dataIndex: "AvgRating",
      key: "AvgRating",
    },

    {
      title: "TotalRevinue",
      dataIndex: "TotalRevinue",
      key: "TotalRevinue",
    },

    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
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
          <ArrowLeftOutlined style={{ color: "#A25dEF" }} />
          <h5 className="text-lg font-semibold mt-1" style={{ color: "#A25dEF" }}>
            All Categories
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
              <option>Driver</option>
            </select>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="container">
        <div className="row gy-3 justify-content-center mt-4">
          {/* Total Order */}
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "180px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-envelope"></i> Total Revenue of All Categories
                </div>
                <div className="text-xl font-bold">$330, 422</div>
              </div>
            </a>
          </div>

          {/* Delivered Order */}
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <a href="" className="text-decoration-none">
              <div
                className="text-center px-2 py-2 rounded-4"
                style={{
                  width: "165px",
                  color: "#A25dEF",
                  border: "1px solid #A25dEF",
                }}
              >
                <div className="font-semibold">
                  <i className="fa fa-solid fa-database"></i> Highest Earning Category
                </div>
                <div className="text-xl font-bold">%876, 433</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-3">
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
        <Modal title="Category Overview" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Submit">
          <Form form={form} layout="vertical">
            <Form.Item name="Name" label="Name" rules={[{ required: true, message: "Please enter Name" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Revenue" label="Revenue" rules={[{ required: true, message: "Please enter Revenue" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Orders" label="Orders" rules={[{ required: true, message: "Please enter Orders" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="AvgRating" label="Avg. Rating" rules={[{ required: true, message: "Please enter Avg. Rating" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="TotalRevinue" label="Total Revenue" rules={[{ required: true, message: "Please enter Total Revenue" }]}>
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
