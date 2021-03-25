class Matrix {
    constructor(sizeRow, sizeCol) {
        this.sizeRow = sizeRow;
        this.sizeCol = sizeCol;
        this.matrix01 = [];
        this.pointsTotal = 0;
    }

    draw01() {
        for (let row = 0; row <
            this.sizeRow; row++) {
            const matrixRow = [];
            for (let col = 0; col < this.sizeCol; col++) {
                matrixRow.push(0);
            }
            this.matrix01.push(matrixRow);
        }
    }

    matrixReset() {
        for (let row = 0; row < this.sizeRow; row++) {
            for (let col = 0; col < this.sizeCol; col++) {
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
        document.querySelector("#test").innerHTML += "<br />"
        for (let row = 0; row < this.sizeRow; row++) {
            for (let col = 0; col < this.sizeCol; col++) {
                document.querySelector("#test").innerHTML += this.matrix01[row][col];
            }
            document.querySelector("#test").innerHTML += "<br />"
        }
        document.querySelector("#test").innerHTML += "<br />"
    }

    pointsDraw() {
        //const div = document.querySelector("#points");
        document.querySelector("#points").innerHTML = this.pointsTotal;
    }


    fix(pieceFixed) {
        for (let i of pieceFixed) {
            this.matrix01[i.x][i.y] = 4;
        }
    }

    lowerMatrix(fromRow) {
        for (let row = fromRow; row > 0; row--) {
            for (let col = 0; col < this.sizeCol; col++) {
                this.matrix01[row][col] = this.matrix01[row - 1][col];
            }
        }
    }

    deleteRow() {
        let rows = 0;
        for (let row = 0; row < this.sizeRow; row++) {
            let bricks = 0;
            for (let col = 0; col < this.sizeCol; col++) {
                if (this.matrix01[row][col] === 4) {
                    ++bricks;
                }
            }
            if (bricks === 10) {
                rows++;
                for (let col = 0; col < this.sizeCol; col++) {
                    this.matrix01[row][col] = 0;
                }
                this.lowerMatrix(row);

            }
        }
        this.pointsTotal += 100 * rows + (rows - 1) * rows * 50;
        matrixMain.pointsDraw()

    }
}

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
        this.positionRow = 0;
        this.positionCol = 4;
        this.area = new Matrix(4, 4);
        this.area.draw01();
        this.press = [1, 1, 1, 1, 1, 1, 1];
        this.shape = Math.round(Math.random() * 10) % 7;
        console.log(this.shape)
        this.positions = [];
        if (this.shape == 0) {
            this.positionCol = 3;
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
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }]];

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

        this.position = this.positions[this.shape][0];

        for (let i of this.position) {
            this.area.matrix01[i.y][i.x] = 2;
        }
    }

    fix() {
        const positionFixed = [];
        for (let i of this.position) {
            positionFixed.push({ x: i.x + this.positionRow, y: i.y + this.positionCol })
        }
        return positionFixed;
    }

    moveRight() {
        if (this.positionCol < 6) {
            let rightCollision = 0;
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (matrixMain.matrix01[this.positionRow + i][this.positionCol + j] === 3) {
                        if (matrixMain.matrix01[this.positionRow + i][this.positionCol + j + 1] === 4) {
                            rightCollision++;
                        }
                    }
                }
            }
            if (rightCollision > 0) {
                return false;
            } else {
                this.positionCol = this.positionCol + 1;
                return true;
            }
        } else {
            let col = 0;
            for (let i of this.position) {
                if (this.area.matrix01[9 - this.positionCol][i.x] === 0) {
                    col++;
                }
            }
            if (col === 4) {
                let rightCollision = 0;
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (matrixMain.matrix01[this.positionRow + i][this.positionCol + j] === 3) {
                            if (matrixMain.matrix01[this.positionRow + i][this.positionCol + j + 1] === 4) {
                                rightCollision++;
                            }
                        }
                    }
                }
                if (rightCollision > 0) {
                    return false;
                } else {
                    this.positionCol = this.positionCol + 1;
                    return true;
                }
            }
        }
    }

    moveLeft() {
        if (this.positionCol !== 0) {

            let leftCollision = 0;
            for (let i = 0; i < 4; i++) {
                if (matrixMain.matrix01[this.positionRow + i][this.positionCol] === 3) {
                    if (matrixMain.matrix01[this.positionRow + i][this.positionCol - 1] === 4) {
                        leftCollision++;
                    }
                }
            }
            if (leftCollision > 0) {
                return false;
            }
            else {
                this.positionCol = this.positionCol - 1;
                return true;
            }
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
        let posMax = 19;

        if (this.positionRow !== 16) {
            let a;
            let found = 0;

            for (let j = 19; j > 3; j--) {
                let bottomCollision = 0;
                for (let i = 0; i < 4; i++) {
                    if (matrixMain.matrix01[j][this.positionCol + i] === 4) {
                        bottomCollision++;
                    }
                }
                if (bottomCollision === 0) {
                    if (found === 0) {
                        a = j - 4;
                        found = 1;
                    }
                }
            }
            let downCollision = 0;
            for (let i = 0; i < 4; i++) {
                if (matrixMain.matrix01[this.positionRow + 3][this.positionCol + i] === 3) {
                    if (matrixMain.matrix01[this.positionRow + 4][this.positionCol + i] === 4 || matrixMain.matrix01[this.positionRow + 3][this.positionCol + i] === 4) {
                        downCollision++;
                        if (this.positionRow === 1) {
                            alert("gameover")
                            clearInterval(int)
                        }
                    }
                }
            }
            if (downCollision > 0) {
                return false;
            }
            else {
                //if (this.positionRow == 15) {
                  //  this.positionRow = 2; return true
               // } else {
                    this.positionRow = this.positionRow + 1; return true
               // }
            }
        }
        return false;
    }

    moveBottom() {
        for (let j = 19; j > 3; j--) {
            let bottomCollision = 0;
            for (let i = 0; i < 4; i++) {
                if (matrixMain.matrix01[j][this.positionCol + i] === 4) {
                    bottomCollision++;
                }
            }
            if (bottomCollision === 0) {
                this.positionRow = j - 4;
                return this.positionRow = j - 4;
            }
        }
    }

    matrixReset() {
        for (let row = 0; row < this.area.sizeRow; row++) {
            for (let col = 0; col < this.area.sizeCol; col++) {
                this.area.matrix01[row][col] = 0;
            }
        }
    }

    update() {
        this.area.matrixReset()
        this.area.matrix01[this.positionRow][this.positionCol] = 1;
    }

    matrixDraw() {
        if (document.querySelector("#test")) {
            document.querySelector("#test").remove();
        }
        const body = document.getElementsByTagName('body')[0];
        const area = document.createElement('div');
        area.id = "test";
        body.appendChild(area);
        for (let row = 0; row < this.area.sizeRow; row++) {
            for (let col = 0; col < this.area.sizeCol; col++) {
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

placePiece = (matrixMain, pieceCurrent) => {
    for (let row = 0; row < matrixMain.sizeRow; row++) {
        for (let col = 0; col < matrixMain.sizeCol; col++) {
            if (pieceCurrent.positionRow === row && pieceCurrent.positionCol == col) {
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
let pieceNext;
let matrixMain;
let int;
playOnClick = () => {
    if (int) {
        window.clearInterval(int)
    }
    matrixMain = new Matrix(20, 10);
    matrixMain.pointsDraw()
    matrixMain.draw01();
    let isPieceActive = 1;
    if (isPieceActive) {
        pieceCurrent = new Piece();
        pieceNext = new Piece();
        drawPiece(pieceNext.area.matrix01, pieceNext.shape)
    }
    placePiece(matrixMain, pieceCurrent)
    for (let rowPiece = 0; rowPiece < 4; rowPiece++) {
        for (let colPiece = 0; colPiece < 4; colPiece++) {
            if (pieceCurrent.area.matrix01[colPiece][rowPiece] === 2) {
                matrixMain.matrix01[rowPiece][colPiece] = 3;
            }
        }
    }
    int = window.setInterval(function () {
        isPieceActive = 1;
        isBottom = pieceCurrent.moveDown(matrixMain);
        if (!isBottom) {
            pieceFixed = pieceCurrent.fix();
            matrixMain.fix(pieceFixed);
            matrixMain.pointsTotal += 10;
            matrixMain.pointsDraw();
            matrixMain.deleteRow();
        }
        matrixMain.update()
        if (isBottom) {
            placePiece(matrixMain, pieceCurrent)
        }
        if (!isBottom) {
            if (pieceCurrent.positionRow === 0) {
                window.clearInterval(int);
            } else {
                pieceCurrent = pieceNext;
                pieceNext = new Piece();
            }
        }
        drawMatrix(matrixMain.matrix01);
        drawPiece(pieceNext.area.matrix01, pieceNext.shape)

    }, delay);
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {

        case "ArrowUp":
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
})

drawMatrix = (matrixMain) => {
    const container = document.getElementById('container');
    let matrix = document.getElementById('matrix');
    if (matrix) {
        matrix.remove();
    }
    matrix = document.createElement('table');
    matrix.id = "matrix";
    let tbdy = document.createElement('tbody');
    for (let i = 0; i < matrixMain.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < matrixMain[0].length; j++) {
            const td = document.createElement('td');
            if (matrixMain[i][j] === 3) {
                td.className = "piece-active";
            }
            if (matrixMain[i][j] === 4) {
                td.className = "piece-placed";
            }
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    matrix.appendChild(tbdy);
    container.appendChild(matrix)
}

matrixMain2 = new Matrix(20, 10);
matrixMain2.draw01();
drawMatrix(matrixMain2.matrix01);

drawPiece = (pieceNext, shape) => {
    const container = document.getElementById('next-piece');
    let piece = document.getElementById('piece');
    if (piece) {
        piece.remove();
    }
    piece = document.createElement('table');
    piece.id = "piece";
    let tbdy = document.createElement('tbody');
    for (let i = 0; i < pieceNext.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < pieceNext[0].length; j++) {
            const td = document.createElement('td');
            // if(shape===3){
            //     j++;
            // }
            if (pieceNext[j][i] != 0) {
                td.className = "next-piece";
            } else {
                td.className = "none";

            }
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    piece.appendChild(tbdy);
    container.appendChild(piece)
}