class Slingshot {

    constructor(pointA,body2){

        var options = {

            pointA: pointA,
            bodyB: body2,
            stiffness: 0.1,
            length: 20
    
        }
    
        this.slingShot = Matter.Constraint.create(options);
        World.add(world,this.slingShot);  

    }

    display(){     

        if (this.slingShot.bodyB){

            var pointA = this.slingShot.pointA;
            var pointB = this.slingShot.bodyB.position;

            push();

            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
            pop ();   

    }

    }

    fly(){

        this.slingShot.bodyB = null;
        
    }

}