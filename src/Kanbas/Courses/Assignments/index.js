import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import db from "../../Database/index.js";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBook, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  setAssignment,
  setAssignments,
  deleteAssignment,
} from "./assignmentsReducer";
import * as client from "./client";
import { findAssignmentsForCourse } from "./client";

function Assignments() {
  const { courseId } = useParams();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);

  return (
    <div>
      <div className="flex-grow-1">
        <div className="d-flex flex-row">
          <div className="search flex-grow-1">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search for an Assignment"
            />
          </div>
          <div className="d-flex float-end main-content-control">
            <div className="flex-grow-1"></div>
            <button className="btn">
              <FaPlus />
              Group
            </button>
            <button
              onClick={() =>
                dispatch(
                  setAssignment({
                    name: "New Assignment",
                    description: "New Assignment",
                    dueDate: "2023-12-12T23:59:00Z",
                    availableFromDate: "2023-12-12T23:59:00Z",
                    availableUntilDate: "2023-12-12T23:59:00Z",
                    course: courseId,
                  }),
                  window.location.assign(
                    `/#/Kanbas/Courses/${courseId}/Assignments/New`,
                  ),
                )
              }
              className="btn btn-danger"
            >
              <FaPlus />
              Assignment
            </button>
            <button className="btn">
              <FaEllipsisVertical />
            </button>
          </div>
        </div>

        <hr />
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">
            <FontAwesomeIcon icon={faGripVertical} />
            <span>
              <strong>Assignments</strong>
            </span>
            <div className="float-end">
              <button className="btn rounded-pill">40% of Total</button>
              <FaPlus />
              <FaEllipsisVertical />
            </div>
          </li>
          <ul className="list-group">
            {assignments
              .filter((module) => module.course === courseId)
              .map((assignment) => (
                <li className="list-group-item" key={assignment._id}>
                  <div className="flex-container">
                    <div className="float-end">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this assignment?",
                            )
                          ) {
                            dispatch(deleteAssignment(assignment._id));
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <FontAwesomeIcon icon={faGripVertical} />
                    <FaBook />
                    <span>
                      <strong>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                          style={{ color: "black" }}
                        >
                          <strong>{assignment.title}</strong>
                        </Link>
                      </strong>
                    </span>
                    <div>
                      <span>{assignment?.description}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
