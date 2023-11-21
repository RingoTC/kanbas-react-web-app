import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API =
    "https://kanbas-node-server-app-cs5610-fa23-3jx3.onrender.com/a5/todos";
  const initialTodo = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  };

  const [todo, setTodo] = useState(initialTodo);
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const postTodo = async () => {
    try {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      handleApiError(error);
    }
  };

  const deleteTodo = async (todoToDelete) => {
    try {
      await axios.delete(`${API}/${todoToDelete.id}`);
      setTodos(todos.filter((t) => t.id !== todoToDelete.id));
    } catch (error) {
      handleApiError(error);
    }
  };

  const updateTodo = async () => {
    try {
      await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo(initialTodo);
    } catch (error) {
      handleApiError(error);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API);
      setTodos(response.data);
    } catch (error) {
      handleApiError(error);
    }
  };

  const fetchTodoById = async (id) => {
    try {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleApiError = (error) => {
    console.error("API Error:", error);
    setErrorMessage(error.response?.data?.message || "An error occurred.");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>

      {/* Input fields for creating/updating a todo */}
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
        className="form-control mb-2"
      />
      <input
        onChange={(e) => setTodo({ ...todo, due: e.target.value })}
        value={todo.due}
        type="date"
        className="form-control mb-2"
      />
      <label>
        <input
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          checked={todo.completed}
          type="checkbox"
          className="form-check-input me-2"
        />
        Completed
      </label>

      {/* Action buttons */}
      <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo} className="btn btn-secondary mb-2 w-100">
        Update Todo
      </button>

      {/* Display error message if there is one */}
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}

      {/* List of todos */}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end me-2"
            >
              Delete
            </button>
            <input
              checked={todo.completed}
              type="checkbox"
              readOnly
              className="form-check-input me-2"
            />
            <label htmlFor="todoCompletedCheck">{todo.title}</label>
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingWithArrays;
