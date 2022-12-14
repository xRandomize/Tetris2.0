//Setting up game map
class GameMap {
    //Constructor to create and intialize objects within the class
    constructor(ctx) {
        this.ctx = ctx
        this.fallingPiece = null
        this.grid = this.makeStartGrid()
    }

    //Creates a 2D array
    /*The 2D array is created by 2 for loops creating empty array in both y and x axis and stop whenever it hits
    the designated const in this case it's row and cols. It creats a grid and pushes it until the loop stops meanwhile
    the sames happens for the y axis | Grid.length -1 prevents the cols from becoming 11 cols*/
    makeStartGrid() {
        let grid = []
        for (var i = 0; i < row; i++) {
            grid.push([])
            for (var j = 0; j < cols; j++) {
                grid.push([]);
                this.ctx.fillStyle = black;
            }
        }
        return grid;
    }

    //Collision Detection
    /*The collision detection looks at the shape and only allows it to move if there is a grid or if the 
    grid number is higher than 0*/
    collision(x, y, candidate = null) {
        const shape = candidate || this.fallingPiece.shapes
        const n = shape.length
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (shape[i][j] > 0) {
                    let p = x + j
                    let q = y + i
                    if (p >= 0 && p < cols && q < row) {
                        if (this.grid[q][p] > 0) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    //GameState is a function that draws the pieces on the board and intiates other pieces
    gameState() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j];
                this.ctx.fillStyle = colors[cell];
                this.ctx.fillRect(j, i, 1, 1);
            }    
        }

        if (this.fallingPiece !== null) {
            this.fallingPiece.renderPiece();
        }
    }

    //Gravity function
    /*Gravity function moves the piece down and also checks if game over by seeing it goes over the Y axis */
    gravity() {
        if (this.fallingPiece === null) {
            this.gameState();
            return;
        } else if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
           // console.log("!Hit bottom");
            const shape = this.fallingPiece.shapes;
            const x = this.fallingPiece.x; 
            const y = this.fallingPiece.y;
           // console.log("!!Hit bottom");
            shape.map((row, i) => {
                //console.log("!!!!Hit bottom");
                row.map((cell, j) => {
                    //console.log("!!!!!Hit bottom");
                    let p = x + j; // X
                    let q = y + i; // Y

                    //this.grid[q][p] = shape[i][j];
                    console.log(!(q < row+1), cell > 0, p > 0, p < cell);

                    if (!(q < row+1) && cell > 0 && p > 0) {
                        this.grid[q][p] = shape[i][j];
                        this.fallingPiece.state = true;
                        console.log("Hit bottom");
                    }
                })
            })

            // check game over 
            if (this.fallingPiece.y === 0) {
                alert("Game over!");
                this.grid = this.makeStartGrid();
            }
            this.fallingPiece = null;
        } else {
            this.fallingPiece.y += 1
        }
        this.gameState()
    }

    //Move Function
    /*Move function does what it says. It moves the pieces to the right when triggered*/
    move(right) {
        if (this.fallingPiece === null) {
            return;
        }

        let x = this.fallingPiece.x; 
        let y = this.fallingPiece.y;
        if (right) {
            // move right
            if (!this.collision(x + 1, y)) {
                this.fallingPiece.x += 1;
            }
        } else {
            // move left
            if (!this.collision(x - 1, y)) {
                this.fallingPiece.x -= 1;
            }
        }
        this.gameState();
    }

    //Rotate function
    /*Does what the name says. It rotates the pieces by redrawing the shape by moving the grid numbers*/
    rotate() {
        if (this.fallingPiece !== null) {
            let shape = [...this.fallingPiece.shapes.map((row) => [...row])];
            for (let y = 0; y < shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [shape[x][y], shape[y][x]] = 
                    [shape[y][x], shape[x][y]];
                }
            }
            shapes.forEach((row => row.reverse()))
            if (!this.collision(this.fallingPiece.x, this.fallingPiece.y, shapes)) {
                this.fallingPiece.shapes = shape;
            }
        }
        this.gameState();
    }

}

