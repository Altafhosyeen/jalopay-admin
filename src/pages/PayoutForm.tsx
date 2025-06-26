import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Button,
  Modal,
  Typography,
  Checkbox,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Container, Row, Col } from "react-bootstrap";

const { Title } = Typography;

const PayoutForm = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="row justify-content-center py-4">
        {/* Payment Method Form */}
        <div className="col-lg-12 mt-4">
          <Form layout="vertical" className="border rounded-2 p-3">
            <Title level={5} className="mb-4">
              Payment Method
            </Title>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>Credit Card</span>
                        <EditOutlined />
                      </div>
                    }
                    name="firstName"
                    className="mb-0"
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>Bank Transfer</span>
                        <EditOutlined />
                      </div>
                    }
                    name="secondName"
                    className="mb-0"
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center">
                        <span>Cash</span>
                        <EditOutlined />
                      </div>
                    }
                    name="dob"
                    className="mb-0"
                  >
                    <DatePicker placeholder="" className="w-100" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center ">
                        <span>Paypal</span>
                        <EditOutlined />
                      </div>
                    }
                    name="businessName"
                    className="mb-0"
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12}>
                <div className="border p-3 mb-4 shadow-sm rounded-2">
                  <Form.Item
                    label={
                      <div className="flex justify-between items-center ">
                        <span>Apply Pay</span>
                        <EditOutlined />
                      </div>
                    }
                    name="businessCategory"
                    className="mb-0"
                  >
                    <input type="text" className="form-control" />
                  </Form.Item>
                </div>
              </Col>
              <div>
                <Title level={5} className="mt-4">
                  Shop Status
                </Title>
                <Row className="gy-4 mt-2">
                  <Col lg={6} md={6} sm={12}>
                    <div className="border p-3 mb-4 shadow-sm rounded-2">
                      <Form.Item
                        label={
                          <div className="flex justify-between items-center">
                            <span>Delivery</span>
                            <EditOutlined />
                          </div>
                        }
                        name="vehicle1"
                        className="mb-0"
                        valuePropName="checked" // This ensures checkbox works with Form
                      >
                        <Checkbox value="Bike">Yes</Checkbox>
                        <Checkbox value="Bike">No</Checkbox>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="border p-3 mb-4 shadow-sm rounded-2">
                      <Form.Item
                        label={
                          <div className="flex justify-between items-center">
                            <span>Pickup</span>
                            <EditOutlined />
                          </div>
                        }
                        name="vehicle1"
                        className="mb-0"
                        valuePropName="checked" // This ensures checkbox works with Form
                      >
                        <Checkbox value="Bike">Yes</Checkbox>
                        <Checkbox value="Bike">No</Checkbox>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                    <div className="border p-3 mb-4 shadow-sm rounded-2">
                      <Form.Item
                        label={
                          <div className="flex justify-between items-center">
                            <span>Free Ride</span>
                            <EditOutlined />
                          </div>
                        }
                        name="vehicle1"
                        className="mb-0"
                        valuePropName="checked" // This ensures checkbox works with Form
                      >
                        <Checkbox value="Bike">Yes</Checkbox>
                        <Checkbox value="Bike">No</Checkbox>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PayoutForm;
