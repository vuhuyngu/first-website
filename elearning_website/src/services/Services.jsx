import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import "./services.css";

import serviceData from "../assets/data/serviceData";

const Services = () => {
  /*Tạo mục giới thiệu các tiêu chí*/
  return (
    <section className="services">
      <Container>
        <Row>
          {/* Tạo các tiêu chí, lấy từ mục data  */}
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
// Tạo hiệu ứng to nhỏ khi di chuột giống như biểu tượng tài khoản
                whileHover={{ scale: 1.3 }}
// Tạo màu nền tiêu chí ngẫu nhiên từ $ 
                className="service_item"
                style={{ background: `${item.bg}` }}    
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
