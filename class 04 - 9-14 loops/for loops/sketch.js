// demo of for loops

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  strokeWeight(5);
// for loops have 3 things
// 1) a number you want to compare e.g. 'i'
// 2) the value you compare it against e.g. '10'
// 3) what to do when the statement is true e.g. 'i++'
  for (let i = 0; i < 10; i++) {
  	// when you do this, you can reuse the values to 
  	// iterate over items repeatedly
    line((i * 40) + 20, 0, (i * 40) + 20, height);
  }
}
