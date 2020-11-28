const button = document.querySelector("button");
const list = document.querySelectorAll(".hidden");
console.log(list);
button.addEventListener("click", () => {
  for (let value of list) {
    value.classList.toggle("hidden");
  }
});
