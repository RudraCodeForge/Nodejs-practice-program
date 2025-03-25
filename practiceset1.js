const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Myntra</title></head>');
        res.write('<body>');
        res.write('<li><a href="/home">HOME</a></li>');
        res.write('<li><a href="/men">MENS</a></li>');
        res.write('<li><a href="/women">WOMENS</a></li>');
        res.write('<li><a href="/kids">KIDS</a></li>');
        res.write('<li><a href="/cart">CART</a></li>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url.toLowerCase()==='/home'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>WELCOME TO HOME PAGE</h1></body>');
        res.write('</html>');
        return res.end();
    }else  if(req.url.toLowerCase()==='/men'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Mens</title></head>');
        res.write('<body><h1>WELCOME TO MENS PAGE</h1></body>');
        res.write('</html>');
        return res.end();
    }else  if(req.url.toLowerCase()==='/women'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body><h1>WELCOME TO WOMENS PAGE</h1></body>');
        res.write('</html>');
        return res.end();
    }else  if(req.url.toLowerCase()==='/kids'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body><h1>WELCOME TO KIDS PAGE</h1></body>');
        res.write('</html>');
        return res.end();
    }else  if(req.url.toLowerCase()==='/cart'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body><h1>WELCOME TO CHECKOUT PAGE</h1></body>');
        res.write('</html>');
        return res.end();
    }

});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://Localhost:${PORT}`);
});