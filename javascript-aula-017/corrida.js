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
let primeiro;
let segundo;
let ultimo;

const carrosCorrida = {
    Edna: {
        tipo: "",
        velocidadeMinima: "",
        velocidadeMaxima: "",
        derrapagem: "",
        nivel: 0,
        xp: 0,
        modificador: 0.01
    },
    Juca: {
        tipo: "",
        velocidadeMinima: "",
        velocidadeMaxima: "",
        derrapagem: "",
        nivel: 0,
        xp: 0,
        modificador: 0.01
    },
    Pedro: {
        tipo: "",
        velocidadeMinima: "",
        velocidadeMaxima: "",
        derrapagem: "",
        nivel: 0,
        xp: 0,
        modificador: 0.01
    }
}

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

function carroInit(obj, letra){    
    let vMax = Math.random() * (obj.velocidadeMaxima.max - obj.velocidadeMaxima.min) + obj.velocidadeMaxima.min;
    let vMin = Math.random() * (obj.velocidadeMinima.max - obj.velocidadeMinima.min) + obj.velocidadeMinima.min;
    let derrapagem = Math.random() * (obj.derrapagem.max - obj.derrapagem.min) + obj.derrapagem.min;
    document.getElementById("tipo" + letra).innerHTML = obj.tipo;
    document.getElementById("vMin" + letra).innerHTML = vMin.toFixed(2) +"+ (0%) " + " K/h";
    document.getElementById("vMax" + letra).innerHTML = vMax.toFixed(2) +"+ (0%) " + " K/h";
    let pD = derrapagem* 100;
    document.getElementById("derra" + letra).innerHTML = pD.toFixed(2) + "%";
    document.getElementById("nivel" + letra).innerHTML = "1";
    document.getElementById("xp" + letra).innerHTML = "0";
    if(letra == "P"){
        carrosCorrida.Pedro.tipo = Pedro.tipo;
        carrosCorrida.Pedro.velocidadeMaxima = vMax;
        carrosCorrida.Pedro.velocidadeMinima = vMin;
        carrosCorrida.Pedro.derrapagem = derrapagem;
    }
    else if(letra == "E"){
        carrosCorrida.Edna.tipo = Edna.tipo;
        carrosCorrida.Edna.velocidadeMaxima = vMax;
        carrosCorrida.Edna.velocidadeMinima = vMin;
        carrosCorrida.Edna.derrapagem = derrapagem;
    }
    else{
        carrosCorrida.Juca.tipo = Juca.tipo;
        carrosCorrida.Juca.velocidadeMaxima = vMax;
        carrosCorrida.Juca.velocidadeMinima = vMin;
        carrosCorrida.Juca.derrapagem = derrapagem;
    }
}

function levelUp(item){
    if(carrosCorrida[item].xp >= 450 && carrosCorrida[item].nivel < 9){
        carrosCorrida[item].nivel++;
        carrosCorrida[item].xp = carrosCorrida[item].xp - 450;
    }
}

