function tournamentGameWinner(tournament) {  
    let winner;

    if(typeof(tournament[0][0]) != 'string') {
        let chave = [tournament[0][0], tournament[0][1]];
        tournament[0] = tournamentGameWinner(chave);
    }
    if(typeof(tournament[1][0]) != 'string') {
        let chave = [tournament[1][0], tournament[1][1]];
        tournament[1] = tournamentGameWinner(chave);
    }

    winner = rpsGameWinner(tournament);

    return winner;
}

function rpsGameWinner(game) {  
    if (game.length != 2) {    
        throw 'WrongNumberOfPlayers';  
    }  

    let winner;
    let moves = [game[0][1], game[1][1]];
    
    moves.forEach((move, index) => {
        moves[index] = move.toUpperCase();
        moves[index] = move.charCodeAt(0) + move.charCodeAt(1); 
        let strategies = [153, 149, 145]; // TE, PE, PA
        
        if(!strategies.includes(move)) {
            return "NoSuchStrategyError";
        }

    });

    //PA < PE < TE
    let movesDifference = moves[0]-moves[1];

    if(movesDifference == -8) {
        winner = game[1];
    }
    else if(movesDifference == 8) {
        winner = game[0];
    }
    else if(movesDifference > 0) {
        winner = game[1];
    }
    else {
        winner = game[0];
    }

    return winner;
}

let tournament = [  
    [      
        [                             
            ['Armando', 'PE'], ['Dave', 'TE']     
        ],
        [                                    
            ['Richard', 'PA'], ['Michael', 'TE']  
        ],  
    ],  
    [                                             
        [                                         
            ['Allen', 'TE'], ['Arthur', 'TE']     
        ],
        [                                         
            ['David', 'PA'], ['Omer', 'PE']    
        ],  
    ],
];

console.log(tournamentGameWinner(tournament));