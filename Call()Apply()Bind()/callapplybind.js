var printPlayerNameFunction = function (obj) {
    obj.printNamefunction = function () {
        console.log(this.name)
    }
}

let rakib = {
    name: 'rakibul hasan',
    age: 23
}
let parvez = {
    name: 'Lemon',
    age: 23
}

printPlayerNameFunction(rakib);
console.log(printPlayerNameFunction(rakib))
// rakib.printNamefunction()