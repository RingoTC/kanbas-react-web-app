import React from "react";
import { Link } from "react-router-dom";
import db from "../database/index.js";
import CourseCard from "../utilities/components/CourseCard";

function Dashboard() {
  return (
    <div className="d-flex mb-3 flex-column main">
      <header className="p-2 row header">
        <div className="col-5 title d-flex align-items-center">
          <h2>Dashboard</h2>
        </div>
        <hr />
      </header>
      <section className="p-2 dashboard row">
        <div className="dashboard-header">
          <h3>Published Courses(24)</h3>
        </div>
        <hr />
        <div className="dashboard-body courses d-flex flex-row flex-wrap">
          {db.courses.map((course) => (
            <CourseCard
              key={course._id}
              name={course.name}
              description={course.description}
              id={course._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
