class GuessingGame {
    constructor() {
            this.number = null
            this.min = null 
            this.max = null
            this.arr = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.number = this.max - Math.floor((this.max - this.min) / 2)
console.log('max='+this.max)
console.log('mmin='+this.min)

        console.log(this.number)
        // console.log(Math.floor((this.max - this.min) / 2))
        // console.log(this.max / 2)
        // console.log((this.min / 2) + this.min)

        console.log('rand='+ Math.floor(this.min + Math.random() * (this.max  + 1 - this.min)))
        return this.number
    }

    lower() {
        this.max = this.number 
    }

    greater() {
        this.min = this.number 
    }
}

module.exports = GuessingGame;
