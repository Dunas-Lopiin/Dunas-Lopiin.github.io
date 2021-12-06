let tipoCorrida;
let vitoriaP = 0;
let vitoriaJ = 0;
let vitoriaE = 0;
let sorteioP;
let sorteioJ;
let sorteioE;

/* Gerador usado para gerar carros do tipo popular */
class CP {
    constructor() {
        this.tipo = "Popular";
        this.veMin = Math.random() * (130 - 110) + 110;
        this.veMax = Math.random() * (200 - 180) + 180;
        this.percentualDerrapagem = Math.random() * (0.04 - 0.03) + 0.03;
        this.velocidadeAtual = Math.random() * (this.veMax - this.veMin) + this.veMin;
        this.derrapagemAtual = this.velocidadeAtual * this.percentualDerrapagem;
        this.resultado = this.velocidadeAtual - this.derrapagemAtual;
    }
}

/* Gerador usado para gerar carros do tipo Sport */
class CSP {
    constructor() {
        this.tipo = "Sport";
        this.veMin = Math.random() * (145 - 125) + 125;
        this.veMax = Math.random() * (215 - 195) + 195;
        this.percentualDerrapagem = Math.random() * (0.03 - 0.02) + 0.02;
        this.velocidadeAtual = Math.random() * (this.veMax - this.veMin) + this.veMin;
        this.derrapagemAtual = this.velocidadeAtual * this.percentualDerrapagem;
        this.resultado = this.velocidadeAtual - this.derrapagemAtual;
    }
}

/* Gerador usado para gerar carros do tipo Super */
class CSU {
    constructor() {
        this.tipo = "Super";
        this.veMin = Math.random() * (160 - 140) + 140;
        this.veMax = Math.random() * (230 - 210) + 210;
        this.percentualDerrapagem = Math.random() * (0.0175 - 0.01) + 0.01;
        this.velocidadeAtual = Math.random() * (this.veMax - this.veMin) + this.veMin;
        this.derrapagemAtual = this.velocidadeAtual * this.percentualDerrapagem;
        this.resultado = this.velocidadeAtual - this.derrapagemAtual;
    }
}

