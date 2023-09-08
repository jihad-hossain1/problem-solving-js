let name = {
  firstName: "Jihad",
  lastName: "hossain",
};

let printName = function (home) {
  console.log(this.firstName + " " + this.lastName + " " + home);
};

let printMyName = printName.bind(name);
printMyName("bd");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name);
printMyName2();


// another example

const myName = {
  Firstname: 'al',
  Lastname: 'amin'
}

const printFullName = function () {
  console.log(this.Firstname + " " + this.Lastname)
}

const getFullName = printFullName.bind(myName);

// console.log(getFullName)



Function.prototype.myBind = function (name) {
  let obj = this;
  return function (...args) {
    obj.call(name, ...args)
  }
}

const getFullName2 = printFullName.myBind(myName)
getFullName2('banglaesh', 'from')