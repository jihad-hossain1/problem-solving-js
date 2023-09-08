

// <------------map() polyfill------------> 

const arr = [1, 2, 3, 4, 5]
// main map method how to work  ?
const howToSquareInArryElement = arr.map(x => x * x)
console.log(howToSquareInArryElement)
// custome map method

function myPolyfillMap(array, callbackFunction) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(callbackFunction(array[i]))
    }
    return newArr;
}

function square(x) {
    return x * x
}

// const result = myPolyfillMap(arr, square)
// console.log(result)





//  <------------filter() polyfill---------->

const filterArray = [1, 2, 3, 4, 5, 10, 14, 15, 17, 23, 21]
// main filter method how to work  ?
const mainFilterMethodFindEvenNumber = filterArray.filter(x => x % 2 === 0);
console.log(mainFilterMethodFindEvenNumber)

// custome filter method 
function myPolyfillFilter(filterarray, callbackFunction) {
    let filteredArr = [];
    for (let i = 0; i < filterarray.length; i++) {
        if (callbackFunction(filterarray[i])) {
            filteredArr.push(filterarray[i]);
        }
    }
    return filteredArr;
}


function isEven(x) {
    if (x % 2 === 0) {
        return x;
    }
}

console.log(myPolyfillFilter(filterArray, isEven))


//  <------------reduce() polyfill---------->

let myArray = [2, 4, 6, 8, 9, 11, 13, 16, 18, 20]

const reduceMethod = myArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(reduceMethod);



Array.prototype.myReduce = function (callbackFunction, initialValue = null) {
    let accumlator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumlator = callbackFunction(accumlator, this[i], i, this);
    }
    return accumlator;
}

const result = myArray.myReduce((p, c) => p + c, 1);

console.log(result)

// console.log(Array.prototype)


Array.prototype.myRdc = function (cb, initial) {
    let accu = initial;

    for (let i = 0; i < this.length; i++) {
        accu = accu ? cb(accu, this[i], i, this) : this[i];
    }
    return accu;
}

const totalSum = myArray.myRdc((acc, curr, index, array) => {
    // console.log(index)
    // console.log(array)
    return acc + curr
}, 0)

console.log(totalSum)


