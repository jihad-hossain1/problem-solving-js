// Infinity currying....

function abc(x) {
    return function (y) {
        if (y) return abc(x * y);
        return x;
    }
}

const result = abc(1)(2)(3)();

console.log(result)


function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(1)(1)(1)(1)())