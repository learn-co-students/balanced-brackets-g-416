function isBalanced(string) {
    // start at the first element of the string 
    // start adding to the hash until you find its pair 
    if (string.length % 2 !== 0) {
        return false 
    } else {
        let stack = [];
        let openBrackets = ["(", "[", "{"];                  

        for (const bracket of string) {
            if (openBrackets.includes(bracket)) {
                stack.push(bracket)
            } else {
                let pair;

                if (bracket === ")") {
                    pair = "("
                } else if (bracket === "]" ) {
                    pair = "["
                } else if (bracket === "}" ) {
                    pair = "{"
                }

                if (stack.pop(bracket) !== pair) {
                    return false;
                }
            }
        }

        return true;
    }
}