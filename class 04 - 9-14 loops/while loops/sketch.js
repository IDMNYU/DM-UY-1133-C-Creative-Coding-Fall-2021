// demo of a while loop 

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(5);

  // this variable must be declared outside the while statement
  let reps = 0; 
  while (reps < 10) { // while the variable is less than 10
  // do the following
    line(reps * 40, 0, reps * 40, height);
    reps++; // you must change the condition you're checking inside the while loop 
    console.log('in the loop');
  }
  console.log('out of the loop');
}
