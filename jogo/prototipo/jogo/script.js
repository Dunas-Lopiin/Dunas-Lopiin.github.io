$(document).ready(function(){
    let lives = 3;
    let pontuacao = 0;
    const ITENS = [
        {"src": `assets/escolhidos/1.png`, "id": "0"},
        {"src": `assets/escolhidos/2.png`, "id": "1"},
        {"src": `assets/escolhidos/3.png`, "id": "2"},
        {"src": `assets/escolhidos/4.png`, "id": "3"},
        {"src": `assets/escolhidos/5.png`, "id": "4"},
        {"src": `assets/escolhidos/6.png`, "id": "5"},
        {"src": `assets/escolhidos/7.png`, "id": "6"}, 
        {"src": `assets/escolhidos/8.png`, "id": "7"},
        {"src": `assets/escolhidos/18.png`, "id": "8"}
    ];
    /* Itens necessários para fazer a poção */
    let itensPedido = [];

    /* Itens que o jogador colocou no caldeirão */
    let caldeirao = [];

    /* Quantidade de itens necessários para a poção */
    let quantPedidos = 3;

    /* Preenche as prateleiras dinamicamente */
    function encherPrateleiras(){
        for(let i = 0; i < 9; i++){
            if(i < 3){
                $("#itens-1").append(`<img src="${ITENS[i].src}" id="${ITENS[i].id}" class="item">`)
            }
            else if(i < 6){
                $("#itens-2").append(`<img src="${ITENS[i].src}" id="${ITENS[i].id}" class="item">`)
            }
            else{
                $("#itens-3").append(`<img src="${ITENS[i].src}" id="${ITENS[i].id}" class="item">`)
            }
        }
    }
    /* Sorteia os itens necessários para a poção */
    function sorteio(){
        itensPedido = [];
        let arrayCopia = [...ITENS];
        let numero = arrayCopia.length - 1;
        for(let i = 0; i < quantPedidos; i++){
            numero = arrayCopia.length - 1;
            let sorteado = parseInt(Math.random() * (numero - 0) + 0);
            itensPedido.push(arrayCopia[sorteado]);
            arrayCopia.splice(sorteado, 1);
        }
    }
    
    /* Adiciona os itens jogados no caldeirão em um array e no final compara se os itens jogados foram os corretos */
    function pocao(valor){
        let quantidade = caldeirao.length;
        caldeirao.push(ITENS[valor]);
        if(quantidade === 2){
            const anyOrder = caldeirao.filter(e => !itensPedido.includes(e));
            console.log(anyOrder)
            const compareOrder= caldeirao.find((v,i) => v !== itensPedido[i]);
            if(compareOrder === undefined){
                pontuacao += 20;
                $("#pontuacao").html(pontuacao);
                alert("Parabéns! Combinação perfeita!");
                $("#mago").addClass("happyMage");
                return true;
            }
            else if(anyOrder.length === 0){
                pontuacao += 10;
                $("#pontuacao").html(pontuacao);
                alert("Parabéns!");
                $("#mago").addClass("happyMage");
                return true;
            }
            else{
                lifeCount();
                return true;
            }
        }
        return false;
    }

    function lifeCount(){
        if(lives > 1){
            $(`#life${lives}`).addClass("lostLife");
            lives = lives -1;
            alert("Errou!");
            caldeirao = [];
            sorteio();
            setTimeout(mostrar(),5000);
        }
        else{
            alert("Game Over!");
        }
        console.log(lives);
    }

    /* Ativa as funções iniciais */
    encherPrateleiras();
    sorteio();
    setTimeout(mostrar(),5000);

    /* Define que objetos com a classe item podem ser arrastados */
    $( ".item" ).draggable({
        revert: 'invalid',
        helper: 'clone'
    });

    /* Define que objetos da classe item podem ser colocados dentro do objeto com id Interface */
     $( "#caudeirao" ).droppable({
        accept: `.item`,
        drop: function( event, ui ) {
            $( this )
                pocao(ui.draggable.attr("id"));
                changeColor();
            }
    });
    
    /* Muda a cor da água */
    function changeColor(){
        const classList = $("#agua").attr("class");
        $("#mago").addClass("moveMage");
        console.log(classList);
        $("#caudeirao").queue(function (next) {
            $(this).addClass("cauldronShake");
            if(classList === "s1" || classList === "waterBase"){
                $("#agua").removeClass("s1");
                $("#agua").removeClass("waterBase");
                $("#agua").addClass("water1");
            }
            else if(classList === "water1") {
                $("#agua").removeClass("water1");
                $("#agua").addClass("water2");
            }
            else{
                $("#agua").removeClass("water2");
                $("#agua").addClass("waterBase");
            }

            next();
        });
        $("#caudeirao").delay(1000).queue(function (next) {
            $(this).removeClass("cauldronShake");
            $("#mago").removeClass("moveMage");
            next();
        });
    }

    /* Esconde os ingredientes necessários após eles serem mostrados ao jogador */
    function esconder(){
        console.log("entrou");
        $(".pedido").delay(2000).queue(function(next) {
            $(this).fadeOut();
            next();
        })
        $(`#${itensPedido[0].id}`).delay(2000).queue(function(next) {
            $(this).removeClass('itemShine');
            $(`#${itensPedido[1].id}`).removeClass('itemShine');
            $(`#${itensPedido[2].id}`).removeClass('itemShine');
            next();
        })
    }
    
    function mostrar(){
        $("#pedido").remove();
        $("#cliente").delay(1000).queue(function (next) {
            $(this).append(`<img src="${itensPedido[0].src}" id="pedido-1" class="pedido">`);
            $(`#${itensPedido[0].id}`).addClass('itemShine');
            next();
        });
        $("#cliente").delay(1000).queue(function (next) {
            $(this).append(`<img src="${itensPedido[1].src}" id="pedido-2" class="pedido">`);
            $(`#${itensPedido[1].id}`).addClass('itemShine');
            next();
        });
        $("#cliente").delay(1000).queue(function (next) {
            $(this).append(`<img src="${itensPedido[2].src}" id="pedido-3" class="pedido">`);
            $(`#${itensPedido[2].id}`).addClass('itemShine');
            esconder();
            next();
        });
    }
});
