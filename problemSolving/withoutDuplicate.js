// you have many duplicate object in array.So, how to get a without duplicate object of array
const ary = [
    {
        name: "a",
        price: 38
    },
    {
        name: "a",
        price: 38
    },
    {
        name: "a",
        price: 38
    },
    {
        name: "b",
        price: 34
    },
    {
        name: "g",
        price: 66
    },
    {
        name: "r",
        price: 77
    },
    {
        name: "l54",
        price: 100
    },

    {
        name: "l3",
        price: 122
    },
    {
        name: "l3",
        price: 122
    },
    {
        name: "l3",
        price: 122
    },

    {
        name: "l5",
        price: 178
    },

    {
        name: "l54",
        price: 133
    },
    {
        name: "l54",
        price: 133
    },
    {
        name: "l54",
        price: 133
    },

    {
        name: "l55",
        price: 153
    },

    {
        name: "l5g",
        price: 153
    },
    {
        name: "l5g",
        price: 153
    },
    {
        name: "l5g",
        price: 153
    },

    {
        name: "l8f",
        price: 200
    },


]

const numberOfArry = [1, 2, 3, 3, 2]

const filteredOfNumberArray = numberOfArry.filter((n, index) => includes(n, index + 1))

console.log(filteredOfNumberArray)

const prices = ary.map((p) => p.price)

const filtredArray = ary.filter(({ name, price }, index) => !prices.includes(price, index + 1))



console.log(`filtered array length ${filtredArray.length}`, filtredArray)

console.log(`main array length ${ary.length}`)


// remove duplicate element by set()
function hasDuplicates(array) {
    // create a set to store unique values
    const uniqueValues = new Set();

    // loop through the array
    for (let i = 0; i < array.length; i++) {
        // if the value is not in the set, add it
        if (!uniqueValues.has(array[i])) {
            uniqueValues.add(array[i]);
        } else {
            // if the value is already in the set, return true
            return true;
        }
    }
}

// remove duplicate element by filter()
let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// remove duplicate element by reduce()

function removeDuplicates(arr) {
    let unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}