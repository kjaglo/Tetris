

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



    matrixDraw() {

        for (let row = 0; row < this.sizeX; row++) {
            for (let col = 0; col < this.sizeY; col++) {
                document.querySelector("#test").innerHTML+=this.matrix01[row][col];
            }
            document.querySelector("#test").innerHTML+= "<br />"

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
        this.type = Math.round(Math.random() * 10) % 7;
        this.area[0,0]=1
    }

    moveRight() {
        this.positionX = this.positionX + 1;
        console.log("move Right")
        console.log(this.area)
    }

    moveLeft() {
        this.positionX = this.positionX - 1;
        console.log("move Left")
        console.log(this.area)

    }

    moveUp() {
        this.positionY = this.positionY - 1;
        console.log("move Up")
        console.log(this.area)

    }

    moveDown() {
        this.positionY = this.positionY + 1;
        console.log("move Down")
        console.log(this.area)

    }

    matrixDraw() {

        for (let row = 0; row < this.area.sizeX; row++) {
            for (let col = 0; col < this.area.sizeY; col++) {
                document.querySelector("#test").innerHTML+=this.area.sizeX;
            }
            document.querySelector("#test").innerHTML+= "<br />"


        }}

}

const pieceCurrent = new Piece();



document.addEventListener("keydown", function (event) {
    pieceCurrent.matrixDraw();
    console.log(event.key)
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

})

playOnClick = () => {

    console.log("pplay")
}


matrixMain.matrixDraw();
// document.querySelector("#test").innerHTML=matrixMain.matrix01