import React from "react";
import "./footer.css";
// import logo from "../../assets/images/elearning-logo.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1 className="text-white">E-P-DUNG</h1>
              </div>
            </div>

            <p className="footer_text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, aliquid quo harum repudiandae quibusdam molestiae? Nulla
              provident, vitae dolorum impedit itaque.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Khóa học sắp tới</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Tiếng Anh</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Piano & Organ</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Dịch vụ dịch thuật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Các khóa học</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Đã lưu</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Đăng nhập</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chính sách bảo mật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Liên hệ</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 
                d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  <p>15A Phan Đình Phùng, P1, Đà Lạt</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0
                d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <p>+84382776157</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0
                d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-fill"></i>
                  </span>
                  <p>2011410@dlu.edu.vn</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright">
              Copyright {year} developed by Vuhuyngu. All rights reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
