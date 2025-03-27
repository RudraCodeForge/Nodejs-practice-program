const http=require('http');
const rs=require('./l5.js');
const TRY=require('./selftry.js');
const server=http.createServer(TRY);

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://Localhost:${PORT}`);
});