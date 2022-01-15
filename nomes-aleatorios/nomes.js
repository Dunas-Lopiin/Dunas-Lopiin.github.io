const nomesMasculinos = [
    ["Alberto", "Arthur", "Algusto", "Antonio"], 
    ["Brian", "Bruno", "Breno", "Belo"],
    ["Carlos", "Caique", "Cleiton", "Claus"],
    ["Daniel", "Dunas", "Diego", "David"],
    ["Eudes", "Ernesto", "Edson", "Emanuel"],
    ["Fernando", "Fabio", "Felipe", "Francisco"],
    ["Geraldo", "Guilherme", "Giorno", "Gregório"],
    ["Helio", "Henrique", "Heitor", "Hugo"],
    ["Issac", "Israel", "Icaro", "Inácio"],
    ["José", "Jafar", "Joseph", "Jonathan"],
    ["Kevin", "Kauê", "Kalel", "Kelsier"],
    ["Leonardo", "Lucas", "Luan", "Lucifer"],
    ["Machado", "Miguel", "Mendonça", "Murilo"],
    ["Noah", "Nicolau", "Nabucodonosor", "Nunes"],
    ["Oliver", "Otávio", "Orlando", "Orion"],
    ["Pedro", "Pierre", "Peter", "Pablo"],
    ["Queiroz", "Quinn", "Quevedo", "Quincas"],
    ["Ravi", "Raul", "Ricardo", "Renan"],
    ["Samuel", "Sérgio", "Sebastião", "Shai"],
    ["Tiago", "Thomas", "Teodoro", "Thales"],
    ["Uriel", "Ubiratan", "Ulysses", "Urano"],
    ["Vinicius", "Vincente", "Victor", "Vanderlei"],
    ["Willian", "Wesley", "Wendel", "Walter"],
    ["Xavier", "Xerxes", "Xenócrates", "Xandy"],
    ["Yago", "Yuki", "Yanni", "Yeshua"],
    ["Zion", "Zetta", "Zeus", "Zacarias"]
]

const nomesFemininos = [
    ["Ana", "Alice", "Ayla", "Aurora"], 
    ["Beatriz", "Bruna", "Bárbara", "Bloom"],
    ["Cecília", "Camila", "Catarina", "Cristal"],
    ["Diana", "Daniela", "Dandara", "Dominique"],
    ["Elisabeth", "Emily", "Ellen", "Ember"],
    ["Fátima", "Flavia", "Flora", "Fancine"],
    ["Gabriele", "Gisele", "Gaia", "Gwendolyn"],
    ["Helena", "Hanna", "Helga", "Harumi"],
    ["Isadora", "Isabela", "Isis", "Iris"],
    ["Júlia", "Jasmin", "Jade", "Jolyne"],
    ["Kiara", "Kelly", "Karina", "Kimi"],
    ["Letícia", "Liz", "Laguna", "Luna"],
    ["Maria", "Milena", "Melissa", "Maya"],
    ["Nicole", "Naomi", "Nina", "Nataly"],
    ["Olivia", "Ohana", "Opala", "Olímpia"],
    ["Penelope", "Priscila", "Paula", "Pandora"],
    ["Quinci", "Queen", "Quill", "Queren"],
    ["Rebeca", "Roberta", "Rose", "Raven"],
    ["Sara", "Sophia", "Sabrina", "Selene"],
    ["Thais", "Teresa", "Tasha", "Tina"],
    ["Ursula", "Uyra", "Unity", "Una"],
    ["Vitoria", "Vanessa", "Vivian", "Vânia"],
    ["Wilma", "Wanda", "Wendy", "Walquiria"],
    ["Xayane", "Xena", "Xaria", "Xienna"],
    ["Yasmin", "Yara", "Yumi", "Yasmin"],
    ["Zoe", "Zaira", "Zuri", "Zelda"]
]

