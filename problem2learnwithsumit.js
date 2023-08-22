//Problem:-1  object থেকে falsy value কিভাবে খুজে বের বাদ দিতে পারি ?
const objs = {
    a: 'lws',
    b: undefined,
    c: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
}

const truthyObj = function (obj) {
    for (let i in obj) {
        // console.log(i)
        if (!obj[i]) {
            delete obj[i]
        }
    }
    return obj
}

// console.log(truthyObj(objs))

//Problem:-2  array থেকে falsy value কিভাবে খুজে বের বাদ দিতে পারি ?

const array = ['lws',
    undefined,
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
]

const truArray = array.filter(function (el) {
    // console.log(el)
    if (el) {
        return true;
    } else {
        return false;
    }
})

// console.log(truArray)
const truArrayBoolen = array.filter(Boolean)
// console.log(truArrayBoolen)



//Problem:-3 1-100 থেকে কোন সংখ্যা গুলো 3,5 এবং 3 ও 5 উভয় সংখ্যা দ্বারা বিভাজ্য বের করুন

function fakiBuddy(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is fakiBuddy`)
        } else if (i % 3 === 0) {
            console.log(`${i} is faki`)
        } else if (i % 5 === 0) {
            console.log(`${i} is buddy`)
        } else {
            console.log(`${i} not in modulus`)
        }
    }
}

// fakiBuddy(100)



//Problem:-4 কোনো Array থেকে কিভাবে সব থেকে বড় string খুজে বের করবেন এবং index নাম্বার দেখবেন

const longArr = ['better live', 'work hard for make money', 'sacrifice', 'no west time', 'etc']

function longesString(namesOfArray) {
    let longestWord = '';
    for (n of namesOfArray) {
        if (n.length > longestWord.length) {
            longestWord = n;
        }
    }
    return [longestWord, namesOfArray.indexOf(longestWord)]
}

// console.log(longesString(longArr))



//Problem:-5
// input: linearSearch(['a','b', 'c','d','c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function টি implement করে দেখান

const lnSearch = ['a', 'b', 'c', 'd', 'c', 'z', 'f', 'f', 'a']

function linearSearch(arr, val) {
    const lengthOfArray = arr.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (i == val) {
            return i
        }
    }
    return 'not found!';
}

console.log(linearSearch(lnSearch, 'f'))





































// out of problem 
const indexMe = {
    0: 1, 1: 1, 2: 2
}
const digit = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ',
    'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ', ' ং', ' ঃ', ' ঁ']
const eDigit = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const result = eDigit.map((d, index) => d)

// console.log(result)
