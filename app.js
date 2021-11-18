const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/src"));
// обработка запроса к корню веб-сайта
app.get('/main', function(req, res) {
    res.sendFile(path.join(__dirname, 'main/index.html'));
});

app.use("/",function (request, response) {
    response.redirect("/main")
  });

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'login/index.html'));
});

app.get('/dishes', function(req, res){
    res.sendFile(path.join(__dirname, 'dishes/index.html'));
});

app.listen(process.env.PORT || 3000);
