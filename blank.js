

// let counter = 0;
// 6

// function serchFn() {

//     let x = document.getElementById("search").value;
//     document.getElementById("result").innerHTML = x;
// }

// function throtle(callback, delay) {

//     return function (...args) {
//         document.getElementById('btn').disabled = true
//         setTimeout(() => {
//             callback()
//         }, delay);
//     }
// }

// function debounce(callback, delay) {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         setTimeout(() => {
//             callback()
//         }, delay);
//     }
// }


// const btrFn = debounce(serchFn, 2000)

// const btrFn2 = throtle(() => {
//     document.getElementById('btn').disabled = false
//     console.log('user clicked!')
// }, 3000)



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