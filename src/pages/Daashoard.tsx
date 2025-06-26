import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Divider } from "antd";
import { SCREEN_PATH } from "../constants";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const data = [
    { day: "Mon", ride: 100 },
    { day: "Tue", ride: 90 },
    { day: "Wed", ride: 95 },
    { day: "Thu", ride: 110 },
    { day: "Fri", ride: 85 },
    { day: "Sat", ride: 120 },
    { day: "Sun", ride: 80 },
  ];
  return (
    <section className="">
      <div className="py-5">
        <h1 className="text-center">Welcome to Dashboard</h1>
      </div>
      <div>
        <Container>
          <Row className="gy-3">
            <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
              <Link to="/Dashboard/Active-Booking" className="text-decoration-none">
                <div
                  className="card rounded-4"
                  style={{ border: "2px solid #A25EDF", color: "#A25EDF" }}
                >
                  <div className="card-body">
                    <i className="fa fa-solid fa-user"></i>
                    <div>
                      <h6>Active Bookings</h6>
                      <span>784</span>
                      <div className="d-flex">
                        <p>
                          <span className="text-success fw-bold">6.02</span>{" "}
                          From Jan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
              <Link to="/Dashboard/Active-Seller" className="text-decoration-none">
                <div
                  className="card rounded-4"
                  style={{ border: "2px solid #A25EDF", color: "#A25EDF" }}
                >
                  <div className="card-body">
                    <i className="fa fa-solid fa-car"></i>
                    <div>
                      <h6>Active Seller</h6>
                      <span>120</span>
                      <div className="d-flex">
                        <p>
                          <span className="text-danger fw-bold">0.32</span> From
                          Jan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
              <Link to="/Dashboard/Order" className="text-decoration-none">
                <div
                    className="card rounded-4"
                    style={{ border: "2px solid #A25EDF", color: "#A25EDF" }}
                  >
                    <div className="card-body">
                      <i className="fa fa-solid fa-cancel"></i>
                      <div>
                        <h6>Total Order</h6>
                        <span>2341</span>
                        <div className="d-flex">
                          <p>
                            <span className="text-danger fw-bold">0.32</span> From
                            Jan
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </Link>
            </Col>
            <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
             <Link to="/Dashboard/Revenue" className="text-decoration-none">
              <div
                className="card rounded-4"
                style={{ border: "2px solid #A25EDF", color: "#A25EDF" }}
              >
                <div className="card-body">
                  <i className="fa fa-solid fa-dollar"></i>
                  <div>
                    <h6>Revenue</h6>
                    <span>&30,422</span>
                    <div className="d-flex">
                      <p>
                        <span className="text-danger fw-bold">6.02</span> From
                        Jan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             </Link>
            </Col>
          </Row>
          <Row className="gy-3 mt-3">
            <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="card border-0 h-100"
                style={{ background: "#F9F5FF" }}
              >
                <div className="p-3">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-purple-600 font-semibold text-sm">
                      Active jalopay.Pro App USers
                    </h2>
                    <select name="" id="" className="bg-transparent">
                      <option value="">8 jan - 2 dec</option>
                      <option value="">8 jan - 2 dec</option>
                      <option value="">8 jan - 2 dec</option>
                    </select>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                      data={data}
                      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorRide"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#a855f7"
                            stopOpacity={0.6}
                          />
                          <stop
                            offset="70%"
                            stopColor="#a855f7"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="ride"
                        stroke="#a855f7"
                        fill="url(#colorRide)"
                        strokeWidth={1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            {/* <Col className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="card p-2" style={{ color: "#A25EDF" }}>
                <div className="card-body">
                  <h5>Requested Rides</h5>
                  <div>
                    <Divider orientation="right" plain>
                      <button className="btn border-warning text-warning btn-sm">
                        Requested
                      </button>
                      <span
                        className="ms-2 fw-bold"
                        style={{ color: "#A25EDF" }}
                      >
                        In Process
                      </span>
                    </Divider>
                    <div className="d-flex">
                      <div className="d-flex gap-3">
                      <i className="fa fa-solid fa-circle-dot mt-1"></i> 20:35
                      <p>Abc, Xyz</p>
                    </div>
                    <div className="ms-auto me-5">
                      <i className="fa fa-solid fa-car"></i> Seedan
                    </div>
                    </div>
                    <div className="d-flex mt-1">
                      <div className="d-flex gap-3">
                      <i className="fa fa-solid fa-location-dot mt-1"></i> 20:35
                      <p>Abc, Xyz</p>
                    </div>
                    <div className="ms-auto me-5">
                      <i className="fa fa-solid fa-gun"></i> 4.5 KM
                    </div>
                    </div>
                    <Divider orientation="right" plain>
                      <button className="btn border-warning text-warning btn-sm">
                        Requested
                      </button>
                      <span
                        className="ms-2 fw-bold"
                        style={{ color: "#A25EDF" }}
                      >
                        In Process
                      </span>
                    </Divider>
                    <div className="d-flex">
                      <div className="d-flex gap-3">
                      <i className="fa fa-solid fa-circle-dot mt-1"></i> 20:35
                      <p>Abc, Xyz</p>
                    </div>
                    <div className="ms-auto me-5">
                      <i className="fa fa-solid fa-car"></i> Seedan
                    </div>
                    </div>
                    <div className="d-flex mt-1">
                      <div className="d-flex gap-3">
                      <i className="fa fa-solid fa-location-dot mt-1"></i> 20:35
                      <p>Abc, Xyz</p>
                    </div>
                    <div className="ms-auto me-5">
                      <i className="fa fa-solid fa-gun"></i> 4.5 KM
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col> */}
          </Row>
          <Row className="gy-3 mt-3">
            <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="card p-2 border-0"
                style={{ background: "#F9F5FF", color: "#A25EDF" }}
              >
                <div className="card-body">
                  <h2 className="fw-bold">Top Products</h2>
                  <div className="d-flex mt-5">
                    <div>
                      <h5 className="fw-bold">Devine Dine</h5>
                      <span>Devine@gmail.com</span>
                    </div>
                    <div className="ms-auto">
                      <span>$3067</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="card p-2 border-0 h-100"
                style={{ background: "#F9F5FF", color: "#A25EDF" }}
              >
                <div className="card-body">
                  <h2 className="fw-bold">Top Sellers</h2>
                  <div className="d-flex mt-5">
                    <div>
                      <h5 className="fw-bold">Restaurant</h5>
                    </div>
                    <div className="ms-auto">
                      <span>$53423</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
