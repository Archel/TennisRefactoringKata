class AdvantageScorePrinter {
    constructor(printData) {
        this.printData = printData;
    }

    print() {
        const { playerOneScore, playerTwoScore, playerOneName, playerTwoName } = this.printData;
        return 'Advantage ' + highestScore()

        function highestScore() {
            return playerOneScore > playerTwoScore ? playerOneName : playerTwoName;
        }
    }
}

if (typeof window === "undefined") {
    module.exports = AdvantageScorePrinter;
}