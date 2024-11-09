function nextWorld(world: Grid) {}

function countNeighbors(world: Grid, x: number, y: number): number {
  let count = 0;
  for (let i = x - 1; i < x + 2; i += 1) {
    for (let j = y - 1; j < y + 2; j += 1) {
      switch (i) {
        case -1:
        case world.length:
          break;
        case x:
          switch (j) {
            case y:
              break;
            default:
              count += incrementWithJ(world, j, i);
          }
          break;
        default:
          count += incrementWithJ(world, j, i);
      }
    }
  }
  return count;
}

function incrementWithJ(world: Grid, j: number, i: number): number {
  switch (j) {
    case -1:
    case world.length:
      return 0;
    default:
      return world[i][j];
  }
}

type Grid = number[][];

// TDD mais pas trop de mauvaise foi
// Etape 1: Count neighbors
// Etape 2: Compute next grid

describe('codeRetreat', () => {
  it('returns 0 for an empty grid', () => {
    expect(
      countNeighbors(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0
      )
    ).toBe(0);
  });

  it('returns 1 if there is one neighbour', () => {
    expect(
      countNeighbors(
        [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        1,
        1
      )
    ).toBe(1);
  });

  it('returns 4 if there are four neighbour', () => {
    expect(
      countNeighbors(
        [
          [1, 0, 0],
          [0, 1, 0],
          [1, 1, 0],
        ],
        1,
        0
      )
    ).toBe(4);
  });

  it('returns 4 if there are four neighbour and it is alive', () => {
    expect(
      countNeighbors(
        [
          [1, 0, 0],
          [1, 1, 0],
          [1, 1, 0],
        ],
        1,
        0
      )
    ).toBe(4);
  });

  it('returns 4 if there are four neighbour and it is alive', () => {
    expect(
      countNeighbors(
        [
          [1, 0, 0],
          [1, 1, 1],
          [1, 1, 1],
        ],
        2,
        2
      )
    ).toBe(3);
  });
});
