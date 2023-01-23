
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    res.render("home");
})


app.listen(3000, ()=>{
    console.log("server is listening at port 3000.");
})