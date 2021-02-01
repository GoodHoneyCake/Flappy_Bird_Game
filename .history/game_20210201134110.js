const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");

function draw() {}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop();
