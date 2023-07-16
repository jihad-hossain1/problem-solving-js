const evenOdd = (num) => {
    return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`
}

var input = 3
var result = evenOdd(input)

console.log(result)