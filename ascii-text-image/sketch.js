const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let women;
function preload() {
  women = loadImage('women-remov.png');
}
function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);
  //image(women, 0, 0, width, height);
  let w = width / women.width;
  let h = height / women.height;
  women.loadPixels();
  for (let i = 0; i < women.width; i++) {
    for (let j = 0; j < women.height; j++) {
      const pixelIndex = (i + j * women.width) * 4;
      const r = women.pixels[pixelIndex + 0];
      const g = women.pixels[pixelIndex + 1];
      const b = women.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      noStroke();
      fill(255);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w);
      textAlign(CENTER, CENTER);
      //   square(i * w, j * h, w);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}
