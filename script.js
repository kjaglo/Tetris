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

    matrixReset() {
        for (let row = 0; row < this.sizeX; row++) {
            for (let col = 0; col < this.sizeY; col++) {
                if (this.matrix01[row][col] !== 4)
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

    fix(pieceFixed) {
        for (let i of pieceFixed) {
            this.matrix01[i.x][i.y] = 4;
            console.log("x", i.x)
        }
    }
}

const matrixMain = new Matrix(20, 10);
matrixMain.draw();
matrixMain.draw01();

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
        this.positionY = 4;
        this.area = new Matrix(4, 4);
        this.area.draw01();
        this.press = [0, 0, 0, 0, 0, 0, 0];
        this.shape = Math.round(Math.random() * 10) % 7;
        this.positions = [];
        console.log("random shape:", this.shape)
        if (this.shape == 0) {
            this.positionY = 3;
        }
        this.position;

        const positions0 = [[{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
        [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }]];

        const positions1 = [[{ x: 1, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
        [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 2 }],
        [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 3, y: 1 }],
        [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 1 }]];

        const positions2 = [[{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 0 }],
        [{ x: 2, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }],
        [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 1 }],
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 0 }]];

        const positions3 = [[{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 0 }, { x: 2, y: 1 }]];

        const positions4 = [[{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
        [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 2 }]]

        const positions5 = [[{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }],
        [{ x: 3, y: 0 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }]];

        const positions6 = [[{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
        [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 0 }, { x: 2, y: 1 }],
        [{ x: 2, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
        [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 0 }, { x: 3, y: 1 }]];

        this.positions.push(positions0, positions1, positions2, positions3, positions4, positions5, positions6)
        console.log("possss", this.positions[1][3 % 2])

        this.position = this.positions[this.shape][0];

        for (let i of this.position) {
            this.area.matrix01[i.y][i.x] = 2;
        }
    }

    fix() {
        const positionFixed = [];
        for (let i of this.position) {
            positionFixed.push({ x: i.x + this.positionX, y: i.y + this.positionY })
            console.log("fix:", i.x + this.positionX, i.y + this.positionY)
        }
        return positionFixed;
    }
    moveRight() {
        if (this.positionY < 6) {
            this.positionY = this.positionY + 1;
            console.log("move Right")
            console.log(this.area)
        } else {
            let col = 0;
            for (let i of this.position) {
                if (this.area.matrix01[9 - this.positionY][i.x] === 0) {
                    col++;
                }
            }
            console.log("collllllllll", col, "pos", this.positionY)

            if (col === 4) {
                this.positionY = this.positionY + 1;
                console.log("move Right")
            }
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

        const pressNumber = this.press[this.shape]++;
        this.position = this.positions[this.shape][pressNumber % this.positions[this.shape].length];
        this.area.matrixReset()
        for (let i of this.position) {
            this.area.matrix01[i.y][i.x] = 2;
        }
    }

    moveDown(matrixMain) {
        if (this.positionX !== 16) {
            let bottomCollision = 0;
            for (let i = 0; i < 4; i++) {
                if (matrixMain.matrix01[this.positionX + 4][this.positionY+i] === 4) {
                    bottomCollision++;
                    console.log("bottom collision", this.positionX, this.positionY)
                }
            }
            if (bottomCollision > 0) {
                return false;
            }
            this.positionX = this.positionX + 1;
            return true
        }
        return false;
    }

    moveBottom() {
        this.positionX = 16;
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

    rotatePiece() {
        let keyPressed;
        keyPressed++;
        let piecerotation = keyPressed % 4;
        let positionType = positionTypes[piecerotation];
        for (let i of positionType) {
            this.area.matrix01[i.y][i.x] = 2;
        }
    }
}

placePiece = (pieceCurrent) => {
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

let delay = 1000;
let pieceCurrent;
playOnClick = () => {
    let isPieceActive = 1;
    //let isGameOver = 1;

    if (isPieceActive) {
        pieceCurrent = new Piece();
    }
    matrixMain.update()
    placePiece(pieceCurrent)
    matrixMain.matrixDraw();
    for (let rowPiece = 0; rowPiece < 4; rowPiece++) {
        for (let colPiece = 0; colPiece < 4; colPiece++) {
            if (pieceCurrent.area.matrix01[colPiece][rowPiece] === 2) {
                matrixMain.matrix01[rowPiece][colPiece] = 3;
            }
        }
    }
    let int = window.setInterval(function () {
        isPieceActive = 1;
        isBottom = pieceCurrent.moveDown(matrixMain);
        if (!isBottom) {
            pieceFixed = pieceCurrent.fix();
            matrixMain.fix(pieceFixed);
        }

        matrixMain.update()
        if (isBottom) {
            placePiece(pieceCurrent)
        }
        matrixMain.matrixDraw();
        if (!isBottom) {
            pieceCurrent = new Piece();
        }


    }, delay);
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            console.log(pieceCurrent.positionX, pieceCurrent.positionY)
            pieceCurrent.moveUp();
            break;
        case "ArrowDown":
            pieceCurrent.moveDown(matrixMain);
            break;
        case "ArrowLeft":
            pieceCurrent.moveLeft();
            break;
        case "ArrowRight":
            pieceCurrent.moveRight();
            break;
        case " ":
            pieceCurrent.moveBottom();
            break;
        case "Escape":
            break;
        case "p":
            break;
    }
    console.log(event.key)
})