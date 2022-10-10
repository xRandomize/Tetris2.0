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

    collision(x, y) {
        const shape = this.fallingPiece.shape
        const n = shape.length
        for (let i = 0; i < n, i++) {
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
}

