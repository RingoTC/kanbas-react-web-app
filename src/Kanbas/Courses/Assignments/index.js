import React from "react";
import { useParams } from "react-router-dom";
import db from "../../database/index.js";
import AssignmentsCard from "./assignmentcard";

function Assignments() {
  const { courseId } = useParams();

  // Get assignments for the specific course
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId,
  );

  return (
    <div>
      <div className="list-group">
        <AssignmentsCard
          courseAssignments={courseAssignments}
          courseId={courseId}
        />
      </div>
    </div>
  );
}

export default Assignments;
