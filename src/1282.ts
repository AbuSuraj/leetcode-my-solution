function groupThePeople(groupSizes: number[]): number[][] {
    const res: number[][] = [];
    const groupsMap: number[][] = Array.from({length: 500}, () => []);
    console.log(groupsMap);
    
    for (let userId = 0; userId < groupSizes.length; userId++) {
        const groupSize = groupSizes[userId];
        console.log(groupSize);
        
        const group = groupsMap[groupSize];
        group.push(userId);

        if (group.length === groupSize) {
            res.push(group);
            groupsMap[groupSize] = [];
        } else {
            groupsMap[groupSize] = group;
        }
    }

    return res;
};
console.log(groupThePeople([3,3,3,3,3,1,3]));
// console.log(groupThePeople([2,1,3,3,3,2]));
