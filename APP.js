function startGame(){
    let board = createBoard()
    let filled = fillBoard(board)
    let shuffled = shuffleBoard(filled)
    let level = generateLevel(shuffled)
    let renderizado = renderLevel(level)
}

function finish(){
    let finishedMatrix = getFinishedMatrix()
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

    for (i; i<= board.length-1; i++){
        if (i === 3){
            numInicial = 2
        }
        if (i===6){
            numInicial = 3
        }
        
        let numAux = numInicial

        for (j; j<= board.length-1; j++){
            if (numAux === 10){
                numAux = 1
            }
            board[i][j] = numAux
            numAux += 1
            
        }

       
        j = 0
        numInicial += 3
    }
    console.log(board)

    return board
    
}

function shuffleBoard(board){
    let shuffles = 6000
    let rOc = 0
    for (let i = 0; i <= shuffles; i++){
        rOc = Math.floor(Math.random()*2)

        if (rOc === 0){

            let r1 = Math.floor(Math.random()*9)
            if (r1 >= 0 && r1 <= 2){
                let r2 = Math.floor(Math.random()*3)

                while (r2 === r1){
                    r2 = Math.floor(Math.random()*3)
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }

            if (r1 >= 3 && r1 <= 5){
                let r2 = Math.floor(Math.random()*(6-4))+4

                while (r2 === r1){
                    r2 = Math.floor(Math.random()*(6-4))+4
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }

            if (r1 >= 6 && r1 <= 8){
                let r2 = Math.floor(Math.random()*(9-7))+7

                while (r2 == r1){
                    r2 = Math.floor(Math.random()*(9-7))+7
                }

                let aux = board[r1]
                board[r1] = board[r2]
                board[r2] = aux
            }
        }
        

        else if (rOc === 1){
            let c1 = Math.floor(Math.random()*9)
            if (c1 >= 0 && c1<=2){
                let c2 = Math.floor(Math.random()*3)

                while (c2 === c1){
                    c2 = Math.floor(Math.random()*3)
                }

                for (let i = 0; i < 9; i++){
                    let aux = board[i][c1]
                    board[i][c1] = board[i][c2]
                    board[i][c2] = aux
                }
            }

            if (c1 >= 3 && c1 <= 5){
                let c2 = Math.floor(Math.random()*(6-4))+4

                while (c2 === c1){
                    c2 = Math.floor(Math.random()*(6-4))+4
                }

                for (let i = 0; i < 9; i++){
                    let aux = board[i][c1]
                    board[i][c1] = board[i][c2]
                    board[i][c2] = aux
                }

            }
            if (c1 >= 6 && c1<=8){
                let c2 = Math.floor(Math.random()*(9-7))+7

                while (c2 === c1){
                    c2 = Math.floor(Math.random()*(9-7))+7
                }

                for (let i = 0; i < 9; i++){
                    let aux = board[i][c1]
                    board[i][c1] = board[i][c2]
                    board[i][c2] = aux
                }
                
            }
        }

    }
    console.log(board)
    return board
}

function generateLevel(board){
    for (let i = 0; i < 30; i++){
        let r =  Math.floor(Math.random()*8)
        let c =  Math.floor(Math.random()*8)

        while (board[r][c] == ""){
            r =  Math.floor(Math.random()*8)
            c =  Math.floor(Math.random()*8)
        }
        board[r][c] = ""
    }
    return board
}

function renderLevel(board){
    
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let elem = 'c' + i.toString() + j.toString();

            document.getElementById(elem).value = board[i][j];
            if (board[i][j] != ""){
                document.getElementById(elem).disabled = true;
            }
            else{
                document.getElementById(elem).disabled = false;
            }
        }
    }
}

function getFinishedMatrix(){
    
}