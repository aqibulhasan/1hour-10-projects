const sounds = ["Bugle", "Chinesegong", "Harp", "Drumroll", "Tympani"];
const div = document.querySelector("div");
for (let sound of sounds) {
  const btn = document.createElement("button");
  btn.innerText = sound;
  div.append(btn);
  btn.addEventListener("click", function () {
    stop();
    console.log(document.querySelector(`#${sound}`));
    document.querySelector(`#${sound}`).play();
  });
}
function stop() {
  for (let sound of sounds) {
    const song = document.querySelector(`#${sound}`);
    song.pause();
    song.currentTime = 0;
  }
}
