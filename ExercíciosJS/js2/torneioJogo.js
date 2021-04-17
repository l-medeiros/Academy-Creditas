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

let game = [['Dave', 'PE'], ['John', 'PE']]
console.log(rpsGameWinner(game));