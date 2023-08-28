// you have a array of object there are so many item in duplicate . count the object how many items are duplicate here ?
// output {"mango": 3, "banana": 2, "apple": 4, "stawberry": 2}

const fruits = [
    "banana", "banana", "mango", "mango", "mango", "apple", "apple", "apple", "apple", "stawberry", "stawberry"
]

function countDuplicate(data) {
    const output = {};

    data.map(d => {
        output[d] = (output[d] || 0) + 1
    })

    return output;
}

console.log(countDuplicate(fruits))