// kod projektu [Flappy bird]

let bird;
let pipes = [];
let game_over = false;


function setup() {
let canvasX = (windowWidth - width) /4;
let canvasY = 100;
let cnv = createCanvas(800, 500);
cnv.position(canvasX, canvasY);

bird = new Bird();
pipes.push(new Pipe());
}


function draw() {
background(173,216,230);
bird.update();
bird.show();

for (var i = 0; i < pipes.length; i++) {
  pipes[i].show();
  pipes[i].update();

  if (pipes[i].hits(bird)) {
    console.log("Przegrałeś");
    game_over = true;
  }
}

if (frameCount % 60 == 0) {
  pipes.push(new Pipe());
}
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
  }
}


function keyPressed() {
  if (key == ' ');
  bird.up();
  }


function Pipe() {
  this.top = random(height)/2;
  this.bottom = random(height)/2;
  this.x = width;
  this.w = 60;
  this.speed = 8;
  strokeWeight(1);
  stroke(0);

  this.show = function() {
    fill(30, 158, 47);
    if (this.uderzenie) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top-this.bottom+10);
    rect(this.x, height-this.bottom+10, this.w, this.bottom+this.top);
  }

this.update = function() {
  this.x -= this.speed;
}
this.uderzenie = false;

this.hits = function(bird) {
  if (bird.y < this.top-this.bottom || bird.y > height - this.bottom+this.top) {
    if (bird.x > this.x && bird.x < this.x + this.w) {
      this.uderzenie = true;
      return true;
    }
  }
  this.uderzenie = false;
  return false;
}
}