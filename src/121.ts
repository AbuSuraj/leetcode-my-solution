function maxProfit(prices: number[]): number {
     let max_profit = 0, buy = prices[0],sell = 1;
     while(sell<prices.length) {
        if(buy>prices[sell]){
            buy = prices[sell];
            
        }else{
            max_profit = Math.max( prices[sell]-buy,max_profit);
        }
        sell++;
     }
     return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]))