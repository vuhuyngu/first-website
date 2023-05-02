import React from "react";

import { motion } from "framer-motion";
import "../../styles/courses-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const CourseCard = ({item}) => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="course_item">
        <div className="course_img"> 
          <motion.img whileHover={{ scale: 1.1 }} src={item.imgUrl} alt="" />     {/* Tạo hiệu ứng khi di chuột vào khóa học */}
        </div>
        <div className="p-2 course_info">
        <h3 className="course_name">
          <Link to={`/shop/${item.id}`}>
            {item.courseName}
          </Link>
        </h3>
        <span>{item.category}</span>
        </div>
        <div className="course_card-bottom 
        d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}>   {/* Tạo hiệu ứng khi ấn chuột vào nút thêm "+" */}
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default CourseCard;
