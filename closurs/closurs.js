function add2() {
    let counter = 0;
    function plus() {
        counter += 1;
    }
    plus();
    return counter;
}
const abc = 10;

function temporary() {
    let counter = 0;
    const counter2 = 1;
    const arrowFn = () => {
        console.log(abc);
    }
    return function () {
        counter += 1;
        // console.log(abc)
        // console.log(counter2)
        // arrowFn()

    }
}
// function temporary2() {
//     let counter = 0;

//     return function () {
//         counter -= 1;
//     }
// }

const add = temporary(); // add is a function at the end
// const add2 = temporary2(); // add is a function at the end
// console.log(temporary())
// console.dir(add);
// add(); // 1
// console.dir(add);
// add(); // 2
// console.dir(add);
// add(); // 3


// const increment = document.getElementById('increment').addEventListener('click', function () {
//     add()
// })
// console.log(increment)
// document.getElementById('decrement').addEventListener('click', function () {
//     add2()
// })


const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime()
        if (now - last < delay) {
            return console.log('wait 5 sec')
        }
        last = now;
        return fn(...args)
    }
}

// document.getElementById('increment').addEventListener('click', throttle((e) => {
//     console.log('you click me')
// }, 5000))


function normalFuknction(a, b, c) {
    return a * b * c;
}

console.log(normalFuknction(2, 3, 4))

const curringFunction = (a) => {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

// const curryFn = curringFunction(2);

// const curryFn2 = curryFn(3);
// const curryFn3 = curryFn2(4);

console.log(curringFunction(2)(3)(4))
// console.dir(curryFn3)
