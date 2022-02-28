$(document).ready(function(){
    const DOMINOS = [
        {"front": "0", "back": "0", "src": "images/dominos/0-0.svg"},
        {"front": "0", "back": "1", "src": "images/dominos/0-1.svg"},
        {"front": "0", "back": "2", "src": "images/dominos/0-2.svg"},
        {"front": "0", "back": "3", "src": "images/dominos/0-3.svg"},
        {"front": "0", "back": "4", "src": "images/dominos/0-4.svg"},
        {"front": "0", "back": "5", "src": "images/dominos/0-5.svg"},
        {"front": "0", "back": "6", "src": "images/dominos/0-6.svg"},
        {"front": "1", "back": "1", "src": "images/dominos/1-1.svg"},
        {"front": "1", "back": "2", "src": "images/dominos/1-2.svg"},
        {"front": "1", "back": "3", "src": "images/dominos/1-3.svg"},
        {"front": "1", "back": "4", "src": "images/dominos/1-4.svg"},
        {"front": "1", "back": "5", "src": "images/dominos/1-5.svg"},
        {"front": "1", "back": "6", "src": "images/dominos/1-6.svg"},
        {"front": "2", "back": "2", "src": "images/dominos/2-2.svg"},
        {"front": "2", "back": "3", "src": "images/dominos/2-3.svg"},
        {"front": "2", "back": "4", "src": "images/dominos/2-4.svg"},
        {"front": "2", "back": "5", "src": "images/dominos/2-5.svg"},
        {"front": "2", "back": "6", "src": "images/dominos/2-6.svg"},
        {"front": "3", "back": "3", "src": "images/dominos/3-3.svg"},
        {"front": "3", "back": "4", "src": "images/dominos/3-4.svg"},
        {"front": "3", "back": "5", "src": "images/dominos/3-5.svg"},
        {"front": "3", "back": "6", "src": "images/dominos/3-6.svg"},
        {"front": "4", "back": "4", "src": "images/dominos/4-4.svg"},
        {"front": "4", "back": "5", "src": "images/dominos/4-5.svg"},
        {"front": "4", "back": "6", "src": "images/dominos/4-6.svg"},
        {"front": "5", "back": "5", "src": "images/dominos/5-5.svg"},
        {"front": "5", "back": "6", "src": "images/dominos/5-6.svg"},
        {"front": "6", "back": "6", "src": "images/dominos/6-6.svg"}
    ];
    let DECK = [];
    let pieces = 28;
    let myHand = 0;
    let focus = [];
    let piecesPlayed = 0;
    let discardPile = 0;
    let firstTurn = true;
    let ability = 3;

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    function randomGame(){
        let shuffleDomino = shuffle(DOMINOS);
        for(let i = 0; i < 28; i++){
            let x = {"front": shuffleDomino[i].front, "back": shuffleDomino[i].back, "id": `${shuffleDomino[i].front}-${shuffleDomino[i].back}`};
            
            DECK.push(x);
            $("#deck").append(`<img id="${DECK[i].id}" src="images/dominos/back.svg" class="domino" value="rotate">`);
            $(`#${DECK[i].id}`).hide();
        }
        console.log(DECK);
    }

    randomGame();

    function startGame(){
        if (confirm("Usar uma vantagem? | Use a advantage?") == true) {
            ability = 4;
          } else {
            ability = 3;
          }
        if(firstTurn){
            for(let i = 0; i < ability+1; i++){
                $(`#${DECK[0].id}`).fadeIn("slow");
                DECK.shift();
            }
            myHand = ability+1;
            $(".domino").on("dblclick", rotate);
            $("#start-game").fadeOut("slow");
        }
        else{
            for(let i = ability; i > myHand; i--){
                $(`#${DECK[0].id}`).show();
                DECK.shift();
            }
            myHand = ability;
        }
        console.log(DECK);
        $( ".domino" ).draggable({revert: "invalid", snap: true});
        $("#dom-count").html(pieces); 
        
    }
    

    function rotate(){
        console.log("entrou")
        let valor = $(this).val();
        if(valor === "rotate"){
            $(this).removeClass("rotate");
            $(this).addClass("rotate2");
            $(this).val("rotate2")
        }
        else if
        (valor === "rotate2"){
            $(this).removeClass("rotate2");
            $(this).addClass("rotate3");
            $(this).val("rotate3")
        }
        else if
        (valor === "rotate3"){
            $(this).removeClass("rotate3");
            $(this).addClass("rotate4");
            $(this).val("rotate4");
        }
        else{
            $(this).removeClass("rotate4");
            $(this).addClass("rotate");
            $(this).val("rotate");
        }
    }

    $( "#hand" ).droppable({
        accept: `.domino`,
        drop: function( event, ui ) {
            $( this )
            
                let domino = ui.draggable.attr("id");
                let dominoInfo = document.getElementById(domino);
                let dominoClass = dominoInfo.classList.contains('turned');
                if(!dominoClass){
                    pieces = pieces -1;
                    $(`#${domino}`).attr("src", `images/dominos/${domino}.svg`);
                    $(`#${domino}`).addClass("turned");
                    $("#dom-count").html(pieces);
                   // myHand++;
                }
                console.log(myHand);
/*                 if(firstTurn){
                    if(myHand === 4){
                        $( "#hand" ).droppable( "option", "disabled", true );
                        
                    }
                }
                if(myHand === 3 && !firstTurn){
                    $( "#hand" ).droppable( "option", "disabled", true );
                } */
            }
    });


    $( "#table" ).droppable({
        accept: `.turned`,
        drop: function( event, ui ) {
            let dominoId = ui.draggable.attr("id");
            let dominoInfo = document.getElementById(dominoId);
            let dominoClass = dominoInfo.classList.contains('played');
            let dominoValue = dominoId.split("-");
            focus.push(dominoValue);
/*             $(`#${ui.draggable.attr("id")}`).removeClass("turned"); */
            $(`#${ui.draggable.attr("id")}`).addClass("played");
            if(dominoClass){
                return true;
            }
            else{
                myHand = myHand-1;
                piecesPlayed++;
            }
            console.log(myHand);
        }
    });

    $( "#discard" ).droppable({
        accept: `.played`,
        drop: function( event, ui ) {
            $( this )
            let id = ui.draggable.attr("id");
            $(`#${id}`).remove();
            console.log(`${id} foi descartado!`);
        }
    });


    function turnMath(){
        if(firstTurn){
            if(myHand === 4){
                alert("por favor jogue uma peça na mesa");
                return false;
            }
            piecesPlayed = piecesPlayed -1;
            console.log(piecesPlayed);
        }
        if(myHand < 3){
            $( "#hand" ).droppable("enable");
        }
        if(pieces <= 0){
            reset();
        }
        if(piecesPlayed === 0){
            console.log("remova duas peças!");
        }
        else if(piecesPlayed === 1){
            console.log("remova uma peça e cause 1 ponto de dano!");
        }
        else if (piecesPlayed === 2){
            console.log("cause 2 pontos de dano!");
        }
        else{
            console.log("cause 3 pontos de dano!");
        }
        piecesPlayed = 0;
        if(myHand <= 3){
            if(firstTurn){
                firstTurn = false;
            }
            startGame();
        }
    }

    

    function reset(){
        DECK = [];
        firstTurn = true;
        $("#dom-count").html(""); 
        $("#start-game").fadeIn("slow");
        $(".domino").remove();
        randomGame();
        pieces = 28;
    }

    function addCharacter(){
        let link = $("#char-src").val();
        console.log(link);
        //$("#character").attr("src", link);
    }

    $("#send").on("click", addCharacter);
    $("#start-game").on("click", startGame);
    $("#finish-turn").on("click", turnMath);
    $("#end-game").on("click", reset);
    $( "#tabs" ).tabs();
});
