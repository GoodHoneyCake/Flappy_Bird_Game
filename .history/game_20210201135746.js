"use strict";

const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// Game vars and consts
let frames = 0;

// Draw
function draw() {}

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
