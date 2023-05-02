import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = ({ data }) => {
  return (
    <>
        {data?.map((item) => (
            <CourseCard item={item} />
        ))}
      
    </>
  );
};

export default CoursesList;
