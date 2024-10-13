/**
 * Measure the bias of a shuffle algorithm.
 * If the algorithm is not biased, each element of the resulting matrix should have roughly the same value.
 */
export function measureBias(shuffleAlgorithm: (array: readonly number[]) => number[]): number[][] {
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
