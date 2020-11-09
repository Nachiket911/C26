class Slingshot {

    constructor(body1,body2){

        var options = {

            bodyA: body1,
            bodyB: body2,
            stiffness: 0.1,
            length: 20
    
        }
    
        this.slingShot = Matter.Constraint.create(options);
        World.add(world,this.slingShot);  

    }

    display(){

        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.bodyB.position;

        push();

        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        pop ();   

    }

}