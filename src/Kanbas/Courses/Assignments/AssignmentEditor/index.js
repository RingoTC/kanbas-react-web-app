import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../database/index.js";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId,
  );

  // State
  const [assignmentName, setAssignmentName] = useState(
    assignment ? assignment.title : "",
  );
  const [description, setDescription] = useState(
    assignment ? assignment.description : "",
  );
  const [points, setPoints] = useState(assignment ? assignment.points : "");
  const [gradeDisplay, setGradeDisplay] = useState("Points");
  const [submissionType, setSubmissionType] = useState("Online");
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));

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
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Points</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="Points"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                />
              </div>
            </div>
            {/* Other form groups... */}
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Display Grade as
              </label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  value={gradeDisplay}
                  onChange={(e) => setGradeDisplay(e.target.value)}
                >
                  <option value="Points">Points</option>
                  <option value="Percentage">Percentage</option>
                  <option value="Complete/Incomplete">
                    Complete/Incomplete
                  </option>
                  {/* ... other options ... */}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Submission Type</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  value={submissionType}
                  onChange={(e) => setSubmissionType(e.target.value)}
                >
                  <option value="Online">Online</option>
                  {/* Add other options if available */}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="duedate" className="col-form-label">
                Due
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  name="duedate"
                  id="duedate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            {/* ... further form fields ... */}
            <button onClick={handleSave} className="btn btn-primary mt-2">
              Save Assignment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
