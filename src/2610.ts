function findMatrix(nums: number[]): number[][] {
    const freq = new Array(nums.length + 1).fill(0);
        const ans: number[][] = [];
    //  console.log(freq);
      let i=0;
        for (const c of nums) {
            if (freq[c] >= ans.length) {
                ans.push([]);
                // console.log('ans=',  ans);
            }
            ans[freq[c]].push(c);
            freq[c]++;
        }
    
        return ans;
    };
    console.log(findMatrix([1,3,4,1,2,3,1]));
    