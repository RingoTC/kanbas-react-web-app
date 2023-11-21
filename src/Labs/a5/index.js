import React from "react";
import EncodingParametersInURLs from "./assignment/EncodingParameterInURLs.js";
import WorkingWithArrays from "./assignment/WorkingWithArrays.js";
import WorkingWithObjects from "./assignment/WorkingWithObjects.js";

const Assignment5 = () => {
  const getUrl = (path) => `http://localhost:4000${path}`;

  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={getUrl("/a5/welcome")} className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
};

export default Assignment5;
