$(document).ready(function(){

    $( function() {
        $( ".item" ).draggable({
            revert: 'invalid'
        });
        $( "#interface" ).droppable({
            accept: "#book1, #key1, #gem1",
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
            $(this).append(`<img src="assets/Kickpixel's - RPG Icons 1/key.png" id="pedido-1" class="pedido">`);
            next();
        });
        $("#cliente").delay(500).queue(function (next) {
            $(this).append(`<img src="assets/Kickpixel's - RPG Icons 1/book_blue.png" id="pedido-2" class="pedido">`);
            next();
        });
        $("#cliente").delay(500).queue(function (next) {
            $(this).append(`<img src="assets/Kickpixel's - RPG Icons 1/gem_blue.png" id="pedido-3" class="pedido">`);
            esconder();
            next();
        });
    }

    setTimeout(mostrar(),5000);
});
