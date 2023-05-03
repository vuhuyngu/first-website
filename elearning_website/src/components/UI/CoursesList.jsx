import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = ({ data }) => {
  return (
    <>
        {data?.map((item, index) => (
            <CourseCard item={item} key={index}/>
        ))}
      
    </>
  );
};

export default CoursesList;
