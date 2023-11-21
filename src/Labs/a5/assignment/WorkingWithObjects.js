import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const initialAssignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };

  const [assignment, setAssignment] = useState(initialAssignment);
  const URL =
    "https://kanbas-node-server-app-cs5610-fa23-3jx3.onrender.com/a5/assignment";

  const fetchAssignment = async () => {
    try {
      const response = await axios.get(URL);
      setAssignment(response.data);
    } catch (error) {
      console.error("Error fetching assignment:", error);
    }
  };

  const updateTitle = async () => {
    try {
      const response = await axios.get(`${URL}/title/${assignment.title}`);
      setAssignment(response.data);
    } catch (error) {
      console.error("Error updating title:", error);
    }
  };

  const updateScore = async () => {
    try {
      await axios.post(`${URL}/score`, { score: assignment.score });
      fetchAssignment();
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  const updateCompleted = async () => {
    try {
      await axios.post(`${URL}/completed`, { completed: assignment.completed });
      fetchAssignment();
    } catch (error) {
      console.error("Error updating completed status:", error);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />

      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a href={URL} className="btn btn-primary me-2">
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a href={`${URL}/title`} className="btn btn-primary me-2">
        Get Title
      </a>

      <h4>Updating Score</h4>
      <button onClick={updateScore} className="w-100 btn btn-primary mb-2">
        Update Score
      </button>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />

      <h4>Updating Completed</h4>
      <button onClick={updateCompleted} className="w-100 btn btn-primary mb-2">
        Update Completed
      </button>

      <div className="form-check">
        <input
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
          checked={assignment.completed}
          className="form-check-input"
          type="checkbox"
          id="completedCheck"
        />
        <label className="form-check-label" htmlFor="completedCheck">
          Completed
        </label>
      </div>
    </div>
  );
}

export default WorkingWithObjects;
