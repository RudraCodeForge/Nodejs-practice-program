const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>GET RESPONSE</title></head>");
    res.write("<body>");
    res.write("<h1>WELCOME TO HOME PAGE</h1>");
    res.write('<form action="/submit" method="POST">');
    res.write(
      '<input type="email" id="email" name="email" placeholder="ENTER YOUR EMAIL ID:"></input><br><br>'
    );
    res.write(
      '<input type="password" id="password" name="password" placeholder="ENTER YOUR PASSWORD:"></input> <br><br>'
    );
    res.write('<button type="submit">LOGIN NOW</button>');
    res.write("</body>");
    res.write("</html>");
    res.end();
   
  } else if (req.method === "POST" && req.url.toLowerCase() === "/submit") {
    fs.writeFileSync("message.txt", "Dummy data");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://Localhost:${PORT}`);
});
