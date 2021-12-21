function imprimir(mens) {
    alert('você escreveu ' + mens);
    console.log(mens);
    document.getElementById("impressao").innerHTML = "Você escreveu: " + mens;
}
  
function callback(retorno) {
  var mens = prompt("Por favor digite algo");
  retorno(mens);
}

callback(imprimir);