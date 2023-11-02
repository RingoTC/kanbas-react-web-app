import { Button } from "react-bootstrap";
import styles from "../../../../index.css";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CourseAssignmentEditor = () => {
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );
  const assignment = useSelector((state) => {
    return state.assignmentsReducer.assignment;
  });

  const dispatch = useDispatch();
  const { assignmentId, courseId } = useParams();

  useEffect(() => {
    // Find the assignment with the specific ID
    const matchedAssignment = assignments.find(
      (item) => item.id === assignmentId,
    );

    // Check if a match was found
    if (matchedAssignment) {
      // Dispatch the matched assignment to the store
      dispatch(setAssignment(matchedAssignment));
    }
  }, [dispatch, assignments]);

  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="flex-grow-1" style={{ margin: "20px 30px" }}>
      <div>
        <div className="d-flex">
          <div
            className="flex-grow-1"
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            <div className="wd-flex-row-container">
              <div className="wd-flex-grow-1"></div>
              <div className="d-flex float-end main-content-control">
                <div className="flex-grow-1"></div>
                <p
                  style={{
                    marginTop: "7px",
                    marginRight: "10px",
                    color: "green",
                  }}
                >
                  <FaCircleCheck style={{ marginRight: "3px" }} />
                  Published
                </p>
                <Button style={{ background: "#eeeeee", height: "38px" }}>
                  <FaEllipsisVertical style={{ color: "black" }} />
                </Button>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                defaultValue={assignment.title}
                placeholder="Enter title"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, title: e.target.value }),
                  )
                }
              />
            </div>
            <div className="mb-3">
              <textarea
                defaultValue={assignment.description}
                placeholder="Enter the Assignment Description"
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      description: e.target.value,
                    }),
                  )
                }
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2">Points</div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={assignment.points}
                    placeholder="Enter the points"
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          points: e.target.value,
                        }),
                      )
                    }
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-2">Due</div>
                <div className="col-6">
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={assignment.dueDate}
                  />
                  <br />
                  <div className="row">
                    <div className="col-3">
                      Available From
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={assignment.availableFrom}
                      />
                    </div>
                    <div className="col-3">
                      Available Until
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={assignment.availableUntil}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="col float-end">
                <button className="btn">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </Link>
                </button>
                <button className="btn btn-danger" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignmentEditor;
