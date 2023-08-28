

/**
 *  Interview Prepartion
*/

// callstack


// {
//     var y = 'local scope';
//     var abc = 'local scope';
// }

// console.log(` after execude Temporal" ${notDeadZoneHere} "`);

// var x = "new world";

// function getName() {
//     let z = 'abc';
//     const localMermory = (a) => {
//         return a + a;
//     }
//     function toUp() {
//         localMermory(x);
//         console.log("hello world", z);
//     }
//     return toUp();
// }

// // var getName2 = () => {
// //     console.log("hello world arrow");
// // };
// // getName();

// getName();
// // getName2();
// console.log(x, 'x log here');
// // console.log(getName(), 'getName function in console')

// console.log(` before execude Temporal" ${notDeadZoneHere} "`);

// console.log(`before execude Temporal " ${temporalDeadZone} "`);
// console.log(`before execude Temporal " ${temporalDeadZone2} "`);


// // const notDeadZoneHere = 'its not dead zone available'
// let temporalDeadZone = 'its an Temporal dead zone available';
// const temporalDeadZone2 = 'its an Temporal dead zone available';

// console.log(`after execude Temporal " ${temporalDeadZone} "`);


// SyntaxError
// const a
// const a = 'alsdk';

// let b = 10;
// var b = 12;

// console.log(b)
// console.log(a)


// TypeError
// const nn2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iustquidem pariatur non illum,jihad veritatis minima ? Id aspernatur excepturi magn";

// // nn2 = 'aslkj';

// const stringLength = nn2.split('').length;

// const stringValueFind = nn2.match(/jihad/ig)

// const result = stringValueFind ? stringValueFind : 'not found!'

// console.log(stringLength)
// console.log(result)

// ReferenceError


// let a = {
//     name: 'Rohim',
//     age: 23,
//     a: function () {
//         console.log(this.name, this.age)
//     },
//     b: function (name, age) {
//         let age = this.age;
//         const rafiNameChange = name();
//         return { rafiAge, rafiNameChange }
//     }

// }
// const arrFunc = () => {
//     let name = "shakil ahmed"
//     return name;
// }
// console.log(a.b(arrFunc, 'shakil'))

// // console.log(a)

// // let a = 10



// closure
function getCapital(capital) {
    return function (interest) {
        return (capital * interest) / 100;
    }
}

const bussiness1 = getCapital(100000);

// console.log(bussiness1)
// console.log(bussiness1(26))

// function statement & declaration

// those are the same thing

// example


function abc() {
    console.log('statement');
}
// abc()
// function expression

var xyz = function () {
    console.log('expression')
}
// abc();
// xyz();


// xyz();

// anonymous function

const functionExpression = function () {
    console.log('anonymous')
}

// named function Expression

const namedFunctionExpression = function xyl() {
    console.log('<--namedFunctionExpression-->\n', xyl)
    // return xyl; 
}

// namedFunctionExpression()

// first class function


var firstClassFunction = function (parameter) {
    console.log(parameter)
}

function xyr() {

}

// firstClassFunction(xyr)

// callback function

const calculate = (a, b, funcParameter) => {
    return funcParameter(a, b);
}

function xyx(a, b) {
    return a + b;
}
function xxy(a, b) {
    return a - b;
}
const addition = calculate(2, 2, xyx);
const substruction = calculate(2, 2, xxy);

// const myname = 'jihad'
// // console.log(substruction);

// let tooken = 'alkjaslkdfjljasldkfjjk'

// let resultf = tooken.split('')

// const setCookies = localStorage.setItem('some-value', resultf);

// const getStorage = document.getElementById('localStr').innerHTML
// const result = localStorage.getItem('some-value');
// console.log(getStorage)


function myFunc(fn, delay) {

}