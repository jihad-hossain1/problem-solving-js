
/*
=================
---- Callback Hell
=================
*/
const callHell = (cus, callback) => {
    console.log(`new order commin ${cus}`);
    callback(cus)
}
const callHell1 = (cus, callback) => {
    console.log(`new order commin ${cus}`);
    callback(cus)
}
const callHell2 = (cus, callback) => {
    console.log(`new order commin ${cus}`);
    callback(cus)
}
/*---------- uncomment this---------*/

takeOrder('customer 1', (customer) => {
    processOrder(customer, (cus) => {
        callHell(cus, (cus) => {
            callHell1(cus, (cus) => {
                callHell2(cus, (cus) => {
                    console.log(`order complete ${cus}`)
                })
            })
        })
    })
});
