var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var particles = [];
var flowField;
var fr;

function setup() {
  createCanvas(1000, 550);
  fr = createP('');
  background(255);
  rows = floor(height / scl);
  cols = floor(width / scl);
  for (let i = 0; i < 1000; i++) {
    particles[i] = new particle();
  }
  flowField = new Array(cols * rows);
}

function draw() {
  // background(255);
  var yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      // stroke(0, 50);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
    zoff += 0.0003;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(frameRate());
  // console.log(frameRate());
}
