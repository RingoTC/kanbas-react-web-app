import React from "react";
import { Link } from "react-router-dom";

function AssignmentsCard({ courseAssignments, courseId }) {
  return (
    <div className="assignments-card mt-5">
      <div className="assignments-card-body">
        <ul className="list-group flex-column">
          <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
            Assignments
            <a>
              <span className="badge rounded-pill text-bg-secondary">
                40% of Total
              </span>
              <i
                className="fa fa-plus"
                style={{ color: "#333333" }}
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-ellipsis-v"
                style={{ color: "#333333" }}
                aria-hidden="true"
              ></i>
            </a>
          </li>
          {courseAssignments.map((assignment) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={assignment._id}
            >
              <i
                className="fa-solid fa-grip-vertical"
                style={{ fontSize: "20px" }}
              ></i>
              <i
                className="fa-solid fa-book"
                style={{ color: "#2a911d", fontSize: "20px" }}
              ></i>
              <div>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <h1>{assignment.title}</h1>
                </Link>
                <p>
                  {assignment.week} - Week starting on {assignment.startDate}{" "}
                  Module | <br />
                  {assignment.dueDate} | {assignment.points}
                </p>
              </div>
              <i
                className="fa fa-check-circle"
                style={{ color: "#198754", fontSize: "20px" }}
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-ellipsis-v"
                style={{ color: "#333333", fontSize: "20px" }}
                aria-hidden="true"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AssignmentsCard;
