function isWinner(player1: number[], player2: number[]): number {
    let player1Score = 0;
    let player2Score = 0;
    for (let i = 0; i < player1.length; i++) {
       
            if((player1[i-1]) === 10 || player1[i-2] === 10){
                player1Score += (player1[i])*2;
                
            }
            else {
                player1Score += player1[i];
            }
            if((player2[i-1]) === 10 || player2[i-2]===10){
                player2Score += (player2[i])*2;
                
            }
             
             else { player2Score += player2[i];}

    }
    if(player1Score > player2Score) return 1
    else if(player1Score < player2Score) return 2
    else return 0;
     
};

console.log(isWinner([4,10,7,9], [6,5,2,3]))