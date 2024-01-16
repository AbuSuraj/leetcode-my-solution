function findWinners(matches: number[][]): number[][] {
    const lost = new Map<number, number>();

    for (const [winner, loser] of matches) {
        if (!lost.has(winner)) {
            lost.set(winner, 0);
        }
        lost.set(loser, (lost.get(loser) || 0) + 1);
    }

    const zero: number[] = [];
    const ones: number[] = [];

    for (const [k, l] of lost.entries()) {
        if (l === 0) {
            zero.push(k);
        }
        if (l === 1) {
            ones.push(k);
        }
    }

    return [zero.sort((a, b) => a - b), ones.sort((a, b) => a - b)];
};
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));
