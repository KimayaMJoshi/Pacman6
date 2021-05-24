var pacman,pacmanImage,pacmanUpImage,pacmanDownImage,pacmanLeftImage;
var wordGroup,mazeGroup,ghostGroup;
var edges;
const END = 1
const PLAY = 0
var quarantineImage
var gameState = PLAY
var pinkGhost,pinkGhostImage;
var barrier1,barrier2,barrier3,barrier4,barrier5,barrier6,barrier7,barrier8,barrier9,barrier10;
function preload(){
  pacmanImage =  loadAnimation("images/pacman1.png","images/pacman2.png");
  pacmanDownImage = loadAnimation("images/pacman3.png","images/pacmandown1.png");
  pacmanUpImage = loadAnimation("images/pacmanup1.png","images/pacmanup2.png");
  pinkGhostImage = loadImage("images/corona2.png");
  quarantineImage = loadImage("images/quarantine.png")
  pacmanLeftImage = loadAnimation("images/pacmanleft1.png","images/pacmanleft2.png");
}
function setup(){
    createCanvas(600,400);

    pacman = createSprite(200,200,40,40);
    pacman.addAnimation("pacmanImage",pacmanImage);
    pacman.scale = 0.4;
    createGhosts();
    createBarriers();
    
    createMaze();
  
}
function draw(){
    background("black");
    if(gameState === PLAY){

    
    text(mouseX+","+mouseY,mouseX,mouseY);
    pacman.bounceOff(wordGroup);
    pacman.bounceOff(mazeGroup); 
    pinkGhost.bounceOff(mazeGroup); 
    pinkGhost.bounceOff(wordGroup);
    edges = createEdgeSprites();
    pacman.bounceOff(edges);
    pinkGhost.bounceOff(edges);
    if(ghostGroup.isTouching(pacman)){
      gameState = END
    }}
    else if(gameState === END){
     // pacman.destroy();
      pacman.addImage("quarantineImage",quarantineImage)
      pacman.changeImage("quarantineImage",quarantineImage)
      pacman.scale = 2.0;
      pacman.velocityX = 0;
      pacman.velocityY = 0;
      ghostGroup.setVelocityXEach(0);
      ghostGroup.setVelocityYEach(0);
      wordGroup.destroyEach();
    }
    drawSprites();
    
}
function createBarriers(){
  wordGroup = new Group();
  
  wordGroup.add(createSprite(12,167,10,40));
  wordGroup.add(createSprite(35,143,50,10));
  wordGroup.add(createSprite(35,186,50,10));
  wordGroup.add(createSprite(54,205,10,40));
  wordGroup.add(createSprite(35,230,50,10));
  wordGroup.add(createSprite(105,143,50,10));
  wordGroup.add(createSprite(105,190,10,100));
  wordGroup.add(createSprite(180,142,50,10));
  wordGroup.add(createSprite(160,190,10,100));
  wordGroup.add(createSprite(180,190,50,10));
  wordGroup.add(createSprite(205,190,10,100));
  wordGroup.add(createSprite(260,190,50,10));
  wordGroup.add(createSprite(240,160,10,50));
  wordGroup.add(createSprite(280,160,10,50));
  wordGroup.add(createSprite(260,220,10,50));
  wordGroup.add(createSprite(330,190,50,10));
  wordGroup.add(createSprite(310,160,10,50));
  wordGroup.add(createSprite(330,140,50,10));
  wordGroup.add(createSprite(350,210,10,50));
  wordGroup.add(createSprite(330,235,50,10));
  wordGroup.add(createSprite(380,195,10,100));
  wordGroup.add(createSprite(400,140,50,10));
  wordGroup.add(createSprite(400,190,50,10));
  wordGroup.add(createSprite(425,195,10,100));
  wordGroup.add(createSprite(455,195,10,100));
  wordGroup.add(createSprite(475,190,50,10));
  wordGroup.add(createSprite(475,140,50,10));
  wordGroup.add(createSprite(520,195,10,100));
  wordGroup.add(createSprite(540,140,50,10));
  wordGroup.add(createSprite(540,190,50,10));
  wordGroup.add(createSprite(540,239,50,10));
  wordGroup.setColorEach(rgb(57,255,20));
 // barrier3 = createSprite(130,258,70,10);
}
function keyPressed(){
  //left arrow = 37, right  39, up = 38, down = 40
  if(keyCode === 37){
    pacman.velocityX = -3;
    pacman.velocityY = 0;
    pacman.addAnimation("pacmanLeftImage",pacmanLeftImage);
    pacman.changeAnimation("pacmanLeftImage",pacmanLeftImage);
  }
  if(keyCode === 39){
    pacman.velocityX = 3;
    pacman.velocityY = 0;
    pacman.addAnimation("pacmanImage",pacmanImage);
    pacman.changeAnimation("pacmanImage",pacmanImage);
  }
  if(keyCode === 38){
    pacman.velocityY = -3;
    pacman.velocityX = 0;
    pacman.addAnimation("pacmanUpImage",pacmanUpImage);
    pacman.changeAnimation("pacmanUpImage",pacmanUpImage);
  }
  if(keyCode === 40){
    pacman.velocityY = 1;
    pacman.velocityX = 0;
    pacman.addAnimation("pacmanDownImage",pacmanDownImage);
    pacman.changeAnimation("pacmanDownImage",pacmanDownImage);
  }

}
function createMaze(){
  mazeGroup = new Group();
  mazeGroup.add(createSprite(random(10,500),random(270,390),80,10));
}
function createGhosts(){
  ghostGroup = new Group();
  pinkGhost = createSprite(300,300,10,10);
  pinkGhost.scale = 0.6;
  pinkGhost.velocityX = 1;
  pinkGhost.velocityY = 1;
  pinkGhost.addImage("pinkGhostImage",pinkGhostImage);
  ghostGroup.add(pinkGhost);

}