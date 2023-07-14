const http = require("http");
const data = require("./data");

let count = 5;

const countdown = setInterval(() => {
  console.log(`The server is Booting up in ${count} seconds...`);
  count--;
  if (count === 0) {
    clearInterval(countdown);
    console.log("Loading...");
    setTimeout(() => {
      console.log("Server running at port: 5000");
    }, 2000);
  }
}, 1000);

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(5000);
