const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>GET RESPONSE</title></head>');
    res.write('<body>');
    res.write('<h1>WELCOME TO HOME PAGE</h1>')
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="email" id="email" name="email" placeholder="ENTER YOUR EMAIL ID:"></input><br><br>');
    res.write('<input type="password" id="password" name="password" placeholder="ENTER YOUR PASSWORD:"></input> <br><br>');
    res.write('<button type="submit">LOGIN NOW</button>');
    res.write('</body>');
    res.write('</html>');
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://Localhost:${PORT}`);
});