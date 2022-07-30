var express = require('express')
var app = express()

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"+
        "<hr/>" +
        "<h3> smart devices for sale </h3>"+
        "<br/>"

    );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"+
        "<hr/>" +
        "<h3> Doing things ExtraOrdinarily </h3>"+
        "<br/>"

    );
});

app.get("/login",(req,res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"+
        "<hr/>" +
        "<h3> Login </h3>"+
        "<form>"+
        "<button> login </button>"+
        "<br/>"+
        "</form>"

    );
});


var server = app.listen(9000);
console.log("dockervijaysales port listening 9000");