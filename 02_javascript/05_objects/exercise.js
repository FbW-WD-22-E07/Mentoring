function createScoreBoard () {
    const scoreBoard = {
        theBestEver: 1_000_000
    }

    return scoreBoard;
}

console.log('1.',createScoreBoard());

/* ADD NEW PROPERTY TO OBJECT */
function addPlayer(scoreBoard, player, score) {
    /** ADD A NEW PLAYER */
    scoreBoard[player] = score;

    return scoreBoard;
}

console.log("2.", addPlayer({ theBestEver: 1_000_000 }, 'Fahim', 5000));


/** REMOVE A PLAYER */
function removePlayer (scoreBoard, player) {
    delete scoreBoard[player];

    return scoreBoard;
}

console.log("3.", removePlayer({ theBestEver: 1000000, Fahim: 5000 }, 'Fahim'));


/** Update Player's score */
function updateScore (scoreBoard, player, score) {
    scoreBoard[player] = scoreBoard[player] + score;

    return scoreBoard;
}

console.log('4.', updateScore({ theBestEver: 1000000, Fahim: 5000 }, 'Fahim', 100));


/** APPLY BONUS POINTS */
function applyMondayBonus (scoreBoard) {
    for (let player in scoreBoard) {
        scoreBoard[player] = scoreBoard[player] + 100;
    }

    return scoreBoard;
}

console.log("5.", applyMondayBonus({ Ronaldo: 1000000, Fahim: 5000, Messi: 1000 }));



/** Normalize a High Score */
function normalizeScore (scoreBoard) {
    return scoreBoard.normalize(scoreBoard.score);
}

const params = {
  score: 400,
  normalize: function (score) {
    return 2 * score + 10;
  },
};


console.log('6.', normalizeScore(params));



