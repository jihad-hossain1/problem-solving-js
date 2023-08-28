function getCapital(capital) {
    return function (interest) {
        return (capital + interest) / 100;
    }
}

const bussiness1 = getCapital(100000);
const profit = bussiness1(15)


console.log(profit)
console.log(bussiness1)

