//Setting up game map
class GameMap {
    constructor(ctx) {
        this.ctx = ctx
        this.fallingPiece = null
        this.grid = this.makeStartGrid()
    }

    makeStartGrid() {
        let grid = []
        for (var i = 0; i < row; i++) {
            grid.push([])
            for (var j = 0; j < cols; j++) {
                grid(grid.length - 1).push(0)
            }
        }
        return grid
    }

    //Game laws of physics
    gameState() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid.length; j++) {
                let cell = this.grid[i][j]
                this.ctx.fillStyle = colors[cell]
                this.ctx.fillRect(j, i, 1, 1)
            }
        }

        if (this.fallingPiece !== null) {
            this.fallingPiece.renderPiece()
        }
    }

    gravity() {
        if (this.fallingPiece === null) {
            this.gameState()
            return

        } else if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
            const shape = this.fallingPiece.shape
            const x = this.fallingPiece.x
            const y = this.fallingPiece.y

            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < cols && q > row && cell > 0) {
                        this.grid[q][p] = shape[i][j]
                    }
                })
            })

            if (this.fallingPiece.y === 0) {
                alert("Game over")
                this.grid = this.makeStartGrid()
            }
            this.fallingPiece = null
        } else {
            this.fallingPiece.y += 1
        }
        this.gameState()
    }

    collision(x, y, candidate = null) {
        const shape = candidate || this.fallingPiece.shape
        const n = shape.length
        for (let i = 0; i < n; i++) {
            for ( let j = 0; j < n; j++) {
                if (shape[i][j] > 0) {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < cols && q < row) {
                        if (this.gird[q][p] > 0) {
                            return true
                        }
                    } else {
                        return true
                    }
                }
            }
        }
        return false;
    }

    moveDown() {
        if (this.fallingPiece === null) {
            this.renderGameState() 
            return
        } else if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
            const shape = this.fallingPiece.shape 
            const x = this.fallingPiece.x 
            const y = this.fallingPiece.y 
            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j 
                    let q = y + i 
                    if (p >= 0 && p < COLS && q < ROWS && cell > 0) {
                        this.grid[q][p] = shape[i][j]
                    }
                })
            })

            // check game over 
            if (this.fallingPiece.y === 0) {
                alert("Game over!") 
                this.grid = this.makeStartingGrid()
            }
            this.fallingPiece = null
        } else {
            this.fallingPiece.y += 1
        }
        this.renderGameState()
    }

    move(right) {
        if (this.fallingPiece === null) {
            return
        }

        let x = this.fallingPiece.x 
        let y = this.fallingPiece.y 
        if (right) {
            // move right
            if (!this.collision(x + 1, y)) {
                this.fallingPiece.x += 1
            }
        } else {
            // move left
            if (!this.collision(x - 1, y)) {
                this.fallingPiece.x -= 1
            }
        }
        this.renderGameState()
    }

    rotate() {
        if (this.fallingPiece !== null) {
            let shape = [...this.fallingPiece.shape.map((row) => [...row])]
            for (let y = 0; y < shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [shape[x][y], shape[y][x]] = 
                    [shape[y][x], shape[x][y]]
                }
            }
            shape.forEach((row => row.reverse()))
            if (!this.collision(this.fallingPiece.x, this.fallingPiece.y, shape)) {
                this.fallingPiece.shape = shape
            }
        }
        this.renderGameState()
    }

}

