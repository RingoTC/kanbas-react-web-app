import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./style.css";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group modules">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item flex-column flex-wrap d-flex"
          >
            <h3 className="row">{module.name}</h3>
            <p className="row">{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
