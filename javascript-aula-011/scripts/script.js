function fechar(){
    let pao = parseFloat(document.querySelector('input[name="pao"]:checked').value);
    let burger = parseFloat(document.querySelector('input[name="burger"]:checked').value);
    let salada = parseFloat(document.querySelector('input[name="salada"]:checked').value);
    let queijo = parseFloat(document.querySelector('input[name="queijo"]:checked').value);
    let resultado = pao + burger + salada + queijo;
    let final = resultado.toFixed(2);
    document.getElementById("total").innerHTML = final;
    ficha();
}

function ficha(){
    let pao = document.querySelector('input[name="pao"]:checked').id;
    let burger = document.querySelector('input[name="burger"]:checked').id;
    let salada = document.querySelector('input[name="salada"]:checked').id;
    let queijo = document.querySelector('input[name="queijo"]:checked').id;

    /*Checa qual o tipo de pão e adiciona essa informação a ficha*/
    if(pao == "frances"){
        document.getElementById("paoPrep").innerHTML = "Pão Francês";
    }
    else if(pao == "australiano"){
        document.getElementById("paoPrep").innerHTML = "Pão Australiano";
    }
    else{
        document.getElementById("paoPrep").innerHTML = "Brioche";
    }

    /*Checa qual o tipo de hambúrger e adiciona essa informação a ficha*/
    if(burger == "picanha"){
        document.getElementById("burgerPrep").innerHTML = "Hambúrger de Picanha";
    }
    else if(burger == "costela"){
        document.getElementById("burgerPrep").innerHTML = "Hambúrger de Costela";
    }
    else{
        document.getElementById("burgerPrep").innerHTML = "Hambúrger Vegano";
    }

    /*Checa qual o tipo de salada e adiciona essa informação a ficha*/
    if(salada == "alface"){
        document.getElementById("saladaPrep").innerHTML = "Salada de alface";
    }
    else if(salada == "tomate"){
        document.getElementById("saladaPrep").innerHTML = "Salada de Tomate";
    }
    else{
        document.getElementById("saladaPrep").innerHTML = "Sem salada";
    }

    /*Checa qual o tipo de queijo e adiciona essa informação a ficha*/
    if(queijo == "mussarela"){
        document.getElementById("queijoPrep").innerHTML = "Queijo Mussarela";
    }
    else if(queijo == "prato"){
        document.getElementById("queijoPrep").innerHTML = "Queijo Prato";
    }
    else{
        document.getElementById("queijoPrep").innerHTML = "Queijo Cheddar";
    }
}