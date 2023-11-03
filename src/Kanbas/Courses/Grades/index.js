import React, { useMemo } from "react";
import db from "../../Database/index.js";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();

  const assignments = useMemo(
    () => db.assignments.filter((assignment) => assignment.id === courseId),
    [courseId],
  );

  const enrollments = useMemo(
    () => db.enrollments.filter((enrollment) => enrollment.course === courseId),
    [courseId],
  );

  return (
    <div className="container-fluid grades">
      <div className="row grades_control">
        <div className="d-flex justify-content-end">
          <button className="btn btn-default">
            <i className="fa-solid fa-indent"></i> Import
          </button>
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-solid fa-outdent"></i> Export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <button className="btn btn-default">
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>
      <div className="row searchbar">
        <form>
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search Students"
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search Assignments"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-default">
                <i className="fa-solid fa-filter"></i> Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row result">
        <table className="table table-hover result-table table-responsive table-striped">
          {/* ... table headers ... */}
          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find((user) => user.id === enrollment.user);
              return (
                <tr key={index}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment, aIndex) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment.id,
                    );
                    return <td key={aIndex}>{grade?.grade || ""}</td>;
                  })}
                  {/* ... rest of the cells ... */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
