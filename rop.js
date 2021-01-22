class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var bA = this.rope.bodyA.position;
        var bB = this.rope.bodyB.position;
        strokeWeight(2);
        var Anchor1X=bA.x;
        var Anchor1Y=bA.y;

        var Anchor2X=bB.x+this.offsetX;
        var Anchor2Y=bB.y+this.offsetY;
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        
    }
}