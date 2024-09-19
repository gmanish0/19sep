const connection = require("./connect");
const express =require('express');
const std = require('./routes/STD')
const app = express();
connection();
app.use(express.json());
app.use(std);
app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("Server is running on port 3000");

});