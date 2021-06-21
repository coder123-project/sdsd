var bg;
var pingu, pinguImage;
var snowman, snowmanImage
var igloo, iglooImage;
var snow = [];

function preload() {
  bg = loadImage("snow0.png");
  pinguImage = loadImage("pingu.png");
  snowmanImage = loadImage("snowman.png");
  iglooImage = loadImage("igloo.png");
}

function setup() {
  createCanvas(1000, 700);
  //createSprite(400, 200, 50, 50);
  
  snowman = createSprite(900, 490);
  snowman.addImage(snowmanImage);
  snowman.scale = 0.4;

  igloo = createSprite(750, 500);
  igloo.addImage(iglooImage);
  igloo.scale = 0.3;

  pingu = createSprite(500, 500);
  pingu.addImage(pinguImage);
  pingu.scale = 0.5;

  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }
}

function draw() {
  background(bg);
  
  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  
}