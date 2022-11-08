//The Canvas size
canvas.width =  300;
canvas.height =  600;

//Const
const gameClock = 400 //The speed of the game
const cols = 10; //How many cols are in the map
const row = 20; //How many rows are in the map
const block_size = 30; //How big the sizes of the blocks are
const score_worth = 10 //How much a full line is worth in terms of score

//All of the shapes of the pieces
const shapes = [
    [],
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [2,2,0],
        [0,2,2],
        [0,0,0]
    ],
    [
        [0,3,3],
        [3,3,0],
        [0,0,0]
    ],
    [
        [0,0,4],
        [0,0,4],
        [0,4,4]
    ],
    [
        [5,0,0],
        [5,0,0],
        [5,5,0]
    ],
    [
        [6,6,0],
        [6,6,0],
        [0,0,0]
    ],
    [
        [0,7,0],
        [7,7,7],
        [0,0,0]
    ]
]

//Options of colors the script can decide from
const colors = [
    "#000000", //black
    "#4a72f5", //blue
    "#239909", //Green
    "#6807d2", //Purple
    "#4a72f5", //pink
    "#a5a605", //Yellow
    "#40e0d0", //Turqoise
    "#cb6a08" //Orange
]

const black = [
    "#000000"
]