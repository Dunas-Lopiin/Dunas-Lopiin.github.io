let tipoCorrida;
let vitoriaP = 0;
let vitoriaJ = 0;
let vitoriaE = 0;
let sorteioP;
let sorteioJ;
let sorteioE;
let Pedro;
let Edna;
let Juca;

const carros = {
    Popular: {
        tipo: 'Carro Popular',
        velocidadeMinima: {min: 110, max: 130},
        velocidadeMaxima: {min: 180, max: 200},
        derrapagem: {min: 0.03, max: 0.04}
    },
    Sport: {
        tipo: 'Carro Sport',
        velocidadeMinima: {min: 125, max: 145},
        velocidadeMaxima: {min: 195, max: 215},
        derrapagem: {min: 0.02, max: 0.03}
    },
    Super: {
        tipo: 'Supercarro',
        velocidadeMinima: {min: 140, max: 160},
        velocidadeMaxima: {min: 210, max: 230},
        derrapagem: {min: 0.01, max: 0.0175}
    }
}

    function veReal(obj, letra, escrito){
        
        let vMax = Math.random() * (obj.velocidadeMaxima.max - obj.velocidadeMaxima.min) + obj.velocidadeMaxima.min;
        let vMin = Math.random() * (obj.velocidadeMinima.max - obj.velocidadeMinima.min) + obj.velocidadeMinima.min;
        let derrapagem = Math.random() * (obj.derrapagem.max - obj.derrapagem.min) + obj.derrapagem.min;
        let velocidadeAtual = Math.random() * (vMax - vMin) + vMin;
        let derrapagemAtual = velocidadeAtual * derrapagem;
        let resultado = velocidadeAtual - derrapagemAtual;
        if(escrito == 0){
            document.getElementById("tipo" + letra).innerHTML = obj.tipo;
            document.getElementById("vMin" + letra).innerHTML = vMin.toFixed(2) + " K/h";
            document.getElementById("vMax" + letra).innerHTML = vMax.toFixed(2) + " K/h";
            let pD = derrapagem* 100;
            document.getElementById("derra" + letra).innerHTML = pD.toFixed(2) + "%";
        }

        return resultado;
    }


function corrida(){
    tipoCorrida = document.querySelector('input[name="campeonato"]:checked').value; //checa qual tipo de corrida foi escolhida
    vitoriaE = 0; //voltas que a Edna ganhou
    vitoriaJ = 0; //voltas que o juca ganhou
    vitoriaP = 0; //voltas que o pedro ganhou
    sorteioP = Math.random() * (100 - 1) + 1; //sorteio do carro do pedro
    sorteioJ = Math.random() * (100 - 1) + 1; //sorteio do carro do juca
    sorteioE = Math.random() * (100 - 1) + 1; //sorteio do carro da Edna
    
    /* Ve qual o carro do Pedro e adiciona seus atributos no HTML */
    if(sorteioP <= 60){
        Pedro = carros.Popular;
        veReal(Pedro, "P", 0);
    }
    else if(sorteioP >= 95){
        Pedro = carros.Super;
        veReal(Pedro, "P", 0);
    }
    else{
        Pedro = carros.Sport;
        veReal(Pedro, "P", 0);
    }
   
    /* Ve qual o carro do Juca e adiciona seus atributos no HTML */
    if(sorteioJ <= 60){
        Juca = carros.Popular;
        veReal(Juca, "J", 0);
    }
    else if(sorteioJ >= 95){
        Juca = carros.Super;
        veReal(Juca, "J", 0);
    }
    else{
        Juca = carros.Sport;
        veReal(Juca, "J", 0);
    }

    /* Ve qual o carro da Edna e adiciona seus atributos no HTML */
    if(sorteioE <= 60){
        Edna = carros.Popular;
        veReal(Edna, "E", 0);
    }
    else if(sorteioE >= 95){
        Edna = carros.Super;
        veReal(Edna, "E", 0);
    }
    else{
        Edna = carros.Sport;
        veReal(Edna, "E", 0);
    }

    /* Loop que determina o campeão de cada volta */
    for (let voltas = 0; voltas < tipoCorrida; voltas++){
        let resJuca = veReal(Juca, "J", 1);
        let resPedro = veReal(Pedro, "P", 1);
        let resEdna = veReal(Edna, "E", 1);
        
        if(resPedro > resJuca && resPedro > resEdna){
            vitoriaP++;
        }
        else if (resJuca > resPedro && resJuca > resEdna){
                vitoriaJ++;
        }
        else{
            vitoriaE++;
        }
    }

    /* Verifica qual jogador possui mais vitorias para determinar o campeão. Em caso de empate faz uma corrida de desempate */
    if(vitoriaP > vitoriaJ && vitoriaP > vitoriaE){
        document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
    }
    else if(vitoriaJ > vitoriaP && vitoriaJ > vitoriaE){
        document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
    }
    else if(vitoriaE > vitoriaP && vitoriaE > vitoriaJ){
        document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
    }
    else{
        if(vitoriaP == vitoriaJ){
            resJuca = veReal(Juca, "J", 1);
            resPedro = veReal(Pedro, "P", 1);

            if(resPedro > resJuca){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaJ++;
                document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
            }
        }
        else if(vitoriaP == vitoriaE){
            resPedro = veReal(Pedro, "P", 1);
            resEdna = veReal(Edna, "E", 1);

            if(resPedro > resEdna){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaE++;
                document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
            }
        }
        else{
            resJuca = veReal(Juca, "J", 1);
            resEdna = veReal(Edna, "E", 1);
            if(resJuca > resEdna){
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
