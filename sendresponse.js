const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>GET RESPONSE</title></head>');
    res.write('<body><h1>I AM SUCCESSFULLY GETTING RESPONSE FROM SERVER</h1></body.');
    res.write('</html>');
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://Localhost:${PORT}`);
});