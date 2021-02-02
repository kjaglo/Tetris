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
                console.log(this.sizeX, this.sizeY);
                matrixRow.push(true);
                console.log(this.matrixRow);
            }
            this.matrix.push(this.matrixRow);
        }
        console.log(this.matrix);
    }
}

const matrixMain = new Matrix(10, 20);
matrixMain.draw();
