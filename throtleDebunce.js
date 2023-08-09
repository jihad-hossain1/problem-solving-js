function theme(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = theme("orange");
document.getElementById("green").onclick = theme("green");
document.getElementById("dark").onclick = theme("#121212");
// document.querySelectorAll("dark").onclick = theme("#121212");
// document.getElementsByClassName("dark").onclick = theme("black");
document.getElementById("teal").onclick = theme("#03dac5");
