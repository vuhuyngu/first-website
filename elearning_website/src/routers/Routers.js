import { Routes, Route, Navigate } from "react-router-dom"


import Home from "../pages/Home"
import Course from "../pages/Course"
import Saved from "../pages/Saved"
import CourseDetails from "../pages/CourseDetails"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path="home" element={<Home/>} />
    <Route path="course" element={<Course/>} />
    <Route path="course/:id" element={<CourseDetails/>} />
    <Route path="saved" element={<Saved/>} />
    <Route path="checkout" element={<Checkout/>} />
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
  </Routes>
  );
};

export default Routers;