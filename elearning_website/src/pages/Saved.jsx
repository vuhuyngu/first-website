import React from "react";
import "../styles/saved.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { savedActions } from "../redux/slices/SavedSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Saved = () => {
  const savedItems = useSelector((state) => state.saved.savedItems);
  const totalAmount = useSelector((state) => state.saved.totalAmount);

  return (
    <Helmet title="Saved">
      <CommonSection title="Các khóa học đã lưu" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {savedItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  Không có khóa học nào được lưu
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Tên khóa học</th>
                      <th>Học phí</th>
                      <th>Qty</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>

                  <tbody>
                    {savedItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            {/* Chức năng tính tổng cộng giá tiền các khóa học muốn đăng kí trong một tháng (Lần đầu làm giống như một trang bán hàng) */}
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Tổng cộng

                  <span className="fs-4 fw-bold">{totalAmount}VNĐ</span>
                </h6>
                
              </div>
              <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
              <div>
              <button className="buy_btn w-100">
                  <Link to="/checkout">Tiến hành thanh toán</Link>
                </button>
                
                <button className="buy_btn w-100">
                  <Link to="/course">Tìm thêm khóa học</Link>
                </button>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteCourse = () => {
    dispatch(savedActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.courseName}</td>
      <td>{item.price}VNĐ/Tháng</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteCourse}
          class="ri-delete-bin-6-fill"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Saved;
