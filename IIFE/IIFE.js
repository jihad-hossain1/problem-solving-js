// IIFE ===> Immediate Invoked Function Expression 
(function (i) {
    return i + 1
})(arguments);

!function (i) {
    return i + 1;
}(arguments);

(function (i) {
    return i + 1
}(arguments))



// practicle example
var counter = (function () {
    var i = 0;
    return {
        get: function () {
            return i;
        },
        set: function (value) {
            i = value
        },
        increment: function () {
            i++;
        }
    }
})();


console.log(counter.get()); //0
counter.set(5) // 5
counter.increment();

console.log(counter.get()); //0

//another example
const data = (async () => await fetch())();

const placeholderData = (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await res.json();

    return result
})();

// another example :
// bank er atm mechine a taka withdraw korle balance dekha jabe otherwise dekha jabe na ... 
const atm = function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amount) {
        if (amount > balance) {
            return "sorry you can't able to withdraw";
        } else {
            balance -= amount;
            return balance;
        }

    }
    return { withdraw };
}

const result = atm(1000);
console.log(result.withdraw(200))