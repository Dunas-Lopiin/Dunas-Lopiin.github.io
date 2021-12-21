let elemento = 0;

function arrayNumeros(){
  let numeros = [];
  for(i = 1; i < 61; i++){
    numeros.push(i);
  }
  return(numeros);
}

function sortear(numeros){
  let sorteados = [];
  let num = numeros;
  for(i = 0; i < 6; i++){
    let n = num[Math.floor(Math.random() * num.length)];
    let pos = num.indexOf(n);
    num.splice(pos, 1);
    sorteados.push(n);
  }
  return sorteados;
}

/*function escrever(array, element){
  let posicao = array.indexOf(element);
  posicao = posicao;
  document.getElementById("numero" + posicao).innerHTML = element;
}*/

function escrever(array){
  if(elemento <= 5){
    document.getElementById("numero" + elemento).innerHTML = array[0];
    array = array.shift();
    elemento = elemento + 1;
  }
  else{
    clearInterval(numeraveis);
  }
  console.log(elemento);
}

let sorteados = sortear(arrayNumeros());
let numeraveis = window.setInterval(escrever, 1000, sorteados);

/*sorteados.forEach(element => {
  setInterval(escrever(sorteados, element), 1000); 
});*/