let tamanho = document.getElementById("area").clientWidth;


function novoTexto(){
    let tamanho = document.getElementById("area").clientWidth;
    let repeticao = parseFloat(document.getElementById("repeticao").value);
    let contagem = 0;
    let apagado = 0;
    let linhas = 0;
    area.innerHTML = '';

    while(contagem < repeticao){
        let texto = document.createElement("p");
        texto.getElementsByClassName("linhas");
        texto.innerHTML = "Eu nunca jamais usarei negativos duplos";
        texto.setAttribute("giz", "Eu nunca jamais usarei negativos duplos");
        
        if(tamanho == 600){
            if(linhas < 22){
                area.appendChild(texto);
                animacao();
                linhas++;
                contagem++;
            }
            else if(linhas >= 22){
                area.innerHTML = '';
                area.appendChild(texto);
                animacao();
                apagado++;
                contagem++;
                linhas = 1;
            }
        }
        else{
            if(linhas < 11){
                area.appendChild(texto);
                animacao();
                linhas++;
                contagem++;
            }
            else if(linhas >=11){
                area.innerHTML = '';
                area.appendChild(texto);
                animacao();
                apagado++;
                contagem++;
                linhas = 1;
            }
        }

    function animacao(){
            texto.setAttribute("class", "animado");
        } 
    }
    document.getElementById("apagadinha").innerHTML = apagado;
    if(tamanho == 600){
        document.getElementById("linhas").innerHTML = Math.round(linhas/2);
    }
    else{
        document.getElementById("linhas").innerHTML = Math.round(linhas);
    }
}