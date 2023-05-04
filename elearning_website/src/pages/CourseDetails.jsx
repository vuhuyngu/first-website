import React, { useState, useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import courses from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/course-details.css";
import { motion } from "framer-motion";
import CoursesList from "../components/UI/CoursesList";
import { useDispatch } from "react-redux";
import { savedActions } from "../redux/slices/SavedSlice";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [raging, setRating] = useState(null);
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  const {
    imgUrl,
    courseName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = course;

  const relatedCourses = courses.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addtoSaved = () => {
    dispatch(
      savedActions.addItem({
        id,
        image: imgUrl,
        courseName,
        price,
      })
    );

    toast.success('Khóa học đã được thêm vào mục Đã lưu')
  };

  return (
    <Helmet title={courseName}>
      <CommonSection title={courseName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="course_details">
                <h2>{courseName}</h2>
                <div className="course_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span onClick={() => setRating(1)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(2)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span>ratings)
                  </p>
                </div>

                {/* Giá tiền khóa học */}
                <div className="d-flex align-items-center gap-5">
                  <span className="course_price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn"
                  onClick={addtoSaved}
                >
                  Thêm vào mục Đã lưu
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content mt-4">
                  {" "}
                  {/* Mục mô tả chi tiết sản phẩm */}
                  <p>{description}</p>
                </div>
              ) : (
                <div className="course_preview mt-4">
                  {" "}
                  {/* Mục mô tả đánh giá sản phẩm */}
                  <div className="review_wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li kew={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review_form">
                      <h4>Hãy cho biết trải nghiệm của bạn</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Gõ tên..."
                            ref={reviewUser}
                          />
                        </div>

                        <div className="form_group d-flex align-items-center gap-4">
                          <span>
                            1<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            2<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            3<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <div className="form_group">
                          <textarea
                            ref={reviewMsg}
                            row={4}
                            type="text"
                            placeholder="Viết mô tả..."
                          />
                        </div>

                        <button type="submit" className="buy_btn">
                          Gửi
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">Có thể bạn quan tâm</h2>
            </Col>

            <CoursesList data={relatedCourses} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CourseDetails;
