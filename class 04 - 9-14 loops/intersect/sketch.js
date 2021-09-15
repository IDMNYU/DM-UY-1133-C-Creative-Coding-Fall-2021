// a sketch that shows how to detect intersections
// using conditionals and basic math 
let intersect = 0; // is there an intersection or not?

function setup() {
  //make the canvas
  createCanvas(400, 400);
}

function draw() {
  // fill the background
  background(0);
  stroke(255);
  strokeWeight(5);

  // look for the cursor position
  //if the cursor is within 50 pixels of center of the sketch on the x and y axes at the same time
  if (mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50 && mouseY >= height / 2 - 50 && mouseY <= height / 2 + 50) {
    intersect = 1;
  } else {
    intersect = 0;
  }

  // change the fill color 
  if (intersect == 0) {
    fill(255, 0, 0);
  } else {
    noFill();
  }
  //draw the square
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);
}


// draw a red square with a white border in the center of the canvas, it's 100 pixels on a side
// if the cursor moves over the square, make the square invisible and leave the border. 


/*





*/