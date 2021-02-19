class Matrix {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.matrix = [];
        this.matrix01 = [];
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

    draw01() {
        for (let row = 0; row <
            this.sizeX; row++) {
            const matrixRow = [];
            for (let col = 0; col < this.sizeY; col++) {
                matrixRow.push(0);
            }
            this.matrix01.push(matrixRow);
        }
        console.log(this.matrix01);
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

    matrixReset() {

        for (let row = 0; row < this.sizeX; row++) {
            for (let col = 0; col < this.sizeY; col++) {
                this.matrix01[row][col] = 0;
            }
        }
    }

    update() {
        this.matrixReset()
    }

    matrixDraw() {
        if (document.querySelector("#test")) {
            document.querySelector("#test").remove();
        }
        const body = document.getElementsByTagName('body')[0];
        const matrix = document.createElement('div');
        matrix.id = "test";
        body.appendChild(matrix);
        for (let row = 0; row < this.sizeX; row++) {
            for (let col = 0; col < this.sizeY; col++) {
                document.querySelector("#test").innerHTML += this.matrix01[row][col];
            }
            document.querySelector("#test").innerHTML += "<br />"
        }
        document.querySelector("#test").innerHTML += "<br />"
    }
}

const matrixMain = new Matrix(20, 10);
matrixMain.draw();
matrixMain.draw01();
matrixMain.sideLeft(0)
matrixMain.sideRight(0)
matrixMain.sideBottom(0)
class Type {
    typeCreate(typeNumber) {
        switch (typeNumber) {
            case 1:
                position = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 }]
                break;
        }
    }
}

class Piece {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.area = new Matrix(4, 4);
        this.area.draw01()
        this.shape = Math.round(Math.random() * 10) % 7;
        console.log("random shape:", this.shape)
    }
    shapeCreate() {
        this.area.matrixReset()
        //this.shape = Math.round(Math.random() * 10) % 7;
        console.log("random shape:", this.shape)
        let position;
        switch (this.shape) {
            case 0:
                position = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }]
                break;
            case 1:
                position = [{ x: 0, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }];
                break;
            case 2:
                position = [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }];
                break;
            case 3:
                position = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }];
                break;
            case 4:
                position = [{ x: 0, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 2 }];
                break;
            case 5:
                position = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 2, y: 3 }];
                break;
            case 6:
                position = [{ x: 2, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }];
                break;
            default:
                console.log(this.shape, position)
        }
        for (let i of position) {
            this.area.matrix01[i.y][i.x] = 2;
        }
    }

    moveRight() {
        if (this.positionY !== 6) {
            this.positionY = this.positionY + 1;
            console.log("move Right")
            console.log(this.area)
        }
    }

    moveLeft() {
        if (this.positionY !== 0) {
            this.positionY = this.positionY - 1;
            console.log("move Left")
            console.log(this.area)
        }
    }

    moveUp() {
        if (this.positionX !== 0) {
            this.positionX = this.positionX - 1;
            console.log("move Up")
            console.log(this.area)
        }
    }

    moveDown() {
        if (this.positionX !== 16) {
            this.positionX = this.positionX + 1;
            console.log("move Down")
            console.log(this.area)
        }
    }

    matrixReset() {
        for (let row = 0; row < this.area.sizeX; row++) {
            for (let col = 0; col < this.area.sizeY; col++) {
                this.area.matrix01[row][col] = 0;
            }
        }
    }

    update() {
        this.area.matrixReset()
        this.area.matrix01[this.positionY][this.positionX] = 1;
    }

    matrixDraw() {
        if (document.querySelector("#test")) {
            document.querySelector("#test").remove();
        }
        const body = document.getElementsByTagName('body')[0];
        const area = document.createElement('div');
        area.id = "test";
        body.appendChild(area);
        for (let row = 0; row < this.area.sizeX; row++) {
            for (let col = 0; col < this.area.sizeY; col++) {
                document.querySelector("#test").innerHTML += this.area.matrix01[row][col];
            }
            document.querySelector("#test").innerHTML += "<br />"
        }
        document.querySelector("#test").innerHTML += "<br />"
    }
}

let pieceCurrent = new Piece();

playOnClick = () => {
    matrixMain.update()
    console.log("play")
    pieceCurrent = new Piece();
    pieceCurrent.shapeCreate();
    placePiece()
    matrixMain.matrixDraw();
    for (let rowPiece = 0; rowPiece < 4; rowPiece++) {
        for (let colPiece = 0; colPiece < 4; colPiece++) {
            console.log(pieceCurrent.area.matrix01)
            if (pieceCurrent.area.matrix01[colPiece][rowPiece] === 2) {
                matrixMain.matrix01[rowPiece][colPiece] = 3;
            }
        }
    }
}

placePiece = () => {
    for (let row = 0; row < matrixMain.sizeX; row++) {
        for (let col = 0; col < matrixMain.sizeY; col++) {
            if (pieceCurrent.positionX === row && pieceCurrent.positionY == col) {
                for (let rowPiece = 0; rowPiece < 4; rowPiece++) {
                    for (let colPiece = 0; colPiece < 4; colPiece++) {
                        if (pieceCurrent.area.matrix01[colPiece][rowPiece] === 2) {
                            matrixMain.matrix01[row + rowPiece][col + colPiece] = 3;
                        }
                    }
                }
            }
        }
    }
}

matrixMain.update()
placePiece()
matrixMain.matrixDraw();
let delay = 1000;


    document.addEventListener("keydown", function (event) {

        switch (event.key) {
            case "ArrowUp":
                console.log(pieceCurrent.positionX, pieceCurrent.positionY)
                pieceCurrent.moveUp();
                break;
            case "ArrowDown":
                console.log("Down")
                pieceCurrent.moveDown();
                break;
            case "ArrowLeft":
                console.log("Left")
                pieceCurrent.moveLeft();
                break;
            case "ArrowRight":
                console.log("Right")
                pieceCurrent.moveRight();
                break;
            case " ":
                console.log("Space")
                break;
            case "Escape":
                console.log("Esc")
                break;
            case "p":
                // pieceCurrent.shapeCreate()
                break;
        }
        
       
        console.log(event.key)
    })

window.setInterval(function () {

    pieceCurrent.moveDown();

    matrixMain.update()
    placePiece()
    matrixMain.matrixDraw();

}, delay);



