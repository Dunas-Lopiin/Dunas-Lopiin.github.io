document.getElementById("revelar").innerHTML = "Quem sou eu? Clique e descubra!";
document.getElementById("revelar").onclick = meusDados;

function nav(){
    document.querySelector("nav a").href = "#";
    document.querySelector("nav a").innerHTML ="Capivaras!";
}

function aniArticle(){
    document.querySelector("#Animal h2").innerHTML = "Capivara: O maior roedor do mundo!";
    document.querySelector("#Animal img").src = "imagens/capi.png";
    document.getElementById("sobre1").innerHTML = "As capivaras (Hydrochoerus hydrochaeris) são mamíferos herbívoros que se destacam por levarem o título de maior roedor do mundo. Esses animais apresentam um corpo robusto e musculoso coberto por pelos marrom-escuros e podem atingir cerca de 1,3 m de comprimento e 60 cm de altura. Seu peso varia, e esses mamíferos apresentam, em média, de 20 kg a 80 kg.";
    document.querySelector("#Animal h3").innerHTML = "Características da capivara";
    document.getElementById("sobre2").innerHTML = "As capivaras são animais calmos e mansos, nativos da América do Sul. Vivem em locais próximos ao ambiente aquático, pois precisam da água para várias de suas atividades, como esconder de predadores e reproduzir-se. Dizemos que esse mamífero possui um hábito semiaquático.";
    document.getElementById("sobre3").innerHTML = "Esses animais são herbívoros e pastam, principalmente, ao entardecer. Alimentam-se de gramíneas e até mesmo de plantas aquáticas. Capivaras adultas podem comer mais de 5 kg de comida, dependendo de seu tamanho.";

}

function referencias(){
    document.querySelector("#referencias h2").innerHTML = "Referências";
    document.querySelector("#referencias img").src = "imagens/varias.jpg";
    document.getElementById("link1").innerHTML = "Conheça mais sobre as capivaras em:"
    document.getElementById("l1").innerHTML = "mundoeducacao.uol.br";
    document.getElementById("l1").href = "https://mundoeducacao.uol.com.br/biologia/capivara.html";
    document.getElementById("link2").innerHTML = "Curiosidades sobre capivaras:";
    document.getElementById("l2").innerHTML = "Ciência no Cotidiano | Capivaras";
    document.getElementById("l2").href = "https://www.youtube.com/watch?v=ZwI4YWISIuw";
}

function meusDados(){
    document.getElementById("fotoTitulo").src = "imagens/eu.png";
    document.getElementById("nome").innerHTML = "Nome: Plinio Figueiredo dos Santos";
    document.getElementById("idade").innerHTML = "Idade: 26 Anos";
    document.getElementById("local").innerHTML = "Cidade / Estado: São Paulo - SP";
    document.getElementById("fotoTitulo").style.width = "250px";
    document.getElementById("fotoTitulo").style.height = "250px";
    document.getElementById("fotoTitulo").style.borderRadius = "50%";
    document.getElementById("fotoTitulo").style.border = "double 6px black";
}

aniArticle();
nav();
referencias();