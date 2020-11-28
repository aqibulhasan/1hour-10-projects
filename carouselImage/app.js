const img = document.querySelector("img");
const lt = document.querySelector("#lt");
const gt = document.querySelector("#gt");
const span = document.querySelector("span");
let arr = [
  "https://images.unsplash.com/photo-1606154427799-2f43b8c81742?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605736427022-d39953199b7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfGJvOGpRS1RhRTBZfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1601626926386-190a379a5fa1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfGJvOGpRS1RhRTBZfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1503342669531-2557c49cde04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
];

span.innerText = arr.indexOf(img.src) + 1;

gt.addEventListener("click", function () {
  let value = arr.indexOf(img.src);

  if (value === arr.length - 1) {
    img.src = arr[0];
    span.innerText = 1;
  } else {
    img.src = arr[value + 1];
    span.innerText = value + 2;
  }
});
lt.addEventListener("click", function () {
  let value2 = arr.indexOf(img.src);

  if (value2 === 0) {
    let length = arr.length - 1;
    img.src = arr[length];
    span.innerText = length + 1;
  } else {
    img.src = arr[value2 - 1];
    console.log(value2);
    span.innerText = value2;
  }
});
