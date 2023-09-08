
// <-----------Problem (1)----------->
console.log(2 + '2'); // output: 22 ---> why output 22 expail it
console.log(2 - '2'); // output: 0 ---> why output 0 expail it

// <-----------Problem (2)----------->
// how to remove duplicate value in one line(not use map() Filter() or other system) try it javascript another system 

let nums = [1, 2, 3, 3] //output: [1,2,3]
// ans: console.log([...new Set(nums)])


// <-----------Problem (3)----------->
// how to var v = 'var' secure this variable for block scope how to not access this variable in outside of block scope ?
let func = function () {
    {
        let l = 'let';
        var v = 'var'
    }

    console.log(v);
    console.log(l)
}

func()
/**
 * solution: use function expression
 let func = function () {

    (function () {
        let l = 'let';
        var v = 'var';
    })();


    console.log(v);
    console.log(l)
}

func()

 */


// <-----------Problem (4)----------->

console.log(5 < 6 < 7); // output: true  why get true ? explain
console.log(7 > 6 > 5); // output: false  why get false ? explain

/**
 * solution: 
 
console.log(1 < 7);
console.log(1 > 5);
 */



// <-----------Problem (5)----------->
// how to prevent this profile object don't get modified how to fix this 
let profile = {
    name: 'al-amin'
}

/**
 * solution: 
 * 
Object.freeze(profile); // useing Object.freeze(object) totally update & modify of this way 


profile.age = 3;

Object.seal(profile); // useing Object.seal(object) totally update but not allow any properties adding.. 

console.log(profile)
 */


// <-----------Problem (6)----------->
// how to secure only age: key are not update . how to do that

let myProfile = {
    name: 'jihad',
    age: 26
}

/**
 * 
 * 
 Object.defineProperty(myProfile, 'age', {
    value: 26,
    writable: false
}) 

myProfile.age = 2345

 */




