const http = require("http");
const routes = require("../routes/routes");
const data = require("../data");

http
  .createServer((req, res) => {
    try {
      switch (req.url) {
        case routes.getData:
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(data.testData));
          break;

        case routes.getAuth:
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(data.auth));
          break;

        case routes.getYear:
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify({ year: new Date().getFullYear() }));
          break;

        default:
          res.writeHead(522, { "Error-Type": "Unprocessable entity" });
          res.write(JSON.stringify({ result: "Wrong url" }));
          break;
      }
      res.end();
    } catch (err) {
      console.error(err);
    }
  })
  .listen(5000);
