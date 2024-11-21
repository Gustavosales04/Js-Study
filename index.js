const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/view/index.html");
    //__dirname(acessa o diretorio da pasta)/pasta/arquivo
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/view/sobre.html");
    
});

app.get("/blog", function(req, res){
    res.send("Meu blog!");
});

app.get("/ola/:cargo/:nome/:color", function(req,res){
    res.send("<h1>Olá "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>"+"<h3>Sua cor é: "+req.params.color+"<h3>");
})

app.listen(8181, function(){
    console.log("Servidor Ativo!");
});