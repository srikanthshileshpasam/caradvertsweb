// Video element ID:
var video = document.getElementById("video");

var btn = document.getElementById("video-btn");

// Play and pause video
function playback() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
