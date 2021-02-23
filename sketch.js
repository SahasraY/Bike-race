var playerCount;
var allPlayers;
var game;
var player;
var form;
var gameState=0;
var bikes,bike1,bike2,bike3;

function preload(){
  B1_Image=loadImage("Images/Bike1.png")
  B2_Image=loadImage("Images/Bike2.png")
  B3_Image=loadImage("Images/Bike3.png")
  C_Image=loadImage("Images/coin.png")
  G_Image=loadImage("Images/Grass.jpg")
  R_Image=loadImage("Images/Road1.png")
  RO1_Image=loadImage("Images/rock.png")

	
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  bike1=createSprite(500,600,50,50)
  bike1.addImage(B1_Image)
  bike1.scale=0.5
  bike2=createSprite(600,600,50,50)
  bike2.addImage(B2_Image)
  bike2.scale=0.5
  bike3=createSprite(1000,600,50,50)
  bike3.addImage(B3_Image)
  bike3.scale=0.5
  bikes = [bike1, bike2, bike3];

  


}


function draw() {
  rectMode(CENTER);
 
  
  
  if(playerCount === 3){
    game.updateState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    game.spawnCoins();
  }
  if(gameState === 2){
    game.end();
  }




  drawSprites();
 
}



