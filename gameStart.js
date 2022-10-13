let canvas = document.getElementById("game-canvas")
let scoreboard = document.getElementById("score")
let ctx = canvas.getContext("2d")

ctx.scale(block_size, block_size)
let model = new gameModel(ctx)

let score = 0

setInterval(() => {
    newGameState()
}, gameClock)

let newGameState = () => {
    fullSend()
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
        }
    }
}