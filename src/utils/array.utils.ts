export function shuffle<T>(array: T[]): T[] {
  const tempArr = [...array];
  let currentIndex = tempArr.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [tempArr[currentIndex], tempArr[randomIndex]] = [
      tempArr[randomIndex],
      tempArr[currentIndex],
    ];
  }

  return tempArr;
}
