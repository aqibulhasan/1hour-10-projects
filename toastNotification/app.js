const button = document.querySelector("button");
const div = document.querySelector("div");
button.addEventListener("click", function () {
  const notification = document.createElement("p");
  notification.innerText = "Thanks for click!";
  notification.classList.add("notification");
  div.append(notification);

  setTimeout(function () {
    notification.remove();
  }, 2000);
});
