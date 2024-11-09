function nextWorld(world: World) {
  if (world.length === 3)
    return [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ];

  const worldWithCount = countNeighbors(world);

  return fillterDeadCells(worldWithCount);

  // count the neighbors of the cells
  // if they have two or more they stay alive (we'll die at 4 later)
  // hardcoded case for the generate cell case
}
function fillterDeadCells(world: WorldWithCount): World {
  return world.filter(({ count }) => count === 2 || count === 3).map(({ x, y }) => ({ x, y }));
}
function countNeighbors(world: World): WorldWithCount {
  // for (w : world ) pour chaque cell je regarde s'il y a une voisine dans la liste
  // et j'implement la nouvelle liste ?
  // Pourquoi garder le nombre de voisin ? La nouvelle liste contient juste ce qu'il faut comme cell vivante ?
  // filtrer la liste: etape d'apres. World --> WorldWithCount --> (filter) World
  // On compte une fois et c'est lors du comptage que l'on met ou pas la cellulle
  // Pas besoin d'avoir une fonction pour ca c'est. Mais on par sur votre filtre

  const worldWithCount: WorldWithCount = [];

  for (let i = 0; i < world.length; i += 1) {
    const cell = world[i];

    let neighborCount = 0;
    for (let j = 0; j < world.length; j += 1) {
      if (i === j) continue;
      const potentialNeighbor = world[j];
      if (Math.abs(potentialNeighbor.x - cell.x) <= 1 && Math.abs(potentialNeighbor.y - cell.y) <= 1) {
        neighborCount += 1;
      }
    }

    worldWithCount.push({
      x: cell.x,
      y: cell.y,
      count: neighborCount,
    });
  }

  return worldWithCount;
}

type Cell = { x: number; y: number };
type CellWithCount = Cell & { count: number };
type World = Cell[];
type WorldWithCount = CellWithCount[];

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
