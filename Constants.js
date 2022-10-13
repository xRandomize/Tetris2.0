const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
    "#111000",
    "#000111",
    "#000FFF",
    "#FFf000",
    "#0FFF00",
    "#0F0F0F",
    "#F0F0F0"
]