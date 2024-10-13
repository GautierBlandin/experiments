import { shuffle } from './shuffle';
import { measureBias } from './measure-bias';

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
