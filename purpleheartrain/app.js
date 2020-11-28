function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.innerText = "💜";
  document.body.append(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 100);
