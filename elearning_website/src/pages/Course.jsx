import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/course.css";

import courses from "../assets/data/products";
import CoursesList from "../components/UI/CoursesList";

const Course = () => {
  const [coursesData, setCoursesData] = useState(courses);

  // Mục tìm kiếm theo danh sách
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterdCourses = courses.filter((item) => item.category == "sofa");

      setCoursesData(filterdCourses);
    }

    if (filterValue === "chair") {
      const filterdCourses = courses.filter((item) => item.category == "chair");

      setCoursesData(filterdCourses);
    }

    if (filterValue === "mobile") {
      const filterdCourses = courses.filter(
        (item) => item.category == "mobile"
      );

      setCoursesData(filterdCourses);
    }

    if (filterValue === "watch") {
      const filterdCourses = courses.filter((item) => item.category == "watch");

      setCoursesData(filterdCourses);
    }

    if (filterValue === "wireless") {
      const filterdCourses = courses.filter(
        (item) => item.category === "wireless"
      );

      setCoursesData(filterdCourses);
    }
  };

  // Mục tìm kiếm theo thanh tìm kiếm
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedCourses = courses.filter((item) =>
      item.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCoursesData(searchedCourses);
  };

  return (
    <Helmet title="Course">
      <CommonSection title="Tổng hợp các khóa học" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Piano và Organ</option>
                  <option value="mobile">Tiếng Anh (người lớn)</option>
                  <option value="chair">Tiếng Anh (học sinh)</option>
                  <option value="watch">Dịch thuật</option>
                  <option value="wireless">Tiếng Pháp</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="3">
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {coursesData.length === 0 ? (
              <h1 className="text-center fs-2">Không tìm thấy khóa học!</h1>
            ) : (
              <CoursesList data={coursesData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Course;
