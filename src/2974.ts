function numberGame(nums: number[]): number[] {
    const res: number[] = [];
    nums.sort((a, b) => a - b);
    let a = 1, b = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {


            res[a] = nums[i];
            a += 2

        }
        else {

            res[b] = nums[i];
            b = b + 2;
        }
    }
    //   console.log(res);

    return res;
};
console.log(numberGame([5, 4, 2, 3]));
