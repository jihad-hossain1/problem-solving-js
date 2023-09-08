// browser are support are not support ?
console.log(Function.bind);
// if result will undefined so your browser are not support this default function . if show result function then assume that your browser are support this function


const myName = {
    fname: 'abc',
    lname: 'xyz'
}

const fullName = function () {
    console.log(this.lname + " " + lname);

}


if (Function.bind === undefined) {

    Function.prototype.myBind = function (name) {
        let obj = this;
        return function (...args) {
            obj.call(name, ...args)
        }
    }

    const getFullName2 = printFullName.myBind(myName)
    getFullName2('banglaesh', 'from')
} else {
    const getFullName = printFullName.bind(myName);

    console.log(getFullName())
}