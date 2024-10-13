/**
 * Fisher-Yates (aka Knuth) shuffle
 * This algorithm does create a uniform distribution.
 */
export function shuffle<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

/**
 * Shuffle algorithm suggested by Claude 3.5 Sonnet.
 * Very bad, does NOT create a uniform distribution.
 */
function mathSortShuffle<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  return shuffled.sort(() => Math.random() - 0.5);
}
