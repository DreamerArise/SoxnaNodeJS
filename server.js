const http = require("http");
const port = 8000;
const server = http.createServer((req, res) => {
    res.end("<h3 style='color:crimson'>Server started !</h3>");
});

server.listen(port,
    () => console.log(`Go to : http://localhost:${port}`));