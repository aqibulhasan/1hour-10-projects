const button = document.querySelector("button");
const div = document.querySelector("div");
const str = "Hello from Javascript world";
let index = 0;
function autoWriteText() {
  document.body.innerHTML += str[index];
  index++;
  if (index > str.length) {
    index = 0;
    document.body.innerHTML = "";
  }
}
 setInterval(autoWriteText, 100);
