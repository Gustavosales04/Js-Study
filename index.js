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

app.get("/ola/:cargo/:nome/:color", function(req,res){
    res.send("<h1>Olá "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>"+"<h3>Sua cor é: "+req.params.color+"<h3>");
})

app.listen(8181, function(){
    console.log("Servidor Ativo!");
});