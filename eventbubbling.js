document.querySelector("#grantParent").addEventListener(
  "click",
  () => {
    console.log("Grandparent click");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent click");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child click");
  },
  false
);
