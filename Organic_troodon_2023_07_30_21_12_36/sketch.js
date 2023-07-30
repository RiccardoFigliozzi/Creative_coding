let nb = 30;
let dim = 0;
let margin = 20;

function setup() {
  createCanvas(500, 500);
  dim = (width-2 * margin)/nb;
}

function draw() {
  background(0);
  
//   fill(255);
//   noStroke();
  
  noFill();
  stroke(255);
  
  rectMode(CENTER);
  
  for (let j=0; j<nb; j++){
    
    for (let i=0; i<nb; i++){
//       circle(margin + dim/2+i*dim, margin + dim/2+j*dim, dim);
      rect(margin + dim/2+i*dim, margin + dim/2+j*dim,0.6*dim, 0.2*dim);
    }
    
  }
  
}

function keyPressed(){
    save('export.png');
    background(0);
  }