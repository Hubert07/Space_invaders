// kod projektu [Flappy bird]

var bird;

function setup() {
  // put setup code here
createCanvas(500, 700);
bird = new Bird();

}

function draw() {
  // put drawing code here
background(0);
bird.update();
bird.show();

  //ptak
}
function Bird() {
  this.y = width/2;
  this.x = 70;

  this.gravity = 1/7;
  this.gravitySpeed = 0;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 20, 20);
  }
this.update = function() {
  this.gravitySpeed += this.gravity;
  this.veliocity += this.gravity;
  this.y += this.velocity + this.gravitySpeed
}
}
