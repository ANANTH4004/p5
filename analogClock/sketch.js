function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(230);
  translate(250, 250);
  rotate(-90);
  let hr = hour();
  let min = minute();
  let sec = second();

  //circle w==h
  //   strokeWeight(8);
  //   stroke(0);
  //   noFill();
  //   ellipse(200, 200, 300, 300);

  //arc function
  strokeWeight(8);
  noFill();
  fill(200);
  stroke(224, 123, 57);
  let secondsAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsAngle);

  strokeWeight(8);
  noFill();
  stroke(30, 129, 176);
  let minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  strokeWeight(8);
  noFill();
  stroke(43, 138, 59);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondsAngle);
  stroke(224, 123, 57);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(30, 129, 176);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(43, 138, 59);
  line(0, 0, 50, 0);
  pop();

  stroke(0);
  point(0, 0);
}
