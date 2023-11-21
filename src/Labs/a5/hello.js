const Hello = (app) => {
  app.get("/hello", (_, res) => {
    res.send("Life is good!");
  });

  app.get("/", (_, res) => {
    res.send("Welcome to Full Stack Development!");
  });
};

export default Hello;
