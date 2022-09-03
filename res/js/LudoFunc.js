const initalGameData = {
    colors: [
        {
            id: 1,
            name: 'Red',
            color: 'red',
            tockenPath: [2,3,4,5,6,36,35,34,33,32,31,25,19,20,21,22,23,24,54,53,52,51,50,49,43,37,38,39,40,41,42,72,71,70,69,68,67,61,55,56,57,58,59,60,18,17,16,15,14,13,7,8,9,10,11,12],
            tockenPositions: [0,0,0,0],
            diceHistory: [],
            state: {result: 'running', timestamp: 32489349}
        },
        {
            id: 2,
            name: 'Yellow',
            color: '#ffca00',
            tockenPath: [20,21,22,23,24,54,53,52,51,50,49,43,37,38,39,40,41,42,72,71,70,69,68,67,61,55,56,57,58,59,60,18,17,16,15,14,13,7,1,2,3,4,5,6,36,35,34,33,32,31,25,26,27,28,29,30],
            tockenPositions: [0,0,0,0],
            diceHistory: [],
            state: {result: 'running', timestamp: 32489349}
        },
        {
            id: 3,
            name: 'Green',
            color: 'green',
            tockenPath: [38,39,40,41,42,72,71,70,69,68,67,61,55,56,57,58,59,60,18,17,16,15,14,13,7,1,2,3,4,5,6,36,35,34,33,32,31,25,19,20,21,22,23,24,54,53,52,51,50,49,43,44,45,46,47,48],
            tockenPositions: [0,0,0,0],
            diceHistory: [],
            state: {result: 'running', timestamp: 32489349}
        },
        {
            id: 4,
            name: 'Blue',
            color: 'blue',
            tockenPath: [56,57,58,59,60,18,17,16,15,14,13,7,1,2,3,4,5,6,36,35,34,33,32,31,25,19,20,21,22,23,24,54,53,52,51,50,49,43,37,38,39,40,41,42,72,71,70,69,68,67,61,62,63,64,65,66],
            tockenPositions: [0,0,0,0],
            diceHistory: [],
            state: {result: 'running', timestamp: 32489349}
        },
    ],
    result: [
        {playerId: 1,color: 1,timestamp: 143423322, winCoin: 50},
        {playerId: 2,color: 2,timestamp: 143423322, winCoin: 30},
        {playerId: 3,color: 3,timestamp: 143423322, winCoin: 20},
        {playerId: 4,color: 4,timestamp: 143423322, winCoin: 0},
    ],
    status: 1
}
let data = {
    gameData: {},
    players: [
        {
            id: 1,
            name: 'Player One',
            avatar: '',
            color: 1
        },
        {
            id: 2,
            name: 'Player Two',
            avatar: '',
            color: 2
        },
        {
            id: 3,
            name: 'Player Three',
            avatar: '',
            color: 3
        },
        {
            id: 4,
            name: 'Player Four',
            avatar: '',
            color: 4
        },
    ],
}
const gameStart = (init) => {
    // default data from initalGameData
    !init ? init = initalGameData : init
    data.gameData = init
    data.gameData.status = !data.gameData.status
}

const throwDice = (color) => {
    let min = 1, max = 6
    let dice = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(color, dice)
}

const LudoFunc = {
    gameStart,
    throwDice
}
export {initalGameData, gameStart, throwDice}
export default LudoFunc


/**
 * Data
 * playersArr
 * tockenPath
 * 
 * ***************************
 * functions
 * 01)  newGame
 * 02)  throwDice
 * 03)  choiceTocken
 * 04)  
 */