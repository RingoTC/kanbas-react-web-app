import React, { useState, useEffect } from "react";
import Menu from "./utilities/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import "./style.css";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    course["_id"] = new Date().getTime();
    const response = await axios.post(URL, course);
    setCourses([...courses, response.data]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
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
