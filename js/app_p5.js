// kod projektu [Flappy bird]

var bird;
var img;

function setup() {
  // put setup code here


// var cnv = createCanvas(800, 500, WEBGL);
// var canvasx = (windowWidth - width) / 2;
//   cnv.position(canvasx, 75);
//   cnv.parent('canvas1')
var canvasX = (windowWidth - width) /4;
var canvasY = 100;
var cnv = createCanvas(800, 500);
cnv.position(canvasX, canvasY);

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
  this.y = height/5;
  this.x = width/6;

  this.gravity = 1/5;
  this.gravitySpeed = 0;
  this.velocity = 0;

  this.show = function() {
    fill(255);
   ellipse(this.x, this.y, 32, 32);

    // texture(img);
  }
this.update = function() {
  this.gravitySpeed += this.gravity;
  this.veliocity += this.gravity;
  this.y += this.velocity + this.gravitySpeed

  if (this.y > height) {
    this.y = height;
    this.velocity = 0;
  }
}

}
