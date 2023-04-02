const express = require("express");

const app = express();

//listen the port
app.listen(3000);

//response
app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 it must be placed at the bottom since it does not have any specific url to route it will used by all url

app.use((req, res) => {
  res.status(404).sendFile("./view/404.html", { root: __dirname });
});
