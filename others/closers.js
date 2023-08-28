// var x = 10;
// var y = 12;

// function abc(a) {
//   var z = a;
//   return function () {
//     return z;
//   };
// }

// const result = abc(1000);

// console.dir(result);
var c = 10;
function x() {
  var a = 7;
  function y() {
    var b = 10;
    function r() {
      console.log(a, b, c);
    }
    b = 80;
    r();
  }
  a = 70;
  y();
}
c = 12;
x();
