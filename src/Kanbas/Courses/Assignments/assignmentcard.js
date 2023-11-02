import React from "react";
import { Link } from "react-router-dom";

function Icon({ className, style, ...props }) {
  return <i className={className} style={style} {...props}></i>;
}

function AssignmentsCard({ courseAssignments, courseId }) {
  const iconStyle = { color: "#333333" };
  const bigIconStyle = { ...iconStyle, fontSize: "20px" };

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
              <Icon
                className="fa fa-plus"
                style={iconStyle}
                aria-hidden="true"
              />
              <Icon
                className="fa fa-ellipsis-v"
                style={iconStyle}
                aria-hidden="true"
              />
            </a>
          </li>
          {courseAssignments.map((assignment) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={assignment.id}
            >
              <Icon
                className="fa-solid fa-grip-vertical"
                style={bigIconStyle}
              />
              <Icon
                className="fa-solid fa-book"
                style={{ ...bigIconStyle, color: "#2a911d" }}
              />
              <div>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment.id}`}
                >
                  <h1>{assignment.title}</h1>
                </Link>
                <p>
                  {assignment.week} - Week starting on {assignment.startDate}{" "}
                  Module | <br />
                  {assignment.dueDate} | {assignment.points}
                </p>
              </div>
              <Icon
                className="fa fa-check-circle"
                style={{ ...bigIconStyle, color: "#198754" }}
                aria-hidden="true"
              />
              <Icon
                className="fa fa-ellipsis-v"
                style={bigIconStyle}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AssignmentsCard;
