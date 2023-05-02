import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import courses from '../assets/data/products'

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import CoursesList from "../components/UI/CoursesList";

import ImagesGallery from "../components/image-gallery/ImagesGallery";

const Home = () => {
  /*đổi tên thanh tab khi chuyển trang, dùng helmet bên components*/

  const [trendingCourses, setTrendingCourses] = useState([]);
  const [bestSalesCourses, setBestSalesCourses] = useState([]);
  const [mobileCourses, setMobileCourses] = useState([]);
  const [wirelessCourses, setWirelessCourses] = useState([])
  
  const year =
    new Date().getFullYear(); /*Tạo mục giới thiệu đầu trang và nút đăng kí ngay */

    useEffect(()=>{
      const filterdTrendingCourses = courses.filter(item=> 
        item.category == "chair");

      const filterdBestSalesCourses = courses.filter(item=> 
        item.category == "sofa");

      const filterdMobileCourses = courses.filter(item=> 
        item.category == "mobile");

      const filterdWirelessCourses = courses.filter(item=> 
        item.category == "wireless");

      setTrendingCourses(filterdTrendingCourses);
      setBestSalesCourses(filterdBestSalesCourses);
      setMobileCourses(filterdMobileCourses);
      setWirelessCourses(filterdWirelessCourses);

    }, []);

  return (
    <Helmet title={"Home"}>

{/* Mục thứ nhất */}

      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="here_subtitle">Trending product in {year}</p>

                <h2>Make your interior more minimalistic & modern </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat nulla repellat quo eaque alias corposis sunt, facilis
                  nesciunt rem fugit!
                </p>
                {/* Tạo nút đăng kí ngay để chuyển đến trang Các khóa học */}
                <motion.button whileTap={{ scale: 1.2 }} className="sig_btn">
                  <Link to="/course">ĐĂNG KÍ NGAY</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

{/* Mục thứ hai */}

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Khóa học tiếng Anh</h2>
            </Col>

            <CoursesList data={trendingCourses} />
          </Row>
        </Container>
      </section>

{/* Mục thứ ba */}

      <section className="best_sale">
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Khóa học Piano, Organ</h2>
            </Col>

            <CoursesList data={bestSalesCourses} />
          </Row>
        </Container>
      </section>

{/* Mục thứ tư */ /* ========================dòng thêm ảnh - phụ */}

      <section className="new_gallery">
        <Container>
          <Row>
          <Col lg="12" className="text-center">
              <h2 className="section_title">Ảnh tham khảo</h2>
            </Col>
            <Col lg='12'>
              <ImagesGallery />
            </Col>

          </Row>
        </Container>
      </section>

{/* Mục thứ tư */}

      <section className="new_arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center">
              <h2 className="section_title">Sắp ra mắt</h2>
            </Col>

            <CoursesList data={mobileCourses} />
            <CoursesList data={wirelessCourses} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
