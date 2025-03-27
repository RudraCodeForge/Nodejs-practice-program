
const TRY = (req,res)=>{
    if (req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>TRY</title></head>');
        res.write('<body>');
        res.write('<h1>WELCOME TO HOME PAGE</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}
module.exports=TRY;