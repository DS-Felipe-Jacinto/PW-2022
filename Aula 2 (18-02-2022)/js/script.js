//Selecionar as TAGS "p"
function informarDados(){
var pNome=document.querySelector(".p1");
var pRG=document.querySelector(".p2");
var pTelefone=document.querySelector(".p3");
var pEndereco=document.querySelector(".p4");

pNome.textContent=prompt("Informe o seu nome");
pRG.textContent=prompt("Informe o seu RG");
pTelefone.textContent=prompt("Informe o seu telefone");
pEndereco.textContent=prompt("Informe o seu endereço");
}

var btn=document.querySelector("#btn");
btn.addEventListener("click", informarDados);