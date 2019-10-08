var myImage;
var myCuteBall;

var balls = [];
var colors = [
  '#0fab8c',
  '#22f0df',
  '#50a6bc',
  '#2eee9f',
  '#000',
  '#fff',
];


function setup() {
  createCanvas(windowWidth, windowHeight);
 frameRate(60);

}


function Ball(_x, _y) {
  this.size = 12;
  this.x = _x;
  this.y = _y;
  this.color =  color(random(colors));
  this.speed1 = 2;
  this.speed1 = 1;
  // Methods
  var yDir = 1.2;
  var xDir = 6;

  this.move = function() {
      this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }

  this.display = function() {
    fill(this.color);
     noStroke();
    ellipse(this.x, this.y, this.size);
  }

}
function mouseDragged() {
  var ballNumber = 5;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(mouseX, mouseY, 10);
    myBall.speed1 = random(-1, 1);
    myBall.speed2 = random(-1, 1);
    balls.push(myBall);
  }
}

function draw() {

  background('#ee93ef');
   textSize(40);
   text('DRAG TO DRUG YOU', windowWidth/8, height/5);
   //inserire new ball per effetto continuo
   for (var j = 0; j < balls.length; j++) {

     balls[j].move();
     balls[j].display();

   }

}
