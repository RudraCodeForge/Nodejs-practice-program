const fs =require('fs');
fs.writeFile('example.txt',"this is an example file created through nodejs", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File Sucessfully Created");
    }
});