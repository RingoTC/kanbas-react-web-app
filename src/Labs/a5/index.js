import React from "react";
import EncodingParametersInURLs from "./assignment/EncodingParameterInURLs.js";
import WorkingWithArrays from "./assignment/WorkingWithArrays.js";
import WorkingWithObjects from "./assignment/WorkingWithObjects.js";

const Assignment5 = () => {
  const getUrl = (path) =>
    `http://kanbas-node-server-app-cs5610-fa23-3jx3.onrender.com${path}`;

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
