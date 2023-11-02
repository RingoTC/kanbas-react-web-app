import React from "react";
import { Link, Navigate } from "react-router-dom";
import CourseCard from "../utilities/components/CourseCard";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const editCourse = (id) => {
    const selectedCourse = courses.find((course) => course.id === id);
    setCourse(selectedCourse);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Add New Course</h3>
      <form>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={course.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="number"
            placeholder="Course Number"
            value={course.number}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="startDate"
            value={course.startDate}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="endDate"
            value={course.endDate}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        {course.id ? (
          <button
            type="button"
            onClick={updateCourse}
            className="btn btn-primary"
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            onClick={addNewCourse}
            className="btn btn-success"
          >
            Add Course
          </button>
        )}
      </form>

      <h3>Published Courses</h3>
      <div className="dashboard-body courses d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div key={course.id} className="course-card card course">
            <CourseCard
              name={course.name}
              description={course.description}
              id={course.id}
            />
            <div className="btn-group">
              <button
                onClick={() => editCourse(course.id)}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(course.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
