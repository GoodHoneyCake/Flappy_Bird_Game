const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");

function draw() {
  ctx.fillStyle = "#70c5ce";
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop();
