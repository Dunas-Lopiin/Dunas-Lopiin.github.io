let tabuleiro = [ 
    ['a', 'b' ,'c'],
    ['d', 'e', 'f'],
    ['g', 'j', 'k']
];

let jogO = true;
let ganhou = false;

function jogada(x, y, id){
    if(jogO && tabuleiro[x][y] != 'O' && tabuleiro[x][y] != 'X' && !ganhou){
        jogO = false;
        tabuleiro[x][y] = "O";
        document.getElementById(id).innerHTML = "O";
        
    }
    else if (!jogO && tabuleiro[x][y] != 'O' && tabuleiro[x][y] != 'X' && !ganhou){
        jogO = true;
        tabuleiro[x][y] = "X";
        document.getElementById(id).innerHTML = "X";
        
    }
    if(tabuleiro[0][0] == tabuleiro[0][1] && tabuleiro[0][1] == tabuleiro[0][2]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][0] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[1][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[1][2]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[1][0] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[2][0] == tabuleiro[2][1] && tabuleiro[2][1] == tabuleiro[2][2]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[2][0] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[0][0] == tabuleiro[1][0] && tabuleiro[1][0] == tabuleiro[2][0]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][0] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[0][1] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][1]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][1] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[0][2] == tabuleiro[1][2] && tabuleiro[1][2] == tabuleiro[2][2]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][2] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][0] + " Ganhou!";
        ganhou = true;
    }
    else if(tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0]){
        document.getElementById("vitoria").innerHTML = "O jogador que está usando o " + tabuleiro[0][2] + " Ganhou!";
        ganhou = true;
    }

    console.log(tabuleiro);
    console.log(jogO);
}

function novoJogo(){
    jogO = true;
    ganhou = false;
    tabuleiro = [ 
        ['a', 'b' ,'c'],
        ['d', 'e', 'f'],
        ['g', 'j', 'k']
    ];
    for(i = 1; i < 10; i++){
        document.getElementById(i).innerHTML = "";
    }
    document.getElementById("vitoria").innerHTML = "";
}