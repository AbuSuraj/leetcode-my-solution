// function fibonacci(n: number): number {
//     // Base case: if n is 0 or 1, return n
//     if (n <= 1) {
//       return n;
//     }
  
//     // Recursive case: calculate the nth Fibonacci number
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  
   
  
//   function fibonacciSequence(n: number): number[] {
//     const sequence: number[] = [];
  
//     for (let i = 0; i < n; i++) {
//       sequence.push(fibonacci(i));
//     }
  
//     return sequence;
//   }
  
//   // Example usage:
//   const result = fibonacciSequence(5);
//   console.log(result);
  
function fibonacci(n: number, memo: Record<number, number> = {}): number {
    if (n <= 1) {
      return n;
    }
  
    if (memo[n]) {
      return memo[n];
    }
  
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
  
  function fibonacciSequence(n: number): number[] {
    const sequence: number[] = [];
  
    for (let i = 0; i < n; i++) {
      sequence.push(fibonacci(i));
    }
  
    return sequence;
  }
  
  // Example usage:
  const result = fibonacciSequence(5);
  console.log(result);
  