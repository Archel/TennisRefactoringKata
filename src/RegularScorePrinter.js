if (typeof ScoreName === "undefined") {
    const ScoreName = require("./src/ScoreNamesEnum");
}

const SCORE_SEPARATOR = "-";

class RegularScorePrinter {
    constructor(printData) {
        this.printData = printData;
    }

    print() {
        const { playerOneScore, playerTwoScore } = this.printData;
        return ScoreName[playerOneScore] + SCORE_SEPARATOR + ScoreName[playerTwoScore]
    }
}

if (typeof window === "undefined") {
    module.exports = RegularScorePrinter;
}