/* função usada para gerar uma nova velocidade do carro a cada volta */
function veReal(obj){
    obj.percentualDerrapagem = Math.random() * (0.0175 - 0.01) + 0.01;
    obj.velocidadeAtual = Math.random() * (obj.veMax - obj.veMin) + obj.veMin;
    obj.derrapagemAtual = obj.velocidadeAtual * obj.percentualDerrapagem;
    obj.resultado = obj.velocidadeAtual - obj.derrapagemAtual;
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
        Pedro = new CP();
        document.getElementById("tipoP").innerHTML = Pedro.tipo;
        document.getElementById("vMinP").innerHTML = Pedro.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxP").innerHTML = Pedro.veMax.toFixed(2) + " K/h";
        let pD = Pedro.percentualDerrapagem * 100;
        document.getElementById("derraP").innerHTML = pD.toFixed(2) + "%";
    }
    else if(sorteioP >= 95){
        Pedro = new CSU();
        document.getElementById("tipoP").innerHTML = Pedro.tipo;
        document.getElementById("vMinP").innerHTML = Pedro.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxP").innerHTML = Pedro.veMax.toFixed(2) + " K/h";
        pD = Pedro.percentualDerrapagem * 100;
        document.getElementById("derraP").innerHTML = pD.toFixed(2) + "%";
    }
    else{
        Pedro = new CSP();
        document.getElementById("tipoP").innerHTML = Pedro.tipo;
        document.getElementById("vMinP").innerHTML = Pedro.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxP").innerHTML = Pedro.veMax.toFixed(2) + " K/h";
        pD = Pedro.percentualDerrapagem * 100;
        document.getElementById("derraP").innerHTML = pD.toFixed(2) + "%";
    }
   
    /* Ve qual o carro do Juca e adiciona seus atributos no HTML */
    if(sorteioJ <= 60){
        Juca = new CP();
        document.getElementById("tipoJ").innerHTML = Juca.tipo;
        document.getElementById("vMinJ").innerHTML = Juca.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxJ").innerHTML = Juca.veMax.toFixed(2) + " K/h";
        pD = Juca.percentualDerrapagem * 100;
        document.getElementById("derraJ").innerHTML = pD.toFixed(2) + "%";
    }
    else if(sorteioJ >= 95){
        Juca = new CSU();
        document.getElementById("tipoJ").innerHTML = Juca.tipo;
        document.getElementById("vMinJ").innerHTML = Juca.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxJ").innerHTML = Juca.veMax.toFixed(2) + " K/h";
        pD = Juca.percentualDerrapagem * 100;
        document.getElementById("derraJ").innerHTML = pD.toFixed(2) + "%";
    }
    else{
        Juca = new CSP();
        document.getElementById("tipoJ").innerHTML = Juca.tipo;
        document.getElementById("vMinJ").innerHTML = Juca.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxJ").innerHTML = Juca.veMax.toFixed(2) + " K/h";
        pD = Juca.percentualDerrapagem * 100;
        document.getElementById("derraJ").innerHTML = pD.toFixed(2) + "%";
    }

    /* Ve qual o carro da Edna e adiciona seus atributos no HTML */
    if(sorteioE <= 60){
        Edna = new CP();
        document.getElementById("tipoE").innerHTML = Edna.tipo;
        document.getElementById("vMinE").innerHTML = Edna.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxE").innerHTML = Edna.veMax.toFixed(2) + " K/h";
        pD = Edna.percentualDerrapagem * 100;
        document.getElementById("derraE").innerHTML = pD.toFixed(2) + "%";
    }
    else if(sorteioE >= 95){
        Edna = new CSU();
        document.getElementById("tipoE").innerHTML = Edna.tipo;
        document.getElementById("vMinE").innerHTML = Edna.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxE").innerHTML = Edna.veMax.toFixed(2) + " K/h";
        pD = Edna.percentualDerrapagem * 100;
        document.getElementById("derraE").innerHTML = pD.toFixed(2) + "%";
    }
    else{
        Edna = new CSP();
        document.getElementById("tipoE").innerHTML = Edna.tipo;
        document.getElementById("vMinE").innerHTML = Edna.veMin.toFixed(2) + " K/h";
        document.getElementById("vMaxE").innerHTML = Edna.veMax.toFixed(2) + " K/h";
        pD = Edna.percentualDerrapagem * 100;
        document.getElementById("derraE").innerHTML = pD.toFixed(2) + "%";
    }

    /* Loop que determina o campeão de cada volta */
    for (let voltas = 0; voltas < tipoCorrida; voltas++){
        veReal(Juca);
        veReal(Pedro);
        veReal(Edna);
        
        if(Pedro.resultado > Juca.resultado && Pedro.resultado > Edna.resultado){
            vitoriaP++;
        }
        else if (Juca.resultado > Pedro.resultado && Juca.resultado > Edna.resultado){
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
            veReal(Juca);
            veReal(Pedro);

            if(Pedro.resultado > Juca.resultado){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaJ++;
                document.getElementById("campeao").innerHTML = "Juca é o campeão do campeonato!";
            }
        }
        else if(vitoriaP == vitoriaE){
            veReal(Edna);
            veReal(Pedro);

            if(Pedro.resultado > Edna.resultado){
                vitoriaP++;
                document.getElementById("campeao").innerHTML = "Pedro é o campeão do campeonato!";
            }
            else{
                vitoriaE++;
                document.getElementById("campeao").innerHTML = "Edna é a campeã do campeonato!";
            }
        }
        else{
            veReal(Juca);
            veReal(Edna);
            if(Juca.resultado > Edna.resultado){
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


