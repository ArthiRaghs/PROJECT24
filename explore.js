const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ground,ball;
function setup()
{
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    var options={
        isStatic:true
    }
    ground=Bodies.rectangle(400,390,800,20,options);
    World.add(world,ground);

}