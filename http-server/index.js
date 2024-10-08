const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
const path = require("path");

const args = minimist(process.argv.slice(2), {
  default: {
    port: 3000,
  },
});

const port = parseInt(args.port);

let homeContent = "";
let projectContent = "";
let registerContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registerContent = registration;
});

http
  .createServer((req, res) => {
    let url = req.url;

    if (url.endsWith(".css") || url.endsWith(".js")) {
      const filePath = path.join(__dirname, url);
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("File not found");
        } else {
          const ext = path.extname(url);
          const contentType =
            ext === ".css" ? "text/css" : "application/javascript";
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        }
      });
      return;
    }
    res.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        res.write(projectContent);
        res.end();
        break;
      case "/registration":
        res.write(registerContent);
        res.end();
        break;
      default:
        res.write(homeContent);
        res.end();
        break;
    }
  })
  .listen(port);
