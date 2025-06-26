import React, { useState } from "react";
import { Form, Input, InputNumber, DatePicker, Select, Button, Modal, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Container, Row, Col } from "react-bootstrap";

const { Title } = Typography;

const SellerForm = () => {
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
  const [isFieldModalOpen, setIsFieldModalOpen] = useState(false);
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);
  const [sectionForm] = Form.useForm();
  const [fieldForm] = Form.useForm();
  const [pageForm] = Form.useForm();

  // Section Modal Handlers
  const showSectionModal = () => setIsSectionModalOpen(true);
  const handleSectionCancel = () => {
    setIsSectionModalOpen(false);
    sectionForm.resetFields();
  };
  const handleSectionOk = () => {
    sectionForm
      .validateFields()
      .then((values) => {
        console.log("Section Form Values:", values);
        setIsSectionModalOpen(false);
        sectionForm.resetFields();
      })
      .catch((info) => {
        console.log("Section Validation Failed:", info);
      });
  };

  // Field Modal Handlers
  const showFieldModal = () => setIsFieldModalOpen(true);
  const handleFieldCancel = () => {
    setIsFieldModalOpen(false);
    fieldForm.resetFields();
  };
  const handleFieldOk = () => {
    fieldForm
      .validateFields()
      .then((values) => {
        console.log("Field Form Values:", values);
        setIsFieldModalOpen(false);
        fieldForm.resetFields();
      })
      .catch((info) => {
        console.log("Field Validation Failed:", info);
      });
  };

  //  Page Modal Handler
  const showPageModal = () => setIsPageModalOpen(true);
  const handlePageCancel = () => {
    setIsPageModalOpen(false);
    pageForm.resetFields();
  };

  const handlePageOk = () => {
    pageForm
      .validateFields()
      .then((values) => {
        console.log("Page Form Values:", values);
        setIsPageModalOpen(false);
        pageForm.resetFields();
      })
      .catch((info) => {
        console.log("Page Validation Failed:", info);
      });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="row justify-content-center">
        <div className="d-flex gap-2 justify-content-end">
          <button className="btn border rounded-pill px-4" onClick={showSectionModal}>
            + Add Section
          </button>
          <button className="btn border rounded-pill px-4" onClick={showPageModal}>
            + Add Page
          </button>
        </div>

        {/* Add Section Modal */}
        <Modal
          title={<span style={{ color: "#A25EDF" }}>Add New Section</span>}
          open={isSectionModalOpen}
          onOk={handleSectionOk}
          onCancel={handleSectionCancel}
          okText="Save"
          cancelText="Cancel"
          okButtonProps={{ className: "bg-purple-600 hover:bg-purple-700 text-white" }}
        >
          <Form layout="vertical" form={sectionForm}>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Section Title</span>} name="sectionTitle" rules={[{ required: true, message: "Please enter section title" }]}>
              <Input placeholder="Enter Section Title" />
            </Form.Item>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Section Description</span>} name="sectionDescription">
              <Input.TextArea rows={3} placeholder="Enter Section Description" />
            </Form.Item>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Section Placement</span>} name="sectionPlacement" rules={[{ required: true, message: "Please select section placement" }]}>
              <Select placeholder="Select Placement">
                <Select.Option value="top">Top</Select.Option>
                <Select.Option value="middle">Middle</Select.Option>
                <Select.Option value="bottom">Bottom</Select.Option>
              </Select>
            </Form.Item>
            <div>
              <button onClick={showFieldModal} className="btn btn-sm rounded-pill px-4" style={{ border: "1px solid #A25EDF", color: "#A25EDF" }}>
                + Add Field
              </button>
            </div>
          </Form>
        </Modal>

        {/* Add Field Modal */}
        <Modal
          title={<span className="text-purple-600 font-semibold">Add New Field</span>}
          open={isFieldModalOpen}
          onOk={handleFieldOk}
          onCancel={handleFieldCancel}
          okText="Add Field"
          cancelText="Cancel"
          okButtonProps={{ className: "bg-purple-600 hover:bg-purple-700 text-white" }}
        >
          <Form layout="vertical" form={fieldForm}>
            <Form.Item label={<span className="text-purple-500">Field Name</span>} name="fieldName" rules={[{ required: true, message: "Please enter field name" }]}>
              <Input placeholder="Enter Field Name" />
            </Form.Item>
            <Form.Item label={<span className="text-purple-500">Field Type</span>} name="fieldType" rules={[{ required: true, message: "Please select field type" }]}>
              <Select placeholder="Select Field Type">
                <Select.Option value="text">Text</Select.Option>
                <Select.Option value="number">Number</Select.Option>
                <Select.Option value="date">Date</Select.Option>
                <Select.Option value="select">Select</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={<span className="text-purple-500">Placeholder Text</span>} name="placeholder">
              <Input placeholder="Enter Placeholder" />
            </Form.Item>
            <div className="p-4 mb-4" style={{ backgroundColor: "#E3DCEF" }}>
              <h4 className="text-purple-700 mb-3 font-semibold">Validation Rules</h4>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item label="Minimum Length" name="minLength">
                  <InputNumber className="w-100" min={0} placeholder="Min" />
                </Form.Item>
                <Form.Item label="Maximum Length" name="maxLength">
                  <InputNumber className="w-100" min={1} placeholder="Max" />
                </Form.Item>
              </div>
            </div>
            <Form.Item label={<span className="text-purple-500">Helper Text</span>} name="helperText">
              <Input placeholder="Enter Helper Text" />
            </Form.Item>
            <Form.Item label={<span className="text-purple-500">Default Value</span>} name="defaultValue">
              <Input placeholder="Enter Default Value" />
            </Form.Item>
            <Form.Item label={<span className="text-purple-500">Field Position</span>} name="fieldPosition">
              <Select placeholder="Select Field Position">
                <Select.Option value="top">Top</Select.Option>
                <Select.Option value="middle">Middle</Select.Option>
                <Select.Option value="bottom">Bottom</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        {/* Add Page Modal */}
        <Modal
          title={<span style={{ color: "#A25EDF" }}>Add New Page</span>}
          open={isPageModalOpen}
          onOk={handlePageOk}
          onCancel={handlePageCancel}
          okText="Save"
          cancelText="Cancel"
          okButtonProps={{ className: "bg-purple-600 hover:bg-purple-700 text-white" }}
        >
          <Form layout="vertical" form={pageForm}>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Page Title</span>} name="pageTitle" rules={[{ required: true, message: "Please enter page title" }]}>
              <Input placeholder="Enter Page Title" />
            </Form.Item>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Page Description</span>} name="pageDescription">
              <Input.TextArea rows={3} placeholder="Enter Page Description" />
            </Form.Item>
            <Form.Item label={<span style={{ color: "#A25EDF" }}>Page Order</span>} name="pageOrder" rules={[{ required: true, message: "Please enter page order" }]}>
              <InputNumber className="w-100" placeholder="Enter Order" min={1} />
            </Form.Item>
          </Form>
        </Modal>

        {/* Seller Info Form */}
        <div className="col-lg-12 mt-4">
          <Form layout="vertical" className="border rounded-2 p-3">
            <Title level={5} className="mb-4">
              Seller Info
            </Title>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>First Name</span>
                        <EditOutlined />
                      </div>
                    }
                    name="firstName"
                    className="mb-0"
                  >
                    <Input placeholder="Enter First Name" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>Second Name</span>
                        <EditOutlined />
                      </div>
                    }
                    name="secondName"
                    className="mb-0"
                  >
                    <Input placeholder="Enter Second Name" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>Date Of Birth</span>
                        <EditOutlined />
                      </div>
                    }
                    name="dob"
                    className="mb-0"
                  >
                    <DatePicker placeholder="Enter D.O.B" className="w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center text-purple-500">
                        <span>Business Name</span>
                        <EditOutlined />
                      </div>
                    }
                    name="businessName"
                    className="mb-0"
                  >
                    <Input placeholder="Enter Business Name" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center text-purple-500">
                        <span>Business Category</span>
                        <EditOutlined />
                      </div>
                    }
                    name="businessCategory"
                    className="mb-0"
                  >
                    <Select placeholder="Select Business Category">
                      <Select.Option value="retail">Retail</Select.Option>
                      <Select.Option value="service">Service</Select.Option>
                      <Select.Option value="other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
