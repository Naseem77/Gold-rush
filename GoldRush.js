
class GoldRush extends Matrix {
    constructor(row, cols) {
        super(row, cols)
        this.alter(0, 0, "1")
        this.alter(row - 1, cols - 1, "2")
        this.row = row //y
        this.cols = cols//x
        this.Player1Coins = 0
        this.Player2Coins = 0
    }
    getCols(){
        return this.cols
    }
    player1() {
        return this.Player1Coins
    }
    player2() {
        return this.Player2Coins
    }
    movePlayer(player, direction) {
        if (player === 1) {
            let coordinate = this.findCoordinate("1")
            if (direction === "down" && coordinate.y + 1 < this.row) {
                if (this.get(coordinate.y + 1, coordinate.x) === "C") {
                    this.addCoin(1)
                }
                if (this.get(coordinate.y + 1, coordinate.x) === "2") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y + 1, coordinate.x, "1")
            } else if (direction === "up" && coordinate.y - 1 >= 0) {
                if (this.get(coordinate.y - 1, coordinate.x) === "C") {
                    this.addCoin(1)
                }
                if (this.get(coordinate.y - 1, coordinate.x) === "2") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y - 1, coordinate.x, "1")
            } else if (direction === "left" && coordinate.x - 1 >= 0) {
                if (this.get(coordinate.y, coordinate.x - 1) === "C") {
                    this.addCoin(1)
                }
                if (this.get(coordinate.y, coordinate.x - 1) === "2") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y, coordinate.x - 1, "1")
            } else if (direction === "right" && coordinate.x + 1 < this.cols) {
                if (this.get(coordinate.y, coordinate.x + 1) === "C") {
                    this.addCoin(1)
                }
                if (this.get(coordinate.y, coordinate.x + 1) === "2") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y, coordinate.x + 1, "1")
            }
        } else if(player === 2){
            let coordinate = this.findCoordinate("2")
            if (direction === "down" && coordinate.y + 1 < this.row) {
                if (this.get(coordinate.y + 1, coordinate.x) === "C") {
                    this.addCoin(2)
                }
                if (this.get(coordinate.y + 1, coordinate.x) === "1") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y + 1, coordinate.x, "2")
            } else if (direction === "up" && coordinate.y - 1 >= 0) {
                if (this.get(coordinate.y - 1, coordinate.x) === "C") {
                    this.addCoin(2)
                }
                if (this.get(coordinate.y - 1, coordinate.x) === "1") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y - 1, coordinate.x, "2")
            } else if (direction === "left" && coordinate.x - 1 >= 0) {
                if (this.get(coordinate.y, coordinate.x - 1) === "C") {
                    this.addCoin(2)
                }
                if (this.get(coordinate.y, coordinate.x - 1) === "1") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y, coordinate.x - 1, "2")
            } else if (direction === "right" && coordinate.x + 1 < this.cols) {
                if (this.get(coordinate.y, coordinate.x + 1) === "C") {
                    this.addCoin(2)
                }
                if (this.get(coordinate.y, coordinate.x + 1) === "1") {
                    return
                }
                this.alter(coordinate.y, coordinate.x, ".")
                this.alter(coordinate.y, coordinate.x + 1, "2")
            }

        }
    }
    addCoin(player) {
        if (player === 1) {
            this.Player1Coins++
        } else {
            this.Player2Coins++
        }
    }


}