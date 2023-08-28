// how to find even or odd number in js

function isOdd(number) {
    if (number % 2 != 0) {
        return true
    }
    return false;
}

let input = 322;
const result = isOdd(input)

console.log(input, "is an odd number", result)