$(document).ready(function(){

    const ITENS = [
        {"name": "#armor1", "src": `assets/Kickpixel's - RPG Icons 1/armour_bronze.png`},
        {"name": "#arrow1", "src": `assets/Kickpixel's - RPG Icons 1/arrow_bronze.png`},
        {"name": "#axe1", "src": `assets/Kickpixel's - RPG Icons 1/axe_bronze.png`},
        {"name": "#book1", "src": `assets/Kickpixel's - RPG Icons 1/book_blue.png`},
        {"name": "#gem1", "src": `assets/Kickpixel's - RPG Icons 1/gem_blue.png`}, 
        {"name": "#heart1", "src": `assets/Kickpixel's - RPG Icons 1/heart.png`},
        {"name": "#key1", "src": `assets/Kickpixel's - RPG Icons 1/key.png`}, 
        {"name": "#leaf1", "src": `assets/Kickpixel's - RPG Icons 1/leaf.png`}, 
        {"name": "#potion1", "src": `assets/Kickpixel's - RPG Icons 1/potion_red.png`}];
    let itensPedido = [];
    let quantPedidos = 3;

    function sorteio(){
        itensPedido = [];
        const copia = ITENS;
        let numero = ITENS.length - 1;
        for(let i = 0; i < quantPedidos; i++){
            numero = ITENS.length - 1;
            let sorteio = parseInt(Math.random() * (numero - 0) + 0);
            itensPedido.push(copia[sorteio]);
            copia.splice(sorteio, 1);
            console.log(sorteio);
        }
    }
    sorteio();

    console.log(itensPedido);
    
    $( function() {
        $( ".item" ).draggable({
            revert: 'invalid'
        });
        $( "#interface" ).droppable({
            accept: `${itensPedido[0].name}, ${itensPedido[1].name}, ${itensPedido[2].name}`,
            drop: function( event, ui ) {
            $( this )
                .switchClass( "ui-state-common", "ui-state-highlight", 500, "easeInOutQuad" )
                .switchClass( "ui-state-highlight", "ui-state-common", 500, "easeInOutQuad" )
            }
        });
      } 
    );

    function esconder(){
        console.log("entrou");
        $("#pedido-1").delay(2000).fadeOut();
        $("#pedido-2").delay(2000).fadeOut();
        $("#pedido-3").delay(2000).fadeOut();
    }
    function mostrar(){
        $("#cliente").delay(500).queue(function (next) {
            $(this).append(`<img src="${itensPedido[0].src}" id="pedido-1" class="pedido">`);
            next();
        });
        $("#cliente").delay(500).queue(function (next) {
            $(this).append(`<img src="${itensPedido[1].src}" id="pedido-2" class="pedido">`);
            next();
        });
        $("#cliente").delay(500).queue(function (next) {
            $(this).append(`<img src="${itensPedido[2].src}" id="pedido-3" class="pedido">`);
            esconder();
            next();
        });
    }

    setTimeout(mostrar(),5000);
});
