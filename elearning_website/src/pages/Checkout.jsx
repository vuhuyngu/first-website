import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector(state=>state.saved.totalQuantity)
  const totalAmount = useSelector(state=>state.saved.totalAmount)
  
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Tên..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Email..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="SĐT..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Địa chỉ..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Thành phố..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Mã bưu chính..." />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Quốc gia..." />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout_saved">
                <h6>
                  Số lượng khóa học: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Tổng số tiền ban đầu: <span>{totalAmount}VNĐ</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    Free Shipping
                  </span>
                  <span>0VNĐ</span>
                </h6>

                <h4>
                  Tổng cộng: <span>{totalAmount}VNĐ</span>
                </h4>

                <h5>
                <button className="buy_btn auth_btn w-100">
                  Place an order
                </button>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
