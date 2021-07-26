const removeDuplicates = (string) => {
    // Store the string without
    // duplicate elements
    let stack = []

    for (let i = 0; i < string.length; i ++ ) {
        // If stack is empty
    if(string[i] === stack[stack.length -1]) {
        stack.pop()
    }else {
        stack.push(string[i])
        }
    }
    return stack.join("");
}
export default removeDuplicates;