if (typeof RegularScorePrinter === "undefined") {
    const RegularScorePrinter = require("./src/RegularScorePrinter");
}

if (typeof AdvantageScorePrinter === "undefined") {
    const AdvantageScorePrinter = require("./src/AdvantageScorePrinter");
}

if (typeof WinnerScorePrinter === "undefined") {
    const WinnerScorePrinter = require("./src/WinnerScorePrinter");
}

if (typeof EqualsScorePrinter === "undefined") {
    const EqualsScorePrinter = require("./src/EqualsScorePrinter");
}

class PrinterFactory {
    constructor(printData) {
        this.printData = printData;
    }

    create() {
        const { playerOneScore, playerTwoScore } = this.printData;
        
        if(isWon()) {
            return new WinnerScorePrinter(this.printData);
        }

        if (isEqualsScore()) {
            return new EqualsScorePrinter(this.printData);
        }
        
        if (scoreIsAdvantage()) {
            return new AdvantageScorePrinter(this.printData);
        }

        return new RegularScorePrinter(this.printData);

        function isEqualsScore() {
            return playerOneScore === playerTwoScore;
        }

        function scoreIsAdvantage() {
            return playerOneScore >= 4 || playerTwoScore >= 4;
        }

        function isWon()  {
            return differenceBetweenPlayerScores() >= 2 && scoreIsAdvantage();
        }

        function differenceBetweenPlayerScores() {
            return Math.abs(playerOneScore - playerTwoScore);
        }
    }
}

if (typeof window === "undefined") {
    module.exports = PrinterFactory;
}