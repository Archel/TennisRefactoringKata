if (typeof ScoreName === "undefined") {
    const ScoreName = require("./src/ScoreNamesEnum");
}

class RegularScorePrinter {
    constructor(printData) {
        this.printData = printData;
    }

    print() {
        const { playerOneScore, playerTwoScore } = this.printData;
        return ScoreName[playerOneScore] + SCORE_SEPARATOR + ScoreName[playerTwoScore]
    }
}

module.exports = RegularScorePrinter;