function add(...x) {
  //   return 10 + x;
  console.log(x);
  return x.reduce((sum, curr) => sum + curr);
}

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
console.log(calculate(50, 40, 30));
console.log(calculate(40, 30));
