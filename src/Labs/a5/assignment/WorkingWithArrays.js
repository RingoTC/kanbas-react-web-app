import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const API_BASE = `${process.env.REACT_APP_BASE_URL}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);

  const postTodo = async () => {
    try {
      const response = await axios.post(API_BASE, todo);
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while adding a todo",
      );
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await axios.delete(`${API_BASE}/${todo.id}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while deleting a todo",
      );
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API_BASE}/${todo.id}`, todo);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? response.data : t)),
      );
      setTodo({});
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while updating a todo",
      );
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_BASE);
      setTodos(response.data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while fetching todos",
      );
    }
  };

  const fetchTodoById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE}/${id}`);
      setTodo(response.data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while fetching a todo",
      );
    }
  };

  const removeTodo = async (todo) => {
    try {
      const response = await axios.get(`${API_BASE}/${todo.id}/delete`);
      setTodos(response.data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while removing a todo",
      );
    }
  };

  const createTodo = async () => {
    try {
      const response = await axios.get(`${API_BASE}/create`);
      setTodos(response.data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while creating a todo",
      );
    }
  };

  const updateTitle = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/${todo.id}/title/${todo.title}`,
      );
      setTodos(response.data);
    } catch (error) {
      console.error("ERROR:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while updating the title",
      );
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        value={todo.description}
        type="text"
        className="form-control mb-2"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
        className="form-control mb-2"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
          className="form-check-input me-2"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-primary mb-2 w-100">
        Post Todo
      </button>

      <button onClick={updateTodo} className="btn btn-primary mb-2 w-100">
        Update Todo
      </button>

      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-primary mb-2 w-100">
        Update Title
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-primary me-2 float-end"
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
              id="todoCompletedCheck"
            />
            <label htmlFor="todoCompletedCheck">{todo.title}</label>
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API_BASE}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <h3>Completing Todo Item</h3>
      <a
        href={`${API_BASE}/${todo.id}/completed/true`}
        className="btn btn-primary me-2"
      >
        Complete Todo ID = {todo.id}
      </a>
      <h3>Describing Todo Item</h3>
      <a
        href={`${API_BASE}/${todo.id}/description/test description`}
        className="btn btn-primary me-2"
      >
        Describe Todo with ID = {todo.id}
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={API_BASE} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />
      <a href={`${API_BASE}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API_BASE}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API_BASE}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
    </div>
  );
}
export default WorkingWithArrays;
