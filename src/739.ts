function dailyTemperatures(temperatures: number[]): number[] {
    const countArray: number[] = [];
    let count = 0;
    const len = temperatures.length;
    for(let i =0; i<len;i++){
        count =0
        for(let j= i+1; j<=len; j++){
            if(temperatures[i]<temperatures[j]){
                count++;
                countArray.push(count);
                count = 0;
                break;
            } else if(temperatures[i]>=temperatures[j]){
                count++;
            } else{
                count = 0;
                countArray.push(count);
            }
        }
       
    }
    return countArray;
};

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));
// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
