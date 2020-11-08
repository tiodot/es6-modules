## 运行

普通 http

```
1. 执行 node  server

2. 浏览器打开 http://localhost:4000

3. 修改 client 目录中的文件，刷新浏览器查看效果
```

h2 的 demo

```
1. 执行 node  h2

2. 浏览器打开 http://localhost:4001

3. 修改 client 目录中的文件，刷新浏览器查看效果
```

h2 的 server push demo

```
1. 执行 node  serverPush

2. 浏览器打开 http://localhost:4002

3. 修改 client 目录中的文件，刷新浏览器查看效果
```

## 证书

http2 要求生成证书：

```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost'  -keyout localhost-privkey.pem -out localhost-cert.pem
```
