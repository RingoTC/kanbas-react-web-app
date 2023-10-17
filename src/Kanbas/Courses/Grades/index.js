import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment._id === courseId,
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId,
  );
  return (
    <div className="container-fluid grades">
      <div className="row grades_control">
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary btn-default">
            <i className="fa-solid fa-indent"></i> Import
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-default dropdown-toggle"
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
          <button className="btn btn-secondary btn-default">
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
                <i className="fa-solid fa-filter"></i>Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row result">
        <table className="table table-hover result-table table-responsive table-striped">
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">
                A1 SETUP <br />
                out of 100
              </th>
              <th scope="col">
                A2 HTML <br />
                out of 100
              </th>
              <th scope="col">
                A3 CSS <br />
                out of 100
              </th>
              <th scope="col">
                A4 Bootstrap <br />
                out of 100
              </th>
            </tr>
          </thead>
          <tbody>
            {console.log(enrollments)}
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user,
              );
              console.log(user);
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id,
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                  <td>100</td>
                  <td>99</td>
                  <td>98</td>
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
