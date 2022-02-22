const url = "http://localhost:8000";

$(document).ready(function(){
    let gamePaused = true;
    const soundTremor = new Audio('assets/sons/Retro Impact Water 03.wav');
    const music = new Audio('assets/sons/music1.wav');
    let currentStage = 1;
    /* Conta as vidas */
    let lives = 1;

    /* conta os pontos */
    let score = 0;
    /* Itens necessários para fazer a poção */
    let itensAsked = [];

    /* define o modo de jogo */
    let gameMode;

    /* Itens que o jogador colocou no caldeirão */
    let cauldron = [];
    
    /* Quantidade de itens necessários para a poção */
    let numberIngredients = 3;
    const ITENS = [
        {"src": `assets/escolhidos/1.png`, "id": "0"},
        {"src": `assets/escolhidos/2.png`, "id": "1"},
        {"src": `assets/escolhidos/3.png`, "id": "2"},
        {"src": `assets/escolhidos/4.png`, "id": "3"},
        {"src": `assets/escolhidos/5.png`, "id": "4"},
        {"src": `assets/escolhidos/10.png`, "id": "5"},
        {"src": `assets/escolhidos/15.png`, "id": "6"}, 
        {"src": `assets/escolhidos/8.png`, "id": "7"},
        {"src": `assets/escolhidos/18.png`, "id": "8"}
    ];

    class animations {
        constructor(){};

        /* Animação do mago ao acertar a poção */
        mageVictory(){
            $("#mage").removeClass("happyMage");
            $("#mage").addClass("happyMage");
        }

        /* Animação do mago ao errar a poção */
        mageDefeat(){
            $("#mage").removeClass("fallingMage");
            $("#mage").addClass("fallingMage");
        }
        
        /* Animação do caudeirão quando a poção é feita */
        finishedPotion(){
            $("#cauldron").addClass("cauldronShake2");
            $("main").addClass("backgroundShake");
        }

        /* Poção sobe do caudeirão caso a sequencia de itens esteja certa */
        potionShine(){
            $("#potion").show();
            $("#potion").addClass("potionRise");
        }
        potionHide(){
            $("#potion").fadeOut("fast");
        }


        /* retira o brilho dos ingredientes */
        hideShine(){
            $(".pedido").delay(2000).queue(function(next) {
                $(this).fadeOut();
                next();
            })
            $(`#${itensAsked[0].id}`).delay(2000).queue(function(next) {
                $(`.item`).removeClass('itemShine');
                next();
            })
        }
        
        /* Faz os ingredientes escolhidos brilharem */
        showShine(){
            $("#pedido").remove();
            for(let i = 0; i < numberIngredients -1; i++){
                $("#client").delay(1000).queue(function (next) {
                    shineSound();
                    $(`.item`).removeClass('itemShine itemShine2');
                    if(i > 0 && itensAsked[i-1].id === itensAsked[i].id){
                        $(`.item`).removeClass('itemShine itemShine2');
                        $(`#${itensAsked[i].id}`).delay(800).addClass('itemShine2');
                    }
                    else{
                        $(`#${itensAsked[i].id}`).delay(800).addClass('itemShine');
                    }
                     next();
                });
            }
            $("#client").delay(1000).queue(function (next) {
                shineSound();
                $(`#${itensAsked[numberIngredients-1].id}`).addClass('itemShine');
                next();
              });
        }

        starAppear(){
            $("#stage").fadeIn("slow");
        }

        gameOver(){
            $("#back-star").removeClass("stage-star");
            $("#back-star").addClass("stage-bomb");
            $("main").addClass("blur");
            $("#back-star h2").html("GAME <br> OVER <span id='current-stage'></span>");
            $("#stage").fadeIn("slow");
        }

        /* retira as animações que ainda estão ativas */
        removeAnimations(){
            $(`.item`).removeClass('itemShine');
            $("#cauldron").removeClass("cauldronShake cauldronShake2");
            $("main").removeClass("backgroundShake");
            $("#mage").removeClass("happyMage fallingMage");
            $("#potion").removeClass("potionRise");
            $("#back-star").removeClass("stage-bomb");
            $("#back-star").addClass("stage-star");
            $("#potion").hide();
            $("#stage").fadeOut("fast");
        }

        /* muda a cor da água do caudeirão */
        changeColor(){
            const classList = $("#water").attr("class");
            $("#mage").addClass("moveMage");
            $("#cauldron").queue(function (next) {
                if(classList === "s1" || classList === "waterBase"){
                    $(this).addClass("cauldronShake");
                    $("#water").removeClass("s1");
                    $("#water").removeClass("waterBase");
                    $("#water").addClass("water1");
                }
                else if(classList === "water1") {
                    $(this).addClass("cauldronShake");
                    $("#water").removeClass("water1");
                    $("#water").addClass("water2");
                }
                else if(classList === "water2"){
                    $(this).addClass("cauldronShake");
                    $("#water").removeClass("water2");
                    $("#water").addClass("waterBase");
                }
                next();
            });
            $("#cauldron").delay(1000).queue(function (next) {
                $(this).removeClass("cauldronShake cauldronShake2");
                $("#mage").removeClass("moveMage");
                next();
            });
        }

    }

        /* Define as funções básicas do jogo */
        class gameFunctions{
            constructor(){};
    
            /* Acontece quando o jogador acerta a sequencia de ingredientes */
            victory(){
                $("#potion").attr("src", `./assets/escolhidos/pocoes/${numberIngredients}.png`);
            };
            
            /* Preenche as prateleiras de itens */
            fillShelves(){
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
            };
    
            /* Sorteia os ingredientes que deverão se jogados no caudeirão
                Caso o IF não esteja comentado os ingredientes serão sorteados aleatóriamentes
            */
            lotery(){
                if(gameMode === "random"){
                    itensAsked = [];
                }
                let copyArray = [...ITENS];
                let number = copyArray.length - 1;
                for(let i = itensAsked.length; i < numberIngredients; i++){
                    number = copyArray.length - 1;
                    let randomizer = parseInt(Math.random() * (number - 0) + 0);
                    while(i > 0 && copyArray[randomizer] === itensAsked[i-1]){
                        randomizer = parseInt(Math.random() * (number - 0) + 0);
                    }
                    itensAsked.push(copyArray[randomizer]);
                }
            };
    
            /* Contagem de vida */
            lifeCount(){
                if(lives > 1){
                    gameAnimations.removeAnimations();
                    $(`#life${lives}`).addClass("lostLife");
                    lives = lives -1;
                    cauldron = [];
                    this.lotery();
                    setTimeout(showLotery ,3500);
                }
                else{
                    gameAnimations.removeAnimations();
                    $(`#life${lives}`).addClass("lostLife");
                    lives = lives -1;
                    currentStage = 1;
                    setTimeout(gameAnimations.gameOver, 3500);
                    setTimeout(startConfiguration, 6000);
                }
            }
    
            /* Começa o jogo */
            gameStart(){
                gamePaused = false;
                $("#back-star h2").html(`FASE <span id="current-stage"></span>`);
                $("#current-stage").html(currentStage);
                $("main").removeClass("blur");
                $("#play").fadeOut("slow");
                musicPlay();
                actualLotery();
                gameAnimations.starAppear();
                setTimeout(showLotery ,2000);
            };
        
            /* Pausa o jogo */
            pauseGame(){
                gamePaused = true;
                clearTimeout(showLotery);
                gameAnimations.removeAnimations();
                $("#stage").hide();
                $("main").addClass("blur");
                $("#play").fadeIn("slow");
                music.pause();
            };
        }

    /* Define o objeto que governa as animações */
    const gameAnimations = new animations();

    /* Toca a musica de fundo */
    function musicPlay(){
        music.loop = true;
        music.volume = 0.5;
        music.play();
    }

    /* Toca um som do item sendo jogado no caldeirão */
    function droppingSound(){
        const soundDrop = new Audio('assets/sons/Retro Blop StereoUP 04.wav');
        soundDrop.play();
    }

    /* Toca um som quando os itens brilham */
    function shineSound(){
        const soundShine = new Audio('assets/sons/Retro Event UI 01.wav');
        soundShine.play();
    }

    /* Efeito sonoro de quando a poção sai do caudeirão */
    function potionSfx(){
        const createdPotion = new Audio('assets/sons/Retro Charge Magic 11.wav');
        createdPotion.play();
    }

    function wrongSfx(){
        const wrongChoice = new Audio('assets/sons/Retro Negative Short 23.wav');
        wrongChoice.play();
    }



    /* Define o objeto que governa as funções do jogo */
    const gameSettings = new gameFunctions();


    /* Sorteia os itens necessários para a poção */
    function actualLotery(){
        gameSettings.lotery();
    }
    
    /* Adiciona os itens jogados no caldeirão em um array e no final compara se os itens jogados foram os corretos */
    function validatePotion(valor){
        let quantity = cauldron.length;
        cauldron.push(ITENS[valor]);

        if(quantity === numberIngredients - 1){
            gameAnimations.removeAnimations();
            soundTremor.play();
            setTimeout(gameAnimations.finishedPotion, 50);
            const compareOrder= cauldron.find((v,i) => v !== itensAsked[i]);
            if(compareOrder === undefined){
                nextLevel();
                cauldron = [];
                return true;
            }
            else{
                setTimeout(gameAnimations.mageDefeat, 1000);
                setTimeout(wrongSfx, 1000);
                gameSettings.lifeCount();
            }
        }
        return false;
    }

    /* Ativa as funções iniciais */
    gameSettings.fillShelves();

    /* Define que objetos com a classe item podem ser arrastados */
    $( ".item" ).draggable({
        revert: 'invalid',
        helper: 'clone'
    });

    /* Define que objetos da classe item podem ser colocados dentro do objeto com id Interface */
     $( "#cauldron" ).droppable({
        accept: `.item`,
        drop: function( event, ui ) {
            $( this )
                validatePotion(ui.draggable.attr("id"));
                gameAnimations.removeAnimations();
                gameAnimations.changeColor();
                droppingSound();
            }
    });
    

    /* Esconde os ingredientes necessários após eles serem mostrados ao jogador */
    function hideLotery(){
        $(".pedido").delay(2000).queue(function(next) {
            $(this).fadeOut();
            next();
        })
        $(`#${itensAsked[0].id}`).delay(2000).queue(function(next) {
            gameAnimations.hideShine();
            gameAnimations.removeAnimations();
            next();
        })
    }
    
    /* Faz os ingredientes brilharem */
    function showLotery(){
        gameAnimations.removeAnimations();
        if(gamePaused){
            return false;
        }
        else{
            $("#pedido").remove();
            gameAnimations.showShine();
    
            $("#client").delay(1000).queue(function (next) {
                $(`#${itensAsked[numberIngredients-1].id}`).addClass('itemShine');
                hideLotery();
                next();
            });
        }
    }

    /* Ativa o modo de jogo aleatório */
    function randomMode(){
        $(`.star0`).removeClass("lostLife");
        currentStage = 1;
        numberIngredients = 3;
        lives = 3;
        $("#current-stage").html(currentStage);
        $("#modo-de-jogo").fadeOut("slow");
        $("#play").fadeIn("slow");
        gameMode = "random";
    }

    /* Ativa o modo de jogo sequencial */
    function sequentialMode(){
        $(`.star0`).removeClass("lostLife");
        currentStage = 1;
        numberIngredients = 3;
        lives = 3;
        $("#current-stage").html(currentStage);
        $("#modo-de-jogo").fadeOut("slow");
        $("#play").fadeIn("slow");
        gameMode = "";
    }
    
    /* Define configurações iniciais do jogo */
    
    function startConfiguration(){
        cauldron = [];
        itensAsked = [];
        gameAnimations.removeAnimations();
        $("#modo-de-jogo").fadeIn("slow");
        $("#stage").hide();
        $("#back-star").removeClass("stage-bomb");
        $("#back-star").addClass("stage-bomb");
        $("#play").hide();
        $("#potion").hide();
    }

    function startVictory(){
        gameAnimations.removeAnimations();
        numberIngredients = numberIngredients +1;
        actualLotery();
        setTimeout(showLotery ,500);
    }

    function nextLevel(){
        currentStage++;
        score += 500 * numberIngredients;
        $("#score").html(score);
        $("#current-stage").html(currentStage);
        setTimeout(gameAnimations.mageVictory, 1000);
        setTimeout(gameAnimations.potionShine, 1000);
        setTimeout(potionSfx, 2000);
        setTimeout(gameAnimations.potionHide, 4500);
        setTimeout(gameAnimations.starAppear, 4500);
        setTimeout(gameSettings.victory , 6500);
        setTimeout(startVictory, 6500);
    }

    startConfiguration();
    $("#random").on("click", randomMode);
    $("#sequential").on("click", sequentialMode);
    $("#play").on("click", gameSettings.gameStart);
    $("#pause").on("click", gameSettings.pauseGame);
});
