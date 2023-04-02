const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("----Request Is Made By Browser");

  console.log("The Url and method is:", req.url, req.method);

  //Send the response as the plain text
  //   res.setHeader("Content-Type", "text-plain");
  //   res.write("Hello this from the server");
  //   res.write("\nthanks for wathching this.");
  //   res.end();

  // Send response as the html
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello this is kesavan</h1>");
  //   res.end();

  //Send the response as the html file from the html

  //   fs.readFile("./view/index.html", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end();
  //     } else {
  //       res.write(data);
  //       res.end();
  //     }
  //   });

  //Send the seperte html based on the url request

  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening to the port 3000");
});
