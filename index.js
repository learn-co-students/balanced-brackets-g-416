function isBalanced(str) {
    let unmatched = []
    let counterpart = {
        "[": "]",
        "]": "[",
        "(": ")",
        ")": "(",
        "{": "}",
        "}": "{"
    }
    const stringAsAnArray = str.split("")
    /*
    let histogram = {
        "[" : 0,
        "]" : 0,
        "(" : 0,
        ")" : 0,
        "{" : 0,
        "}" : 0
    }
    */ 
    for (const sym of stringAsAnArray) {
        //histogram[sym] += 1 

        if (unmatched.includes(counterpart[sym])) {
            if (unmatched.slice(-1)[0] === counterpart[sym]) {
                unmatched.pop()
            } else {
                return false 
            }
        } else {
            unmatched.push(sym)
        }
    }

    if (unmatched.length !== 0) {
        return false 
    } else {
        return true 
    }
}

//'([])[{}]{([)]}' false 

//([])[{}] {(())} true 

//lh: ( [ [ {  { ( ( rh: ] ) } ] ) ) }
// unmatched pair 