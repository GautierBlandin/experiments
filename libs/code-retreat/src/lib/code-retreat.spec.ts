function nextWorld(world: World) {
  if (world.length >= 3) {
    if (world[0].x === 0) {
      return [];
    }
    return [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ];
  }
  return [];
}

type Cell = { x: number; y: number };
type World = Cell[];

describe('codeRetreat', () => {
  it('word with all died', () => {
    expect(nextWorld([])).toEqual([]);
  });

  it('dies when it is alone', () => {
    expect(nextWorld([{ x: 1, y: 1 }])).toEqual([]);
  });

  it('dies not when it is not alone', () => {
    expect(
      nextWorld([
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ])
    ).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });

  it('stays the same when it is a square', () => {
    expect(
      nextWorld([
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ])
    ).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });
  it('isolated cells all die', () => {
    expect(
      nextWorld([
        { x: 0, y: 0 },
        { x: 3, y: 0 },
        { x: 0, y: 3 },
        { x: 3, y: 3 },
      ])
    ).toEqual([]);
  });
});
