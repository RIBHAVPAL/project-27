class Rope {
    constructor (body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetX = offsetY;
         var options ={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
         }
          this.rope = Constraint.create(options);
         World.add(world,this.rope);
    
    }
      display(){
    var pointA = this.rope.body1.position;
    var pointB = this.rope.body2.position;
    strokeWeight(10);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    
    }