"use strict";

const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// Game vars and consts
let frames = 0;

// Load sprite image
const sprite = new Image();
sprite.src = "img/sprite.png";

// Background
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,
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

// Draw
function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  bg.draw();
}

// Update
function update() {}

// Loop
function loop() {
  update();
  draw();
  frames++;

  requestAnimationFrame(loop);
}
loop();
