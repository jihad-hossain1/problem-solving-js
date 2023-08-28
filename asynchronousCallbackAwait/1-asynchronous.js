/*
=================
----Asynchronous
===============
*/
function check(basic) {
    if (basic == 0) {
        return basic;
    }
}
const firstProcessOrder = (customer) => {
    console.log(`processing order for customer 1`);
    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
firstProcessOrder();
console.log(`completed order for customer 1`);


/*----------Separate Order---------*/
const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer)
    }, 3000);
}

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}
/*---------- uncomment this---------*/

// takeOrder('customer 1', (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer)
//     })
// });


// console.log('hello')