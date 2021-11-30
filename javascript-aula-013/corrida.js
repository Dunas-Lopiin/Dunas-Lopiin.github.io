let tipoCorrida;
const voltas = 0;
let vitoriaP = 0;
let vitoriaJ = 0;
let vitoriaE = 0;

function carro(min, max, derrape){
    let velocidade = Math.random() * (max - min) + min;
    let derrapagem = velocidade * derrape;
    let resultado = velocidade - derrapagem;
    return resultado;
}


function corrida(){
    tipoCorrida = document.querySelector('input[name="campeonato"]:checked').value;
    vitoriaE = 0;
    vitoriaJ = 0;
    vitoriaP = 0;
    for (let voltas = 0; voltas < tipoCorrida; voltas++){
        let Pedro = carro(150, 230, 0.03);
        let Juca = carro(120, 260, 0.05);
        let Edna =carro(180, 220, 0.01);

        if(Pedro > Juca && Pedro > Edna){
            vitoriaP++;
        }
        else if (Juca > Pedro && Juca > Edna){
                vitoriaJ++;
        }
        else{
            vitoriaE++;
        }
    }

    if(vitoriaP > vitoriaJ && vitoriaP > vitoriaE){
        console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
        document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
    }
    else if(vitoriaJ > vitoriaP && vitoriaJ > vitoriaE){
        console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
        document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
    }
    else if(vitoriaE > vitoriaP && vitoriaE > vitoriaJ){
        console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
        document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
    }
    else{
        if(vitoriaP == vitoriaJ){
            console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
            console.log("Desempate entre Pedro e Juca!");
            Pedro = carro(150, 230, 0.03);
            Juca = carro(120, 260, 0.05);

            if(Pedro > Juca){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaJ++;
                document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
            }
        }
        else if(vitoriaP == vitoriaE){
            console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
            console.log("Desempate entre Pedro e Edna!");
            Pedro = carro(150, 230, 0.03);
            Edna =carro(180, 220, 0.01);

            if(Pedro > Edna){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaE++;
                document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
            }
        }
        else{
            console.log("P" + vitoriaP + " J" + vitoriaJ + " E" + vitoriaE);
            console.log("Desempate entre Juca e Edna!");
            Juca = carro(120, 260, 0.05);
            Edna =carro(180, 220, 0.01);
            if(Juca > Edna){
                vitoriaJ++;
                document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
            }
            else{
                vitoriaE++;
                document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
            }
        }
    }
    document.getElementById("resultados").innerHTML = "Pedro ganhou: " + vitoriaP + " voltas, Juca ganhou: " + vitoriaJ + " voltas, e Edna ganhou: " + vitoriaE + " voltas.";
}


