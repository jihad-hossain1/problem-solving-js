
// how to find a max number of object in array ?

const ary = [
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
        name: "l5",
        price: 178
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
        name: "l8f",
        price: 200
    },


]



const max = ary.reduce(function (prev, current) {
    return (prev && prev.price > current.price) ? prev : current
})
const min = ary.reduce(function (prev, current) {
    return (prev && prev.price < current.price) ? prev : current
})

const under100 = ary.filter(n => n.price < 100)

console.log(max)
console.log(min)


console.log(under100)
// console.log(min)


// console.log(under100)