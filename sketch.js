

//oi, o código está correto, pois, está igual às instruções.
//mas, por algum motivo ele decidiu não funcionar e, quando tento abrir, ele fala que tem um erro na linha 29
// eu não achei o erro (acho que é meu computador dando erro, porque isso já aconteceu em outras ocasiões)


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);


  var options = {
    isStatic: true
  }

  playerBase = Bodies.rectancle(200,350,180,150, options);
  World.add(world, playerBase);

  player = Bodies.rectancle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player)




}

function draw() {
  background(backgroundImg);

  Engine.update( engine);
  image(baseimage,playerBase.position.x, playerBase.position.y, 180, 150)
  image(playerimage, player.position.x, player.position.y, 50, 180)




  Engine.update(engine);


  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
