var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var music;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	music = loadSound("lighthearted_bonus_objective_4.mp3");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15;
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  boxBase.debug = true;
  boxleftSprite.debug = true;
  packageSprite.collide(boxBase);

   packageSprite.x = helicopterSprite.x;	
  if(keyDown("Space")){
	packageSprite.velocityY = 3;
	
}
if(packageSprite.y>200){
	if(keyDown("D"))
	{
    helicopterSprite.x=helicopterSprite.x-5;}
	if(keyDown("A"))
	{helicopterSprite.x=helicopterSprite.x+5;
	}
}

  keyPressed()
  drawSprites();
}

function keyPressed() {

	if(keyDown("D"))
	{
		helicopterSprite.x=helicopterSprite.x+5;}
	if(keyDown("A"))
	{
		helicopterSprite.x=helicopterSprite.x-5;}
		
	} 
  

	