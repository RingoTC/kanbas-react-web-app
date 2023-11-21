import axios from "axios";
const API_BASE =
  process.env.API_BASE ||
  "http://kanbas-node-server-app-cs5610-fa23-3jx3.onrender.com";
const COURSES_URL = `${API_BASE}/api/courses`;
const ASSIGNMENTS_URL = `${API_BASE}/api/assignments`;
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId) => {
  const response = await axios.get(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment,
  );
  return response.data;
};
export const removeAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignment) => {
  const response = await axios.put(
    `${ASSIGNMENTS_URL}/${assignment._id}`,
    assignment,
  );
  return response.data;
};
