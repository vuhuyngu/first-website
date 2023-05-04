import React from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import courses from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((item) => item.id == id);

  const { imgUrl, courseName, price, avgRating, review, description } = course;

  return (
    <Helmet>
      <CommonSection />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CourseDetails;