function velocidade(letra){
    if(letra == "E"){
        let modificadorMin = carrosCorrida.Edna.velocidadeMinima * (carrosCorrida.Edna.nivel * carrosCorrida.Edna.modificador);
        let modificadorMax = carrosCorrida.Edna.velocidadeMaxima * (carrosCorrida.Edna.nivel * carrosCorrida.Edna.modificador);
        let velocidadeMin = carrosCorrida.Edna.velocidadeMinima + modificadorMin;
        let velocidadeMax = carrosCorrida.Edna.velocidadeMaxima + modificadorMax;
        let velocidadeAtual = Math.random() * (velocidadeMax - velocidadeMin) + velocidadeMin;
        let derrapagemAtual = velocidadeAtual * carrosCorrida.Edna.derrapagem;
        let resultado = velocidadeAtual - derrapagemAtual;
        return resultado;
  
    }
    else if(letra == "J"){
        let modificadorMin = carrosCorrida.Juca.velocidadeMinima * (carrosCorrida.Juca.nivel * carrosCorrida.Juca.modificador);
        let modificadorMax = carrosCorrida.Juca.velocidadeMaxima * (carrosCorrida.Juca.nivel * carrosCorrida.Juca.modificador);
        let velocidadeMin = carrosCorrida.Juca.velocidadeMinima + modificadorMin;
        let velocidadeMax = carrosCorrida.Juca.velocidadeMaxima + modificadorMax;
        let velocidadeAtual = Math.random() * (velocidadeMax - velocidadeMin) + velocidadeMin;
        let derrapagemAtual = velocidadeAtual * carrosCorrida.Juca.derrapagem;
        let resultado = velocidadeAtual - derrapagemAtual;
        return resultado;
    }
    else if (letra == "P"){
        let modificadorMin = carrosCorrida.Pedro.velocidadeMinima * (carrosCorrida.Pedro.nivel * carrosCorrida.Pedro.modificador);
        let modificadorMax = carrosCorrida.Pedro.velocidadeMaxima * (carrosCorrida.Pedro.nivel * carrosCorrida.Pedro.modificador);
        let velocidadeMin = carrosCorrida.Pedro.velocidadeMinima + modificadorMin;
        let velocidadeMax = carrosCorrida.Pedro.velocidadeMaxima + modificadorMax;
        let velocidadeAtual = Math.random() * (velocidadeMax - velocidadeMin) + velocidadeMin;
        let derrapagemAtual = velocidadeAtual * carrosCorrida.Pedro.derrapagem;
        let resultado = velocidadeAtual - derrapagemAtual;
        return resultado;
    }
}

function colocacao(P, E, J){
    if(P > E && P > J){
        carrosCorrida.Pedro.xp = carrosCorrida.Pedro.xp + primeiro;
        if(E > J){
            carrosCorrida.Edna.xp = carrosCorrida.Edna.xp + segundo;
            carrosCorrida.Juca.xp = carrosCorrida.Juca.xp + ultimo;
        }
        else{
            carrosCorrida.Edna.xp = carrosCorrida.Edna.xp + ultimo;
            carrosCorrida.Juca.xp = carrosCorrida.Juca.xp + segundo;
        }
    }
    else if(E > P && E > J){
        carrosCorrida.Edna.xp = carrosCorrida.Edna.xp + primeiro;
        if(P > J){
            carrosCorrida.Pedro.xp = carrosCorrida.Pedro.xp + segundo;
            carrosCorrida.Juca.xp = carrosCorrida.Juca.xp + ultimo;
        }
        else{
            carrosCorrida.Pedro.xp = carrosCorrida.Pedro.xp + ultimo;
            carrosCorrida.Juca.xp = carrosCorrida.Juca.xp + segundo;
        }
    }
    else{
        carrosCorrida.Juca.xp = carrosCorrida.Juca.xp + primeiro;
        if(P > E){
            carrosCorrida.Pedro.xp = carrosCorrida.Pedro.xp + segundo;
            carrosCorrida.Edna.xp = carrosCorrida.Edna.xp + ultimo;
        }
        else{
            carrosCorrida.Pedro.xp = carrosCorrida.Pedro.xp + ultimo;
            carrosCorrida.Edna.xp = carrosCorrida.Edna.xp + segundo;
        }
    }
}

