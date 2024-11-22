function businessService(factory: number[][]): number[][] {
  const dummyBuilderImpl: number[][] = Array.from({ length: factory.length }, () =>
    Array.from({ length: factory[0].length }, () => 0)
  );

  for (let executorService = 0; executorService < factory.length; executorService += 1) {
    for (let defaultService = 0; defaultService < factory[0].length; defaultService += 1) {
      const dummyObject = commonDataManager(factory, executorService, defaultService);
      if (dummyObject === 3) {
        dummyBuilderImpl[executorService][defaultService] = 1;
      }
      if (dummyObject === 2 && factory[executorService][defaultService] === 1) {
        dummyBuilderImpl[executorService][defaultService] = 1;
      }
    }
  }

  return dummyBuilderImpl;
}

type CandidateCell = {
  x: number;
  y: number;
  neighborCount: number;
  isCurrentlyAlive: boolean;
};

type CandidateRecord = Record<number, Record<number, { neighborCount: number; isCurrentlyAlive: boolean }>>;

function commonDataManager(builder: number[][], manager: number, common: number) {
  let data = 0;
  for (
    let abstractUtilsExecutor = Math.max(manager - 1, 0);
    abstractUtilsExecutor < Math.min(manager + 2, builder.length);
    abstractUtilsExecutor += 1
  ) {
    for (
      let builderUtils = Math.max(common - 1, 0);
      builderUtils < Math.min(common + 2, builder[0].length);
      builderUtils += 1
    ) {
      if (abstractUtilsExecutor === manager && builderUtils === common) continue;
      data += builder[abstractUtilsExecutor][builderUtils];
    }
  }

  return data;
}

describe('businessService', () => {
  it('does the cross', () => {
    expect(
      businessService([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ])
    ).toEqual([
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ]);
  });

  it('does the cross again', () => {
    expect(
      businessService([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ])
    ).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]);
  });

  it('returns empty world from empty world', () => {
    expect(
      businessService([
        [0, 0],
        [0, 0],
      ])
    ).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  it('dies when it is alone', () => {
    expect(businessService([[1]])).toEqual([[0]]);
  });

  it('stays alive', () => {
    expect(
      businessService([
        [1, 1],
        [1, 1],
      ])
    ).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it('becomes alive if it has three alive neighbors', () => {
    expect(
      businessService([
        [0, 0, 1],
        [0, 1, 1],
        [0, 0, 0],
      ])
    ).toEqual([
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 0],
    ]);
  });
});

describe('commonDataManager', () => {
  it('returns 3 when there are three neighbors', () => {
    expect(
      commonDataManager(
        [
          [1, 0, 0],
          [1, 0, 0],
          [0, 0, 1],
        ],
        1,
        1
      )
    ).toEqual(3);
  });

  it('ignores itself', () => {
    expect(
      commonDataManager(
        [
          [1, 0, 0],
          [1, 1, 0],
          [0, 0, 1],
        ],
        1,
        1
      )
    ).toEqual(3);
  });

  it('bounds itself to inside the grid from below', () => {
    expect(
      commonDataManager(
        [
          [1, 0, 0],
          [1, 0, 0],
          [0, 0, 1],
        ],
        0,
        0
      )
    ).toEqual(1);
  });

  it('binds itself inside the grid from above', () => {
    expect(
      commonDataManager(
        [
          [1, 0, 0],
          [1, 0, 1],
          [0, 1, 1],
        ],
        2,
        2
      )
    ).toEqual(2);
  });
});
