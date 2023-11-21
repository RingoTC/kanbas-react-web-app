import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import {
  findModulesForCourse,
  createModule,
  removeModule,
  editModule,
} from "./client";

const COURSE_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules)),
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    console.log("delete", moduleId);
    removeModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModule(module);
    dispatch(updateModule(module));
  };

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
          <button className="btn btn-primary" onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-warning" onClick={handleUpdateModule}>
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
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
