if (typeof ScoreName === "undefined") {
    const ScoreName = require("./src/ScoreNamesEnum");
}

const DEUCE = "Deuce";

class EqualsScorePrinter {
    constructor(printData) {
        this.printData = printData;
    }

    print() {
        const { playerOneScore } = this.printData;
        
        return isDeuce() ? DEUCE : ScoreName[playerOneScore] + '-All';

        function isDeuce() {
            return playerOneScore >= FORTY
        }
    }
}

if (typeof window === "undefined") {
    module.exports = EqualsScorePrinter;
}