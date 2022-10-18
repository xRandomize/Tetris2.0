const canvas = document.getElementById("canvas");

canvas.width =  300;
canvas.height =  600;
const ctx = canvas.getContext("2d");

const gameClock = 200
const cols = 10;
const row = 20;
const block_size = 30;
const score_worth = 10  

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

const colors = [
    "#4a72f5", //blue
    "#239909", //Green
    "#6807d2", //Purple
    "#4a72f5", //pink
    "#a5a605", //Yellow
    "#40e0d0", //Turqoise
    "#cb6a08" //Orange
]