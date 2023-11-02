import React, { useState, useEffect } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import Menu from "../utilities/Menu";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Sidebar from "../utilities/Sidebar";
import Grades from "./Grades";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === courseId);
  return (
    <div className="d-flex mb-3 flex-column main">
      <Menu />
      <div className="row">
        <div className="p-2 row header">
          <div className="col-12 title d-flex flex-row flex-wrap align-items-center">
            <i className="fa-solid fa-bars sidebar-button"></i>
            <nav aria-label="breadcrumb align-self-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">{course.name}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Assignments
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row p-2 assignments">
        <div className="container-fluid sidebar col-2">
          <p className="decription">202310 2 Fall 2022 Semester</p>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
