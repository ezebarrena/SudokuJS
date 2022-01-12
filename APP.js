function startGame(){
    let board = createBoard()
    let filled = fillBoard(board)
    console.log(filled)
    let shuffled = shuffleBoard(filled)
    //let level = generateLevel(shuffled)
    renderLevel(filled)
    
}

function createBoard() {
    let board = []
    for (let i=0; i<9; i++){
        board.push([])
        for (let j=0; j<9; j++){
            board[i].push("")
        }
    }

    return board
}

function fillBoard(board){
    let numInicial = 1
    let i = 0
    let j = 0

    for (i; i<= board.lenght-1; i++){
        if (i == 3){
            numInicial = 2
        }
        if (i==6){
            numInicial = 3
        }

        let numAux = numInicial

        for (j; j<= board.lenght-1; j++){
            if (numAux == 10){
                numAux = 1
            }
            board[i][j] = numAux
            numAux += 1
            
        }

       
        j = 0
        numInicial += 3
    }

    return board
    
}

function shuffleBoard(board){
    let shuffles = 600

    for (let i = 0; i < shuffles; i++){
        let rOc = Math.floor(Math.random()*1)

        if (rOc === 0){

            let r1 = Math.floor(Math.random()*8)
            if (r1 >= 0 && r1 <= 2){
                let r2 = Math.floor(Math.random()*2)

                while (r2 == r1){
                    r2 = Math.floor(Math.random()*2)
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }

            if (r1 >= 3 && r1 <= 5){
                let r2 = Math.floor(Math.random()*(5-3))+3

                while (r2 == r1){
                    r2 = Math.floor(Math.random()*(5-3))+3
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }

            if (r1 >= 6 && r1 <= 8){
                let r2 = Math.floor(Math.random()*(8-6))+6

                while (r2 == r1){
                    r2 = Math.floor(Math.random()*(8-6))+6
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }

        }

        //else if (rOc === 1){
          //  let c1 = Math.floor(Math.random()*8)
        //}

    }
    return board
}

function generateLevel(board){

}

function renderLevel(board){
    
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let elem = 'c' + i.toString() + j.toString();
            let value = document.getElementById(elem).value;

            document.getElementById(elem).value = board[i][j];
            document.getElementById(elem).disabled = true;
        }
    }
}