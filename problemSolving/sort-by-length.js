// sorting words by length in a sentence (ascending/decending)
// input 
const str = "javaScript is a non-blocking single threted programming language"
const price = [
    { name: "apple", price: 63 },
    { name: "banana", price: 33 },
    { name: "orange", price: 43 },
    { name: "guava", price: 53 }
]
function sortWord(data) {
    const dataAsArray = data.split(" ");

    dataAsArray.sort((a, b) => {
        return a.length - b.length
    });

    return dataAsArray.join(" ");
}

function sortPrice(data) {
    const priceItem = data.map((item) => {
        return item.price
    })

    priceItem.sort((a, b) => {
        return b.length - a.length
    })
    return priceItem;
}


// console.log(sortWord(str))

console.log(sortPrice(price))