type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let ans = init;
    nums.forEach(n =>{
        ans= fn(ans,n);
        // console.log(ans)
    })
    return ans
};

console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },  0))