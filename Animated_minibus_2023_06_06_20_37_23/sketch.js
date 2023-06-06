function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  fill(0);
  stroke('#FF00E7');
  strokeWeight(2);
  
  if (mouseIsPressed==true) {
    myPattern(mouseX,mouseY,10,random(10,42));
  }
}

function myPattern(x,y,d,amp)
{
  beginShape();
  vertex(x-d/2 + random(-amp, amp), y-d/2 + random(-amp,amp));
  vertex(x+d/2 + random(-amp,amp), y-d/2 + random(-amp,amp));
  vertex(x-d/2 + random(-amp,amp), y+d/2 + random(-amp,amp));
  vertex(x-d/2 + random(-amp,amp), y+d/2 + random(-amp,amp));
  endShape(CLOSE);
}

function keyTyped() {
  // png is much higher quality than jpg
  if(key == 's'){
    let timeStamp = year() + "-" + month() + "-" + day() + "-" + hour() + "-" + minute() + "-" + second() + "-" + nf(millis(), 3, 0);
  	save(timeStamp + 'png');
  }
}
