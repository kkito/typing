import { Score } from '../src/score';

test('Should inited valid', () => {
  const score = new Score();
  expect(score.allAlphabetTyped()).toEqual(0);
  expect(score.allWordTyped()).toEqual(0);
  expect(score.allTimeCost()).toEqual(0);
});

test('increase alphabet typed', () => {
  const score = new Score();
  score.start();
  score.increaseAlphabet();
  expect(score.allAlphabetTyped()).toEqual(1);
  expect(score.allTimeCost()).toBeGreaterThanOrEqual(0);
});
