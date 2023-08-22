
// setTimeout(function () {
//     console.log('timer')
// }, 4000)

// function x(y) {
//     console.log('x are call')
//     y()
// }

// x(function y() {
//     console.log('y are call')
// })
let count = 0;
document.getElementById('clickme').addEventListener('click', function xyz() {
    console.log('button click', ++count)
})