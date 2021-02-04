class Matrix {

    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.matrix = [];
    }

    draw() {
        for (let row = 0; row < this.sizeX; row++) {
            const matrixRow = [];
            for (let col = 0; col < this.sizeY; col++) {
                matrixRow.push(true);
            }
            this.matrix.push(matrixRow);
        }
        console.log(this.matrix);
    }

    sideLeft(col) {
        if (col == 0) {
            console.log("left");
        }
    }

    sideRight(col) {
        if (col == 9) {
            console.log("right");
        }
    }

    sideBottom(row) {
        if (row == 19) {
            console.log("bottom");
        }
    }
}

const matrixMain = new Matrix(20, 10);
matrixMain.draw();
matrixMain.sideLeft(0)
matrixMain.sideRight(0)
matrixMain.sideBottom(0)


document.addEventListener("keydown", function(event) {
    console.log(event.which);
  })

  
document.addEventListener("keyup", function(event) {
    console.log("up");
  })


  
document.addEventListener("keyleft", function(event) {
    console.log("left");
  })

  
document.addEventListener("keyright", function(event) {
    console.log("right");
  })