function corrida(){
    if(document.querySelector('input[name="campeonato"]:checked') && document.getElementById("personalizado").value == 0){
        tipoCorrida = document.querySelector('input[name="campeonato"]:checked').value; //checa qual tipo de corrida foi escolhida
    }
    else{
        tipoCorrida = document.getElementById("personalizado").value;
    }

    if(tipoCorrida == 10){
        primeiro = 200;
        segundo = 120;
        ultimo = 50;   
    }
    else if(tipoCorrida == 70){
        primeiro = 220;
        segundo = 130;
        ultimo = 75;   
    }
    else{
        primeiro = 250;
        segundo = 150;
        ultimo = 90;   
    }

    vitoriaE = 0; //voltas que a Edna ganhou
    vitoriaJ = 0; //voltas que o juca ganhou
    vitoriaP = 0; //voltas que o pedro ganhou
    sorteioP = Math.random() * (100 - 1) + 1; //sorteio do carro do pedro
    sorteioJ = Math.random() * (100 - 1) + 1; //sorteio do carro do juca
    sorteioE = Math.random() * (100 - 1) + 1; //sorteio do carro da Edna
    
    /* Ve qual o carro do Pedro e adiciona seus atributos no HTML */
    if(sorteioP <= 60){
        Pedro = carros.Popular;
        carroInit(Pedro, "P");
    }
    else if(sorteioP >= 95){
        Pedro = carros.Super;
        carroInit(Pedro, "P");
    }
    else{
        Pedro = carros.Sport;
        carroInit(Pedro, "P");
    }
   
    /* Ve qual o carro do Juca e adiciona seus atributos no HTML */
    if(sorteioJ <= 60){
        Juca = carros.Popular;
        carroInit(Juca, "J");
    }
    else if(sorteioJ >= 95){
        Juca = carros.Super;
        carroInit(Juca, "J");
    }
    else{
        Juca = carros.Sport;
        carroInit(Juca, "J");
    }

    /* Ve qual o carro da Edna e adiciona seus atributos no HTML */
    if(sorteioE <= 60){
        Edna = carros.Popular;
        carroInit(Edna, "E");
    }
    else if(sorteioE >= 95){
        Edna = carros.Super;
        carroInit(Edna, "E");
    }
    else{
        Edna = carros.Sport;
        carroInit(Edna, "E");
    }
    

    /* Loop que determina o campeão de cada volta */
    for (let voltas = 0; voltas < tipoCorrida; voltas++){
        let resEdna = velocidade("E");
        let resJuca = velocidade("J");
        let resPedro = velocidade("P");
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
            resJuca = velocidade("J");
            resPedro = velocidade("P");

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
            resEdna = velocidade("E");
            resPedro = velocidade("P");

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
            resJuca = velocidade("J");
            resEdna = velocidade("E");
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

    colocacao(vitoriaP, vitoriaE, vitoriaJ);
    document.getElementById("resultados").innerHTML = "Pedro ganhou: " + vitoriaP + " voltas, Juca ganhou: " + vitoriaJ + " voltas, e Edna ganhou: " + vitoriaE + " voltas.";
    Object.keys(carrosCorrida).forEach(element => {
        levelUp(element);
    });
    document.getElementById("vMinP").innerHTML = carrosCorrida.Pedro.velocidadeMinima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Pedro.nivel + "%)";
    document.getElementById("vMaxP").innerHTML = carrosCorrida.Pedro.velocidadeMaxima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Pedro.nivel + "%)";
    document.getElementById("vMinE").innerHTML = carrosCorrida.Edna.velocidadeMinima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Edna.nivel + "%)";
    document.getElementById("vMaxE").innerHTML = carrosCorrida.Edna.velocidadeMaxima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Edna.nivel + "%)";
    document.getElementById("vMinJ").innerHTML = carrosCorrida.Juca.velocidadeMinima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Juca.nivel + "%)";
    document.getElementById("vMaxJ").innerHTML = carrosCorrida.Juca.velocidadeMaxima.toFixed(2) + " K/h" + " + (" + carrosCorrida.Juca.nivel + "%)";
    document.getElementById("nivelP").innerHTML = carrosCorrida.Pedro.nivel+1;
    document.getElementById("xpP").innerHTML = carrosCorrida.Pedro.xp;
    document.getElementById("nivelE").innerHTML = carrosCorrida.Edna.nivel+1;
    document.getElementById("xpE").innerHTML = carrosCorrida.Edna.xp;
    document.getElementById("nivelJ").innerHTML = carrosCorrida.Juca.nivel+1;
    document.getElementById("xpJ").innerHTML = carrosCorrida.Juca.xp;
 
}
