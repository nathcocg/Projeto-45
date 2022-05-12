var w1, w2, w3, w4, w5, w6, w7, w8, w9, s;
var bgImg, sImg;

function preload() {
  bgImg = loadImage("./assets/bg.png");
  sImg = loadImage("./assets/sonicdireita.png");

}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  s = createSprite(width/12, height-50);
  s.addImage("sonic", sImg);
  s.scale = 0.6;
  //fill(255);
  w1 = createSprite(width/4+50, height-85, width/4, height/35);
  w2 = createSprite(width/8*6, height-85, width/6, height/35);
  w3 = createSprite(width/2, height-220, width/2, height/35);
  w4 = createSprite(width/4*3.5, height-335, width/5, height/35);
  w5 = createSprite(width/4*1, height-335, width/5.5, height/35);
  w6 = createSprite(width/6.5*0.58, height-220, width/7, height/35);
  w7 = createSprite(width/6.5-0.5, height-285, width/70, height/7);
  w8 = createSprite(width/4*2.1, height-650, width/4*3, height/35);
  
  

}

function draw() {
  background(bgImg);


  drawSprites();
}
