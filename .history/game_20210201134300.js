const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");
let frames = 0;

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
