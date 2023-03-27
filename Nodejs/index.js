var hel = require('./hello')
const data = require('./hello')
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');
const mysql = require('mysql');


app.set('view engine', 'ejs');

http.createServer((req,res)=>{
    res.write("Hello this is function");
    res.end();
}).listen(3000);


http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3243);

http.createServer((req,res)=>{
    res.write("hello hey there");
    res.end();
    eventEmitters.on('click',myHandler);
}).listen(4200);

// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);
// console.log(input);

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input");
// }


// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath +`/hello${i}.txt`,"a simple text");
// }
// console.log(dirPath);


// fs.readdir(dirPath,(err,files)=>{
//     if(err){
//         throw new Error("Response is not correct");
//     }else{
//         files.forEach(item => {
//             console.log(item);
//         });
//     }
// })
// fs.writeFileSync("data.txt","this is data file");

const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/data.txt`;
fs.writeFile(filePath,'after changed something',(err,data)=>{
    console.log("56",data);
});

fs.readFile("data.txt", 'utf-8',(err,item)=>{
    console.log("60",item);
});

fs.appendFile(filePath,"Ok oK added some",(err,item)=>{
    console.log("64",item);
})



// app.get('/about',(req,res)=>{
//     res.send('Hello, this is About page')
// })

// app.get('/footer',(req,res)=>{
//     res.send('Hello, this is footer page')
// })

// app.get(
// )

app.listen(3456);

var events = require('events');

var eventEmitters = new events.EventEmitter();
var myHandler = function(){
    console.log("you just clicked");
}

eventEmitters.on('click',myHandler);
eventEmitters.emit('click');

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath)).listen(5678);

app.get('',(_, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/About',(_, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/Help',(_, res)=>{
    res.sendFile(`${publicPath}/Help.html`)
})

app.get('*',(_, res)=>{
    res.sendFile(`${publicPath}/404.html`)
})


// const views = path.join(__dirname,'views')

app.get('/profile',(_, res)=>{
    res.render('profile');
})

app.get('/', (req,res)=>{
    res.send("This is Home Page")
})

app.get('/users', (req,res)=>{
    res.send("This is Users Page")
})
app.listen(2347);

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'nodemysql'
})

// db.connect((err)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log("MySql Connected");
// })

// app.get('/createdb',(req,res)=>{
//     let sql = "CREATE DATABASE nodemysql";
//     db.query(sql,(err)=>{
//         if(err){
//             throw err;
//         }
//     })
// })

var request = require('request');
request("http://www.google.com", (err, res, body) =>{
    console.log("respobnkhkh",body);
})