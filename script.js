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
    matrixDraw() {

        for (let row = 0; row < this.sizeX; row++) {
            for (let col = 0; col < this.sizeY; col++) {
                document.querySelector("#test").innerHTML += this.matrix01[row][col];
            }
            document.querySelector("#test").innerHTML += "<br />"
        }
    }
}

const matrixMain = new Matrix(20, 10);
matrixMain.draw();
matrixMain.draw01();
matrixMain.sideLeft(0)
matrixMain.sideRight(0)
matrixMain.sideBottom(0)

class Piece {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.area = new Matrix(4, 4);
        this.area.draw01()
        this.type = Math.round(Math.random() * 10) % 7;
        this.area.matrix01[0][0] = 1
    }

    moveRight() {
        if (this.positionX !== 3) {
            this.positionX = this.positionX + 1;
            console.log("move Right")
            console.log(this.area)
        }
    }

    moveLeft() {
        if (this.positionX !== 0) {
            this.positionX = this.positionX - 1;
            console.log("move Left")
            console.log(this.area)
        }

    }

    moveUp() {
        if (this.positionY !== 0) {
            this.positionY = this.positionY - 1;
            console.log("move Up")
            console.log(this.area)
        }

    }

    moveDown() {
        if (this.positionY !== 3) {
            this.positionY = this.positionY + 1;
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

const pieceCurrent = new Piece();

document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case "ArrowUp":
            console.log("Up")
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
    }
    pieceCurrent.update()
    pieceCurrent.matrixDraw();
    console.log(event.key)

})

playOnClick = () => {
    console.log("pplay")
}


matrixMain.matrixDraw();
// document.querySelector("#test").innerHTML=matrixMain.matrix01