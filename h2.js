const http2 = require("http2");
const fs = require("fs");
const path = require("path");

const server = http2.createSecureServer({
  key: fs.readFileSync("./ssl/localhost-privkey.pem"),
  cert: fs.readFileSync("./ssl/localhost-cert.pem"),
});
server.on("error", (err) => console.error(err));

server.on("stream", (stream, headers) => {
  const url = headers[":path"];
  let filePath = "." + url;
  if (!url.startsWith("/client")) {
    filePath = "./client" + url;
  }
  if (url.endsWith("/")) {
    filePath = "./client/index.html";
  }
  console.log("请求的路径为：", filePath);
  if (!fs.existsSync(filePath)) {
    return stream.end("Not Found");
  }
  stream.respondWithFile(path.resolve(__dirname, filePath), {
    "content-type": filePath.endsWith(".js") ? "text/javascript" : "text/html",
    ":status": 200,
  });
});

server.listen(4001);
