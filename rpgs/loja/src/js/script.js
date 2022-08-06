import { produtos } from "./dataProdutos.js";

let carrinho = [];
let cardList = document.querySelector(".card__list");
let vitrine = document.querySelector(".containerListaProdutos");

cardList.addEventListener("click", function (e) {
  if (e.target.parentElement.className === "card__button") {
    let text = e.target.parentElement.value;
    removerDoCarrinho(text);
  }
});

vitrine.addEventListener("click", function (e) {
  if (e.target.className === "vitrine__button") {
    let pai = e.target.parentElement.parentElement;
    let text = pai.firstChild.nextSibling.innerText;
    console.log(text);
    adicionarItemCarrinho(text);
  }
});

const btnBusca = document.querySelector(".containerBuscaPorNome button");
btnBusca.addEventListener("click", () => {
  const busca = document
    .querySelector(".campoBuscaPorNome")
    .value.toLowerCase();
  buscaPorNome(produtos, busca);
});

const inputBusca = document.querySelector(".campoBuscaPorNome");
inputBusca.addEventListener("change", () => {
  const busca = document
    .querySelector(".campoBuscaPorNome")
    .value.toLowerCase();
  buscaPorNome(produtos, busca);
});

const botoesBusca = document.getElementById("botoesContainer");
botoesBusca.addEventListener("click", (event) => {
  const alvo = event.target;
  if (alvo.innerText === "Todos Produtos") {
    buscarPorSecao(produtos, "todos");
  } else {
    buscarPorSecao(produtos, alvo.innerText);
  }
});

function criarCard(array) {
  let lista = document.querySelector("ul");
  lista.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].disponivel) {
      let card = document.createElement("li");

      let img = document.createElement("Img");
      img.src = array[i].img;
      img.className = "vitrine__imagem";
      card.appendChild(img);

      let titulo = document.createElement("h3");
      titulo.innerText = array[i].nome;
      card.appendChild(titulo);

      let tag = document.createElement("span");
      tag.innerText = array[i].secao;
      card.appendChild(tag);

      let modificador = document.createElement("p");
      modificador.innerText = array[i].modificador;
      modificador.className = "vitrine__info";
      card.appendChild(modificador);

      let alcance = document.createElement("p");
      alcance.innerText = array[i].alcance;
      alcance.className = "vitrine__info";
      card.appendChild(alcance);

      let especial = document.createElement("p");
      especial.innerText = array[i].especial;
      especial.className = "vitrine__info";
      card.appendChild(especial);

      let divAlinhado = document.createElement("div");

      let precoProduto = document.createElement("p");
      precoProduto.innerText = `R$ ${array[i].preco}`;
      divAlinhado.appendChild(precoProduto);

      let botaoComprar = document.createElement("button");
      botaoComprar.innerText = "Comprar";
      botaoComprar.className = "vitrine__button";
      divAlinhado.appendChild(botaoComprar);

      card.appendChild(divAlinhado);

      lista.appendChild(card);
    }
  }
}

function buscarPorSecao(array, secao) {
  const arrayDeCards = [];

  for (let i = 0; i < array.length; i++) {
    if (secao === array[i].secao || secao === "todos") {
      arrayDeCards.push(array[i]);
    }
  }

  criarCard(arrayDeCards);
}

function buscaPorNome(array, busca) {
  const arrayDeCards = [];

  if (busca.trim() === "") {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    const nome = array[i].nome.toLowerCase();
    const secao = array[i].secao.toLowerCase();
    const categorias = array[i].categorias.join().toLowerCase();

    if (
      nome.includes(busca) ||
      secao.includes(busca) ||
      categorias.includes(busca)
    ) {
      arrayDeCards.push(array[i]);
    }
  }

  criarCard(arrayDeCards);
}

function somarTotal(array) {
  let preco = document.querySelector(".cart__price");
  let produtos = document.querySelector(".cart__quant");
  let quant = carrinho.length;
  produtos.innerText = quant;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += parseFloat(array[i].preco);
  }
  preco.innerText = `R$ ${total.toFixed(2)}`;
}

function adicionarItemCarrinho(item) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === item) {
      carrinho.push(produtos[i]);
    }
  }
  criarCardsCarrinho();
}

function criarCardsCarrinho() {
  cardList.innerHTML = "";

  for (let i = 0; i < carrinho.length; i++) {
    let card = document.createElement("li");
    card.className = "card";

    let info = document.createElement("div");
    info.className = "card__info";

    let cardHeader = document.createElement("header");
    cardHeader.className = "card__image";
    let cardImage = document.createElement("img");
    cardImage.src = carrinho[i].img;

    /*     let myImg = carrinho[i].img.split('/');
    cardImage.src = `img/${myImg[2]}`; */
    cardHeader.appendChild(cardImage);
    info.appendChild(cardHeader);

    let cardMain = document.createElement("main");
    cardMain.className = "card__content";

    let cardTitle = document.createElement("h4");
    cardTitle.className = "card__title card__text";
    cardTitle.innerText = carrinho[i].nome;
    cardMain.appendChild(cardTitle);

    let cardSecao = document.createElement("p");
    cardSecao.className = "card__secao card__subtext";
    cardSecao.innerText = carrinho[i].secao;
    cardMain.appendChild(cardSecao);

    let cardPrice = document.createElement("h4");
    cardPrice.className = "card__price card__text";
    cardPrice.innerText = `R$ ${carrinho[i].preco}`;
    cardMain.appendChild(cardPrice);
    info.appendChild(cardMain);
    card.appendChild(info);

    let cardButton = document.createElement("button");
    cardButton.className = "card__button";
    cardButton.value = carrinho[i].nome;
    cardButton.innerHTML = '<img src="./src/img/lixo.svg" alt="lixo">';
    card.appendChild(cardButton);

    cardList.appendChild(card);
  }
  if (carrinho.length > 0) {
    let footer = document.querySelector(".cart__footer");
    footer.classList.remove("cart__footer--hidden");
  } else {
    let nada = document.createElement("li");
    nada.className = "cart--empty";
    let image = document.createElement("img");
    (image.src = "./src/img/shopping-bag.png"), (image.alt = "sacola");
    let h2 = document.createElement("h2");
    h2.innerText = "Por enquanto não temos produtos no carrinho";
    nada.appendChild(image);
    nada.appendChild(h2);
    cardList.appendChild(nada);
  }
  somarTotal(carrinho);
}

function removerDoCarrinho(item) {
  for (let i = 0; i < carrinho.length; i++) {
    if (item === carrinho[i].nome) {
      carrinho.splice(i, 1);
      break;
    }
  }
  if (carrinho.length <= 0) {
    let footer = document.querySelector(".cart__footer");
    footer.classList.add("cart__footer--hidden");
  }
  criarCardsCarrinho();
}

buscarPorSecao(produtos, "todos");
