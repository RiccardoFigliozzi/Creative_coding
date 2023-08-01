let nb = 16;
let dim = 0;
let margin = 20;
let x,y ;
let f ;
let frequence = 2.5;

function setup() {
  createCanvas(500, 500);
  dim = (width-2 * margin)/nb;
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
//   fill('#db3a34');
//   noStroke();
  
  noFill();
  stroke('#f1a208');
  
  rectMode(CENTER);
  
  for (let j=0; j<nb; j++){
    
    for (let i=0; i<nb; i++){
      x = margin + dim/2+i*dim;
      y = margin + dim/2+j*dim;
      
      f = sin(frequence * frameCount + 2.5 * dist(width/2, height/2, x,y));
      circle(x, y, f*dim);
      
//       rect(margin + dim/2+i*dim, margin + dim/2+j*dim,0.6*dim, 0.2*dim);
    }
    
  }
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('01.gif', 1); // 1 sec
  }
}