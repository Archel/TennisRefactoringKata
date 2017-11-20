const LOVE = 0;
const FIFTEEN = 1;
const THIRTY = 2;
const FORTY = 3;
const RegularScores = {};
RegularScores[LOVE] = "Love";
RegularScores[FIFTEEN] = "Fifteen";
RegularScores[THIRTY] = "Thirty";
RegularScores[FORTY] = "Forty";

const SCORE_SEPARATOR = "-";

var TennisGame1 = function(playerOneName, playerTwoName) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (this.playerOneName === playerName)
        this.playerOneScore += 1;
    else
        this.playerTwoScore += 1;
};

TennisGame1.prototype.getEqualsScore = function(playerOneScore) {
    if (this.playerOneScore > 2) { return 'Deuce'; }
    return RegularScores[this.playerOneScore] + '-All';
}

TennisGame1.prototype.scoreIsEqual = function() {
    return this.playerOneScore === this.playerTwoScore;
}

TennisGame1.prototype.scoreIsAdvantage = function() {
    return this.playerOneScore >= 4 || this.playerTwoScore >= 4;
}

TennisGame1.prototype.determinePlayersAdvantage = function() {
    const advantagePlayer = this.playerOneScore > this.playerTwoScore ? this.playerOneName : this.playerTwoName
    return 'Advantage ' + advantagePlayer;
}

TennisGame1.prototype.isAdvantatge = function() {
    return Math.abs(this.playerOneScore - this.playerTwoScore) === 1;
}

TennisGame1.prototype.isWon = function() {
    return Math.abs(this.playerOneScore - this.playerTwoScore) >= 2;
}

TennisGame1.prototype.determineAdvantageScore = function() {
    const scoreDifference = this.playerOneScore - this.playerTwoScore;
    if (this.isWon()) {
        return "Win for " + (scoreDifference >= 2 ? this.playerOneName : this.playerTwoName);
    }
    
    return this.determinePlayersAdvantage();
}

TennisGame1.prototype.determineRegularScore = function() {
    return RegularScores[this.playerOneScore] + SCORE_SEPARATOR + RegularScores[this.playerTwoScore];
}

TennisGame1.prototype.getScore = function() {
    let score = "";
    if (this.scoreIsEqual()) {
        score = this.getEqualsScore(this.playerOneScore);
    } else if (this.scoreIsAdvantage()) {
        score = this.determineAdvantageScore();
    } else {
        score = this.determineRegularScore();
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}