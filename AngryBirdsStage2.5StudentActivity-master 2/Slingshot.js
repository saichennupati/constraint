class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            length:10,
            stiffness:1.2,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.sling= Constraint.create(options)
        World.add(world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.bodyB.position
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}