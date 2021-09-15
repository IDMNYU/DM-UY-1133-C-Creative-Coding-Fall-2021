// this program allows for an arbitrary timer
// to trigger events when we want

let interval = 1000; // variable for the interval in ms
let prevTime = 0; // variable to hold the last time the interval was triggered
let strokeSize = 100; // something to draw

// an arbitrary unit of time
let lila = 0;

function setup() {
  createCanvas(400, 400);
  // set a value to init the timer
  prevTime = millis();
}

function draw() {
  background(220);
  // get the time since the sketch started
  let currentTime = millis();
	
  // if the time since the last interval is greater than
  // the value of the interval itself 
  if (currentTime - prevTime > interval) {
  	// trigger the interval processes
    console.log('time passed!');
	// decrease the stroke size
    strokeSize--;
    // increment the arbitrary time segment
    lila++;
    // update the time since the interval last happened
    prevTime = currentTime;
  } 
  
  // draw some stuff
  strokeWeight(strokeSize);
  ellipse(width / 2, height / 2, 100, 100);
  
  // write some text to the screen for diagnostics
  text('time elapsed ' + lila + " lilas", 10, 10);

}
