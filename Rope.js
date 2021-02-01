class Rope{
  constructor(bodyA,bodyB){
  var options={
   bodyA : bird.body,
   bodyB : log6.body,
   stiffness : 0.1,
   length : 10
  } 
  this.body=Constraint.create(options);
  World.add(world,this.body)
  }  

  display(){
  var pointA=this.body.bodyA.position;
  var pointB=this.body.bodyB.position;
  stroke ("blue");
  strokeWeight (3);
    line (pointA.x,pointA.y,pointB.x,pointB.y);
  }
}
