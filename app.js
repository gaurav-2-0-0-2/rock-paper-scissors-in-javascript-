
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');


const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.send("hello")
})



app.listen(3000, ()=>{
    console.log("server is listening at port 3000.");
})