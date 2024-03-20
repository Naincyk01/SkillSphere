import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
// import Explore from "../pages/Explore";
// import About from "../pages/About"
// import Blog from "../pages/Blog"
// import Certification from "../pages/Certification"
// import CourseCreation from "../pages/CourseCreation"
// import Login from "../pages/Login"
import Job from "../pages/Job"
import People from "../pages/People"
import Statistics from "../pages/Statistics"
import Course from "../pages/Course"

const  Routers = () => {
  return (
    <Routes>
     <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/course" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/statistics" element={<Statistics/>} />
      <Route path="/job" element={<Job/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/home" element={<Home/>} />
      {/* <Route path="/about" element={<About/>} /> */}
      {/* <Route path="/blog" element={<Blog/>} /> */}
      {/* <Route path="/login" element={<Login/>} /> */}
      {/* <Route path="/certification" element={<Certification/>} /> */}
      {/* <Route path="/coursecreation" element={<CourseCreation/>} /> */}
    </Routes>
  );
};

export default Routers;