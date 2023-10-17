import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId,
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="row main-body">
        <div className="assignments-detail-form">
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Assignment Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
                value="A1 - ENV + HTML"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              >
                This assignment describes how to install the development
                environment for creating and working with Web applications we
                will be developing this semester. We will add new content every
                week, pushing the code to a GitHub source repository, and then
                deploying the content to a remote server hosted on Netlify.
              </textarea>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Points</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Points"
                  value="100"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Assignment Group
              </label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="" value="1">
                    Assignment Group 1
                  </option>
                  <option value="2">Assignment Group 2</option>
                  <option value="3">Assignment Group 3</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Display Grade as
              </label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="" value="1">
                    Points
                  </option>
                  <option value="2">Percentage</option>
                  <option value="3">Complete/Incomplete</option>
                  <option value="4">Letter Grade (A, B, C, D, F)</option>
                  <option value="5">
                    GPA Scale (4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0,
                    0.7, 0)
                  </option>
                  <option value="6">Not Graded</option>
                </select>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    Do not count this assignment towards the final grade
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Submission Type</label>
              <div className="col-sm-10 input-border">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="" value="1">
                    Online
                  </option>
                </select>
                <label className="col-form-label">Online Entry Options</label>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Text Entry</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Website URL</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">
                    Media Recordings
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Assign</label>
              <div className="col-sm-10 input-border">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="" value="1">
                    Everyone
                  </option>
                </select>
                <label htmlFor="duedate" className="col-form-label">
                  Due
                </label>
                <input
                  type="date"
                  name="duedate"
                  id="duedate"
                  value="2018-07-22"
                  className="form-control"
                />
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="available-from" className="col-form-label">
                      Available from
                    </label>
                    <input
                      type="date"
                      name="from"
                      id="available-from"
                      value="2018-07-22"
                      className="form-control"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="until" className="col-form-label">
                      Until
                    </label>
                    <input
                      type="date"
                      name="until"
                      id="until"
                      value="2018-07-22"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
