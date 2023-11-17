type F = (x: number) => number;

function compose(functions: F[]): F { 
	return function(x) {
        let ans = x;
        for(let i = functions.length-1; i>=0;i--){
            ans = functions[i](ans)   
        }
        return ans;
    }
};


  const fn = compose([x => x + 1, x => x * x, x => 2 * x])
 console.log(fn(4)) // 9
 