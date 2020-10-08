class Paper{
    constructor(x,y,radius){
        var options={
            isStactic:false,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world, this.body);
    }

   
    


display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    rotate(angle);
    translate(pos.x, pos.y); 

   
    strokeWeight(4);
    stroke("red");
    fill("pink");
 circle(0,0,this.radius);
}
};





