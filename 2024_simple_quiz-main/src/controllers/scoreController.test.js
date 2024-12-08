import { updateScore, calculateFinalScore } from './scoreController';

test('increments score when the answer is correct', () => {
    expect(updateScore(0, true)).toBe(1);
});

test('does not increment score when the answer is incorrect', () => {
    expect(updateScore(1, false)).toBe(1);
});

test('returns the correct final score message', () => {
    expect(calculateFinalScore(3, 5)).toBe('Total score: 3/5');
});



