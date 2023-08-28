function add(...x) {
  //   return 10 + x;
  console.log(x);
  return x.reduce((sum, curr) => sum + curr);
}


// memoization

function addx(x) {
  return 10 + x;
}

// console.log(addx(10));
// console.log(addx(10))


const memo = (func) => {
  let cache = {};
  return function (...x) {
    // console.log(cache);
    const key = JSON.stringify(x);
    console.log(key);
    if (cache[key]) {
      //   console.log("result from cache");
      return cache[key];
    } else {
      //   console.log("calculating result");
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculate = memo(add);

// console.log(add(233, 232));
// console.log(calculate(30));
// console.log(calculate(50, 40, 30));
// console.log(calculate(40, 30));



// Higher Order Function
const higherOrderFunction = (func) => {
  return function () {

  }
}

/*
 * <-------------------------->
*/

function addxCalculate(x) {
  return 10 + x;
}


const memoizationFunction = (func) => {
  const myCache = {}
  return function (x) {
    if (myCache[x]) {
      console.log('result from myCache');
      return myCache[x]
    } else {
      console.log('calculating result')
      const result = func(x);
      myCache[x] = result;
      return result;

    }

  }
}

const calculating = memoizationFunction(addxCalculate);

// console.log(calculating(10))
// console.log(calculating(10))


function calculateAnything(x) {
  return 10 + x;
}

const memo2 = (func) => {
  let blanObj = {};
  return function (x) {
    if (blanObj[x]) {
      console.log('this result from blankObj');
      return blanObj[x];
    } else {
      console.log('this result from calculating')
      const result = func(x);
      blanObj[x] = result;
      return result;
    }
  }
}

const mainCalculate = memo2(calculateAnything);

console.log(mainCalculate(10));





