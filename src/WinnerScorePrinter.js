class WinnerScorePrinter {
    constructor(printData) {
        this.printData = printData;
    }

    print() {
        const { playerOneScore, playerTwoScore, playerOneName, playerTwoName } = this.printData;
        return "Win for " +  highestScoringPlayer();

        function highestScoringPlayer() {
            return playerOneScore > playerTwoScore ? playerOneName : playerTwoName;
        }
    }
}

if (typeof window === "undefined") {
    module.exports = WinnerScorePrinter;
}