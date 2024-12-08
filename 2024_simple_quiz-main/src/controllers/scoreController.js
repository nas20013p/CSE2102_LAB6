export function updateScore(currentScore, isCorrect) {
    return isCorrect ? currentScore + 1 : currentScore;
}

export function calculateFinalScore(score, count) {
    return `Total score: ${score}/${count}`;
}
