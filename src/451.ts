function frequencySort(s: string): string {
    const freq = new Map<string, number>();

    for(let i of s){
        if(freq.has(i)){
            freq.set(i, (freq.get(i)??0)+1);
        }
        else {
                freq.set(i,1);}
    }

const sortedFreq =[...freq.entries()].sort((a, b) => b[1] - a[1]);
console.log(sortedFreq,freq);

let ans = '';
    for(let [i, v] of sortedFreq){
        // console.log(i,v);
            ans += i.repeat(v)
    //   for(let j =0; j<v; j++){
    //     ans +=i;
    //   }
    }
    return ans;
};
console.log(frequencySort('tree'));
console.log(frequencySort('Aabb'));


// Define multiple function signatures using the same function name
function processInput(x: string): void;
function processInput(x: number): void;
function processInput(x: string | number): void {
    if (typeof x === "string") {
        // Implementation for string input
        console.log("String input:", x.toUpperCase());
    } else {
        // Implementation for number input
        console.log("Number input:", x.toFixed(2));
    }
}

// Function implementation
processInput("Hello"); // Output: "String input: HELLO"
processInput(3.14159); // Output: "Number input: 3.14"
