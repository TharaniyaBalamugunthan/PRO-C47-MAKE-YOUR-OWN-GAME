var backgroundImg; 
var blueFireBallsImg;
var greenGhostImg,purpleGhostImg;
var backgroundSound;
var greenGhost,purpleGhost,blueFireBalls;
var database,playerCount;
var Ghost, player,game,form;
var gameState = 0;
var allPlayers;


function preload(){
  backgroundImg = loadImage("Background Img.jpg");
  blueFireBallsImg = loadImage("Blue FireBalls.png");
  greenGhostImg = loadImage("Green Ghost.png");
  purpleGhostImg = loadImage("Purple Ghost.png");
  backgroundSound = loadSound("Background Sound.mp3")

}

function setup() {
  database = firebase.database();
  createCanvas(1920,920);
  blueFireBallsGroup = new Group();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 background(backgroundImg);

 if(playerCount===2){
   game.update(1);
 }
 if(gameState === 1){
   clear();
   game.play();
 }


  


}