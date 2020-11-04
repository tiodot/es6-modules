const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    let url = req.url;
    let filePath = "." + url;
    if (!url.startsWith("/client")) {
      filePath = "./client" + url;
    }
    if (url.endsWith("/")) {
      filePath = "./client/index.html";
    }
    console.log("请求的路径为：", filePath);
    if (!fs.existsSync(filePath)) {
      return res.end("Not Found");
    }
    // 针对js文件设置mine type
    if (filePath.endsWith(".js")) {
      res.setHeader("Content-type", "text/javascript");
    }
    fs.createReadStream(path.resolve(__dirname, filePath)).pipe(res);
  })
  .listen(4000);
