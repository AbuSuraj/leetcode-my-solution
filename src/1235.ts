function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const jobs: Array<[number, number, number]> = [];
 
     for (let i = 0; i < startTime.length; i++) {
         jobs.push([startTime[i], endTime[i], profit[i]]);
     }
 
     // Sort jobs based on their end times
     jobs.sort((a, b) => a[1] - b[1]);
 
     const n = jobs.length;
     const dp: number[] = new Array(n).fill(0);
 
     dp[0] = jobs[0][2]; // Initialize with the profit of the first job
 
     for (let i = 1; i < n; i++) {
         const prevJobIndex = binarySearch(jobs, i);
         const includeCurrentJob = jobs[i][2] + (prevJobIndex !== -1 ? dp[prevJobIndex] : 0);
         const excludeCurrentJob = dp[i - 1];
         dp[i] = Math.max(includeCurrentJob, excludeCurrentJob);
     }
 
     return dp[n - 1];
 }
 
 function binarySearch(jobs: Array<[number, number, number]>, currentJobIndex: number): number {
     let low = 0;
     let high = currentJobIndex - 1;
 
     while (low <= high) {
         const mid = Math.floor((low + high) / 2);
 
         if (jobs[mid][1] <= jobs[currentJobIndex][0]) {
             if (jobs[mid + 1][1] <= jobs[currentJobIndex][0]) {
                 low = mid + 1;
             } else {
                 return mid;
             }
         } else {
             high = mid - 1;
         }
     }
 
     return -1; // No non-overlapping job found
 }
 console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]));
 interface TypeA  {
    propertyA: string;
    commonProperty: number;
  };
  
  interface TypeA  {
    propertyB: boolean;
    commonProperty: number; // Shared property with TypeA
  };
  