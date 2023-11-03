import { Button } from "react-bootstrap";
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
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment,
  );

  const dispatch = useDispatch();
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    const matchedAssignment = assignments.find(
      (item) => item.id === assignmentId,
    );
    if (matchedAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
      console.log(assignments);
    }
    //navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  useEffect(() => {
    // Find the assignment with the specific ID
    const matchedAssignment = assignments.find(
      (item) => item.id === assignmentId,
    );

    // Check if a match was found
    if (matchedAssignment) {
      // Dispatch the matched assignment to the store
      dispatch(setAssignment(matchedAssignment));
    } else {
      dispatch(
        setAssignment({
          course: courseId,
        }),
      );
    }
    return () => {
      // Reset the assignment in the store
      dispatch(
        setAssignment({
          title: "",
          description: "",
          points: "",
          dueDate: "",
          availableFrom: "",
          availableUntil: "",
        }),
      );
    };
  }, [dispatch, assignments]);

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
                defaultValue={assignment.dueDate}
              />
              <div className="row mt-2">
                <div className="col-6">
                  Available From
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={assignment.availableFrom}
                  />
                </div>
                <div className="col-6">
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
          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="text-white text-decoration-none"
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
  );
};

export default CourseAssignmentEditor;
