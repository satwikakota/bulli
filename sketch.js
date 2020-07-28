var bullet, wall; 
var speed,weight,thickness; 
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 5, 10);
  bullet.shapeColor="white"; 
  speed=random(223,321); 
  weight=random(30,52); 
  thickness=random(22,83); 
  wall=createSprite(1200,200,thickness,height/2); 
  wall.shapeColor=(80,80,80);  
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  console.log(bullet.velocityX); 
  if(collide(bullet,wall)){
    bullet.velocityX=0; 
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness); 
    if(damage>10){
      wall.shapeColor="green"
    }
    else if(damage<10){
      wall.shapeColor="red"
    }
    collide(bullet,wall); 
  }
  drawSprites();
}
function collide(bullet,wall){
  wall.x-bullet.x < (bullet.width)/2+(wall.width)/2
  var horizontal= bullet.x + bullet.width; 
  var vertical= wall.x; 
  if(horizontal <= vertical){
      return true; 
  }
      return false; 
}
