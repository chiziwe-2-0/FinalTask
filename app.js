const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/src"));
// обработка запроса к корню веб-сайта
app.get("/", function(request, response){
    response.send("src/main/index.html");
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'login/index.html'));
});


app.get('/dishes', function(req, res){
    res.sendFile(path.join(__dirname, 'dishes/index.html'));
});

app.listen(process.env.PORT || 3000);
