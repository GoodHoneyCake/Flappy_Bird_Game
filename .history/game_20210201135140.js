"use strict";
// 1
const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");
let frames = 0;

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  name.draw();
}

function loop() {
  update();
  draw();

  frames++;
  requestAnimationFrame(loop);
}

loop();

// 2
const sprite = new Image();
sprite.src = "img/sprite.png";

ctx.drawImage(sprite, sX, sY, sWidth, sHeight, dx, dy, dWidth, dHeight);

// 3
const name = {
  sX: 276,
  sY: 112,
  w: 34,
  h: 26,
  x: 0,
  y: 0,
  draw: function () {
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h
    );
  },
};
