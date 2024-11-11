const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo!");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre!");
});

app.get("/blog", function(req, res){
    res.send("Meu blog!");
});

app.listen(8181, function(){
    console.log("Servidor Ativo!");
});