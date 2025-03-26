const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

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
    return res.end();
  } else if (req.method === "POST" && req.url.toLowerCase() === "/submit") {
    const body = []; //Create an array to store the chunks of userdata.

    //Listen to the data event and push the chunks to the body array.
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //Listen to the end event and convert the chunks to string.
    req.on("end", () => {
      const userdata = Buffer.concat(body).toString();
      console.log(userdata);

      const data = new URLSearchParams(userdata); //parse the userdata to get the key-value pairs.
      /*const dataObject = {};
      for (const [key, value] of data.entries()) {
        //Iterate over the key-value pairs and store them in a databject.
        dataObject[key] = value;
      }*/

      const dataObject = Object.fromEntries(data); //Convert the key value pairs to an object.
      console.log(dataObject);
      fs.writeFileSync("message.txt", JSON.stringify(dataObject)); //Write the data to a file
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://Localhost:${PORT}`);
});
