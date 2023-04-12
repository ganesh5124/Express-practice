const express = require('express');
const path = require('path');
const app = express();

const port  = 3000;



app.get('/',(req,res)=>{
    res.send("Home");
    res.end();
});

app.get('/random',(request,response)=>{
    app.use(express.static(path.join(__dirname, "public")));
    response.end();
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
    
});

app.get('*',(req,res)=>{
    res.send("Not found");
    res.end();
});
app.listen(port,()=>{
    console.log("Example app listening");
})