const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector("#btn");
const div = document.querySelector(".container");

btn1.addEventListener("click", () => {
  div.classList.add("block");
  console.log("hello");
});
btn2.addEventListener("click", () => {
  div.classList.remove("block");
});
