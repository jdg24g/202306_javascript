console.log("page loaded...");
function over(element) {
  element.play();
  console.log("play");
}
function out(element) {
  console.log("pause");
  element.pause();
}
function quitaronmouse() {
  var video = document.getElementById("myVideo");
  if (video) {
    video.removeAttribute("onmouseover");
    video.removeAttribute("onmouseout");
    video.muted = false;
  }
}
