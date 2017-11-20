const LOVE = 0;
const FIFTEEN = 1;
const THIRTY = 2;
const FORTY = 3;
const ScoreName = {};
ScoreName[LOVE] = "Love";
ScoreName[FIFTEEN] = "Fifteen";
ScoreName[THIRTY] = "Thirty";
ScoreName[FORTY] = "Forty";

const SCORE_SEPARATOR = "-";
let _playerOneName, _playerTwoName;

var TennisGame1 = function(playerOneName, playerTwoName) {
    this.scores = {};
    this.scores[playerOneName] = 0;
    this.scores[playerTwoName] = 0;
    _playerOneName = playerOneName;
    _playerTwoName = playerTwoName;
};

TennisGame1.prototype.playerOneScore = function() {
    return this.scores[_playerOneName];
};

TennisGame1.prototype.playerTwoScore = function() {
    return this.scores[_playerTwoName];
};

TennisGame1.prototype.wonPoint = function(playerName) {
    this.scores[playerName] += 1;
};

TennisGame1.prototype.getEqualsScore = function() {
    let score = this.playerOneScore();
    if (score > 2) { return 'Deuce'; }
    return ScoreName[score] + '-All';
}

TennisGame1.prototype.scoreIsEqual = function() {
    return this.playerOneScore() === this.playerTwoScore();
}

TennisGame1.prototype.scoreIsAdvantage = function() {
    return this.playerOneScore() >= 4 || this.playerTwoScore() >= 4;
}

TennisGame1.prototype.highestScoringPlayer = function() {
    if (this.scoreIsEqual()) return null;
    return this.playerOneScore() > this.playerTwoScore() ? _playerOneName : _playerTwoName;
}

TennisGame1.prototype.isAdvantage = function() {
    return this.differenceBetweenPlayerScores() === 1;
}

TennisGame1.prototype.isWon = function() {
    const highestScoreIsGreaterThanForty = this.scores[this.highestScoringPlayer()] >= 4;
    return this.differenceBetweenPlayerScores() >= 2 && highestScoreIsGreaterThanForty;
}

TennisGame1.prototype.determineAdvantageScore = function() {    
    return 'Advantage ' + this.highestScoringPlayer();
}

TennisGame1.prototype.determineRegularScore = function() {
    return ScoreName[this.playerOneScore()] + SCORE_SEPARATOR + ScoreName[this.playerTwoScore()];
}

TennisGame1.prototype.getScore = function() {
    if (this.isWon()) {
        return "Win for " + this.highestScoringPlayer();
    }
    
    if (this.scoreIsEqual()) {
        return this.getEqualsScore();
    } 
    
    if (this.scoreIsAdvantage()) {
        return this.determineAdvantageScore();
    }

    return this.determineRegularScore();
};

TennisGame1.prototype.differenceBetweenPlayerScores = function() {
    return Math.abs(this.scores[_playerOneName] - this.scores[_playerTwoName]);
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
