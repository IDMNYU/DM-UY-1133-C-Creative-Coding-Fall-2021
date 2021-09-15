// demo of for loops nested inside of each other

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  strokeWeight(5);
	// loop one 
  for (let i = 0; i < 10; i++) {
  	// loop two
    for (let j = 0; j < 10; j++) {
    	// draw the points with diff'rent strokes
      stroke(i * 25);
      point((i * 40) + 20, (j * 40) + 20);
    }
  }

}
