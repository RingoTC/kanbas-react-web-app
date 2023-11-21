import React, { useState } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  const baseUrl =
    "https://kanbas-node-server-app-cs5610-fa23-3jx3.onrender.com/a5";
  const calculatorPath = "calculator";

  const createOperationLink = (operation) => {
    return `${baseUrl}/${calculatorPath}?operation=${operation}&a=${a}&b=${b}`;
  };

  const createPathParameterLink = (operation) => {
    return `${baseUrl}/${operation}/${a}/${b}`;
  };

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>

      {/* Input fields for values of 'a' and 'b' */}
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />

      <h3>Path Parameters</h3>

      {/* Buttons for path parameter operations */}
      <a href={createPathParameterLink("add")} className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a href={createPathParameterLink("subtract")} className="btn btn-danger">
        Subtract {a} - {b}
      </a>

      <hr />
      <h3>Query Parameters</h3>

      {/* Buttons for query parameter operations */}
      <a href={createOperationLink("add")} className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a href={createOperationLink("subtract")} className="btn btn-danger">
        Subtract {a} - {b}
      </a>
    </div>
  );
}

export default EncodingParametersInURLs;
