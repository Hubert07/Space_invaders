// kod dzialaj

let ptak;
let rury = [];
let game_over = false;
let wynik = -1;


function setup() {
    // rozmieszczenie
    let canvasX = (windowWidth - width) /4;
    let canvasY = 100;
    let cnv = createCanvas(800, 500);
    cnv.position(canvasX, canvasY);

    ptak = new Ptak();
    rury.push(new Rura());
}


function draw() {
    background(173, 216, 230);
    ptak.show();
    ptak.update();

    for (var i = 0; i < rury.length; i++) {
        rury[i].show();
        rury[i].update();

        if (rury[i].hits(ptak)) {
            noLoop();
            textSize(50);
            fill(255, 0 , 0);
            text('Przegrałeś', (width/2)-150, height/2);
            fill(0, 0 , 0);
            textSize(32);
            text('Twoj wynik to :', (width/2)-150, height/4);
            text(wynik, (width/2)+90, height/4);
            game_over = true;
            console.log("Przegrałeś");
        }
    }

    if (frameCount % 60 == 0) {
        rury.push(new Rura());
        wynik++;
    }
}


function Ptak() {
    this.y = height/5;
    this.x = 100;

    this.gravity = 0.5;
    this.velocity = 0;
    this.lift = -15;
    this.stroke = noStroke();

    this.show = function () {
        fill(96, 90, 154);
        ellipse(this.x, this.y, 32, 32);
    }

    this.update = function () {
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

    this.up = function () {
        this.velocity += this.lift;
    }
}


function keyPressed() {
    if (key == ' ');
    ptak.up();
}


function Rura() {
    this.wysokosc = random(height)/2;
    this.x = width;
    this.w = 60;
    this.speed = 8;
    strokeWeight(1);
    stroke(0);

    this.show = function () {
        fill(30, 158, 47);
        if (this.uderzenie) {
            fill(255, 0 , 0);
        }
        rect(this.x, 0, this.w, this.wysokosc);
        rect(this.x,  this.wysokosc+120, this.w, height-this.wysokosc-120);
    }

    this.update = function () {
        this.x -= this.speed;
    }
    this.uderzenie = false;

    this.hits = function (ptak) {
        if (ptak.y < this.wysokosc || ptak.y > this.wysokosc + 120) {
            if (ptak.x >= this.x && ptak.x <= this.x + this.w) {
                this.uderzenie = true;
                return true;
            }
        }
        this.uderzenie = false;
        return  false;
    }
}