// kod projektu [Flappy bird]

var bird;
var img;

function setup() {
  // put setup code here
var cnv = createCanvas(800, 500, WEBGL);
var x = (windowWidth - width) / 2;
  cnv.position(x, 75);
  cnv.parent('canvas1')

bird = new Bird();

img = loadImage("img/ptak.png");
}

function draw() {
  // put drawing code here
background(0);
bird.update();
bird.show();

  //ptak
}
function Bird() {
  this.y = 150;
  this.x = (width) - 650;

  this.gravity = 1/9;
  this.gravitySpeed = 0;
  this.velocity = 0;

  this.show = function() {
    texture(img);
  }
this.update = function() {
  this.gravitySpeed += this.gravity;
  this.veliocity += this.gravity;
  this.y += this.velocity + this.gravitySpeed
}
}
