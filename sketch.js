const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const MouseConstranit = Matter.MouseConstraint;

var backgroundImg;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  engine = engine.create();
  engine = engine.world;
  createCanvas = (1200,400);

}

