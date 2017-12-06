var inc = 0.005;
var shapes = [];

var fillShapes = true;

function setup() {
  createCanvas(1200, 400);
  noFill();
  stroke(200);

  noiseSeed(123);
  shapes = [
    //new Shape(),
    /* 
    new Shape(random(0, 10000), 0.08, 0.8, color(210)),
    new Shape(random(0, 10000), 0.1, 0.6, color(225)),
    new Shape(random(0, 10000), 0.12, 0.4, color(240)),
    new Shape(random(0, 10000), 0.15, 0.2, color(255)),
   */
  new Shape(random(0, 10000), 0.06*2, 1.0, color(200), color(20)),  
  new Shape(random(0, 10000), 0.08*2, 0.8, color(200), color(20)),
  new Shape(random(0, 10000), 0.1*2, 0.6, color(200), color(20)),
  new Shape(random(0, 10000), 0.12*2, 0.4, color(200), color(20)),
  new Shape(random(0, 10000), 0.15*2, 0.2, color(200), color(20)),
  ];
}

function draw() {
  background(20);

  fillShapes = !mouseIsPressed;

  shapes.forEach(function(shape) {    
    shape.move();
    shape.draw(fillShapes);
  })
}

function mousePressed() {
  shapes.forEach(function() {
    fillShapes = true;
  });
}