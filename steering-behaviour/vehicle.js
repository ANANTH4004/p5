
function Vehicle(x,y){
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 4;
    this.maxSpeed = 19;
    this.maxForce = 0.9;
}

Vehicle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}

Vehicle.prototype.show = function(){
      stroke(random(255), random(255), random(255));
      strokeWeight(4);
      point(this.pos.x, this.pos.y);
}

Vehicle.prototype.behaviours = function(){
    // var seek = this.seek(this.target);
    // this.applyForce(seek);
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
    arrive.mult(1);
    flee.mult(5)
    this.applyForce(arrive);
    this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(force){
    this.acc.add(force);
}

Vehicle.prototype.flee = function(target){
    var desired = p5.Vector.sub(target,this.pos);
    let d = desired.mag();
    if(d < 100){
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce)
    return steer;
    }else{
        return createVector(0,0);
    }
}


Vehicle.prototype.arrive = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var dis = desired.mag();
  var speed = this.maxSpeed;
  if(dis < 100){
    speed = map(dis,0,100,0 , this.maxSpeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};