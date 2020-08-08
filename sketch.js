function preload(){
  bgImg = loadImage("girl.jpg");
}



function setup() {
  canvas = createCanvas(1200,600);
  form = new Form();
  
}

function draw() {
  background(bgImg);
  drawSprites();
  form.display();
}