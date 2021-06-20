class Chain
{
    constructor(obj1, obj2){

        var options={
            bodyA: obj1,
            bodyB: obj2,
            length: 30,
            stiffness: 0.5
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){

        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}