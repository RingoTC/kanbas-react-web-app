import React from "react";
import { useParams } from "react-router-dom";
import db from "../../database/index.js";
import "./style.css";

function ModuleList() {
  const { courseId } = useParams();
  const filteredModules = db.modules.filter(
    (module) => module.course === courseId,
  );

  return (
    <ul className="list-group modules">
      {filteredModules.map((module) => (
        <li
          key={module.id}
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
