class Constraint1{
    constructor(x,y){
        var options = {
            bodyA: x,
            bodyB: y,
            length: 70,
            stiffness: 10
        };
        this.sling = Constraint.create(options);
        Worlds.add(world,this.sling);
    }
    display(){
        var body1 = this.sling.bodyA.position;
        var body2 = this.sling.bodyB.position;
        line(body1.x,body1.y,body2.x,body2.y);
    }
} 