class SpawnPiece {
    constructor(shapes, ctx) {
        this.shapes = shapes;
        this.ctx = ctx;
        this.y = 0;
        this.x = Math.floor(cols / 2);
    }

    //Function to draw on the map
    renderPiece() {
        this.shapes.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = colors[cell];
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1);
                }
            })
        })
    }

}