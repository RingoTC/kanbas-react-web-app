import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          type="text"
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <div className="d-flex">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex"></div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
