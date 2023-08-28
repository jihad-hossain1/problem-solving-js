function normalFuknction(a, b, c) {
    return a * b * c;
}

// console.log(normalFuknction(2, 3, 4))

const curringFunction = (a) => {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
// console.log(curringFunction(2)(3)(4))

// const curryFn = curringFunction(2);

// const curryFn2 = curryFn(3);
// const curryFn3 = curryFn2(4);

// console.dir(curryFn3)

const userObj = {
    name: 'sorif',
    age: 23
}

function userInfo(obj) {
    return function (userInfoRec) {
        return obj[userInfoRec]
    }
}

const result = userInfo(userObj);
console.log(result('age'))