const sobrenomes = [
    ["Abrel", "Almeida", "de Assis", "Armani"], 
    ["Brito", "Braga", "Brando", "Bush"],
    ["Campos", "Carvalho", "Cavalcanti", "Cordeiro"],
    ["Dantas", "Delai", "Danzi", "Duarte"],
    ["Ebani", "Esteves", "Eller", "Esposito"],
    ["Ferreira", "Fonseca", "Ferdinando", "Fraga"],
    ["Guerra", "Giovanni", "Grillo", "Guedes"],
    ["Habib", "Harper", "Hoffman", "Henrique"],
    ["Italo", "Idalino", "Iki", "Iwand"],
    ["Jacinto", "Jambo", "Joaquina", "Justo"],
    ["Keifer", "Kister", "Kulger", "Klein"],
    ["Leite", "Lapa", "Loreto", "Lupino"],
    ["Machado", "Marinho", "Mello", "Moniz"],
    ["Nagen", "Nakamura", "Neves", "Nogueira"],
    ["Oliveira", "Olimpio", "Orelio", "Osthed"],
    ["Pereira", "Peroni", "de Paes", "Pazeto"],
    ["Quaresma", "Queiroz", "Quinelato", "Quirino"],
    ["Rasmusen", "Rodrigues", "Real", "dos Reis"],
    ["dos Santos", "da Silva", "Seguro", "Stein"],
    ["Teves", "Taylor", "Torres", "Trindade"],
    ["Uliana", "Ultramar", "Uzer", "Urbino"],
    ["Venturim", "Valdino", "Veloso", "Vila Nova"],
    ["Wood", "Weiss", "Watanabe", "Warner"],
    ["Xavier", "Xeno", "Xuria", "Xaria"],
    ["York", "Yorder", "Yates", "Yeager"],
    ["Zanon", "Zorzal", "Zuchi", "Zanata"]
]

const tamanhoHomens = nomesMasculinos.length;
const tamanhoMulheres = nomesFemininos.length;
const tamanhoSobrenome = sobrenomes.length;
const botao = document.getElementById("gerar");

botao.addEventListener("click", tipoDeSorteio);


function sortearNome(_array, _tipo, _quantidade){
    let sobrenomesFinal = "";
    const nomeLinha = parseInt(Math.random() * (_tipo - 0) + 0);
    const nomeColuna = parseInt(Math.random() * (4 - 0) + 0);
    for(let i = 0; i < _quantidade; i++){
        const linhaSobrenome = parseInt(Math.random() * (tamanhoSobrenome - 0) + 0);
        const colunaSobrenome = parseInt(Math.random() * (4 - 0) + 0);
        sobrenomesFinal = sobrenomesFinal + sobrenomes[linhaSobrenome][colunaSobrenome] + " ";
    }
    return _array[nomeLinha][nomeColuna] + " " + sobrenomesFinal;
}

function tipoDeSorteio(){
    const tipo = document.getElementById("tipo").value;
    const quantidade = document.getElementById("quantidade").value;
    let nomeFinal;
    if(tipo === "masc"){
        if(quantidade === "1"){
            nomeFinal = sortearNome(nomesMasculinos, tamanhoHomens, 1);
        }
        else if(quantidade === "2"){
            nomeFinal = sortearNome(nomesMasculinos, tamanhoHomens, 2);
        }
        else{
            nomeFinal = sortearNome(nomesMasculinos, tamanhoHomens, 3);
        }
        document.getElementById("nome").innerHTML = nomeFinal;
        return false;
    }
    else if(tipo === "fem"){
        if(quantidade === "1"){
            nomeFinal = sortearNome(nomesFemininos, tamanhoMulheres, 1);
        }
        else if(quantidade === "2"){
            nomeFinal = sortearNome(nomesFemininos, tamanhoMulheres, 2);
        }
        else{
            nomeFinal = sortearNome(nomesFemininos, tamanhoMulheres, 3);
        }
        document.getElementById("nome").innerHTML = nomeFinal;
        return false;
    }
    else{
        const todos = [...nomesMasculinos, ...nomesFemininos];
        const tamanhoAleatorio = todos.length;
        if(quantidade === "1"){
            nomeFinal = sortearNome(todos, tamanhoAleatorio, 1);
        }
        else if(quantidade === "2"){
            nomeFinal = sortearNome(todos, tamanhoAleatorio, 2);
        }
        else{
            nomeFinal = sortearNome(todos, tamanhoAleatorio, 3);
        }
        document.getElementById("nome").innerHTML = nomeFinal;
        return false;
    }
}

