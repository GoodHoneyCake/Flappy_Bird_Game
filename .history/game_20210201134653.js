const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");
let frames = 0;

const sprite = new Image();
sprite.src = "img/sprite.png";

ctx.drawImage(sprite, sX, sY, sWidth, sHeight, dx, dy, dWidth, dHeight);

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function loop() {
  update();
  draw();

  frames++;
  requestAnimationFrame(loop);
}

loop();
