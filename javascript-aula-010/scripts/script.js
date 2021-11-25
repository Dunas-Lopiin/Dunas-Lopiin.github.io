function soma(){
    let valor1 = parseFloat(document.getElementById("valor1", 10).value);
    let valor2 = parseFloat(document.getElementById("valor2", 10).value);
    let resultado = valor1 + valor2;
    document.getElementById("resultado").innerHTML = resultado;
}

function subtracao(){
    let valor1 = parseFloat(document.getElementById("valor1", 10).value);
    let valor2 = parseFloat(document.getElementById("valor2", 10).value);
    let resultado = valor1 - valor2;
    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacao(){
    let valor1 = parseFloat(document.getElementById("valor1", 10).value);
    let valor2 = parseFloat(document.getElementById("valor2", 10).value);
    let resultado = valor1 * valor2;
    document.getElementById("resultado").innerHTML = resultado;
}

function divisao(){
    let valor1 = parseFloat(document.getElementById("valor1", 10).value);
    let valor2 = parseFloat(document.getElementById("valor2", 10).value);
    let resultado = valor1 / valor2;
    if(valor2 === 0){
    document.getElementById("resultado").innerHTML = "Não é possivel dividir por zero!";
    }
    else{
        document.getElementById("resultado").innerHTML = resultado;
    }
}