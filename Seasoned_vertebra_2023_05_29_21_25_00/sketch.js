var c;
function setup() {
  c=createCanvas(1080, 720);
  background('#f7ede2');
}

function draw() {
  
  fill('#f7ede2');
  stroke('#d90429');
  strokeWeight(2)
  
if (mouseIsPressed == true) {
  circle(mouseX,mouseY, 25);
}
  
}

function keyPressed(){
  save('myCanvas.jpg');
  background('#f7ede2');
}
