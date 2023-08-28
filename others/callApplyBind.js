let isName = {
  firstName: "jihad",
  lastName: "hossain",
};

let isName2 = {
  firstName: "esha",
  lastName: "hossain",
};

let printFullName = function (home, state, location) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      home +
      " " +
      state +
      " " +
      location
  );
};

// function borrowing
printFullName.call(isName, "Bogura", "bn");
// printFullName.call(isName2, "Rowmari", "bn");
printFullName.apply(isName2, ["Rowmari", "bn", "NN2"]);

// bind method
let printMyName = printFullName.bind(isName2, "bogura", "bn", "bbg");
// console.log(printFullName);
printMyName();
