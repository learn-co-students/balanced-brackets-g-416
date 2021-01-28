function isBalanced(string) {
    let matches = {
        '(': ')',
        '{': '}',
        '[': ']',
        ')': '(',
        '}': '{',
        ']': '['
    }
    let unmatched = []

    for (let i = 0; i<string.length; i++) {
        if (unmatched.includes(matches[string[i]])) {
            if (unmatched.slice(-1)[0] === matches[string[i]]) {
                unmatched.pop()
            }
            else {
                return false
            }
        }
        else {
            unmatched.push(string[i])
        }
    }
    if (unmatched.length !== 0) {
        return false
    }
    else {
        return true
    }
}