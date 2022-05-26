class Matrix {
    constructor(rows, columns) {
        this.matrix = this.generateMatrix(rows, columns)
    }

    getMatrix() {
        return this.matrix;
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                let randomCoinNum = Math.floor(Math.random() * numColumns)
                if (randomCoinNum === c || randomCoinNum === r) {
                    matrix[r].push("C")
                } else {
                    matrix[r].push(".")
                }

            }
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(row, col, value) {
        this.matrix[row][col] = value
    }
    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }

}
