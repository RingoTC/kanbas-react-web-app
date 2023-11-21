import { Button } from "react-bootstrap";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "../assignmentsReducer";
import * as client from "../client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAssignmentById } from "../client";

const CourseAssignmentEditor = () => {
  const dispatch = useDispatch();
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  const convertTimeFormate = (Time) => {
    if (!Time) return "";
    const date = new Date(Time);
    return date.toISOString().split("T")[0];
  };

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment,
  );

  const handleSave = async () => {
    assignmentId === "New"
      ? await handleAddAssignment()
      : await handleUpdateAssignment(assignmentId);
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleDateChange = (field) => (e) => {
    dispatch(setAssignment({ ...assignment, [field]: e.target.value }));
  };

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    });
  };
  const handleDeleteAssignment = (assignmentId) => {
    client.removeAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment({
      _id: assignmentId,
      assignment,
    });
    dispatch(updateAssignment(assignment));
  };

  useEffect(() => {
    if (assignmentId === "New") {
      dispatch(setAssignment({}));
    } else {
      findAssignmentById(assignmentId).then((assignment) => {
        dispatch(setAssignment(assignment));
      });
    }
  }, [assignmentId]);

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between mb-3">
            <div className="flex-grow-1"></div>
            <div className="d-flex float-end main-content-control">
              <div className="flex-grow-1"></div>
              <p>
                <FaCircleCheck /> Published
              </p>
              <Button>
                <FaEllipsisVertical />
              </Button>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              defaultValue={assignment.name}
              placeholder="Enter title"
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, name: e.target.value }))
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
          <div className="row mt-3">
            <div className="col-2">Due</div>
            <div className="col-6">
              <input
                type="date"
                className="form-control"
                defaultValue={convertTimeFormate(assignment.dueDate)}
              />
              <div className="row mt-2">
                <div className="col-6">
                  Available From
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={convertTimeFormate(
                      assignment.availableFromDate,
                    )}
                  />
                </div>
                <div className="col-6">
                  Available Until
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={convertTimeFormate(
                      assignment.availableUntilDate,
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary me-2"
              onClick={() => {
                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
              }}
            >
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignmentEditor;
