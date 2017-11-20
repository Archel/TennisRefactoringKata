if (typeof PrinterFactory === "undefined") {
    const PrinterFactory = require("./src/PrinterFactory");
}

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

TennisGame1.prototype.getScore = function() {
    const printData = {
        playerOneName: _playerOneName,
        playerTwoName: _playerTwoName,
        playerOneScore: this.playerOneScore(),
        playerTwoScore: this.playerTwoScore()
    };

    const printerFactory = new PrinterFactory(printData);    
    return printerFactory.create().print();
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
