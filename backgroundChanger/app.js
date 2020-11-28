const btn = document.querySelector("button");
const div = document.querySelector("div");
function backgroundChanger() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(1);

  div.innerText = `rgba(${r},${g},${b},${a})`;

  document.body.style.backgroundColor = `rgba(${r},${g},${b})`;
}

setInterval(backgroundChanger, 1000);
