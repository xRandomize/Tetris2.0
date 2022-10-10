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

    collision(cols, row) {
        return !(
            (())
        )
    }
}

