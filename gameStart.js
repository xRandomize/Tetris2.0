//let canvas = document.getElementById("canvas")
let scoreboard = document.getElementById("score")
//let ctx = canvas.getContext("2d")

ctx.scale(block_size, block_size)
let model = new GameMap(ctx)

let score = 0

setInterval(() => {
    newGameState()
}, gameClock);

let newGameState = () => {
    fullSend()
    
    if(model.fallingPiece === null) {
        const rand = Math.round(Math.random() * 6) + 1
        const newPiece = new SpawnPiece(shapes[rand], ctx)
        model.fallingPiece = newPiece
        model.gravity()
    } else {
        model.gravity()
    }
}

const fullSend = () => {
    const aliFilled = (row) => {
        for (let x of row) {
            if (x === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < model.grid.length; i++) {
        if (aliFilled(model.grid[i])) {
            score += score_worth
            model.grid.splice(i, l)
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0])

        }
    }
    //scoreboard.innerHTML = "Score: " + String(score)
}

document.addEventListener("keydown", (e) => {
    
    switch(e.key) {
        case "w":
            model.rotate();
            e.preventDefault();
            break;
        case "a":
            model.move(false);
            e.preventDefault();
            break;
        case "s":
            model.moveDown();
            e.preventDefault();
            break;
        case "d":
            model.move(true);
            e.preventDefault();
            break;
    }
})