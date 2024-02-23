function removeOuterParentheses(s: string): string {
    let result: string = '';
    let count: number = 0;

    for (let char of s) {
        if (char === '(') {
            if (count > 0) {
                result += char;
            }
            count++;
        } else if (char === ')') {
            count--;
            if (count > 0) {
                result += char;
            }
        }
    }

    return result;
};
console.log(removeOuterParentheses("(()())(())"))
