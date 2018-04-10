// kod projektu [Flappy bird]

var bird;
// var img;
var pipes = [];

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

pipes.push(new Pipe());

// img = loadImage("img/ptak.png");
}

function draw() {
  // put drawing code here
background(173,216,230);
bird.update();
bird.show();

for (var i = 0; i < pipes.length; i++) {
  pipes[i].show();
  pipes[i].update();
}

if (frameCount % 70 == 0) {
  pipes.push(new Pipe());
}

  //ptak
}
function Bird() {
  this.y = height/5;
  this.x = 100;

  this.gravity = 0.5;
  this.lift = -15;
  this.velocity = 0;
  this.stroke = noStroke();


  this.show = function() {
    fill(96, 90, 154);
   ellipse(this.x, this.y, 32, 32);


    // texture(img);
  }



this.update = function() {
  this.velocity += this.gravity;
  this.velocity *= 0.98;
  this.y += this.velocity;

  if (this.y > height) {
    this.y = height;
    this.velocity = 0;
  }

  if (this.y < 0) {
    this.y = 0;
    this.velocity = 0;
  }
}



this.up = function() {
  this.velocity += this.lift;
  // println(this.velocity);
  }

}

function keyPressed() {
  if (key == ' ');
  bird.up();
    // console.log("spacja");
  }

function Pipe() {
  this.top = random(height)/2;
  this.bottom = random(height)/2;
  this.x = width;
  this.w = 60;
  this.speed = 4;
  strokeWeight(1);
  stroke(0);

  this.show = function() {
    fill(30, 158, 47);
    rect(this.x, 0, this.w, this.top-this.bottom);
    rect(this.x, height-this.bottom, this.w, this.bottom+this.top);
  }

this.update = function() {
  this.x -= this.speed;
}


}
