function minimumSum(num: number): number {
    const arr = num.toString().split('').sort()
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])
};
console.log(minimumSum(2923));
