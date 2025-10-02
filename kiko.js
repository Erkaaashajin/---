let input = document.getElementById("mdq");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let zero = document.getElementById("bitch");
let none = document.getElementById("clear");
let functions = document.getElementById("ope");

let a = 0;

one.addEventListener("click", () => {
  let b = a * 10 + 1;
  input.textContent = b;
  a = a * 10 + 1;
});
two.addEventListener("click", () => {
  let b = a * 10 + 2;
  input.textContent = b;
  a = a * 10 + 2;
});
three.addEventListener("click", () => {
  let b = a * 10 + 3;
  input.textContent = b;
  a = a * 10 + 3;
});
four.addEventListener("click", () => {
  let b = a * 10 + 4;
  input.textContent = b;
  a = a * 10 + 4;
});
five.addEventListener("click", () => {
  let b = a * 10 + 5;
  input.textContent = b;
  a = a * 10 + 5;
});
six.addEventListener("click", () => {
  let b = a * 10 + 6;
  input.textContent = b;
  a = a * 10 + 6;
});
seven.addEventListener("click", () => {
  let b = a * 10 + 7;
  input.textContent = b;
  a = a * 10 + 7;
});
eight.addEventListener("click", () => {
  let b = a * 10 + 8;
  input.textContent = b;
  a = a * 10 + 8;
});
nine.addEventListener("click", () => {
  let b = a * 10 + 9;
  input.textContent = b;
  a = a * 10 + 9;
});
zero.addEventListener("click", () => {
  let b = a * 10 + 0;
  input.textContent = b;
  a = a * 10 + 0;
});
console.log(a);
none.addEventListener("click", () => {
  input.textContent = "";
  a = "";
});

functions.addEventListener("click", () => {
  const number1 = Number(a);
  if (a?.value === "X") {
    a = a * number1;
  }
});
