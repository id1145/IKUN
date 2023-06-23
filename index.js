// a display=none button
function go() {
  let x = document.getElementById("part");
  let f = document.getElementById("mp3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  //a music off&on button
  if (f.paused) {
    f.play();
  }
}
