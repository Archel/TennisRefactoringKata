const LOVE = 0;
const FIFTEEN = 1;
const THIRTY = 2;
const FORTY = 3;
const ScoreName = {};
ScoreName[LOVE] = "Love";
ScoreName[FIFTEEN] = "Fifteen";
ScoreName[THIRTY] = "Thirty";
ScoreName[FORTY] = "Forty";

if (typeof window === "undefined") {
    module.exports = ScoreName;
}