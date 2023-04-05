const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("This is Home Page")
})

app.get('/users', (req,res)=>{
    res.send("This is Users Page")
})
app.listen(2347);