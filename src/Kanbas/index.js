import React, { useState } from "react";
import Menu from "./utilities/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import store from "./store";
import "./style.css";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, id: new Date().getTime().toString() },
    ]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c.id === course.id) {
          return course;
        } else {
          return c;
        }
      }),
    );
  };

  return (
    <div className="d-flex flex-row container-fluid">
      <Menu />
      <div className="body">
        <Provider store={store}>
          <Routes>
            <Route index element={<Navigate to="Dashboard" />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            ></Route>
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </Provider>
      </div>
    </div>
  );
}

export default Kanbas;
