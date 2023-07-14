const http = require("http");
const data = require("./data");

const countdownPromise = () => {
  return new Promise((resolve, reject) => {
    let count = 10;

    const countdown = setInterval(() => {
      console.log(`The server is Booting up in ${count} seconds...`);
      count--;
      if (count === 0) {
        clearInterval(countdown);
        console.log("Loading...");
        setTimeout(() => {
          resolve();
        }, 2000);
      }
    }, 1000);
  });
};

countdownPromise()
  .then(() => {
    console.log("Server running at port: 5000");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(5000);
