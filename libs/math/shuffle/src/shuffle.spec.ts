import { shuffle } from './shuffle';

describe('knuth shuffle', () => {
  it('has a bias inferior to 1% when shuffling a million times', () => {
    const biasMatrix = measureBias(shuffle);

    for (let i = 0; i < biasMatrix.length; i++) {
      for (let j = 0; j < biasMatrix[i].length; j++) {
        expect(biasMatrix[i][j]).toBeLessThanOrEqual((10 ** 6 * 1.01) / 6);
        expect(biasMatrix[i][j]).toBeGreaterThanOrEqual((10 ** 6 * 0.99) / 6);
      }
    }
  });
});

/**
 * Measure the bias of a shuffle algorithm.
 * If the algorithm is not biased, each element of the resulting matrix should have roughly the same value.
 */
function measureBias(shuffleAlgorithm: (array: readonly number[]) => number[]): number[][] {
  const toShuffle: number[] = [0, 1, 2, 3, 4, 5];

  const biasMatrix: number[][] = Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => 0));

  for (let i = 0; i < 10 ** 6; i++) {
    const shuffled = shuffleAlgorithm(toShuffle);
    for (let j = 0; j < shuffled.length; j++) {
      biasMatrix[j][shuffled[j]]++;
    }
  }
  return biasMatrix;
}
