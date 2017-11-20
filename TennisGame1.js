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
    let score = "";
    switch (this.playerOneScore) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }

    return score;
}

TennisGame1.prototype.scoreIsEqual = function() {
    return this.playerOneScore === this.playerTwoScore;
}

TennisGame1.prototype.scoreIsAdvantage = function() {
    return this.playerOneScore >= 4 || this.playerTwoScore >= 4;
}

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.scoreIsEqual()) {
        score = this.getEqualsScore(this.playerOneScore);
    } else if (this.scoreIsAdvantage()) {
        var minusResult = this.playerOneScore - this.playerTwoScore;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.playerOneScore;
            else {
                score += "-";
                tempScore = this.playerTwoScore;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}