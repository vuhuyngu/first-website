import React from "react";

import { NavLink } from "react-router-dom";
import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/images/elearning-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";

const nav_links = [
  {
    path: "home",
    display: "Trang chủ",
  },

  {
    path: "course",
    display: "Các khóa học",
  },

  {
    path: "saved",
    display: "Đã lưu",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>E-P-DUNG</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="sav_icon">
                <i class="ri-heart-fill"></i>
                <span className="badge">1</span>
              </span>

              <span className="set_icon">
                <i class="ri-shopping-bag-fill"></i>
                <span className="badge">1</span>
              </span>

              <span>
                <motion.img whileTap={{ scale: 1.8 }} src={userIcon}    /*tạo hiệu ứng to nhỏ khi ấn vào nút tài khoản, sử dụng motion */
                alt="" />
              </span>
            </div>

            <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
