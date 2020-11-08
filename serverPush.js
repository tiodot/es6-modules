const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("./ssl/localhost-privkey.pem"),
  cert: fs.readFileSync("./ssl/localhost-cert.pem"),
});
server.on("error", (err) => console.error(err));

server.on("stream", (stream, headers) => {
  console.log("当前访问为:", headers[":path"]);
  if (headers[":path"] === "/") {
    serveJavaScript(stream);
  }
  stream.respondWithFile("./client/index.html");
});

server.listen(4002);

function serveJavaScript(stream) {
  const files = ["/c.js", "/modules/a.js", "/modules/b.js"];
  files.forEach((file) => {
    stream.pushStream({ ":path": file }, (err, stream) => {
      if (err) {
        console.error(err);
      } else {
        stream.respondWithFile(file.replace("/", "./client/"), {
          "content-type": "text/javascript",
          ":status": 200,
        });
        stream.on("error", console.error);
      }
    });
  });
}
