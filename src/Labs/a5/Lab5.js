const assignment = {
  _id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const calculateResult = (a, b, operation) => {
  switch (operation) {
    case "add":
      return parseInt(a) + parseInt(b);
    case "subtract":
      return parseInt(a) - parseInt(b);
    default:
      return "Invalid operation";
  }
};

const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });

  app.get("/a5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send((parseInt(a) + parseInt(b)).toString());
  });

  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send((parseInt(a) - parseInt(b)).toString());
  });

  app.get("/a5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    const result = calculateResult(a, b, operation);
    res.send(result.toString());
  });

  app.get("/a5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/a5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
};

export default Lab5;
